const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

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

export default async function handler(req, res) {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return res.status(500).json({
      error: "Supabase environment variables are missing.",
    });
  }

  if (req.method === "GET") {
    const url = new URL(`${SUPABASE_URL}/rest/v1/reviews`);

    url.searchParams.set(
      "select",
      "id,client_name,client_company,service,rating,message,created_at"
    );
    url.searchParams.set("status", "eq.approved");
    url.searchParams.set("order", "created_at.desc");
    url.searchParams.set("limit", "20");

    const response = await fetch(url, {
      headers: supabaseHeaders(),
    });

    if (!response.ok) {
      const errorText = await response.text();

      return res.status(500).json({
        error: "Unable to load reviews.",
        details: errorText,
      });
    }

    const reviews = await response.json();

    return res.status(200).json({
      reviews,
    });
  }

  if (req.method === "POST") {
    const body = req.body || {};

    if (body.website) {
      return res.status(200).json({
        message: "Review submitted successfully.",
      });
    }

    const client_name = cleanText(body.client_name, 80);
    const client_company = cleanText(body.client_company, 100) || null;
    const client_email = cleanText(body.client_email, 120) || null;
    const service = cleanText(body.service, 100) || null;
    const message = cleanText(body.message, 700);
    const rating = Number(body.rating);

    if (
      !client_name ||
      !message ||
      !Number.isInteger(rating) ||
      rating < 1 ||
      rating > 5
    ) {
      return res.status(400).json({
        error: "Please enter your name, rating, and review message.",
      });
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
      const errorText = await response.text();

      return res.status(500).json({
        error: "Unable to submit review right now.",
        details: errorText,
      });
    }

    return res.status(200).json({
      message: "Thank you. Your review will appear after approval.",
    });
  }

  return res.status(405).json({
    error: "Method not allowed.",
  });
}