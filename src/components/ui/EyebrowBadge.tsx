import type { ReactNode } from "react";

export default function EyebrowBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] bg-white/[0.03] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--gold)] backdrop-blur-md">
      <span className="h-1 w-1 rounded-full bg-[var(--gold)]" />
      {children}
    </span>
  );
}
