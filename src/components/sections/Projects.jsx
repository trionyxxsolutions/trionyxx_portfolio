import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "../Section";
import { fadeUp } from "@/animations/variants";

import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
//import p5 from "@/assets/gogol-collection.jpg";

const projects = [
  {
    img: p1,
    tag: "Fintech · SaaS",
    title: "Helios Analytics",
    desc: "Real-time analytics platform processing 200M+ events/day.",
    contain: false,
  },
  {
    img: p2,
    tag: "Mobile · Banking",
    title: "Northwind Pay",
    desc: "Cross-platform fintech app with biometric authentication, secure payments, and instant money transfers.",
    contain: false,
  },
  {
    img: p3,
    tag: "AI · Enterprise",
    title: "Atlas Intelligence",
    desc: "RAG-powered enterprise knowledge engine enabling intelligent document search and AI-assisted workflows.",
    contain: false,
  },
  {
    img: p4,
    tag: "Web · Sports Tech",
    title: "Bengal Yoga Welfare Association",
    desc: "Developed a full-stack competition management platform featuring live judge scoring, participant registration, real-time leaderboards, and role-based dashboards for administrators and judges.",
    contain: true,
  },
  {
    img: p5,
    tag: "E-Commerce · React · Spring Boot",
    title: "Gogol Collection",
    desc: "Designed and developed a modern full-stack e-commerce platform using React, Spring Boot, and MySQL. Features include authentication, product catalog, category management, shopping cart, order placement, featured products, exclusive offers, responsive UI, and a comprehensive admin dashboard for product and order management.",
    contain: false,
  },
];

export function Projects() {
  return (
    <Section>
      <motion.div
        variants={fadeUp}
        className="flex items-end justify-between flex-wrap gap-6"
      >
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
            Selected Work
          </span>

          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Recent <span className="text-gradient">Projects</span>.
          </h2>

          <p className="mt-4 text-muted-foreground max-w-xl">
            A collection of full-stack applications, AI-powered solutions,
            enterprise platforms, and modern web experiences built with a focus
            on performance, scalability, and user experience.
          </p>
        </div>
      </motion.div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-3xl glass cursor-pointer"
          >
            {/* Project Image */}
            <div className="relative h-72 overflow-hidden bg-[#0d0d12] flex items-center justify-center">
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                width={1280}
                height={896}
                className={`transition-transform duration-700 group-hover:scale-105 ${
                  project.contain
                    ? "max-h-full max-w-full object-contain p-2"
                    : "h-full w-full object-cover"
                }`}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Icon */}
              <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass grid place-items-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight size={18} />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-xs uppercase tracking-wider text-accent font-semibold">
                {project.tag}
              </p>

              <h3 className="mt-2 font-display text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.desc}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}