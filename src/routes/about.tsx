import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { fadeUp } from "@/animations/variants";
import avinandanImg from "@/assets/team/avinandan.jpeg";
import sohamImg from "@/assets/team/soham.jpeg";
import ranitImg from "@/assets/team/ranit.jpg"

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Trionyxx Solutions" },
      {
        name: "description",
        content:
          "Founded by three engineers obsessed with craft. Meet the team behind Trionyxx and our journey so far.",
      },
      { property: "og:title", content: "About — Trionyxx Solutions" },
      {
        property: "og:description",
        content: "A studio for teams that ship serious software.",
      },
    ],
  }),
  component: AboutPage,
});

const founders = [
  { name: "Ranit Saha", role: "Co-founder · Engineering", image: ranitImg, },
  { name: "Soham Ghosh", role: "Co-founder · Design & Product", image: sohamImg, },
  { name: "Avinandan Bhattacharjee", role: "Co-founder · Cloud & AI", image: avinandanImg, },
];

const timeline = [
  { year: "2022", title: "Founded", text: "Three engineers, one shared bet on craft over volume." },
  { year: "2023", title: "First enterprise client", text: "Shipped a mission-critical analytics platform for a fintech leader." },
  { year: "2024", title: "AI division launched", text: "Spun up a dedicated team for RAG, vision and ML systems." },
  { year: "2025", title: "20+ products shipped", text: "Trusted by ambitious teams across four continents." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A studio built on"
        highlight="craft."
        description="We're a small team of senior engineers and designers who care deeply about how software is made."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div variants={fadeUp} className="rounded-3xl glass p-10">
            <div className="h-12 w-12 rounded-xl bg-gradient-brand-soft border border-border grid place-items-center">
              <Target size={22} className="text-accent" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold">Our Mission</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To be the engineering partner ambitious teams trust with their
              hardest problems — turning complex ideas into resilient,
              elegant systems.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-3xl glass p-10">
            <div className="h-12 w-12 rounded-xl bg-gradient-brand-soft border border-border grid place-items-center">
              <Eye size={22} className="text-accent" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold">Our Vision</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              A world where every great product idea has access to the same
              quality of engineering as the world's best companies.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section>
        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
            Our founders
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Built by <span className="text-gradient">three engineers</span>.
          </h2>
        </motion.div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {founders.map((f) => (
            <motion.div
              key={f.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-3xl glass p-8 text-center"
            >
              <div className="mx-auto h-20 w-20 rounded-full overflow-hidden border border-border shadow-glow-blue">
                <img
                  src={f.image}
                  alt={f.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{f.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.role}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <motion.div variants={fadeUp} className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
            Our journey
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            From day one to <span className="text-gradient">today</span>.
          </h2>
        </motion.div>

        <div className="mt-14 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                variants={fadeUp}
                className={`relative flex sm:items-center gap-6 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
              >
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-brand shadow-glow-blue" />
                <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-10">
                  <div className="rounded-2xl glass p-6">
                    <span className="text-xs font-mono text-accent">{item.year}</span>
                    <h3 className="mt-2 font-display text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
