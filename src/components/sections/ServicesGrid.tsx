import { motion } from "framer-motion";
import { Section } from "../Section";
import { ServiceCard } from "../ServiceCard";
import { services } from "@/data/services";
import { fadeUp } from "@/animations/variants";

export function ServicesGrid() {
  return (
    <Section id="services">
      <motion.div variants={fadeUp} className="max-w-2xl">
        <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
          What we do
        </span>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          Services built for <span className="text-gradient">scale</span>.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          End-to-end engineering, design and operations — under one roof.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </Section>
  );
}
