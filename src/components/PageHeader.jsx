import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/animations/variants";
export function PageHeader({ eyebrow, title, highlight, description }) {
  return _jsxs("section", {
    className: "relative pt-36 pb-20 overflow-hidden",
    children: [
      _jsxs("div", {
        className: "absolute inset-0 -z-10",
        children: [
          _jsx("div", { className: "absolute inset-0 bg-gradient-radial" }),
          _jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
        ],
      }),
      _jsxs(motion.div, {
        initial: "hidden",
        animate: "visible",
        variants: stagger,
        className: "mx-auto max-w-5xl px-6 lg:px-8 text-center",
        children: [
          _jsx(motion.span, {
            variants: fadeUp,
            className: "text-xs uppercase tracking-[0.25em] text-accent font-medium",
            children: eyebrow,
          }),
          _jsxs(motion.h1, {
            variants: fadeUp,
            className:
              "mt-5 font-display text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]",
            children: [
              title,
              " ",
              highlight && _jsx("span", { className: "text-gradient", children: highlight }),
            ],
          }),
          description &&
            _jsx(motion.p, {
              variants: fadeUp,
              className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed",
              children: description,
            }),
        ],
      }),
    ],
  });
}
