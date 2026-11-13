export interface NavLink {
  label: string;
  href: string;
}

// Section links are absolute ("/#id") so they also work from /pricing and the legal pages.
export const navLinks: NavLink[] = [
  { label: "Who We Are", href: "/#who-we-are" },
  { label: "Business", href: "/#business" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Advantage", href: "/#advantage" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/#contact" },
];

export const footerLinks: NavLink[] = [
  { label: "Pricing · الأسعار", href: "/pricing" },
  { label: "Terms of Service · شروط الخدمة", href: "/terms" },
  { label: "Refund & Cancellation · الاسترداد والإلغاء", href: "/refund-policy" },
  { label: "Privacy Policy · الخصوصية", href: "/privacy" },
];
