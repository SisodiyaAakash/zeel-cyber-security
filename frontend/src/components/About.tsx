import { Tag, Reveal } from "@/components/Section";

const PRINCIPLES = [
  { k: "DETECT", v: "Fine-tuned correlation rules, dashboards and alerts that surface real threats - not noise." },
  { k: "HUNT", v: "Packet analysis (SNORT), log correlation and malware sandboxing to find root cause." },
  { k: "CONTAIN", v: "IP blacklisting, firewall policy and custom rules that shrink exposure fast." },
  { k: "HARDEN", v: "NIST CSF, CIS Controls and SOC 2 alignment proven across DOE audit cycles." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Tag>01 // Profile</Tag>
        </Reveal>
        <div className="mt-8 max-w-4xl">
          <Reveal delay={0.1}>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase">
              The analyst behind <span className="text-emerald-400">the console</span>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-base leading-relaxed text-slate-400">
              I'm Zeel Chaudhari - a Cybersecurity Analyst with 5+ years of progressive
              experience across energy, utilities and enterprise environments. At Oncor
              Electric Delivery, the largest regulated transmission and distribution
              utility in Texas, I monitor and defend IT/OT infrastructure serving over
              10 million customers against DDoS campaigns, malware outbreaks and
              unauthorized access.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              My craft lives in the SIEM - ArcSight, Splunk, LogRhythm - fine-tuning
              correlation rules until the alerts that fire are the alerts that matter.
              I've supported two Department of Energy security audits to successful
              certification, led SOC bridge calls under pressure, and documented the
              playbooks that make the next response faster than the last.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800 border border-slate-800">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.k} delay={0.1 + i * 0.06} className="bg-[#090B0E]">
              <div className="p-6 h-full hover:bg-[#11161D] transition-colors duration-300 group">
                <p className="font-mono text-xs tracking-[0.25em] text-emerald-400 group-hover:text-emerald-300">
                  {p.k}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
