import { Tag, Reveal } from "@/components/Section";

const CHANNELS = [
  { label: "EMAIL", value: "zeelchaudhari119@gmail.com", href: "mailto:zeelchaudhari119@gmail.com", testid: "contact-email-link" },
  { label: "PHONE", value: "+1 (609) 775-9747", href: "tel:+16097759747", testid: "contact-phone-link" },
  { label: "LINKEDIN", value: "zeel-chaudhari-7432832b1", href: "https://linkedin.com/in/zeel-chaudhari-7432832b1", testid: "contact-linkedin-link" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 border-t border-slate-800/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Tag>05 // Contact Vault</Tag>
        </Reveal>
        <div className="mt-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase">
                Open a <span className="text-emerald-400">secure channel</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-400">
                Building or scaling a security operations capability? Hiring for a SOC
                that defends something that matters? Reach out directly on any of these
                channels - fastest response over email or LinkedIn.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <div className="border border-slate-800 divide-y divide-slate-800">
              {CHANNELS.map((c, i) => (
                <Reveal key={c.label} delay={0.12 + i * 0.06}>
                  <a
                    href={c.href}
                    target={c.label === "LINKEDIN" ? "_blank" : undefined}
                    rel={c.label === "LINKEDIN" ? "noreferrer" : undefined}
                    data-testid={c.testid}
                    className="group flex items-center justify-between gap-4 px-6 py-6 hover:bg-[#11161D] transition-colors duration-300"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500 group-hover:text-emerald-400 transition-colors duration-300">
                      {c.label}
                    </span>
                    <span className="text-sm text-slate-200 group-hover:text-emerald-300 transition-colors duration-300 truncate">
                      {c.value} <span className="text-emerald-500">↗</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
