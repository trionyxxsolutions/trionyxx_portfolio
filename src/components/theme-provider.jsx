import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState, useCallback } from "react";
const STORAGE_KEY = "trionyxx-theme";
const ThemeContext = createContext(undefined);
function getSystemTheme() {
    if (typeof window === "undefined")
        return "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function applyTheme(resolved) {
    if (typeof document === "undefined")
        return;
    const root = document.documentElement;
    root.classList.toggle("dark", resolved === "dark");
    root.style.colorScheme = resolved;
}
export function ThemeProvider({ children }) {
    // Default to "system" — corrected from storage on mount (avoids SSR mismatch)
    const [theme, setThemeState] = useState("system");
    const [resolvedTheme, setResolvedTheme] = useState("dark");
    // Initialize from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        const initial = stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
        setThemeState(initial);
        const resolved = initial === "system" ? getSystemTheme() : initial;
        setResolvedTheme(resolved);
        applyTheme(resolved);
    }, []);
    // Listen to system changes when in "system" mode
    useEffect(() => {
        if (theme !== "system" || typeof window === "undefined")
            return;
        const mql = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = () => {
            const next = mql.matches ? "dark" : "light";
            setResolvedTheme(next);
            applyTheme(next);
        };
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, [theme]);
    const setTheme = useCallback((next) => {
        setThemeState(next);
        localStorage.setItem(STORAGE_KEY, next);
        const resolved = next === "system" ? getSystemTheme() : next;
        setResolvedTheme(resolved);
        applyTheme(resolved);
    }, []);
    return (_jsx(ThemeContext.Provider, { value: { theme, resolvedTheme, setTheme }, children: children }));
}
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx)
        throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}
/**
 * Inline script injected before hydration to set the correct class on <html>
 * BEFORE first paint. Prevents the dreaded white-flash on dark mode.
 */
export const themeScript = `
(function(){try{
  var s=localStorage.getItem('${STORAGE_KEY}');
  var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  var r=document.documentElement;
  if(t==='dark')r.classList.add('dark');else r.classList.remove('dark');
  r.style.colorScheme=t;
}catch(e){}})();
`;
