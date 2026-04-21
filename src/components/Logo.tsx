import { Link } from "@tanstack/react-router";
import logoLight from "../assets/logo.png";
import logoDark from "../assets/logo2.png";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group select-none">
      
      {/* Light mode logo */}
      <img
        src={logoLight}
        alt="Trionyxx"
        className="h-12 w-auto block dark:hidden transition-transform duration-300 group-hover:scale-105"
      />

      {/* Dark mode logo */}
      <img
        src={logoDark}
        alt="Trionyxx"
        className="h-12 w-auto hidden dark:block transition-transform duration-300 group-hover:scale-105"
      />

      <span className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-100 transition-colors">
        Trionyxx
      </span>
    </Link>
  );
}