import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { fadeUp } from "@/animations/variants";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative rounded-2xl glass p-6 overflow-hidden hover:border-primary/30 transition-colors"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-brand-soft pointer-events-none" />
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500" />

      <div className="relative">
        <div className="h-11 w-11 rounded-xl bg-secondary border border-border grid place-items-center group-hover:bg-gradient-brand group-hover:border-transparent transition-all duration-300">
          <Icon size={20} className="text-foreground" />
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
