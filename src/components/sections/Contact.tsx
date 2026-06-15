"use client";

import { useState } from "react";
import { EnvelopeSimple, TiktokLogo, ArrowUpRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import EyebrowBadge from "../ui/EyebrowBadge";
import { SITE, tiktokUrl } from "@/lib/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Paradosxiaへのお問い合わせ — ${name || "匿名"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${from}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-[var(--hairline)] bg-[var(--surface-nested)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted)]/70 focus:border-[var(--gold)]";

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(55% 55% at 50% 40%, rgba(192,192,204,.06), transparent 70%)" }} />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative mx-auto grid max-w-[1100px] grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20"
      >
        <div>
          <EyebrowBadge>お問い合わせ</EyebrowBadge>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.15] tracking-tight md:text-5xl">
            情報提供、コラボ、<br />車の話、なんでも。
          </h2>
          <p className="mt-5 max-w-[40ch] text-base leading-relaxed text-[var(--muted)] md:text-lg">
            紹介すべき車を知っていますか？コラボのご提案も歓迎します。
          </p>

          <div className="mt-9 flex flex-col gap-3">
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2.5 text-sm text-[var(--foreground)]">
              <EnvelopeSimple size={18} className="text-[var(--gold)]" />
              {SITE.email}
            </a>
            <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-sm text-[var(--foreground)]">
              <TiktokLogo size={18} weight="fill" className="text-[var(--gold)]" />
              @{SITE.tiktokHandle}
              <ArrowUpRight size={13} weight="bold" className="text-[var(--muted)]" />
            </a>
          </div>
        </div>

        <form onSubmit={send} className="card-surface flex flex-col gap-4 p-7 md:p-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input className={field} placeholder="お名前" value={name} onChange={(e) => setName(e.target.value)} required />
            <input className={field} type="email" placeholder="メールアドレス" value={from} onChange={(e) => setFrom(e.target.value)} required />
          </div>
          <textarea className={`${field} min-h-[130px] resize-y`} placeholder="メッセージ" value={message} onChange={(e) => setMessage(e.target.value)} required />
          <Button showArrow>メッセージを送る</Button>
          <p className="text-xs text-[var(--muted)]/70">メールアプリが開きます。データは保存されません。</p>
        </form>
      </motion.div>
    </section>
  );
}
