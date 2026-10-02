import { Tag, Reveal } from "@/components/Section";

const CELLS = [
  {
    span: "lg:col-span-8",
    idx: "A1",
    title: "SIEM & Threat Telemetry",
    desc: "Real-time monitoring, correlation-rule engineering and alert triage at utility scale.",
    tags: ["ArcSight", "Splunk", "LogRhythm", "SNORT", "Cisco IPS", "Proofpoint", "WAF", "Symantec Endpoint"],
  },
  {
    span: "lg:col-span-4",
    idx: "A2",
    title: "Scripting & Automation",
    desc: "Parsing, hunting and response automation.",
    tags: ["Python", "Bash", "Ruby", "C", "C++", "SQL"],
  },
  {
    span: "lg:col-span-4",
    idx: "B1",
    title: "Cloud & DevSecOps",
    desc: "Security wired into the pipeline.",
    tags: ["AWS", "Terraform", "GitLab", "GitHub Enterprise", "CircleCI"],
  },
  {
    span: "lg:col-span-8",
    idx: "B2",
    title: "Governance, Compliance & Containment",
    desc: "Frameworks proven in audits; network-level containment under fire.",
    tags: ["NIST 800-53", "NIST CSF", "SOC 2", "CIS Controls", "NERC CIP", "Akamai", "Arbor DDoS", "Fortinet"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 border-t border-slate-800/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Tag>// Arsenal</Tag>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase max-w-2xl">
            Core competencies, <span className="text-outline-faint">battle-tested</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-px bg-slate-800 border border-slate-800">
          {CELLS.map((c, i) => (
            <Reveal key={c.idx} delay={0.08 * i} className={c.span}>
              <div
                data-testid="skills-category-tab"
                className="group h-full bg-[#090B0E] p-7 sm:p-9 hover:bg-[#11161D] transition-colors duration-300 relative overflow-hidden"
              >
                <span className="absolute top-5 right-6 font-mono text-xs text-slate-600 group-hover:text-emerald-500 transition-colors duration-300">
                  {c.idx}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-slate-100 group-hover:text-emerald-400 transition-colors duration-300">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{c.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-slate-700 px-3 py-1.5 font-mono text-[11px] tracking-wider text-slate-300 group-hover:border-emerald-500/40 transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
            + Windows · Linux · macOS · ServiceNow · JIRA · Confluence
          </p>
        </Reveal>
      </div>
    </section>
  );
}
