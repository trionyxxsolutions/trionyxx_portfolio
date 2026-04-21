import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { fadeUp, stagger } from "@/animations/variants";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-44 sm:pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center"
      >
        <motion.div variants={fadeUp} className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles size={12} className="text-accent" />
            Trionyxx Solutions — Engineering studio
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-7 font-display text-5xl sm:text-7xl lg:text-[88px] font-semibold leading-[1.02] tracking-tight"
        >
          Engineering{" "}
          <span className="text-gradient">scalable</span>
          <br />
          digital solutions.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          We build powerful web, mobile, and AI-driven systems for modern
          businesses — from idea to production-grade infrastructure.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-medium text-on-brand shadow-glow-blue hover:shadow-glow-orange transition-shadow duration-500"
            >
              Start a project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium hover:bg-secondary transition-colors"
            >
              Explore services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs text-muted-foreground/80"
        >
          <span>Trusted by ambitious teams</span>
          <span className="font-display tracking-widest">FINTECH</span>
          <span className="font-display tracking-widest">HEALTHTECH</span>
          <span className="font-display tracking-widest">AI LABS</span>
          <span className="font-display tracking-widest">ENTERPRISE</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
