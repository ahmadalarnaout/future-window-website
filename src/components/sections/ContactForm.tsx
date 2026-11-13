"use client";

import { useEffect, useRef, useState } from "react";
import { company } from "@/config/company";
import { services } from "@/data/pricing";

type Status = "idle" | "sending" | "sent" | "error" | "mailto";

const fieldClass =
  "w-full bg-transparent border-0 border-b border-outline-variant py-2 px-0 text-on-surface font-body text-body-md focus:outline-none focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/40 aria-[invalid=true]:border-error";
const labelClass =
  "font-body text-label-sm text-on-surface-variant uppercase tracking-widest block mb-2 transition-colors group-focus-within/input:text-primary";

export function ContactForm() {
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);
  const [status, setStatus] = useState<Status>("idle");
  const [invalid, setInvalid] = useState<string[]>([]);
  const [mailto, setMailto] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const serviceName = services.find((s) => s.id === data.service)?.nameEn ?? "Other";
    const fallback = `mailto:${company.email}?subject=${encodeURIComponent(
      `Website enquiry — ${serviceName}`
    )}&body=${encodeURIComponent(
      `Name: ${data.name}\nCompany: ${data.company || "-"}\nEmail: ${data.email}\nService: ${serviceName}\n\n${data.message}`
    )}`;

    setStatus("sending");
    setInvalid([]);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, startedAt: startedAt.current }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      if (json.error === "validation") {
        setInvalid(json.fields ?? []);
        setStatus("error");
        return;
      }
      if (json.fallback === "mailto") {
        setMailto(fallback);
        setStatus("mailto");
        window.location.href = fallback;
        return;
      }
      setStatus("error");
    } catch {
      setMailto(fallback);
      setStatus("mailto");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="py-12 text-center space-y-3">
        <span className="material-symbols-outlined text-primary text-5xl" aria-hidden="true">mark_email_read</span>
        <p className="font-heading text-title-md text-on-surface font-semibold">Thank you — your message has been sent.</p>
        <p lang="ar" dir="rtl" className="font-arabic text-body-md text-on-surface-variant">شكراً لتواصلك، وصلتنا رسالتك.</p>
        <p className="font-body text-body-md text-on-surface-variant">We reply within two business days.</p>
      </div>
    );
  }

  const bad = (f: string) => invalid.includes(f);

  return (
    <form className="space-y-8 relative z-10" onSubmit={onSubmit} noValidate={false}>
      {/* Honeypot: hidden from people, tempting for bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative group/input">
          <label className={labelClass} htmlFor="name">Full name *</label>
          <input id="name" name="name" type="text" required minLength={2} maxLength={100} autoComplete="name"
            placeholder="Your name" aria-invalid={bad("name")} className={fieldClass} />
        </div>
        <div className="relative group/input">
          <label className={labelClass} htmlFor="company">Company (optional)</label>
          <input id="company" name="company" type="text" maxLength={120} autoComplete="organization"
            placeholder="Your company" className={fieldClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative group/input">
          <label className={labelClass} htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required maxLength={160} autoComplete="email"
            placeholder="you@company.com" aria-invalid={bad("email")} className={fieldClass} />
        </div>
        <div className="relative group/input">
          <label className={labelClass} htmlFor="service">Service *</label>
          <select id="service" name="service" required defaultValue="" aria-invalid={bad("service")}
            className={`${fieldClass} [&>option]:bg-surface-container`}>
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>{s.nameEn}</option>
            ))}
            <option value="other">Other / not sure</option>
          </select>
        </div>
      </div>

      <div className="relative group/input">
        <label className={labelClass} htmlFor="message">Message *</label>
        <textarea id="message" name="message" required minLength={10} maxLength={4000} rows={4}
          placeholder="Tell us briefly about your project or question" aria-invalid={bad("message")}
          className={`${fieldClass} resize-none`} />
      </div>

      <div aria-live="polite" className="min-h-6 font-body text-body-md">
        {status === "error" && (
          <p className="text-error">
            {invalid.length
              ? "Please check the highlighted fields."
              : <>Something went wrong. Please email us at <a className="underline" href={`mailto:${company.email}`}>{company.email}</a>.</>}
          </p>
        )}
        {status === "mailto" && (
          <p className="text-on-surface-variant">
            Your email app should open with your message ready to send. If it didn&apos;t,{" "}
            <a className="text-primary underline" href={mailto}>open it here</a> or write to{" "}
            <a className="text-primary underline" href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-body text-label-sm text-on-surface-variant">
          We reply within two business days ·{" "}
          <a href="/privacy" className="underline underline-offset-4 hover:text-primary">Privacy Policy</a>
        </span>
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-primary hover:bg-primary-fixed-dim disabled:opacity-60 text-on-primary font-body text-label-sm uppercase tracking-widest px-8 py-4 rounded transition-all duration-300 shadow-[0_0_15px_rgba(197,160,89,0.1)] hover:shadow-[0_0_25px_rgba(197,160,89,0.3)] w-full sm:w-auto"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
