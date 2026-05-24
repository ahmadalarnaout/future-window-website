import Image from "next/image";
import { whoWeAreData } from "@/data/sections";

export function WhoWeAreSection() {
  return (
    <section className="py-stack-lg relative bg-surface-dim" id="who-we-are">
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Content */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            <div className="mb-stack-sm flex items-center gap-4">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="font-body text-label-sm text-primary uppercase tracking-widest">
                {whoWeAreData.label}
              </span>
            </div>
            <h2 className="font-heading text-headline-lg-mobile md:text-headline-lg text-on-surface mb-stack-sm font-semibold">
              {whoWeAreData.heading}
            </h2>
            <p className="font-body text-body-md text-on-surface-variant mb-stack-md">
              {whoWeAreData.description}
            </p>

            {/* Core Belief Card */}
            <div className="bg-[#1A1A1A] border border-outline-variant rounded-lg p-6 relative overflow-hidden group hover:border-primary transition-colors duration-300">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {whoWeAreData.coreBelief.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-body text-title-md text-on-surface mb-2 font-medium">
                    {whoWeAreData.coreBelief.title}
                  </h3>
                  <p className="font-body text-body-md text-primary-fixed-dim italic">
                    {whoWeAreData.coreBelief.quote}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 mb-stack-md lg:mb-0 relative">
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-tertiary-container/5 rounded-full blur-2xl" />
            <div className="relative rounded-xl overflow-hidden border border-outline-variant/50 ambient-shadow aspect-[4/5] lg:aspect-auto h-full min-h-[400px] lg:min-h-[500px]">
              <Image
                src={whoWeAreData.image.src}
                alt={whoWeAreData.image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
