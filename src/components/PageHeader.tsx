import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/animations/variants";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, highlight, description }: PageHeaderProps) {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="mx-auto max-w-5xl px-6 lg:px-8 text-center"
      >
        <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
          {eyebrow}
        </motion.span>
        <motion.h1
          variants={fadeUp}
          className="mt-5 font-display text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          {title}{" "}
          {highlight && <span className="text-gradient">{highlight}</span>}
        </motion.h1>
        {description && (
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
