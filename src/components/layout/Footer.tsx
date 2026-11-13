import { footerLinks } from "@/config/navigation";
import { company } from "@/config/company";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 w-full">
      <div className="px-margin-mobile md:px-margin-desktop py-stack-md w-full max-w-[1440px] mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <Link href="/" className="font-heading text-headline-lg text-primary">
            Future Window
          </Link>

          {/* Links */}
          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-label-sm text-on-surface/70 hover:text-primary hover:underline decoration-primary underline-offset-4 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Legal identity */}
        <div className="border-t border-outline-variant/20 pt-6 flex flex-col md:flex-row justify-between gap-4 text-center md:text-start">
          <div className="font-body text-label-sm text-on-surface/60 space-y-1">
            <p lang="ar" dir="rtl" className="font-arabic text-body-md">
              {company.legalNameAr} — {company.entityTypeAr} — الرقم الوطني الموحد {company.unifiedNumber}
            </p>
            <p>
              {company.legalNameEn} · {company.entityTypeEn} · Unified National No. {company.unifiedNumber} ·{" "}
              <a href={`mailto:${company.email}`} className="hover:text-primary">
                {company.email}
              </a>
            </p>
          </div>
          <div className="font-body text-label-sm text-on-surface/60 md:text-end shrink-0">
            &copy; 2026 Future Window. All rights reserved.
            <br />
            {company.countryEn}
          </div>
        </div>
      </div>
    </footer>
  );
}
