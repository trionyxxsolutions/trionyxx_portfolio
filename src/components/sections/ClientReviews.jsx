import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ChevronDown, Quote, Star } from "lucide-react";
import { Section } from "../Section";
import { fadeUp } from "@/animations/variants";

const serviceOptions = [
  "Web Development",
  "Mobile App Development",
  "Custom Software Development",
  "Cloud & DevOps",
  "AI & Machine Learning",
  "UI/UX Design",
  "Cybersecurity",
  "IT Consulting & Maintenance",
];

const ratingOptions = [
  { value: "5", label: "5 - Excellent" },
  { value: "4", label: "4 - Very good" },
  { value: "3", label: "3 - Good" },
  { value: "2", label: "2 - Average" },
  { value: "1", label: "1 - Poor" },
];

const initialForm = {
  client_name: "",
  client_company: "",
  client_email: "",
  service: "Web Development",
  rating: "5",
  message: "",
  website: "",
};

function Stars({ rating = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} star rating`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={16}
          className={
            index < Number(rating)
              ? "fill-accent text-accent"
              : "text-muted-foreground/35"
          }
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <motion.article
      variants={fadeUp}
      className="rounded-3xl glass p-6 sm:p-7 h-full"
    >
      <div className="flex items-center justify-between gap-4">
        <Stars rating={review.rating} />
        <Quote size={20} className="text-accent/70" />
      </div>

      <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
        “{review.message}”
      </p>

      <div className="mt-6 border-t border-border pt-5">
        <h3 className="font-display text-lg font-semibold">
          {review.client_name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {[review.client_company, review.service].filter(Boolean).join(" · ")}
        </p>
      </div>
    </motion.article>
  );
}

async function parseJsonResponse(response) {
  const text = await response.text();

  try {
    return text ? JSON.parse(text) : {};
  } catch {
    throw new Error("Server returned an invalid response. Please try again.");
  }
}

function FancySelect({ label, name, value, options, onChange, required = false }) {
  const [open, setOpen] = useState(false);

  const normalizedOptions = options.map((option) =>
    typeof option === "string" ? { value: option, label: option } : option
  );

  const selectedOption =
    normalizedOptions.find((option) => option.value === value) ||
    normalizedOptions[0];

  function selectOption(optionValue) {
    onChange({
      target: {
        name,
        value: optionValue,
      },
    });
    setOpen(false);
  }

  return (
    <label className="relative block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">
        {label} {required && "*"}
      </span>

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        className="mt-2 flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-background/80 px-4 py-3 text-left text-sm text-foreground shadow-sm transition-all hover:border-primary/40 hover:bg-secondary/50 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        <span className="truncate">{selectedOption?.label}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-muted-foreground transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-2xl border border-border bg-background/95 shadow-2xl backdrop-blur-xl">
          <div className="max-h-64 overflow-y-auto p-1">
            {normalizedOptions.map((option) => {
              const active = option.value === value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => selectOption(option.value)}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-sm transition-all ${
                    active
                      ? "bg-gradient-brand text-on-brand"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  <span>{option.label}</span>
                  {active && <Check size={16} />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </label>
  );
}

function ReviewForm({ onSubmitted }) {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submitReview(event) {
    event.preventDefault();

    setLoading(true);
    setNotice("");
    setError("");

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await parseJsonResponse(response);

      if (!response.ok) {
        throw new Error(data.error || "Unable to submit review right now.");
      }

      setNotice(
        data.message || "Thank you. Your review will appear after approval."
      );

      setForm(initialForm);
      onSubmitted?.();
    } catch (err) {
      setError(err.message || "Unable to submit review right now.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all";

  return (
    <motion.form
      variants={fadeUp}
      onSubmit={submitReview}
      className="rounded-3xl glass p-6 sm:p-8 space-y-5"
    >
      <div>
        <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
          Write a review
        </span>

        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
          Share your experience with Trionyx.
        </h2>

        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Your review will be checked before it becomes public on our website.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Name *
          </span>
          <input
            name="client_name"
            value={form.client_name}
            onChange={updateField}
            required
            placeholder="Your full name"
            className={inputClass}
          />
        </label>

        <label className="block">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Company
          </span>
          <input
            name="client_company"
            value={form.client_company}
            onChange={updateField}
            placeholder="Business / company name"
            className={inputClass}
          />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Email
          </span>
          <input
            name="client_email"
            type="email"
            value={form.client_email}
            onChange={updateField}
            placeholder="Only for verification"
            className={inputClass}
          />
        </label>

        <FancySelect
          label="Rating"
          name="rating"
          value={form.rating}
          options={ratingOptions}
          onChange={updateField}
          required
        />
      </div>

      <FancySelect
        label="Service taken"
        name="service"
        value={form.service}
        options={serviceOptions}
        onChange={updateField}
      />

      <label className="block">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Review *
        </span>
        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          required
          rows={5}
          placeholder="Write your feedback..."
          className={`${inputClass} resize-none`}
        />
      </label>

      <input
        name="website"
        value={form.website}
        onChange={updateField}
        tabIndex="-1"
        autoComplete="off"
        className="hidden"
      />

      {notice && (
        <p className="rounded-xl bg-gradient-brand-soft border border-border p-4 text-sm">
          {notice}
        </p>
      )}

      {error && (
        <p className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-on-brand shadow-glow-blue hover:shadow-glow-orange transition-all disabled:opacity-70"
      >
        {loading ? "Submitting..." : "Submit review"}
      </button>
    </motion.form>
  );
}

export function ClientReviews({
  showForm = false,
  limit = 6,
  hideReviewList = false,
}) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(!hideReviewList);
  const [error, setError] = useState("");

  async function loadReviews() {
    if (hideReviewList) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/reviews");
      const data = await parseJsonResponse(response);

      if (!response.ok) {
        throw new Error(data.error || "Unable to load reviews.");
      }

      setReviews(Array.isArray(data.reviews) ? data.reviews : []);
    } catch (err) {
      setError(err.message || "Unable to load reviews.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!hideReviewList) {
      loadReviews();
    } else {
      setLoading(false);
    }
  }, [hideReviewList]);

  const visibleReviews = hideReviewList ? [] : reviews.slice(0, limit);

  return (
    <Section id="reviews" className={showForm ? "pt-0" : ""}>
      {!hideReviewList && (
        <>
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
                Client trust
              </span>

              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
                What clients say about{" "}
                <span className="text-gradient">Trionyx</span>.
              </h2>

              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Real feedback from people and businesses who worked with us.
              </p>
            </div>

            {!showForm && (
              <Link
                to="/reviews"
                className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
              >
                Write a review
              </Link>
            )}
          </motion.div>

          {loading && (
            <p className="mt-10 text-sm text-muted-foreground">
              Loading reviews...
            </p>
          )}

          {error && <p className="mt-10 text-sm text-destructive">{error}</p>}

          {!loading && !error && visibleReviews.length === 0 && (
            <div className="mt-10 rounded-3xl glass p-8 text-center">
              <p className="text-muted-foreground">
                Approved client reviews will appear here.
              </p>
            </div>
          )}

          {visibleReviews.length > 0 && (
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visibleReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}
        </>
      )}

      {showForm && (
        <div
          className={
            hideReviewList
              ? "grid lg:grid-cols-5 gap-8 items-start"
              : "mt-16 grid lg:grid-cols-5 gap-8 items-start"
          }
        >
          <div className="lg:col-span-2 rounded-3xl bg-gradient-brand-soft border border-border p-8">
            <h3 className="font-display text-2xl font-semibold">
              Approval workflow
            </h3>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              New reviews are saved as pending first. After you approve them in
              Supabase, they become visible to new clients on the website.
            </p>
          </div>

          <div className="lg:col-span-3">
            <ReviewForm onSubmitted={hideReviewList ? undefined : loadReviews} />
          </div>
        </div>
      )}
    </Section>
  );
}