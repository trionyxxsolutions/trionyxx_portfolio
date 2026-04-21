import {
  Code2,
  Smartphone,
  Boxes,
  Cloud,
  BrainCircuit,
  Palette,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "High-performance web applications with modern frameworks, built to scale and delight.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps with pixel-perfect UI and silky-smooth performance.",
  },
  {
    icon: Boxes,
    title: "Custom Software Development",
    description:
      "Tailor-made platforms engineered around your unique business workflows and goals.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Production-grade cloud architecture with CI/CD, observability, and zero-downtime deploys.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "From RAG systems to vision pipelines — turn your data into measurable intelligence.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Research-driven product design that balances aesthetics, clarity and conversion.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Audits, hardening and continuous monitoring to keep your stack resilient by default.",
  },
  {
    icon: Wrench,
    title: "IT Consulting & Maintenance",
    description:
      "Strategic guidance and long-term support so your systems stay sharp and reliable.",
  },
] as const;
