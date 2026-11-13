import { partnerCtaData } from "@/data/sections";

export function PartnerCTASection() {
  return (
    <section className="py-stack-lg px-margin-mobile md:px-margin-desktop relative overflow-hidden bg-surface-dim">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #c5a059 0, #c5a059 2px, transparent 2px, transparent 20px)",
        }}
      />
      <div className="max-w-[1440px] mx-auto relative z-10 text-center">
        <h2 className="font-heading text-headline-xl md:text-display-lg text-primary mb-6 tracking-tighter font-bold">
          {partnerCtaData.heading}
        </h2>
        <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
          {partnerCtaData.description}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <a
            href="#contact"
            className="bg-primary-container text-on-primary-container font-body text-title-md px-8 py-4 rounded-lg transition-all hover:bg-primary-fixed hover:-translate-y-1 shadow-[0_4px_20px_rgba(197,160,89,0.15)] w-full md:w-auto flex items-center justify-center gap-2 font-medium"
          >
            <span>Get in Touch</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-outline-variant/30 pt-12">
          <div>
            <div className="font-body text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">
              Headquarters
            </div>
            <div className="font-body text-body-md text-on-surface">
              Riyadh, Kingdom of Saudi Arabia
            </div>
          </div>
          <div>
            <div className="font-body text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">
              Direct Inquiry
            </div>
            <a href="mailto:contact@futurewindow.me" className="font-body text-body-md text-primary hover:underline underline-offset-4">
              contact@futurewindow.me
            </a>
          </div>
          <div>
            <div className="font-body text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">
              Pricing &amp; Terms
            </div>
            <div className="font-body text-body-md flex justify-center gap-4">
              <a href="/pricing" className="text-primary hover:underline underline-offset-4">Price list</a>
              <a href="/terms" className="text-on-surface-variant hover:text-primary hover:underline underline-offset-4">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
