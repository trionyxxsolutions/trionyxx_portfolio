import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { stagger } from "@/animations/variants";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <motion.section
      id={id}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 ${className}`}
    >
      {children}
    </motion.section>
  );
}
