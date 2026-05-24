"use client";

import { useState } from "react";
import Image from "next/image";
import { whoWeAreData } from "@/data/sections";

export function WhoWeAreSection() {
  const [hover, setHover] = useState<"none" | "left" | "right">("none");

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

          {/* Interactive Image */}
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 mb-stack-md lg:mb-0 relative">
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-tertiary-container/5 rounded-full blur-2xl" />
            <div className="relative rounded-xl overflow-hidden border border-outline-variant/50 ambient-shadow aspect-[4/5] lg:aspect-auto h-full min-h-[400px] lg:min-h-[500px]">

              {/* Background with revealed text */}
              <div className="absolute inset-0 bg-surface-container-lowest flex">
                {/* Left reveal — "Future" */}
                <div className="w-1/2 flex items-center justify-center">
                  <span className="font-heading text-headline-xl text-primary font-bold tracking-tight select-none">
                    Future
                  </span>
                </div>
                {/* Right reveal — "Window" */}
                <div className="w-1/2 flex items-center justify-center">
                  <span className="font-heading text-headline-xl text-primary font-bold tracking-tight select-none">
                    Window
                  </span>
                </div>
              </div>

              {/* Left image half (curtain) */}
              <div
                className="absolute top-0 left-0 w-1/2 h-full overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-10"
                style={{
                  transform: hover === "left" ? "translateX(-100%)" : "translateX(0)",
                }}
              >
                <Image
                  src={whoWeAreData.image.src}
                  alt=""
                  fill
                  className="object-cover"
                  style={{ objectPosition: "left center" }}
                />
              </div>

              {/* Right image half (curtain) */}
              <div
                className="absolute top-0 right-0 w-1/2 h-full overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-10"
                style={{
                  transform: hover === "right" ? "translateX(100%)" : "translateX(0)",
                }}
              >
                <Image
                  src={whoWeAreData.image.src}
                  alt=""
                  fill
                  className="object-cover"
                  style={{ objectPosition: "right center" }}
                />
              </div>

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 z-20 pointer-events-none transition-opacity duration-500"
                style={{ opacity: hover !== "none" ? 0 : 0.8 }}
              />

              {/* Invisible hover zones */}
              <div
                className="absolute top-0 left-0 w-1/2 h-full z-30 cursor-pointer"
                onMouseEnter={() => setHover("left")}
                onMouseLeave={() => setHover("none")}
              />
              <div
                className="absolute top-0 right-0 w-1/2 h-full z-30 cursor-pointer"
                onMouseEnter={() => setHover("right")}
                onMouseLeave={() => setHover("none")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
