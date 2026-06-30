import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
];
export function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);
    return (_jsxs(motion.header, { initial: { y: -24, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong" : "bg-transparent"}`, children: [_jsxs("nav", { className: "mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between", children: [_jsx(Logo, {}), _jsx("ul", { className: "hidden md:flex items-center gap-9", children: links.map((l) => {
                            const active = location.pathname === l.to;
                            return (_jsx("li", { children: _jsx(Link, { to: l.to, className: `text-sm story-link transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`, children: l.label }) }, l.to));
                        }) }), _jsxs("div", { className: "hidden md:flex items-center gap-3", children: [_jsx(ThemeToggle, {}), _jsx(Link, { to: "/contact", className: "inline-flex items-center rounded-full bg-gradient-brand px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-95 transition-all hover:shadow-glow-blue", children: "Get in touch" })] }), _jsxs("div", { className: "flex md:hidden items-center gap-2", children: [_jsx(ThemeToggle, {}), _jsx("button", { "aria-label": "Toggle menu", onClick: () => setOpen((v) => !v), className: "p-2 rounded-md hover:bg-secondary transition-colors", children: open ? _jsx(X, { size: 20 }) : _jsx(Menu, { size: 20 }) })] })] }), _jsx(AnimatePresence, { children: open && (_jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, transition: { duration: 0.25 }, className: "md:hidden glass-strong overflow-hidden", children: _jsxs("ul", { className: "px-6 py-6 space-y-4", children: [links.map((l) => (_jsx("li", { children: _jsx(Link, { to: l.to, className: "block text-base text-foreground/90 hover:text-foreground", children: l.label }) }, l.to))), _jsx("li", { children: _jsx(Link, { to: "/contact", className: "inline-flex items-center rounded-full bg-gradient-brand px-5 py-2 text-sm font-medium text-on-brand", children: "Get in touch" }) })] }) })) })] }));
}
