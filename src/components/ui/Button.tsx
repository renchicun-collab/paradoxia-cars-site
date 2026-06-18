"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import type { ReactNode, MouseEventHandler } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler;
  variant?: "primary" | "secondary";
  showArrow?: boolean;
  className?: string;
};

export default function Button({ children, href, onClick, variant = "primary", showArrow = false, className = "" }: Props) {
  /* 直線基調（角丸最小限）。クロームのグラデーションは押した瞬間に締まる感覚を出す */
  const base = "group inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-medium tracking-tight transition-all duration-300";
  const styles = variant === "primary"
    ? "bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold)] text-[#0d0f14] hover:shadow-[var(--chrome-glow)]"
    : "border border-[var(--hairline)] bg-white/[0.02] text-[var(--foreground)] hover:border-[var(--gold-deep)] hover:bg-white/[0.05]";

  const inner = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  const cls = `${base} ${styles} ${className}`;
  if (href) return <a href={href} className={cls}>{inner}</a>;
  return <button onClick={onClick} className={cls}>{inner}</button>;
}
