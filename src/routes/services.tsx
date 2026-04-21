import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { services } from "@/data/services";
import { fadeUp, slideInLeft, slideInRight } from "@/animations/variants";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Trionyxx Solutions" },
      {
        name: "description",
        content:
          "Web, mobile, custom software, cloud, AI, UI/UX, cybersecurity and IT consulting — engineered end to end.",
      },
      { property: "og:title", content: "Services — Trionyxx Solutions" },
      {
        property: "og:description",
        content: "End-to-end engineering, design and operations under one roof.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What we"
        highlight="build."
        description="A full-spectrum engineering team — from product discovery to long-term operations."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
        <div className="space-y-28">
          {services.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <motion.div variants={reverse ? slideInRight : slideInLeft}>
                  <div className="relative aspect-[5/4] rounded-3xl glass overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-brand-soft" />
                    <div className="absolute inset-0 grid-pattern opacity-50" />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="h-28 w-28 rounded-3xl bg-gradient-brand grid place-items-center shadow-glow-blue">
                        <Icon size={48} className="text-on-brand" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={reverse ? slideInLeft : slideInRight}>
                  <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
                    0{i + 1} — Service
                  </span>
                  <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
                    {s.title}
                  </h2>
                  <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                  <motion.ul variants={fadeUp} className="mt-7 space-y-2.5">
                    {["Discovery & strategy", "Design & engineering", "Launch & long-term support"].map((step) => (
                      <li key={step} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                        {step}
                      </li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
