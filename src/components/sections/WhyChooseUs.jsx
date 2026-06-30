import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Layers, Zap, Lock, Cpu } from "lucide-react";
import { Section } from "../Section";
import { fadeUp } from "@/animations/variants";
const points = [
    { icon: Layers, title: "Scalable Architecture", text: "Systems that grow from 10 users to 10 million without rewrites." },
    { icon: Zap, title: "Fast Delivery", text: "Lean teams, weekly releases, real momentum from week one." },
    { icon: Lock, title: "Secure Systems", text: "Security baked into every layer — from auth to infrastructure." },
    { icon: Cpu, title: "Modern Tech Stack", text: "Best-in-class tooling, chosen for the long-term, not the hype cycle." },
];
export function WhyChooseUs() {
    return (_jsxs(Section, { children: [_jsxs(motion.div, { variants: fadeUp, className: "text-center max-w-2xl mx-auto", children: [_jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-accent font-medium", children: "Why choose us" }), _jsxs("h2", { className: "mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight", children: ["Built different. ", _jsx("span", { className: "text-gradient", children: "On purpose." })] })] }), _jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: points.map((p) => (_jsxs(motion.div, { variants: fadeUp, whileHover: { y: -4 }, className: "rounded-2xl glass p-6 hover:border-primary/30 transition-colors", children: [_jsx("div", { className: "h-11 w-11 rounded-xl bg-gradient-brand-soft border border-border grid place-items-center", children: _jsx(p.icon, { size: 20, className: "text-accent" }) }), _jsx("h3", { className: "mt-5 font-display text-lg font-semibold", children: p.title }), _jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: p.text })] }, p.title))) })] }));
}
