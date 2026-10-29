import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <div className="relative h-9 w-9 rounded-full bg-[var(--gradient-gold)] grid place-items-center shadow-glow">
        <span className="font-display text-base font-bold text-primary-foreground">M</span>
      </div>
      <span className="font-display text-lg font-semibold tracking-tight">
        Cryptofy<span className="text-gradient-gold"> Coin</span>
      </span>
    </Link>
  );
}

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/currency", label: "Currency" },
  { to: "/metaverse", label: "Metaverse" },
  { to: "/benefit", label: "Benefits" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <Logo />

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground" }}
              className="hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#buy"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[var(--gradient-gold)] px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shadow-glow"
          >
            Buy $CFYC <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-grid h-11 w-11 place-items-center rounded-xl border border-primary/40 bg-[var(--gradient-gold)] text-primary-foreground shadow-glow active:scale-95 transition"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pb-5 pt-2 flex flex-col gap-1 border-t border-border bg-background/95">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-secondary text-foreground" }}
              className="rounded-lg px-4 py-3 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#buy"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--gradient-gold)] px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Buy $CFYC <ArrowRight className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row gap-6 items-center justify-between">
        <Logo />
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Cryptofy Coin. All rights reserved.</p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <Link to="/currency" className="hover:text-foreground">Currency</Link>
          <Link to="/metaverse" className="hover:text-foreground">Metaverse</Link>
          <Link to="/benefit" className="hover:text-foreground">Benefits</Link>
          <Link to="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
         <Link to="/terms" className="hover:text-foreground">Terms & Conditions</Link>
          <a href="https://t.me/cfyfollowbot" className="hover:text-foreground">Telegram</a>
        </div>
      </div>
    </footer>
  );
}
