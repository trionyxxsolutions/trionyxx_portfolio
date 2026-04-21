import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "../Section";
import { fadeUp } from "@/animations/variants";

export function AboutPreview() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div variants={fadeUp}>
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
            About Trionyxx
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            A studio for teams that
            <br />
            ship <span className="text-gradient">serious software</span>.
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-5">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded by three engineers who believe great products come from
            obsession with detail, Trionyxx partners with founders and
            enterprises to design, build and scale digital systems that perform
            in the real world.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            From early-stage MVPs to mission-critical platforms — we bring
            rigorous engineering and considered design to every line of code.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground story-link"
          >
            Read our story
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
