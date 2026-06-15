"use client";

import { useState } from "react";
import { EnvelopeSimple, TiktokLogo, ArrowUpRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import EyebrowBadge from "../ui/EyebrowBadge";
import { SITE } from "@/lib/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  // No backend required — composes an email in the visitor's mail client.
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Paradosxia enquiry — ${name || "Hello"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${from}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-[var(--hairline)] bg-[var(--surface-nested)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted)]/70 focus:border-[var(--gold)]";

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 md:px-8 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 40%, rgba(201,162,75,.08), transparent 70%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative mx-auto grid max-w-[1100px] grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20"
      >
        <div>
          <EyebrowBadge>Contact</EyebrowBadge>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-tighter md:text-5xl">
            Tips, partnerships, or just talk cars.
          </h2>
          <p className="mt-5 max-w-[44ch] text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Know a car that belongs here? Want to collaborate? The inbox is open.
          </p>

          <div className="mt-9 flex flex-col gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="group inline-flex items-center gap-2.5 text-sm text-[var(--foreground)]"
            >
              <EnvelopeSimple size={18} className="text-[var(--gold)]" />
              {SITE.email}
            </a>
            <a
              href={SITE.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 text-sm text-[var(--foreground)]"
            >
              <TiktokLogo size={18} weight="fill" className="text-[var(--gold)]" />
              @paradosxia
              <ArrowUpRight size={13} weight="bold" className="text-[var(--muted)]" />
            </a>
          </div>
        </div>

        <form onSubmit={send} className="card-surface flex flex-col gap-4 p-7 md:p-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              className={field}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className={field}
              type="email"
              placeholder="Email"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
            />
          </div>
          <textarea
            className={`${field} min-h-[130px] resize-y`}
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button showArrow>Send message</Button>
          <p className="text-xs text-[var(--muted)]/70">
            Opens in your email app — no data is stored.
          </p>
        </form>
      </motion.div>
    </section>
  );
}
