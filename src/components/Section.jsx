import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { stagger } from "@/animations/variants";
export function Section({ children, className = "", id }) {
    return (_jsx(motion.section, { id: id, variants: stagger, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-80px" }, className: `mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 ${className}`, children: children }));
}
