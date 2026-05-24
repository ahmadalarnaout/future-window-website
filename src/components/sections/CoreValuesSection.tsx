import Image from "next/image";
import { coreValuesData } from "@/data/sections";

export function CoreValuesSection() {
  return (
    <section className="pb-stack-lg px-margin-mobile md:px-margin-desktop">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-outline-variant/30 pb-6">
          <div>
            <h2 className="font-heading text-headline-xl text-on-surface tracking-tight font-semibold">
              {coreValuesData.heading}
            </h2>
          </div>
          <div className="max-w-md mt-4 md:mt-0">
            <h3 className="font-body text-title-md text-primary mb-2 font-medium">
              {coreValuesData.subheading}
            </h3>
            <p className="font-body text-body-md text-on-surface-variant">
              {coreValuesData.description}
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          {/* Commitment — spans 2 cols, 1 row */}
          <div className="md:col-span-2 md:row-span-1 bg-surface-container-high rounded-xl p-8 border border-outline-variant/20 hover:border-primary/50 transition-colors flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <span className="font-heading text-headline-lg text-on-surface-variant opacity-40 group-hover:text-primary transition-colors">
                01
              </span>
              <span
                className="material-symbols-outlined text-primary text-3xl opacity-50"
              >
                lightbulb
              </span>
            </div>
            <div>
              <h4 className="font-heading text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2 font-semibold">
                Innovation
              </h4>
              <p className="font-body text-body-md text-on-surface-variant max-w-sm">
                {coreValuesData.values[0].description}
              </p>
            </div>
          </div>

          {/* Decorative Image — spans 1 col, 2 rows */}
          <div className="hidden md:block md:col-span-1 md:row-span-2 rounded-xl overflow-hidden relative border border-outline-variant/20">
            <div className="absolute inset-0 sadu-pattern opacity-20 z-10 mix-blend-overlay" />
            <Image
              src={coreValuesData.image.src}
              alt={coreValuesData.image.alt}
              fill
              className="object-cover grayscale contrast-125"
            />
          </div>

          {/* Excellence — spans 1 col, 2 rows */}
          <div className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-primary-container/20 to-surface-container-high rounded-xl p-8 border border-primary/30 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 sadu-pattern opacity-10 pointer-events-none" />
            <div className="flex justify-between items-start relative z-10">
              <span className="font-heading text-headline-lg text-primary opacity-80">
                02
              </span>
              <span className="material-symbols-outlined text-primary text-3xl">
                verified
              </span>
            </div>
            <div className="relative z-10">
              <h4 className="font-heading text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4 mt-12 md:mt-0 font-semibold">
                Quality
              </h4>
              <p className="font-body text-body-md text-on-surface-variant">
                {coreValuesData.values[1].description}
              </p>
            </div>
          </div>

          {/* Integrity — 1 col, 1 row */}
          <div className="md:col-span-1 md:row-span-1 bg-surface-container-high rounded-xl p-8 border border-outline-variant/20 hover:border-primary/50 transition-colors flex flex-col justify-between group">
            <span className="font-heading text-title-md text-on-surface-variant opacity-40 group-hover:text-primary transition-colors mb-4 block">
              03
            </span>
            <div>
              <h4 className="font-body text-title-md text-on-surface mb-2 font-medium">
                Trust
              </h4>
              <p className="font-body text-body-md text-on-surface-variant text-sm">
                {coreValuesData.values[2].description}
              </p>
            </div>
          </div>

          {/* Innovation — 1 col, 1 row */}
          <div className="md:col-span-1 md:row-span-1 bg-surface-container-high rounded-xl p-8 border border-outline-variant/20 hover:border-primary/50 transition-colors flex flex-col justify-between group">
            <span className="font-heading text-title-md text-on-surface-variant opacity-40 group-hover:text-primary transition-colors mb-4 block">
              04
            </span>
            <div>
              <h4 className="font-body text-title-md text-on-surface mb-2 font-medium">
                Impact
              </h4>
              <p className="font-body text-body-md text-on-surface-variant text-sm">
                {coreValuesData.values[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
