import { footerLinks } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-stack-md w-full max-w-[1440px] mx-auto gap-8 md:gap-0">
        {/* Brand */}
        <div className="font-heading text-headline-lg text-primary">
          Future Window
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-label-sm text-on-surface/60 hover:text-primary hover:underline decoration-primary underline-offset-4 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div className="font-body text-body-md text-on-surface/60 text-center md:text-right">
          &copy; 2025 Future Window. All rights reserved. Kingdom of Saudi Arabia.
        </div>
      </div>
    </footer>
  );
}
