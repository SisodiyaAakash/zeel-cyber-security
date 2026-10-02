import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer data-testid="footer-main" className="border-t border-slate-800 py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo size={26} />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
            ZC // SOC-DEFENSE - Zeel Chaudhari
          </span>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-600">
          © {new Date().getFullYear()} · Detect. Hunt. Contain. Harden.
        </p>
      </div>
    </footer>
  );
}
