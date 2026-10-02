import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Tag({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400 flex items-center gap-3">
      <span className="inline-block h-px w-8 bg-emerald-500/60" />
      {children}
    </p>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
