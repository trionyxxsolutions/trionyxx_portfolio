import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { fadeUp } from "@/animations/variants";

export const Route = createFileRoute("/about")({
    head: () => ({
        meta: [
            { title: "About — Trionyx Solutions" },
            {
                name: "description",
                content: "Meet Trionyx Solutions — a studio for teams that ship serious software.",
            },
            { property: "og:title", content: "About — Trionyx Solutions" },
            {
                property: "og:description",
                content: "A studio for teams that ship serious software.",
            },
        ],
    }),
    component: AboutPage,
});

const timeline = [
    { year: "2022", title: "Founded", text: "Started with a shared bet on craft over volume." },
    { year: "2023", title: "First enterprise client", text: "Shipped a mission-critical analytics platform for a fintech leader." },
    { year: "2024", title: "AI division launched", text: "Spun up a dedicated team for RAG, vision and ML systems." },
    { year: "2025", title: "20+ products shipped", text: "Trusted by ambitious teams across four continents." },
];

function AboutPage() {
    return (
        _jsxs(_Fragment, {
            children: [
                _jsx(PageHeader, {
                    eyebrow: "About",
                    title: "A studio built on",
                    highlight: "craft.",
                    description: "We're a small team of senior engineers and designers who care deeply about how software is made."
                }),

                _jsx(Section, {
                    children: _jsxs("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            _jsxs(motion.div, {
                                variants: fadeUp,
                                className: "rounded-3xl glass p-10",
                                children: [
                                    _jsx("div", {
                                        className: "h-12 w-12 rounded-xl bg-gradient-brand-soft border border-border grid place-items-center",
                                        children: _jsx(Target, {
                                            size: 22,
                                            className: "text-accent"
                                        })
                                    }),
                                    _jsx("h3", {
                                        className: "mt-6 font-display text-2xl font-semibold",
                                        children: "Our Mission"
                                    }),
                                    _jsx("p", {
                                        className: "mt-3 text-muted-foreground leading-relaxed",
                                        children: "To be the engineering partner ambitious teams trust with their hardest problems — turning complex ideas into resilient, elegant systems."
                                    })
                                ]
                            }),

                            _jsxs(motion.div, {
                                variants: fadeUp,
                                className: "rounded-3xl glass p-10",
                                children: [
                                    _jsx("div", {
                                        className: "h-12 w-12 rounded-xl bg-gradient-brand-soft border border-border grid place-items-center",
                                        children: _jsx(Eye, {
                                            size: 22,
                                            className: "text-accent"
                                        })
                                    }),
                                    _jsx("h3", {
                                        className: "mt-6 font-display text-2xl font-semibold",
                                        children: "Our Vision"
                                    }),
                                    _jsx("p", {
                                        className: "mt-3 text-muted-foreground leading-relaxed",
                                        children: "A world where every great product idea has access to the same quality of engineering as the world's best companies."
                                    })
                                ]
                            })
                        ]
                    })
                }),

                _jsxs(Section, {
                    children: [
                        _jsxs(motion.div, {
                            variants: fadeUp,
                            className: "max-w-2xl",
                            children: [
                                _jsx("span", {
                                    className: "text-xs uppercase tracking-[0.2em] text-accent font-medium",
                                    children: "Our journey"
                                }),
                                _jsxs("h2", {
                                    className: "mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight",
                                    children: [
                                        "From day one to ",
                                        _jsx("span", {
                                            className: "text-gradient",
                                            children: "today"
                                        }),
                                        "."
                                    ]
                                })
                            ]
                        }),

                        _jsxs("div", {
                            className: "mt-14 relative",
                            children: [
                                _jsx("div", {
                                    className: "absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border"
                                }),

                                _jsx("div", {
                                    className: "space-y-12",
                                    children: timeline.map((item, i) => (
                                        _jsxs(motion.div, {
                                            variants: fadeUp,
                                            className: `relative flex sm:items-center gap-6 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`,
                                            children: [
                                                _jsx("div", {
                                                    className: "absolute left-4 sm:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-brand shadow-glow-blue"
                                                }),

                                                _jsx("div", {
                                                    className: "ml-12 sm:ml-0 sm:w-1/2 sm:px-10",
                                                    children: _jsxs("div", {
                                                        className: "rounded-2xl glass p-6",
                                                        children: [
                                                            _jsx("span", {
                                                                className: "text-xs font-mono text-accent",
                                                                children: item.year
                                                            }),
                                                            _jsx("h3", {
                                                                className: "mt-2 font-display text-xl font-semibold",
                                                                children: item.title
                                                            }),
                                                            _jsx("p", {
                                                                className: "mt-2 text-sm text-muted-foreground leading-relaxed",
                                                                children: item.text
                                                            })
                                                        ]
                                                    })
                                                }),

                                                _jsx("div", {
                                                    className: "hidden sm:block sm:w-1/2"
                                                })
                                            ]
                                        }, item.year)
                                    ))
                                })
                            ]
                        })
                    ]
                }),

                _jsx(CtaBanner, {})
            ]
        })
    );
}