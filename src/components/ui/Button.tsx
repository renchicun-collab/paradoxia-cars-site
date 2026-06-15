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

/**
 * primary   — solid gold gradient on dark
 * secondary — ghost / hairline-bordered
 */
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  showArrow = false,
  className = "",
}: Props) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-medium tracking-tight transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold)] text-black hover:to-[var(--gold-light)] hover:shadow-[var(--gold-glow)]"
      : "border border-[var(--hairline)] bg-white/[0.02] text-[var(--foreground)] hover:bg-white/[0.06]";

  const inner = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight
          size={16}
          weight="bold"
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  const cls = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}
