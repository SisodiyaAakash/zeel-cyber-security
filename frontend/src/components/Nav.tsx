import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

const LINKS = [
  { label: "Profile", href: "#about" },
  { label: "Arsenal", href: "#skills" },
  { label: "Deployments", href: "#experience" },
  { label: "Threat Lab", href: "#lab" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="nav-main"
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled ? "glass-nav border-b border-white/10" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" data-testid="nav-logo" className="flex items-center gap-3 group">
          <Logo />
          <span className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-slate-200 group-hover:text-emerald-400 transition-colors duration-300">
            ZC<span className="text-emerald-500"> // </span>SOC-DEFENSE
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(" ", "-")}`}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 hover:text-emerald-400 transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          data-testid="nav-cta"
          className="hidden sm:inline-flex items-center gap-2 border border-emerald-500/50 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400 hover:bg-emerald-500 hover:text-[#022C22] transition-colors duration-300"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Open Channel
        </a>
      </div>
    </header>
  );
}
