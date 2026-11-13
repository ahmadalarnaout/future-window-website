import nodemailer from "nodemailer";
import { company } from "@/config/company";
import { services } from "@/data/pricing";

/**
 * Contact form endpoint. Sends the enquiry to the company inbox through the
 * company's own mail provider (Zoho) over SMTP.
 *
 * Required env vars (set in Vercel → Project → Settings → Environment Variables):
 *   SMTP_USER   mailbox used to send, e.g. contact@futurewindow.me
 *   SMTP_PASS   a Zoho *app-specific* password for that mailbox
 * Optional: SMTP_HOST (default smtp.zoho.com), SMTP_PORT (default 465), CONTACT_TO (default company.email)
 *
 * Without credentials it answers 503 { fallback: "mailto" } and the form opens a
 * pre-filled email instead, so visitors are never stuck.
 */

const MAX = { name: 100, company: 120, email: 160, message: 4000 };
const MIN_FILL_MS = 3000; // humans take longer than this to fill the form
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>(); // best-effort, per server instance

const serviceIds = new Set([...services.map((s) => s.id), "other"]);
const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]{2,}$/;

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max) : "";
}

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }

  // Spam traps: hidden honeypot field filled, or submitted too fast. Pretend success.
  const startedAt = Number(body.startedAt);
  if (clean(body.website, 200) || !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
    return Response.json({ ok: true });
  }

  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const name = clean(body.name, MAX.name);
  const org = clean(body.company, MAX.company);
  const email = clean(body.email, MAX.email);
  const message = clean(body.message, MAX.message);
  const service = clean(body.service, 40);

  const errors: string[] = [];
  if (name.length < 2) errors.push("name");
  if (!EMAIL_RE.test(email)) errors.push("email");
  if (message.length < 10) errors.push("message");
  if (!serviceIds.has(service)) errors.push("service");
  if (errors.length) return Response.json({ ok: false, error: "validation", fields: errors }, { status: 422 });

  const { SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    return Response.json({ ok: false, error: "not_configured", fallback: "mailto" }, { status: 503 });
  }

  const serviceName = services.find((s) => s.id === service)?.nameEn ?? "Other / not sure";
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.zoho.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transport.sendMail({
      from: `"Future Window website" <${SMTP_USER}>`,
      to: process.env.CONTACT_TO || company.email,
      replyTo: { name, address: email },
      subject: `Website enquiry — ${serviceName} — ${name}`,
      text: [
        `Name: ${name}`,
        `Company: ${org || "-"}`,
        `Email: ${email}`,
        `Service: ${serviceName}`,
        "",
        message,
      ].join("\n"),
    });
  } catch (err) {
    console.error("contact_send_failed", err instanceof Error ? err.message : err);
    return Response.json({ ok: false, error: "send_failed", fallback: "mailto" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
