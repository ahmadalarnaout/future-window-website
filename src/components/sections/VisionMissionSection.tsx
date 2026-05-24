import Image from "next/image";
import { visionMissionData } from "@/data/sections";

export function VisionMissionSection() {
  return (
    <section
      className="py-stack-lg px-margin-mobile md:px-margin-desktop"
      id="business"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 sadu-pattern opacity-30 pointer-events-none -z-10" />

          {/* Left: Vision */}
          <div className="md:col-span-5 flex flex-col justify-center pr-0 md:pr-12 border-b md:border-b-0 md:border-r border-outline-variant/30 pb-stack-md md:pb-0">
            <div className="mb-8">
              <h2 className="font-heading text-headline-xl text-on-surface mb-2 tracking-tight font-semibold">
                Vision &amp;
              </h2>
              <h2 className="font-heading text-headline-xl text-primary mb-4 tracking-tight font-semibold">
                Mission
              </h2>
              <p className="font-body text-body-lg text-on-surface-variant italic">
                Our Direction and Purpose
              </p>
            </div>
            <div className="mt-8 bg-surface-container-low p-8 rounded-lg border border-outline-variant/20 shadow-[0_4px_24px_rgba(197,160,89,0.05)]">
              <h3 className="font-heading text-headline-lg-mobile md:text-headline-lg text-primary mb-4 font-semibold">
                Vision
              </h3>
              <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                {visionMissionData.vision}
              </p>
            </div>
          </div>

          {/* Center: Image */}
          <div className="hidden md:block md:col-span-3 h-[600px] overflow-hidden rounded-lg border border-outline-variant/20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <Image
              src={visionMissionData.image.src}
              alt={visionMissionData.image.alt}
              fill
              className="object-cover grayscale opacity-70 hover:opacity-100 transition-opacity duration-700"
            />
          </div>

          {/* Right: Mission */}
          <div className="md:col-span-4 bg-primary-container/10 p-8 md:p-12 rounded-lg border border-primary/20 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] -mr-16 -mt-16 pointer-events-none" />
            <h3 className="font-heading text-headline-lg-mobile md:text-headline-lg text-primary mb-8 relative z-10 font-semibold">
              Mission
            </h3>
            <ol className="space-y-8 relative z-10">
              {visionMissionData.missionItems.map((item) => (
                <li key={item.number} className="flex items-start gap-4">
                  <span className="font-heading text-headline-xl text-primary opacity-50 font-bold leading-none mt-1">
                    {item.number}
                  </span>
                  <div>
                    <h4 className="font-body text-title-md text-on-surface mb-2 font-medium">
                      {item.title}
                    </h4>
                    <p className="font-body text-body-md text-on-surface-variant">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
