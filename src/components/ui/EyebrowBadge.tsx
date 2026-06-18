import type { ReactNode } from "react";

/**
 * シグネチャー要素：型式・台数表記ライン。
 * ハイパーカーの世界の語彙（生産台数・型式番号）をUI構造に落とし込む。
 */
export default function EyebrowBadge({
  children,
  spec,
}: {
  children: ReactNode;
  spec?: string; // 例: "№04 · LIMITED"
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex items-center gap-2 rounded-sm border border-[var(--hairline)] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--gold)]">
        <span className="h-1 w-1 bg-[var(--danger)]" />
        {children}
      </span>
      {spec && <span className="spec-line">{spec}</span>}
    </div>
  );
}
