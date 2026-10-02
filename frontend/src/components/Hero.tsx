import type { ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { EASE } from "@/components/Section";

const RESUME_URL =
  "https://customer-assets-m6fa6gv7.emergentagent.net/job_resume-portfolio-382/artifacts/4pobgiux_Zeel-Chaudhari-CyberSecurity-Analyst.pdf";

function MaskedLine({ children, delay, reduced }: { children: ReactNode; delay: number; reduced: boolean }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className="block"
        initial={reduced ? { opacity: 0 } : { y: "115%" }}
        animate={reduced ? { opacity: 1 } : { y: "0%" }}
        transition={{ duration: 0.95, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Radar() {
  return (
    <div className="relative aspect-square w-full max-w-[340px] mx-auto">
      <div className="absolute inset-0 rounded-full border border-emerald-500/25" />
      <div className="absolute inset-[18%] rounded-full border border-emerald-500/20" />
      <div className="absolute inset-[36%] rounded-full border border-emerald-500/15" />
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-emerald-500/10" />
      <div className="absolute top-1/2 left-0 right-0 h-px bg-emerald-500/10" />
      <div className="absolute inset-0 rounded-full radar-sweep" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_4px_rgba(16,185,129,0.6)]" />
      {[
        { top: "24%", left: "62%", color: "bg-sky-400", delay: "0s" },
        { top: "58%", left: "30%", color: "bg-amber-400", delay: "0.9s" },
        { top: "70%", left: "68%", color: "bg-emerald-400", delay: "1.7s" },
      ].map((b, i) => (
        <span key={i} className="absolute" style={{ top: b.top, left: b.left }}>
          <span className={`block h-2 w-2 rounded-full ${b.color}`} />
          <span
            className={`absolute inset-0 h-2 w-2 rounded-full ${b.color} animate-ping`}
            style={{ animationDelay: b.delay }}
          />
        </span>
      ))}
      <span className="absolute top-3 left-4 font-mono text-[10px] tracking-[0.2em] text-emerald-500/80 uppercase">
        GRID.SECTOR-7
      </span>
      <span className="absolute bottom-3 right-4 font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
        SWEEP 4.0s
      </span>
    </div>
  );
}

function Terminal() {
  const lines = [
    { text: "$ zeel --status", cls: "text-sky-400" },
    { text: "> role     : Cybersecurity Analyst · SOC Tier-2", cls: "text-slate-300" },
    { text: "> focus    : threat hunting · IR · SIEM engineering", cls: "text-slate-300" },
    { text: "> stack    : ArcSight / Splunk / LogRhythm / SNORT", cls: "text-slate-300" },
    { text: "> status   : OPEN TO OPPORTUNITIES", cls: "text-emerald-400" },
  ];
  return (
    <div className="scanlines relative border border-slate-800 bg-[#0B1015] p-5 font-mono text-[11px] sm:text-xs leading-6 overflow-hidden">
      <div className="flex gap-1.5 mb-4">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
      </div>
      {lines.map((l, i) => (
        <motion.p
          key={l.text}
          className={l.cls}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 + i * 0.28, duration: 0.3 }}
        >
          {l.text}
        </motion.p>
      ))}
      <motion.span
        className="inline-block h-4 w-2 bg-emerald-400 align-middle animate-blink"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
      />
    </div>
  );
}

const STATS = [
  { value: "5+", label: "Years in SOC Ops" },
  { value: "10M+", label: "Customers Defended" },
  { value: "02", label: "DOE Audits Passed" },
  { value: "1500+", label: "Employee Site Secured" },
];

export function Hero() {
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 18 });

  return (
    <section id="top" className="relative bg-grid overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.07),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-32 lg:pt-40 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <MaskedLine delay={0.05} reduced={!!reduced}>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
                {"// Zeel Chaudhari - Security Operations Center"}
              </span>
            </MaskedLine>
            <h1 className="mt-6 font-heading font-extrabold uppercase tracking-tighter leading-[0.98] text-4xl sm:text-5xl lg:text-7xl">
              <MaskedLine delay={0.18} reduced={!!reduced}>
                <span>Defending</span>
              </MaskedLine>
              <MaskedLine delay={0.3} reduced={!!reduced}>
                <span className="text-outline">Critical</span>
              </MaskedLine>
              <MaskedLine delay={0.42} reduced={!!reduced}>
                <span>
                  Infrastructure<span className="text-emerald-500">.</span>
                </span>
              </MaskedLine>
            </h1>
            <motion.p
              className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-slate-400"
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7, ease: EASE }}
            >
              Cybersecurity Analyst with 5+ years in SOC operations, threat detection and
              incident response across energy, utilities and enterprise environments -
              turning raw telemetry into containment.
            </motion.p>
            <motion.div
              className="mt-9 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7, ease: EASE }}
            >
              <a
                href="#contact"
                data-testid="hero-contact-button"
                className="inline-flex items-center gap-3 bg-emerald-500 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#022C22] hover:bg-emerald-400 transition-colors duration-300"
              >
                Initiate Contact
                <span aria-hidden="true">→</span>
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                data-testid="hero-resume-download"
                className="inline-flex items-center gap-3 border border-slate-700 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-slate-200 hover:border-emerald-500 hover:text-emerald-400 transition-colors duration-300"
              >
                Download Résumé
              </a>
            </motion.div>
          </div>
          <div className="lg:col-span-5" style={{ perspective: 1200 }}>
            <motion.div
              style={reduced ? undefined : { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                mx.set((e.clientX - r.left) / r.width - 0.5);
                my.set((e.clientY - r.top) / r.height - 0.5);
              }}
              onMouseLeave={() => {
                mx.set(0);
                my.set(0);
              }}
              initial={{ opacity: 0, scale: reduced ? 1 : 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.9, ease: EASE }}
              className="space-y-6"
            >
              <div className="border border-slate-800 bg-[#0B1015]/80 p-6 backdrop-blur-sm">
                <Radar />
              </div>
              <Terminal />
            </motion.div>
          </div>
        </div>
        <motion.div
          data-testid="hero-stats"
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 border border-slate-800 divide-x divide-y lg:divide-y-0 divide-slate-800"
          initial={{ opacity: 0, y: reduced ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: EASE }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="px-6 py-6 group hover:bg-[#11161D] transition-colors duration-300">
              <p className="font-heading text-3xl sm:text-4xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors duration-300">
                {s.value}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
