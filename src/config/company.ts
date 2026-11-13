/**
 * Verified merchant identity — source: Ministry of Commerce CR extract
 * (مستخرج سجل تجاري, printed 27/04/2026). Do not add fields that are not in a
 * verified document. Personal data from the CR (owner name, ID, personal email)
 * must never be published.
 */
export const company = {
  legalNameAr: "شركة نافذة المستقبل لتقنية المعلومات",
  // Not registered in the CR — an English translation of the Arabic legal name.
  legalNameEn: "Future Window Information Technology Company",
  brand: "Future Window",
  brandAr: "نافذة المستقبل",
  entityTypeAr: "شركة ذات مسؤولية محدودة",
  entityTypeEn: "Limited Liability Company (LLC)",
  unifiedNumber: "7002962806",
  countryAr: "المملكة العربية السعودية",
  countryEn: "Kingdom of Saudi Arabia",
  email: "contact@futurewindow.me",
  website: "https://futurewindow.me",
  // VAT: the company is not VAT-registered (owner confirmation, 2026-11-12).
  vatRegistered: false,
} as const;

/** Effective date shown on the legal pages and the pricing sheet. */
export const legalEffectiveDate = {
  iso: "2026-11-14",
  ar: "14 نوفمبر 2026",
  en: "14 November 2026",
};

export const legalUrls = {
  pricing: `${company.website}/pricing`,
  terms: `${company.website}/terms`,
  privacy: `${company.website}/privacy`,
  refund: `${company.website}/refund-policy`,
  pricingPdf: `${company.website}/Future_Window_Official_Service_Pricing.pdf`,
};
