import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { EASE } from "@/components/Section";
import content from "@/data/content.json";

const LINKS = content.nav.links;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      data-testid="nav-main"
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color] duration-300 ${
        solid ? "glass-nav border-b border-white/10" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" data-testid="nav-logo" onClick={() => setOpen(false)} className="flex items-center gap-3 group">
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
        <button
          type="button"
          data-testid="nav-mobile-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 border border-slate-700 text-slate-200 hover:border-emerald-500 hover:text-emerald-400 transition-colors duration-300"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="nav-mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="md:hidden overflow-hidden border-t border-white/5"
          >
            <div className="px-5 py-4 flex flex-col">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  data-testid={`nav-mobile-link-${l.label.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3, ease: EASE }}
                  className="flex items-center justify-between py-3.5 border-b border-slate-800/70 font-mono text-xs uppercase tracking-[0.25em] text-slate-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  <span>
                    <span className="text-emerald-500 mr-3">0{i + 1}</span>
                    {l.label}
                  </span>
                  <span className="text-slate-600">→</span>
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                data-testid="nav-mobile-cta"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + LINKS.length * 0.05, duration: 0.3, ease: EASE }}
                className="mt-4 mb-2 inline-flex items-center justify-center gap-2 bg-emerald-500 px-4 py-3.5 font-mono text-xs uppercase tracking-[0.25em] font-semibold text-[#022C22] hover:bg-emerald-400 transition-colors duration-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#022C22]" />
                Open Channel
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
