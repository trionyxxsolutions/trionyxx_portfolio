import { Link } from "@tanstack/react-router";
import logoLight from "../assets/logo.png";
import logoDark from "../assets/logo2.png";

export function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center justify-start gap-3 shrink-0 group select-none"
      aria-label="Trionyx Home"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden">
        <img
          src={logoLight}
          alt="Trionyx"
          className="h-12 w-12 object-contain block dark:hidden transition-transform duration-300 group-hover:scale-105"
        />

        <img
          src={logoDark}
          alt="Trionyx"
          className="h-12 w-12 object-contain hidden dark:block transition-transform duration-300 group-hover:scale-105"
        />
      </span>

      <span className="whitespace-nowrap text-base font-semibold tracking-tight text-gray-900 dark:text-gray-100 transition-colors">
        Trionyx
      </span>
    </Link>
  );
}