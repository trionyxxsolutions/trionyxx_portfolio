import { useState } from "react";
import type { FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { fadeUp, stagger } from "@/animations/variants";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Trionyxx Solutions" },
      {
        name: "description",
        content:
          "Tell us about your project. We respond within one business day. Email trionyxxsolutions@gmail.com",
      },
      { property: "og:title", content: "Contact — Trionyxx Solutions" },
      {
        property: "og:description",
        content: "Get in touch with the Trionyxx team.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulated submit — wire to backend later
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  };

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
          {/* Info side */}
          <motion.aside variants={fadeUp} className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl glass p-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-brand-soft border border-border grid place-items-center">
                <Mail size={18} className="text-accent" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Email</p>
              <a
                href="mailto:contact@trionyxx.com"
                className="mt-1 block font-display text-lg font-medium story-link"
              >
                trionyxxsolutions@gmail.com
              </a>
            </div>
            <div className="rounded-2xl glass p-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-brand-soft border border-border grid place-items-center">
                <MapPin size={18} className="text-accent" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Working globally</p>
              <p className="mt-1 font-display text-lg font-medium">
                Remote-first · HQ in Bengaluru
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-brand-soft border border-border p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Prefer something async? Send us your brief and we'll come back
                with thoughts, a rough timeline and a quote.
              </p>
            </div>
          </motion.aside>

          {/* Form side */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl glass p-8 sm:p-10 space-y-6"
            >
              <Field label="Name" name="name" type="text" placeholder="Your full name" required />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
              <Field label="Message" name="message" textarea placeholder="Tell us a little about your project…" required />

              <motion.button
                type="submit"
                disabled={loading || sent}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-on-brand shadow-glow-blue hover:shadow-glow-orange transition-all disabled:opacity-70"
              >
                {sent ? (
                  <>
                    <Check size={16} /> Message sent
                  </>
                ) : loading ? (
                  "Sending…"
                ) : (
                  <>
                    Send message
                    <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </motion.button>

              <p className="text-xs text-muted-foreground text-center">
                Or email us directly at{" "}
                <a className="text-foreground story-link" href="mailto:contact@trionyxx.com">
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

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
}

function Field({ label, name, type = "text", placeholder, required, textarea }: FieldProps) {
  const base =
    "peer w-full bg-transparent border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all";

  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
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
