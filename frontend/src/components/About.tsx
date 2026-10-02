import { Tag, Reveal } from "@/components/Section";
import content from "@/data/content.json";

const PRINCIPLES = content.about.principles;

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Tag>// Profile</Tag>
        </Reveal>
        <div className="mt-8 max-w-4xl">
          <Reveal delay={0.1}>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase">
              The analyst behind <span className="text-emerald-400">the console</span>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-base leading-relaxed text-slate-400">
              {content.about.paragraphs[0]}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              {content.about.paragraphs[1]}
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
