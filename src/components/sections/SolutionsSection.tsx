import { solutionsData } from "@/data/sections";

export function SolutionsSection() {
  return (
    <section id="solutions">
      {/* Hero */}
      <div className="relative pt-stack-lg pb-stack-lg px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="absolute inset-0 sadu-pattern opacity-30 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-4 md:grid-cols-12 gap-gutter">
            <div className="col-span-4 md:col-span-8 md:col-start-3 text-center flex flex-col items-center">
              <span className="font-body text-label-sm text-primary uppercase tracking-widest mb-stack-sm block">
                {solutionsData.label}
              </span>
              <h2 className="font-heading text-headline-lg-mobile md:text-display-lg text-on-surface mb-stack-sm leading-tight font-bold">
                {solutionsData.heading}
              </h2>
              <p className="font-body text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-stack-md">
                {solutionsData.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-gutter">
            {/* Digital Marketing — Large Card */}
            <div className="col-span-1 md:col-span-8 bg-surface-container-low rounded-xl border border-outline-variant/30 p-8 md:p-12 relative overflow-hidden group ambient-glow transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span
                    className="material-symbols-outlined text-primary text-4xl mb-6 block"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    {solutionsData.solutions[0].icon}
                  </span>
                  <h3 className="font-heading text-headline-lg text-on-surface mb-4 font-semibold">
                    {solutionsData.solutions[0].title}
                  </h3>
                  <p className="font-body text-body-md text-on-surface-variant max-w-lg mb-8">
                    {solutionsData.solutions[0].description}
                  </p>
                </div>
                <ul className="space-y-3">
                  {solutionsData.solutions[0].features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center text-on-surface-variant font-body text-body-md border-b border-outline-variant/20 pb-2"
                    >
                      <span
                        className="material-symbols-outlined text-primary mr-3 text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Brand & Web — Small Card */}
            <div className="col-span-1 md:col-span-4 bg-surface-container-low rounded-xl border border-outline-variant/30 p-8 relative overflow-hidden group ambient-glow transition-all duration-300 flex flex-col justify-between">
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-surface-container-high/50 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-6 block"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  {solutionsData.solutions[1].icon}
                </span>
                <h3 className="font-body text-title-md text-on-surface mb-4 font-medium">
                  {solutionsData.solutions[1].title}
                </h3>
                <p className="font-body text-body-md text-on-surface-variant mb-8">
                  {solutionsData.solutions[1].description}
                </p>
              </div>
            </div>

            {/* Automation & AI — Small Card */}
            <div className="col-span-1 md:col-span-4 bg-surface-container-low rounded-xl border border-outline-variant/30 p-8 relative overflow-hidden group ambient-glow transition-all duration-300 flex flex-col justify-between">
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-surface-container-high/50 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-6 block"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  {solutionsData.solutions[2].icon}
                </span>
                <h3 className="font-body text-title-md text-on-surface mb-4 font-medium">
                  {solutionsData.solutions[2].title}
                </h3>
                <p className="font-body text-body-md text-on-surface-variant mb-8">
                  {solutionsData.solutions[2].description}
                </p>
              </div>
            </div>

            {/* Product & SaaS — Large Card */}
            <div className="col-span-1 md:col-span-8 bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-hidden relative group ambient-glow transition-all duration-300 flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-6 block"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  {solutionsData.solutions[3].icon}
                </span>
                <h3 className="font-heading text-headline-lg text-on-surface mb-4 font-semibold">
                  {solutionsData.solutions[3].title}
                </h3>
                <p className="font-body text-body-md text-on-surface-variant mb-8">
                  {solutionsData.solutions[3].description}
                </p>
              </div>
              <div className="md:w-1/2 bg-surface-container-high relative min-h-[300px] border-t md:border-t-0 md:border-l border-outline-variant/30">
                <div className="absolute inset-0 sadu-pattern opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-full h-full max-w-sm rounded border border-outline-variant/20 bg-surface/50 backdrop-blur-sm p-4 flex flex-col justify-between">
                    <div className="w-1/3 h-2 bg-primary/40 rounded mb-4" />
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-outline-variant/20 rounded" />
                      <div className="w-5/6 h-2 bg-outline-variant/20 rounded" />
                      <div className="w-4/6 h-2 bg-outline-variant/20 rounded" />
                    </div>
                    <div className="mt-auto flex justify-between items-end">
                      <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary text-xs font-body">
                        SaaS
                      </div>
                      <div className="w-24 h-16 bg-surface-container-lowest rounded border border-outline-variant/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
