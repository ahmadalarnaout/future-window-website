import type { Block, LegalDoc } from "@/data/legal";
import { legalEffectiveDate } from "@/config/company";
import { DocHeader } from "./PageShell";
import { isolatePercents as iso } from "@/lib/bidi";

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) =>
        Array.isArray(b) ? (
          <ul key={i}>
            {b.map((li) => (
              <li key={li}>{iso(li)}</li>
            ))}
          </ul>
        ) : (
          <p key={i}>{iso(b)}</p>
        )
      )}
    </>
  );
}

export function LegalDocument({ doc, eyebrow }: { doc: LegalDoc; eyebrow: string }) {
  return (
    <>
      <DocHeader
        eyebrow={eyebrow}
        titleAr={doc.titleAr}
        titleEn={doc.titleEn}
        meta={
          <>
            <span lang="ar" dir="rtl" className="font-arabic">تاريخ السريان: {legalEffectiveDate.ar}</span>
            <span className="mx-3 text-outline-variant">|</span>
            <span>Effective date: {legalEffectiveDate.en}</span>
          </>
        }
      />

      <article id="ar" lang="ar" dir="rtl" className="legal-prose font-arabic text-body-lg scroll-mt-28">
        <p className="!text-on-surface">{iso(doc.introAr)}</p>
        {doc.sections.map((s) => (
          <section key={s.titleAr}>
            <h2>{s.titleAr}</h2>
            <Blocks blocks={s.ar} />
          </section>
        ))}
      </article>

      <div className="my-16 flex items-center gap-4" aria-hidden="true">
        <div className="flex-1 h-px bg-outline-variant/40" />
        <span className="font-body text-label-sm text-primary uppercase tracking-widest">English version</span>
        <div className="flex-1 h-px bg-outline-variant/40" />
      </div>

      <article id="en" lang="en" dir="ltr" className="legal-prose font-body text-body-md scroll-mt-28">
        <p className="!text-on-surface">{doc.introEn}</p>
        {doc.sections.map((s) => (
          <section key={s.titleEn}>
            <h2>{s.titleEn}</h2>
            <Blocks blocks={s.en} />
          </section>
        ))}
        <p className="mt-10 text-label-sm">
          The Arabic version prevails if the two versions differ. · النص العربي هو المعتمد عند الاختلاف.
        </p>
      </article>
    </>
  );
}
