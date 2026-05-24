import Image from "next/image";
import { statsData } from "@/data/sections";

export function StatsSection() {
  return (
    <section
      className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-lowest"
      id="stats"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content */}
          <div className="w-full md:w-1/2">
            <div className="mb-8">
              <h2 className="font-heading text-headline-xl text-primary mb-4 tracking-tighter font-semibold">
                {statsData.heading}
              </h2>
              <p className="font-body text-body-lg text-on-surface-variant">
                {statsData.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {statsData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t border-outline-variant/50 pt-4"
                >
                  <div className="font-heading text-headline-xl text-primary mb-2 font-bold">
                    {stat.value}
                  </div>
                  <div className="font-body text-label-sm text-on-surface tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden border border-outline-variant/30 shadow-[0_0_30px_rgba(197,160,89,0.05)] relative">
              <Image
                src={statsData.image.src}
                alt={statsData.image.alt}
                width={800}
                height={500}
                className="w-full h-auto object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
