import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { fadeUp, stagger } from "@/animations/variants";
export const Route = createFileRoute("/contact")({
    head: () => ({
        meta: [
            { title: "Contact — Trionyx Solutions" },
            {
                name: "description",
                content: "Tell us about your project. We respond within one business day. Email Trionyxsolutions@gmail.com",
            },
            { property: "og:title", content: "Contact — Trionyx Solutions" },
            {
                property: "og:description",
                content: "Get in touch with the Trionyx team.",
            },
        ],
    }),
    component: ContactPage,
});
function ContactPage() {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulated submit — wire to backend later
        setTimeout(() => {
            setLoading(false);
            setSent(true);
        }, 900);
    };
    return (_jsxs(_Fragment, { children: [_jsx(PageHeader, { eyebrow: "Contact", title: "Let's build something", highlight: "great.", description: "Tell us about your project. We typically reply within one business day." }), _jsx("section", { className: "mx-auto max-w-6xl px-6 lg:px-8 pb-24", children: _jsxs(motion.div, { initial: "hidden", animate: "visible", variants: stagger, className: "grid lg:grid-cols-5 gap-8", children: [_jsxs(motion.aside, { variants: fadeUp, className: "lg:col-span-2 space-y-4", children: [_jsxs("div", { className: "rounded-2xl glass p-6", children: [_jsx("div", { className: "h-10 w-10 rounded-lg bg-gradient-brand-soft border border-border grid place-items-center", children: _jsx(Mail, { size: 18, className: "text-accent" }) }), _jsx("p", { className: "mt-4 text-xs uppercase tracking-widest text-muted-foreground", children: "Email" }), _jsx("a", { href: "mailto:contact@Trionyx.com", className: "mt-1 block font-display text-lg font-medium story-link", children: "Trionyxsolutions@gmail.com" })] }), _jsxs("div", { className: "rounded-2xl glass p-6", children: [_jsx("div", { className: "h-10 w-10 rounded-lg bg-gradient-brand-soft border border-border grid place-items-center", children: _jsx(MapPin, { size: 18, className: "text-accent" }) }), _jsx("p", { className: "mt-4 text-xs uppercase tracking-widest text-muted-foreground", children: "Working globally" }), _jsx("p", { className: "mt-1 font-display text-lg font-medium", children: "Remote-first \u00B7 HQ in Kolkata" })] }), _jsx("div", { className: "rounded-2xl bg-gradient-brand-soft border border-border p-6", children: _jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Prefer something async? Send us your brief and we'll come back with thoughts, a rough timeline and a quote." }) })] }), _jsx(motion.div, { variants: fadeUp, className: "lg:col-span-3", children: _jsxs("form", { onSubmit: onSubmit, className: "rounded-3xl glass p-8 sm:p-10 space-y-6", children: [_jsx(Field, { label: "Name", name: "name", type: "text", placeholder: "Your full name", required: true }), _jsx(Field, { label: "Email", name: "email", type: "email", placeholder: "you@company.com", required: true }), _jsx(Field, { label: "Message", name: "message", textarea: true, placeholder: "Tell us a little about your project\u2026", required: true }), _jsx(motion.button, { type: "submit", disabled: loading || sent, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: "group w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-on-brand shadow-glow-blue hover:shadow-glow-orange transition-all disabled:opacity-70", children: sent ? (_jsxs(_Fragment, { children: [_jsx(Check, { size: 16 }), " Message sent"] })) : loading ? ("Sending…") : (_jsxs(_Fragment, { children: ["Send message", _jsx(Send, { size: 14, className: "group-hover:translate-x-0.5 transition-transform" })] })) }), _jsxs("p", { className: "text-xs text-muted-foreground text-center", children: ["Or email us directly at", " ", _jsx("a", { className: "text-foreground story-link", href: "mailto:contact@Trionyx.com", children: "Trionyxsolutions@gmail.com" })] })] }) })] }) })] }));
}
function Field({ label, name, type = "text", placeholder, required, textarea }) {
    const base = "peer w-full bg-transparent border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all";
    return (_jsxs("label", { className: "block", children: [_jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: label }), textarea ? (_jsx("textarea", { name: name, required: required, placeholder: placeholder, rows: 5, className: `${base} mt-2 resize-none` })) : (_jsx("input", { name: name, type: type, required: required, placeholder: placeholder, className: `${base} mt-2` }))] }));
}
