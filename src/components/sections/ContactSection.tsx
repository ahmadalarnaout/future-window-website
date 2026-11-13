"use client";

import Image from "next/image";
import { contactData } from "@/data/sections";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section
      className="py-stack-lg px-margin-mobile md:px-margin-desktop"
      id="contact"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-stack-lg">
        {/* Header */}
        <div>
          <h2 className="font-heading text-headline-lg-mobile md:text-display-lg text-primary max-w-4xl font-bold">
            {contactData.heading}
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant mt-stack-sm max-w-2xl">
            {contactData.description}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-8 md:p-12 border border-outline-variant/30 gold-glow transition-shadow duration-500 relative overflow-hidden group">
            <h3 className="font-heading text-headline-lg text-on-surface mb-8 font-semibold">
              {contactData.formTitle}
            </h3>
            <ContactForm />
          </div>

          {/* Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-gutter h-full">
            {/* HQ Card */}
            <div className="glass-panel rounded-xl p-8 border border-outline-variant/20 relative overflow-hidden flex-1 group min-h-[200px]">
              <Image
                src="/images/contact-hq.jpg"
                alt=""
                fill
                className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700 mix-blend-luminosity"
              />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-6 bg-surface/50 backdrop-blur">
                  <span className="material-symbols-outlined text-primary">
                    {contactData.hq.icon}
                  </span>
                </div>
                <h3 className="font-body text-label-sm text-primary uppercase tracking-widest mb-3">
                  {contactData.hq.title}
                </h3>
                <p className="font-body text-title-md text-on-surface leading-relaxed font-medium">
                  {contactData.hq.address}
                  <br />
                  <span className="text-on-surface-variant font-body text-body-md mt-1 block font-normal">
                    {contactData.hq.city}
                  </span>
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-surface-container rounded-xl p-8 border border-outline-variant/20 flex-1 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-6 bg-background">
                <span className="material-symbols-outlined text-primary">
                  {contactData.email.icon}
                </span>
              </div>
              <h3 className="font-body text-label-sm text-primary uppercase tracking-widest mb-3">
                {contactData.email.title}
              </h3>
              <a
                className="font-body text-body-lg sm:text-title-md text-on-surface hover:text-primary transition-colors inline-flex items-center gap-2 group/link max-w-full font-medium"
                href={`mailto:${contactData.email.address}`}
              >
                <span className="min-w-0 break-all sm:break-normal">{contactData.email.address}</span>
                <span className="material-symbols-outlined text-[18px] shrink-0 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-primary">
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
