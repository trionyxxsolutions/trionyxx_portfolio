import { Link } from "@tanstack/react-router";
import { Linkedin, Github, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Engineering scalable digital systems for forward-thinking teams.
              Web, mobile, AI and cloud — built with craft.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 grid place-items-center rounded-lg border border-border hover:bg-secondary hover:border-primary/40 transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="h-9 w-9 grid place-items-center rounded-lg border border-border hover:bg-secondary hover:border-primary/40 transition-all"
              >
                <Github size={16} />
              </a>
              <a
                href="mailto:contact@trionyxx.com"
                aria-label="Email"
                className="h-9 w-9 grid place-items-center rounded-lg border border-border hover:bg-secondary hover:border-primary/40 transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Trionyxx Solutions. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
