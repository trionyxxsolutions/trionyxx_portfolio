import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/animations/variants";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative overflow-hidden rounded-3xl p-12 sm:p-20 text-center"
      >
        <div className="absolute inset-0 bg-gradient-brand opacity-90" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-background/30 blur-3xl" />
        <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-background/20 blur-3xl" />

        <div className="relative">
          <h2 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-on-brand">
            Have a project in mind?
          </h2>
          <p className="mt-5 text-lg text-on-brand/85 max-w-xl mx-auto">
            Let's talk. We respond within one business day.
          </p>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="mt-9 inline-block">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 text-sm font-semibold shadow-elegant"
            >
              Start the conversation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
