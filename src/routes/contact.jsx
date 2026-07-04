import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Check, AlertCircle } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { fadeUp, stagger } from "@/animations/variants";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Trionyx Solutions" },
      {
        name: "description",
        content:
          "Tell us about your project. We respond within one business day. Email trionyxxsolutions@gmail.com",
      },
      { property: "og:title", content: "Contact — Trionyx Solutions" },
      {
        property: "og:description",
        content: "Get in touch with the Trionyx team.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSent(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Project Enquiry — Trionyx Solutions");
    formData.append("from_name", "Trionyx Solutions Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Unable to send message right now.");
      }

      setSent(true);
      form.reset();
    } catch (err) {
      setError(err.message || "Unable to send message right now.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something"
        highlight="great."
        description="Tell us about your project. We typically reply within one business day."
      />

      <section className="mx-auto max-w-6xl px-6 lg:px-8 pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid lg:grid-cols-5 gap-8"
        >
          <motion.aside variants={fadeUp} className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl glass p-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-brand-soft border border-border grid place-items-center">
                <Mail size={18} className="text-accent" />
              </div>

              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </p>

              <a
                href="mailto:trionyxxsolutions@gmail.com"
                className="mt-1 block font-display text-lg font-medium story-link"
              >
                trionyxxsolutions@gmail.com
              </a>
            </div>

            <div className="rounded-2xl glass p-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-brand-soft border border-border grid place-items-center">
                <MapPin size={18} className="text-accent" />
              </div>

              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                Working globally
              </p>

              <p className="mt-1 font-display text-lg font-medium">
                Remote-first · HQ in Kolkata
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-brand-soft border border-border p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Prefer something async? Send us your brief and we&apos;ll come
                back with thoughts, a rough timeline and a quote.
              </p>
            </div>
          </motion.aside>

          <motion.div variants={fadeUp} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl glass p-8 sm:p-10 space-y-6"
            >
              <Field
                label="Name"
                name="name"
                type="text"
                placeholder="Your full name"
                required
              />

              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
              />

              <Field
                label="Phone / WhatsApp"
                name="phone"
                type="text"
                placeholder="+91 XXXXX XXXXX"
              />

              <Field
                label="Company / Business"
                name="company"
                type="text"
                placeholder="Your company or business name"
              />

              <Field
                label="Message"
                name="message"
                textarea
                placeholder="Tell us a little about your project…"
                required
              />

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              {sent && (
                <div className="flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-500">
                  <Check size={18} className="mt-0.5 shrink-0" />
                  <p>
                    Message sent successfully. We will get back to you soon.
                  </p>
                </div>
              )}

              {error && (
                <div className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                  <AlertCircle size={18} className="mt-0.5 shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-on-brand shadow-glow-blue hover:shadow-glow-orange transition-all disabled:opacity-70"
              >
                {loading ? (
                  "Sending…"
                ) : (
                  <>
                    Send message
                    <Send
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </>
                )}
              </motion.button>

              <p className="text-xs text-muted-foreground text-center">
                Or email us directly at{" "}
                <a
                  className="text-foreground story-link"
                  href="mailto:trionyxxsolutions@gmail.com"
                >
                  trionyxxsolutions@gmail.com
                </a>
              </p>
            </form>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  textarea,
}) {
  const base =
    "peer w-full bg-transparent border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all";

  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
        {required ? " *" : ""}
      </span>

      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={5}
          className={`${base} mt-2 resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={`${base} mt-2`}
        />
      )}
    </label>
  );
}