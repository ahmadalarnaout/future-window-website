import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/** Navbar + footer frame for the standalone pages (pricing, legal). */
export function PageShell({ activePath, children }: { activePath?: string; children: React.ReactNode }) {
  return (
    <>
      <Navbar activePath={activePath} />
      <main className="pt-32 pb-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
}

/** Bilingual page header with a language jump bar. */
export function DocHeader({
  eyebrow,
  titleAr,
  titleEn,
  meta,
}: {
  eyebrow: string;
  titleAr: string;
  titleEn: string;
  meta?: React.ReactNode;
}) {
  return (
    <header className="mb-12 border-b border-outline-variant/30 pb-8">
      <div className="mb-stack-sm flex items-center gap-4">
        <div className="w-12 h-[1px] bg-primary" />
        <span className="font-body text-label-sm text-primary uppercase tracking-widest">{eyebrow}</span>
      </div>
      <h1 lang="ar" dir="rtl" className="font-arabic text-headline-lg-mobile md:text-headline-xl text-on-surface font-bold text-right">
        {titleAr}
      </h1>
      <p className="font-heading text-title-md text-on-surface-variant mt-2">{titleEn}</p>
      {meta && <div className="mt-6 font-body text-label-sm text-on-surface-variant">{meta}</div>}
      <nav aria-label="Language" className="mt-6 flex gap-3">
        <a href="#ar" className="px-4 py-1.5 rounded-full border border-primary/40 text-primary font-arabic text-body-md hover:bg-primary/10">
          العربية
        </a>
        <a href="#en" className="px-4 py-1.5 rounded-full border border-outline-variant text-on-surface-variant font-body text-label-sm hover:text-primary hover:border-primary/40">
          English
        </a>
      </nav>
    </header>
  );
}
