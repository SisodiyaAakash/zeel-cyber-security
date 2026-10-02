export function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M32 6 L54 15 V32 C54 46.5 44.5 55.5 32 60 C19.5 55.5 10 46.5 10 32 V15 Z"
        fill="none"
        stroke="#10B981"
        strokeWidth="3.5"
      />
      <path d="M32 32 L48 18" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="32" r="4" fill="#10B981" />
      <circle cx="42" cy="43" r="2.6" fill="#0EA5E9" />
      <path
        d="M32 13 L49 20.5 V32"
        fill="none"
        stroke="#10B981"
        strokeOpacity="0.35"
        strokeWidth="1.6"
      />
    </svg>
  );
}
