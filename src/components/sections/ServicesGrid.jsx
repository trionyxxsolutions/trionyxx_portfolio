import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Section } from "../Section";
import { ServiceCard } from "../ServiceCard";
import { services } from "@/data/services";
import { fadeUp } from "@/animations/variants";
export function ServicesGrid() {
    return (_jsxs(Section, { id: "services", children: [_jsxs(motion.div, { variants: fadeUp, className: "max-w-2xl", children: [_jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-accent font-medium", children: "What we do" }), _jsxs("h2", { className: "mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight", children: ["Services built for ", _jsx("span", { className: "text-gradient", children: "scale" }), "."] }), _jsx("p", { className: "mt-5 text-lg text-muted-foreground leading-relaxed", children: "End-to-end engineering, design and operations \u2014 under one roof." })] }), _jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: services.map((s) => (_jsx(ServiceCard, { ...s }, s.title))) })] }));
}
