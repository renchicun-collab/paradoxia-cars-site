import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { SITE, tiktokUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="hairline-top px-6 py-14 md:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.32em]">
            Parados<span className="text-[var(--gold)]">x</span>ia
          </span>
          <p className="mt-2 max-w-[40ch] text-sm text-[var(--muted)]">
            地球上で最も希少な車と、それを取り巻く世界の考察。
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <a href={`https://${SITE.blog}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
            {SITE.blog} <ArrowUpRight size={14} weight="bold" />
          </a>
          <a href={tiktokUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
            @{SITE.tiktokHandle} <ArrowUpRight size={14} weight="bold" />
          </a>
          <span className="text-xs text-[var(--muted)]/60">
            © {new Date().getFullYear()} Paradosxia Cars
          </span>
        </div>
      </div>
    </footer>
  );
}
