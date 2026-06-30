import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/animations/variants";
export function CtaBanner() {
  return _jsx("section", {
    className: "mx-auto max-w-7xl px-6 lg:px-8 pb-24",
    children: _jsxs(motion.div, {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true },
      variants: fadeUp,
      className: "relative overflow-hidden rounded-3xl p-12 sm:p-20 text-center",
      children: [
        _jsx("div", { className: "absolute inset-0 bg-gradient-brand opacity-90" }),
        _jsx("div", { className: "absolute inset-0 grid-pattern opacity-20" }),
        _jsx("div", {
          className:
            "absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-background/30 blur-3xl",
        }),
        _jsx("div", {
          className: "absolute -top-32 -right-20 h-80 w-80 rounded-full bg-background/20 blur-3xl",
        }),
        _jsxs("div", {
          className: "relative",
          children: [
            _jsx("h2", {
              className:
                "font-display text-4xl sm:text-6xl font-semibold tracking-tight text-on-brand",
              children: "Have a project in mind?",
            }),
            _jsx("p", {
              className: "mt-5 text-lg text-on-brand/85 max-w-xl mx-auto",
              children: "Let's talk. We respond within one business day.",
            }),
            _jsx(motion.div, {
              whileHover: { scale: 1.04 },
              whileTap: { scale: 0.97 },
              className: "mt-9 inline-block",
              children: _jsxs(Link, {
                to: "/contact",
                className:
                  "group inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 text-sm font-semibold shadow-elegant",
                children: [
                  "Start the conversation",
                  _jsx(ArrowRight, {
                    size: 16,
                    className: "group-hover:translate-x-1 transition-transform",
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
