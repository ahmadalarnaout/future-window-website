import { advantageData } from "@/data/sections";

export function AdvantageSection() {
  return (
    <section
      className="py-stack-lg px-margin-mobile md:px-margin-desktop"
      id="advantage"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-stack-lg relative">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/4" />

        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center min-h-[40vh]">
          <div className="col-span-1 md:col-span-8 flex flex-col gap-6 relative z-10">
            <div className="inline-flex items-center gap-2 text-primary font-body text-label-sm tracking-widest uppercase">
              <span className="w-8 h-[1px] bg-primary" />
              {advantageData.label}
            </div>
            <h2 className="font-heading text-headline-xl md:text-display-lg text-on-surface leading-tight font-bold">
              {advantageData.heading}{" "}
              <span className="text-primary italic font-light">
                {advantageData.headingAccent}
              </span>
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              {advantageData.description}
            </p>
          </div>
        </div>

        {/* Core Strengths */}
        <div className="flex flex-col gap-stack-md relative z-10">
          <div className="flex items-end justify-between border-b border-outline-variant/30 pb-4">
            <h3 className="font-heading text-headline-lg-mobile md:text-headline-lg text-on-surface font-semibold">
              Core Strengths
            </h3>
            <span className="font-body text-label-sm text-on-surface-variant">
              01 — 05
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Vision 2030 — Large */}
            <div className="col-span-1 md:col-span-8 bg-surface-container rounded-xl p-8 border border-outline-variant/20 flex flex-col justify-between min-h-[320px] relative overflow-hidden group hover:border-primary/40 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="mb-8">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-4"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {advantageData.strengths[0].icon}
                </span>
                <h4 className="font-heading text-title-md md:text-headline-lg text-on-surface mb-2 font-semibold">
                  {advantageData.strengths[0].title}
                </h4>
                <p className="font-body text-body-md text-on-surface-variant max-w-xl">
                  {advantageData.strengths[0].description}
                </p>
              </div>
              <div className="text-primary font-body text-label-sm uppercase tracking-widest flex items-center gap-2">
                Our Approach{" "}
                <span className="w-12 h-[1px] bg-primary/50" />
              </div>
            </div>

            {/* Scalable SaaS */}
            <div className="col-span-1 md:col-span-4 bg-surface-container rounded-xl p-8 border border-outline-variant/20 flex flex-col justify-between min-h-[320px] sadu-border-top hover:border-outline-variant/50 transition-colors duration-300">
              <div>
                <span className="material-symbols-outlined text-on-surface-variant text-3xl mb-4">
                  {advantageData.strengths[1].icon}
                </span>
                <h4 className="font-body text-title-md text-on-surface mb-2 font-medium">
                  {advantageData.strengths[1].title}
                </h4>
                <p className="font-body text-body-md text-on-surface-variant text-sm">
                  {advantageData.strengths[1].description}
                </p>
              </div>
            </div>

            {/* Bottom row — 3 equal cards */}
            {advantageData.strengths.slice(2).map((s) => (
              <div
                key={s.title}
                className="col-span-1 md:col-span-4 bg-surface-container rounded-xl p-8 border border-outline-variant/20 flex flex-col justify-between min-h-[280px] hover:border-outline-variant/50 transition-colors duration-300"
              >
                <div>
                  <span
                    className={`material-symbols-outlined ${s.icon === "language" ? "text-primary" : "text-on-surface-variant"} text-3xl mb-4`}
                  >
                    {s.icon}
                  </span>
                  <h4 className="font-body text-title-md text-on-surface mb-2 font-medium">
                    {s.title}
                  </h4>
                  <p className="font-body text-body-md text-on-surface-variant text-sm">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
