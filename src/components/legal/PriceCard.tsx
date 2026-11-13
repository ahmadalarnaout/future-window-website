import { type ServiceItem, modelLabels, formatSar, serviceFields, activityNamesAr } from "@/data/pricing";
import { cn } from "@/lib/cn";
import { isolatePercents as iso } from "@/lib/bidi";

const Check = () => (
  <svg viewBox="0 0 20 20" className="w-4 h-4 mt-1.5 shrink-0 text-primary" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function PriceCard({ s, featured = false }: { s: ServiceItem; featured?: boolean }) {
  const m = modelLabels[s.model];
  const fields = serviceFields(s);
  return (
    <article
      id={s.id}
      className={cn(
        "rounded-xl border p-6 md:p-8 flex flex-col gap-5 scroll-mt-28",
        featured
          ? "border-primary/40 bg-gradient-to-br from-primary-container/10 to-surface-container"
          : "border-outline-variant/30 bg-surface-container-low"
      )}
    >
      <header>
        <p className="font-arabic text-label-sm text-primary mb-2">{m.ar}</p>
        <h3 className="font-arabic text-title-md md:text-headline-lg-mobile text-on-surface font-semibold">{s.nameAr}</h3>
        <p dir="ltr" lang="en" className="font-body text-label-sm text-on-surface-variant mt-1 text-right">
          {s.nameEn}
        </p>
      </header>

      <div className="flex items-baseline gap-2">
        {s.model === "from" && <span className="font-arabic text-body-md text-on-surface-variant">يبدأ من</span>}
        <span className="font-heading text-headline-xl text-primary font-bold" dir="ltr">
          {formatSar(s.priceSar)}
        </span>
        <span className="font-arabic text-body-md text-on-surface-variant">{m.unitAr}</span>
      </div>

      <p className="font-arabic text-body-md text-on-surface">{s.summaryAr}</p>
      <p className="font-arabic text-label-sm text-on-surface-variant/80 -mt-3">
        النشاط في السجل التجاري: {s.activity.map((a) => `${activityNamesAr[a]} (${a})`).join("، ")}
      </p>

      <dl className="flex flex-col gap-4 font-arabic">
        {fields.map((f) => (
          <div key={f.key} className={cn(f.key !== "deliverables" && "border-t border-outline-variant/20 pt-3")}>
            <dt className={cn("text-label-sm font-semibold mb-1.5", f.key === "excludes" ? "text-on-surface-variant" : "text-primary")}>
              {f.label}
            </dt>
            <dd>
              {Array.isArray(f.value) ? (
                <ul className="space-y-1.5">
                  {f.value.map((x) => (
                    <li
                      key={x}
                      className={cn(
                        "flex gap-2 leading-7",
                        f.key === "deliverables" ? "text-body-md text-on-surface-variant" : "text-label-sm text-on-surface-variant/90"
                      )}
                    >
                      {f.key === "deliverables" ? <Check /> : <span aria-hidden="true">–</span>}
                      <span>{iso(x)}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-label-sm leading-6 text-on-surface-variant">{iso(f.value)}</p>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
