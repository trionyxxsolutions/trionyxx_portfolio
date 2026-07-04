const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY =
  process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

function json(data, status = 200) {
  return Response.json(data, { status });
}

function isMissingConfig() {
  return !SUPABASE_URL || !SUPABASE_KEY;
}

function supabaseHeaders(extra = {}) {
  return {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    ...extra,
  };
}

function cleanText(value, maxLength) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, maxLength);
}

export async function GET() {
  if (isMissingConfig()) {
    return json({ error: "Supabase environment variables are missing." }, 500);
  }

  const url = new URL(`${SUPABASE_URL}/rest/v1/reviews`);
  url.searchParams.set(
    "select",
    "id,client_name,client_company,service,rating,message,created_at",
  );
  url.searchParams.set("status", "eq.approved");
  url.searchParams.set("order", "created_at.desc");
  url.searchParams.set("limit", "20");

  const response = await fetch(url, {
    headers: supabaseHeaders(),
  });

  if (!response.ok) {
    return json({ error: "Unable to load reviews." }, 500);
  }

  const reviews = await response.json();
  return json({ reviews });
}

export async function POST(request) {
  if (isMissingConfig()) {
    return json({ error: "Supabase environment variables are missing." }, 500);
  }

  const body = await request.json().catch(() => ({}));

  // Honeypot field. Real users will not fill this. Bots often do.
  if (body.website) {
    return json({ message: "Review submitted successfully." });
  }

  const client_name = cleanText(body.client_name, 80);
  const client_company = cleanText(body.client_company, 100) || null;
  const client_email = cleanText(body.client_email, 120) || null;
  const service = cleanText(body.service, 100) || null;
  const message = cleanText(body.message, 700);
  const rating = Number(body.rating);

  if (!client_name || !message || !Number.isInteger(rating) || rating < 1 || rating > 5) {
    return json({ error: "Please enter your name, rating, and review message." }, 400);
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/reviews`, {
    method: "POST",
    headers: supabaseHeaders({
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    }),
    body: JSON.stringify({
      client_name,
      client_company,
      client_email,
      service,
      rating,
      message,
      status: "pending",
    }),
  });

  if (!response.ok) {
    return json({ error: "Unable to submit review right now." }, 500);
  }

  return json({
    message: "Thank you. Your review will appear after approval.",
  });
}
