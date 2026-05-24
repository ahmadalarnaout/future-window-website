"use client";

import Image from "next/image";
import { contactData } from "@/data/sections";

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
            <form
              className="space-y-8 relative z-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group/input">
                  <label
                    className="font-body text-label-sm text-on-surface-variant uppercase tracking-widest block mb-2 transition-colors group-focus-within/input:text-primary"
                    htmlFor="name"
                  >
                    Entity / Name
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-2 px-0 text-on-surface font-body text-body-md focus:ring-0 focus:border-primary transition-colors placeholder:text-surface-variant"
                    id="name"
                    placeholder="Ministry of Education"
                    type="text"
                  />
                </div>
                <div className="relative group/input">
                  <label
                    className="font-body text-label-sm text-on-surface-variant uppercase tracking-widest block mb-2 transition-colors group-focus-within/input:text-primary"
                    htmlFor="role"
                  >
                    Department
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-2 px-0 text-on-surface font-body text-body-md focus:ring-0 focus:border-primary transition-colors placeholder:text-surface-variant"
                    id="role"
                    placeholder="Strategic Partnerships"
                    type="text"
                  />
                </div>
              </div>
              <div className="relative group/input">
                <label
                  className="font-body text-label-sm text-on-surface-variant uppercase tracking-widest block mb-2 transition-colors group-focus-within/input:text-primary"
                  htmlFor="email"
                >
                  Official Email
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-2 px-0 text-on-surface font-body text-body-md focus:ring-0 focus:border-primary transition-colors placeholder:text-surface-variant"
                  id="email"
                  placeholder="contact@gov.sa"
                  type="email"
                />
              </div>
              <div className="relative group/input">
                <label
                  className="font-body text-label-sm text-on-surface-variant uppercase tracking-widest block mb-2 transition-colors group-focus-within/input:text-primary"
                  htmlFor="message"
                >
                  Inquiry Details
                </label>
                <textarea
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-2 px-0 text-on-surface font-body text-body-md focus:ring-0 focus:border-primary transition-colors resize-none placeholder:text-surface-variant"
                  id="message"
                  placeholder="Outline your proposed initiative or request..."
                  rows={4}
                />
              </div>
              <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="font-body text-label-sm text-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">
                    lock
                  </span>{" "}
                  Secure Transmission
                </span>
                <button
                  className="bg-primary hover:bg-primary-fixed-dim text-on-primary font-body text-label-sm uppercase tracking-widest px-8 py-4 rounded transition-all duration-300 shadow-[0_0_15px_rgba(197,160,89,0.1)] hover:shadow-[0_0_25px_rgba(197,160,89,0.3)] w-full sm:w-auto"
                  type="submit"
                >
                  Transmit Protocol
                </button>
              </div>
            </form>
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
                className="font-body text-title-md text-on-surface hover:text-primary transition-colors inline-flex items-center gap-2 group/link w-fit font-medium"
                href={`mailto:${contactData.email.address}`}
              >
                {contactData.email.address}
                <span className="material-symbols-outlined text-[18px] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-primary">
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
