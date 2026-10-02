const ITEMS = [
  "NIST CSF 2.0",
  "CIS Critical Controls",
  "SOC 2 Type II",
  "NERC CIP",
  "NIST 800-53",
  "SIEM Engineering",
  "Threat Hunting",
  "Incident Response",
  "DDoS Mitigation",
  "Forensic Triage",
  "Zero Non-Conformances",
  "10M+ Customers Secured",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      data-testid="editorial-marquee"
      className="relative border-y border-slate-800 bg-[#0B1015] py-5 overflow-hidden"
    >
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-heading text-lg sm:text-xl font-semibold uppercase tracking-wide text-slate-300">
              {item}
            </span>
            <span className="text-emerald-500 text-sm" aria-hidden="true">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
