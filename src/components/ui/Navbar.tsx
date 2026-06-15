"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import Button from "./Button";

const links = [
  { label: "Concept", href: "#concept" },
  { label: "Hypercars", href: "#hypercars" },
  { label: "Articles", href: "#articles" },
  { label: "Video", href: "#video" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--hairline)] bg-black/70 backdrop-blur-xl backdrop-saturate-150"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--foreground)]">
            Parados<span className="text-gold">x</span>ia
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {l.label}
            </a>
          ))}
          <Button href="#contact" variant="secondary">
            Get in touch
          </Button>
        </div>

        <button
          className="text-[var(--foreground)] md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--hairline)] bg-black/90 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-[var(--muted)] hover:text-[var(--foreground)]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
