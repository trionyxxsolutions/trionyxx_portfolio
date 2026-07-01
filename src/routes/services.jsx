import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { services } from "@/data/services";
import { fadeUp, slideInLeft, slideInRight } from "@/animations/variants";
export const Route = createFileRoute("/services")({
    head: () => ({
        meta: [
            { title: "Services — Trionyx Solutions" },
            {
                name: "description",
                content: "Web, mobile, custom software, cloud, AI, UI/UX, cybersecurity and IT consulting — engineered end to end.",
            },
            { property: "og:title", content: "Services — Trionyx Solutions" },
            {
                property: "og:description",
                content: "End-to-end engineering, design and operations under one roof.",
            },
        ],
    }),
    component: ServicesPage,
});
function ServicesPage() {
    return (_jsxs(_Fragment, { children: [_jsx(PageHeader, { eyebrow: "Services", title: "What we", highlight: "build.", description: "A full-spectrum engineering team \u2014 from product discovery to long-term operations." }), _jsx("section", { className: "mx-auto max-w-7xl px-6 lg:px-8 pb-16", children: _jsx("div", { className: "space-y-28", children: services.map((s, i) => {
                        const Icon = s.icon;
                        const reverse = i % 2 === 1;
                        return (_jsxs(motion.div, { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-100px" }, className: `grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`, children: [_jsx(motion.div, { variants: reverse ? slideInRight : slideInLeft, children: _jsxs("div", { className: "relative aspect-[5/4] rounded-3xl glass overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-brand-soft" }), _jsx("div", { className: "absolute inset-0 grid-pattern opacity-50" }), _jsx("div", { className: "absolute inset-0 grid place-items-center", children: _jsx("div", { className: "h-28 w-28 rounded-3xl bg-gradient-brand grid place-items-center shadow-glow-blue", children: _jsx(Icon, { size: 48, className: "text-on-brand" }) }) })] }) }), _jsxs(motion.div, { variants: reverse ? slideInLeft : slideInRight, children: [_jsxs("span", { className: "text-xs uppercase tracking-[0.2em] text-accent font-medium", children: ["0", i + 1, " \u2014 Service"] }), _jsx("h2", { className: "mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight", children: s.title }), _jsx("p", { className: "mt-5 text-lg text-muted-foreground leading-relaxed", children: s.description }), _jsx(motion.ul, { variants: fadeUp, className: "mt-7 space-y-2.5", children: ["Discovery & strategy", "Design & engineering", "Launch & long-term support"].map((step) => (_jsxs("li", { className: "flex items-center gap-3 text-sm text-muted-foreground", children: [_jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gradient-brand" }), step] }, step))) })] })] }, s.title));
                    }) }) }), _jsx(CtaBanner, {})] }));
}
