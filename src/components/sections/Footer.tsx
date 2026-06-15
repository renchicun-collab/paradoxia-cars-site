import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="hairline-top px-6 py-14 md:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.32em]">
            Parados<span className="text-gold">x</span>ia
          </span>
          <p className="mt-2 max-w-[40ch] text-sm text-[var(--muted)]">
            A study of the rarest machines on earth, and the world that
            surrounds them.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="https://renchicun4.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            renchicun4.com
            <ArrowUpRight size={14} weight="bold" />
          </a>
          <span className="text-xs text-[var(--muted)]/60">
            &copy; {new Date().getFullYear()} Paradosxia Cars
          </span>
        </div>
      </div>
    </footer>
  );
}
