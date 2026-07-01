import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "../Section";
import { fadeUp } from "@/animations/variants";
export function AboutPreview() {
    return (_jsx(Section, { children: _jsxs("div", { className: "grid lg:grid-cols-2 gap-14 lg:gap-20 items-center", children: [_jsxs(motion.div, { variants: fadeUp, children: [_jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-accent font-medium", children: "About Trionyx" }), _jsxs("h2", { className: "mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-tight", children: ["A studio for teams that", _jsx("br", {}), "ship ", _jsx("span", { className: "text-gradient", children: "serious software" }), "."] })] }), _jsxs(motion.div, { variants: fadeUp, className: "space-y-5", children: [_jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "Founded by three engineers who believe great products come from obsession with detail, Trionyx partners with founders and enterprises to design, build and scale digital systems that perform in the real world." }), _jsx("p", { className: "text-base text-muted-foreground leading-relaxed", children: "From early-stage MVPs to mission-critical platforms \u2014 we bring rigorous engineering and considered design to every line of code." }), _jsxs(Link, { to: "/about", className: "inline-flex items-center gap-1.5 text-sm font-medium text-foreground story-link", children: ["Read our story", _jsx(ArrowUpRight, { size: 14 })] })] })] }) }));
}
