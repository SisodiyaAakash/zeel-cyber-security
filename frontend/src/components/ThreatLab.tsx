import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tag, Reveal, EASE } from "@/components/Section";

type Option = { label: string; correct: boolean; feedback: string };
type Step = { alert: string; prompt: string; options: Option[] };

const STEPS: Step[] = [
  {
    alert: "ALERT 09:41:07 - SIEM flags ransomware behaviour on substation host HMI-04",
    prompt: "First move?",
    options: [
      { label: "Reboot the HMI to clear the process", correct: false, feedback: "Rebooting destroys volatile evidence. The threat persists in the image." },
      { label: "Isolate host, capture volatile memory", correct: true, feedback: "Correct. Contain first, preserve forensics - blast radius stops here." },
      { label: "Dismiss - likely a false positive", correct: false, feedback: "Ransomware on OT gear is never dismissed. Escalation missed." },
    ],
  },
  {
    alert: "HOST ISOLATED - logs show PowerShell spawned by winword.exe, beaconing to 185.220.x.x",
    prompt: "Next action?",
    options: [
      { label: "Block hash fleet-wide, blacklist the C2 IP", correct: true, feedback: "Correct. Custom containment rules cut command & control across the grid." },
      { label: "Delete the document, close the ticket", correct: false, feedback: "The payload is already staged elsewhere. Ticket closed, breach open." },
      { label: "Email the user asking what they opened", correct: false, feedback: "Every minute of dwell time widens the compromise. Act, then interview." },
    ],
  },
  {
    alert: "C2 SEVERED - scope unknown. 400+ endpoints share the same image.",
    prompt: "Final sweep?",
    options: [
      { label: "Restore HMI-04 from backup, move on", correct: false, feedback: "Without a retro-hunt you restore blind - sibling infections stay live." },
      { label: "Retro-hunt IoCs in Splunk, force cred resets", correct: true, feedback: "Correct. Full-scope hunt + credential hygiene. Incident closed at root cause." },
      { label: "Raise the SIEM alert threshold", correct: false, feedback: "Quieter dashboards, louder breach. Tuning is not remediation." },
    ],
  },
];

export function ThreatLab() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const done = started && step >= STEPS.length;

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (STEPS[step].options[i].correct) setScore((s) => s + 1);
  };

  const next = () => {
    setPicked(null);
    setStep((s) => s + 1);
  };

  const reset = () => {
    setStarted(true);
    setStep(0);
    setPicked(null);
    setScore(0);
  };

  return (
    <section id="lab" className="relative py-24 lg:py-32 border-t border-slate-800/60 bg-[#0B1015]/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Tag>04 // Threat Lab</Tag>
        </Reveal>
        <div className="mt-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase">
                Run the <span className="text-emerald-400">playbook</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-400">
                A live-fire triage drill. A ransomware alert just hit an OT substation
                console - make the calls Zeel makes in the SOC and see if you contain it
                at root cause.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.15}>
              <div className="scanlines relative border border-slate-800 bg-[#0B1015] min-h-[380px] p-6 sm:p-9 overflow-hidden">
                {!started ? (
                  <div className="flex h-full min-h-[340px] flex-col items-center justify-center text-center">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber-400">
                      ● Incoming incident - severity: critical
                    </p>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
                      Ransomware signatures detected on grid substation HMI-04. You are
                      the Tier-2 analyst on bridge. Three decisions stand between you and
                      containment.
                    </p>
                    <button
                      type="button"
                      data-testid="threat-sim-trigger"
                      onClick={() => setStarted(true)}
                      className="mt-8 bg-emerald-500 px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#022C22] hover:bg-emerald-400 transition-colors duration-300"
                    >
                      Take the Bridge
                    </button>
                  </div>
                ) : done ? (
                  <div className="flex h-full min-h-[340px] flex-col items-center justify-center text-center">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
                      ■ Incident closed
                    </p>
                    <p className="mt-5 font-heading text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-100">
                      {score}<span className="text-slate-600">/</span>{STEPS.length}
                    </p>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
                      {score === STEPS.length
                        ? "Textbook containment - detected, isolated, eradicated at root cause. This is the standard Zeel operates at."
                        : "Containment is a discipline. Zeel's playbooks - hardened across two DOE audits - get every one of these calls right."}
                    </p>
                    <button
                      type="button"
                      data-testid="threat-sim-reset"
                      onClick={reset}
                      className="mt-8 border border-slate-700 px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-slate-200 hover:border-emerald-500 hover:text-emerald-400 transition-colors duration-300"
                    >
                      Run It Again
                    </button>
                  </div>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.35, ease: EASE }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-400">
                          {STEPS[step].alert}
                        </p>
                        <span className="font-mono text-xs text-slate-500 shrink-0">
                          {step + 1}/{STEPS.length}
                        </span>
                      </div>
                      <div className="mt-3 h-px bg-slate-800" />
                      <p className="mt-6 font-heading text-xl sm:text-2xl font-semibold tracking-tight text-slate-100">
                        {STEPS[step].prompt}
                      </p>
                      <div className="mt-6 grid gap-3">
                        {STEPS[step].options.map((o, i) => {
                          const isPicked = picked === i;
                          const showState = picked !== null;
                          return (
                            <button
                              key={o.label}
                              type="button"
                              data-testid={`threat-sim-option-${i}`}
                              onClick={() => pick(i)}
                              disabled={picked !== null}
                              className={`border px-5 py-4 text-left font-mono text-xs sm:text-sm tracking-wide transition-colors duration-300 ${
                                showState && o.correct
                                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-300"
                                  : showState && isPicked
                                    ? "border-red-500/70 bg-red-500/10 text-red-300"
                                    : "border-slate-700 text-slate-300 hover:border-emerald-500/60 hover:text-emerald-300"
                              } ${picked !== null ? "cursor-default" : "cursor-pointer"}`}
                            >
                              <span className="text-slate-600 mr-3">[{String.fromCharCode(65 + i)}]</span>
                              {o.label}
                            </button>
                          );
                        })}
                      </div>
                      <AnimatePresence>
                        {picked !== null && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-5 flex flex-wrap items-center justify-between gap-4"
                          >
                            <p
                              data-testid="threat-sim-feedback"
                              className={`text-sm ${STEPS[step].options[picked].correct ? "text-emerald-400" : "text-red-400"}`}
                            >
                              {STEPS[step].options[picked].feedback}
                            </p>
                            <button
                              type="button"
                              data-testid="threat-sim-next"
                              onClick={next}
                              className="bg-emerald-500 px-6 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold text-[#022C22] hover:bg-emerald-400 transition-colors duration-300"
                            >
                              {step === STEPS.length - 1 ? "Close Incident" : "Continue"} →
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
