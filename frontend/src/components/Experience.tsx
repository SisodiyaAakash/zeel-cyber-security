import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tag, Reveal, EASE } from "@/components/Section";
import content from "@/data/content.json";

const ROLES = content.experience.roles;

export function Experience() {
  const [open, setOpen] = useState<string | null>("oncor");

  return (
    <section id="experience" className="relative py-24 lg:py-32 border-t border-slate-800/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Tag>// Deployments</Tag>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase">
            Operational timeline
          </h2>
        </Reveal>
        <div className="mt-12 relative">
          <span className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-800 hidden sm:block" />
          <div className="space-y-8">
            {ROLES.map((r, i) => {
              const expanded = open === r.id;
              return (
                <Reveal key={r.id} delay={0.08 * i}>
                  <article className="relative sm:pl-10">
                    <span
                      className={`absolute left-0 top-2 hidden sm:block h-[15px] w-[15px] rounded-full border-2 ${
                        r.current
                          ? "border-emerald-400 bg-emerald-400/30 shadow-[0_0_12px_2px_rgba(16,185,129,0.5)]"
                          : "border-slate-600 bg-[#090B0E]"
                      }`}
                    />
                    <div
                      className={`border transition-colors duration-300 ${
                        expanded ? "border-emerald-500/50 bg-[#11161D]" : "border-slate-800 bg-[#0B1015] hover:border-slate-600"
                      }`}
                    >
                      <button
                        type="button"
                        data-testid="experience-card-toggle"
                        onClick={() => setOpen(expanded ? null : r.id)}
                        aria-expanded={expanded}
                        className="w-full text-left px-6 sm:px-8 py-6 flex flex-wrap items-start justify-between gap-4"
                      >
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-slate-100">
                              {r.company}
                            </h3>
                            {r.current && (
                              <span className="bg-[#064E3B] text-[#A7F3D0] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em]">
                                Active
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-sm text-slate-400">
                            {r.role} · {r.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs tracking-[0.15em] text-emerald-400">
                            {r.period}
                          </span>
                          <motion.span
                            animate={{ rotate: expanded ? 45 : 0 }}
                            transition={{ duration: 0.3, ease: EASE }}
                            className="text-emerald-400 text-xl leading-none"
                            aria-hidden="true"
                          >
                            +
                          </motion.span>
                        </div>
                      </button>
                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.45, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 sm:px-8 pb-8 border-t border-slate-800 pt-6">
                              <p className="text-sm leading-relaxed text-slate-400 max-w-3xl">{r.brief}</p>
                              <ul className="mt-5 space-y-3">
                                {r.bullets.map((b) => (
                                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                                    <span className="mt-1 text-emerald-500 font-mono text-xs">▸</span>
                                    {b}
                                  </li>
                                ))}
                              </ul>
                              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500">
                                ENV: {r.env}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
        <Reveal delay={0.15}>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
            {content.experience.education}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
