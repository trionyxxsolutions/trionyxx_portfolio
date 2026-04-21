import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "../Section";
import { fadeUp } from "@/animations/variants";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  { img: p1, tag: "Fintech · SaaS", title: "Helios Analytics", desc: "Real-time analytics platform processing 200M+ events/day." },
  { img: p2, tag: "Mobile · Banking", title: "Northwind Pay", desc: "Cross-platform fintech app with biometric auth and instant transfers." },
  { img: p3, tag: "AI · Enterprise", title: "Atlas Intelligence", desc: "RAG-powered knowledge engine for a Fortune 500 legal team." },
];

export function Projects() {
  return (
    <Section>
      <motion.div variants={fadeUp} className="flex items-end justify-between flex-wrap gap-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
            Selected work
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Recent <span className="text-gradient">projects</span>.
          </h2>
        </div>
      </motion.div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <motion.article
            key={p.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl overflow-hidden glass cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1280}
                height={896}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute top-4 right-4 h-9 w-9 rounded-full glass grid place-items-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight size={16} />
              </div>
            </div>
            <div className="p-6">
              <p className="text-xs text-accent font-medium tracking-wide">{p.tag}</p>
              <h3 className="mt-2 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
