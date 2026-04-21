import { Sun, Moon, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme, type Theme } from "./theme-provider";

const options: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "system", label: "System", icon: Monitor },
  { value: "dark", label: "Dark", icon: Moon },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="relative inline-flex items-center rounded-full glass p-1 gap-0.5"
    >
      {options.map((opt) => {
        const active = theme === opt.value;
        const Icon = opt.icon;
        return (
          <button
            key={opt.value}
            role="radio"
            aria-checked={active}
            aria-label={`${opt.label} theme`}
            onClick={() => setTheme(opt.value)}
            className="relative h-7 w-7 grid place-items-center rounded-full transition-colors"
          >
            {active && (
              <motion.span
                layoutId="theme-indicator"
                className="absolute inset-0 rounded-full bg-gradient-brand shadow-glow-blue"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <Icon
              size={13}
              className={`relative z-10 transition-colors ${
                active ? "text-on-brand" : "text-muted-foreground"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
