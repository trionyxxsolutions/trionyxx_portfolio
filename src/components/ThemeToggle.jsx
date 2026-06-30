import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";
const options = [
    { value: "light", label: "Light", icon: Sun },
    { value: "system", label: "System", icon: Monitor },
    { value: "dark", label: "Dark", icon: Moon },
];
export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    return (_jsx("div", { role: "radiogroup", "aria-label": "Theme", className: "relative inline-flex items-center rounded-full glass p-1 gap-0.5", children: options.map((opt) => {
            const active = theme === opt.value;
            const Icon = opt.icon;
            return (_jsxs("button", { role: "radio", "aria-checked": active, "aria-label": `${opt.label} theme`, onClick: () => setTheme(opt.value), className: "relative h-7 w-7 grid place-items-center rounded-full transition-colors", children: [active && (_jsx(motion.span, { layoutId: "theme-indicator", className: "absolute inset-0 rounded-full bg-gradient-brand shadow-glow-blue", transition: { type: "spring", stiffness: 400, damping: 30 } })), _jsx(Icon, { size: 13, className: `relative z-10 transition-colors ${active ? "text-on-brand" : "text-muted-foreground"}` })] }, opt.value));
        }) }));
}
