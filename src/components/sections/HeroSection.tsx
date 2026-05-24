import Image from "next/image";
import { heroData } from "@/data/sections";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background z-10" />
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-30 mix-blend-overlay"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-8 md:col-start-3 text-center">
            <h1 className="font-heading text-headline-xl md:text-display-lg text-on-surface mb-stack-sm leading-tight font-bold">
              {heroData.headline}{" "}
              <span className="text-primary block md:inline">
                {heroData.headlineAccent}
              </span>
            </h1>
            <p className="font-body text-body-lg text-on-surface-variant mb-stack-md max-w-3xl mx-auto">
              {heroData.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-container text-on-primary-container font-body text-label-sm rounded-md hover:bg-primary transition-all uppercase tracking-wider ambient-shadow w-full sm:w-auto group"
                href={heroData.cta.href}
              >
                {heroData.cta.label}
                <span
                  className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
