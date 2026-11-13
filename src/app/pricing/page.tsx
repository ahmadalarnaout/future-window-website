import type { Metadata } from "next";
import { PageShell, DocHeader } from "@/components/legal/PageShell";
import { PriceCard } from "@/components/legal/PriceCard";
import { company, legalEffectiveDate } from "@/config/company";
import { services, servicesByModel, modelLabels, formatSar, productsInDevelopment } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing — الأسعار | Future Window",
  description:
    "Official SAR price list of Future Window Information Technology Company: websites, UI/UX design, automation, AI, SaaS and mobile-app development, and monthly plans.",
  alternates: { canonical: "/pricing" },
};

const groups = [
  { model: "fixed" as const, titleAr: "باقات بسعر ثابت", noteAr: "سعر نهائي معلن لنطاق محدد، يُدفع على دفعتين." },
  {
    model: "from" as const,
    titleAr: "خدمات تبدأ من سعر معلن",
    noteAr: "مشاريع يختلف نطاقها من عميل لآخر. نعلن الحد الأدنى للسعر، ويُحدَّد السعر النهائي في عرض سعر مكتوب قبل أي دفع.",
  },
  { model: "monthly" as const, titleAr: "خطط شهرية", noteAr: "تُدفع مقدماً عن كل شهر، دون حد أدنى للمدة، ويمكن إلغاؤها في أي وقت." },
  { model: "hourly" as const, titleAr: "خدمات بالساعة", noteAr: "للأعمال الإضافية خارج نطاق الباقة، بعد موافقتك الكتابية." },
];

const steps = [
  "تواصل معنا عبر نموذج التواصل أو البريد الإلكتروني، واذكر الخدمة المطلوبة.",
  "نؤكد معك كتابياً النطاق ومراحل التسليم وقيمة كل مرحلة وموعد التسليم (أو نرسل عرض سعر مكتوباً للخدمات التي تبدأ من سعر معلن).",
  "نرسل لك فاتورة ورابط دفع إلكترونياً آمناً عبر بوابة ميسر (مدى، البطاقات الائتمانية، Apple Pay).",
  "بعد استلام الدفعة الأولى نرسل تأكيد الطلب، ونبدأ العمل خلال يومي عمل.",
  "يتم التسليم رقمياً: نشر الموقع أو التطبيق، أو تسليم الملفات والصلاحيات عبر البريد الإلكتروني.",
];

export default function PricingPage() {
  return (
    <PageShell activePath="/pricing">
      <DocHeader
        eyebrow="Pricing · الأسعار"
        titleAr="قائمة الأسعار الرسمية"
        titleEn="Official Service Price List"
        meta={
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span lang="ar" dir="rtl" className="font-arabic">سارية من {legalEffectiveDate.ar}</span>
            <span className="text-outline-variant">|</span>
            <span>Effective {legalEffectiveDate.en}</span>
            <span className="text-outline-variant">|</span>
            <a href="/Future_Window_Official_Service_Pricing.pdf" className="text-primary underline underline-offset-4">
              Download PDF · تحميل PDF
            </a>
          </div>
        }
      />

      <section id="ar" lang="ar" dir="rtl" className="font-arabic scroll-mt-28">
        {/* Key facts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {[
            ["العملة", "جميع الأسعار بالريال السعودي (SAR)."],
            [
              "ضريبة القيمة المضافة",
              "الشركة غير مسجلة حالياً في ضريبة القيمة المضافة؛ الأسعار المعلنة نهائية ولا تُضاف إليها ضريبة.",
            ],
            ["الدفع", "إلكترونياً عبر بوابة ميسر (Moyasar): مدى، البطاقات الائتمانية، Apple Pay."],
            ["مقدم الخدمة", `${company.legalNameAr} — الرقم الوطني الموحد ${company.unifiedNumber}`],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-outline-variant/30 bg-surface-container-low p-5">
              <p className="text-label-sm text-primary font-semibold mb-1">{k}</p>
              <p className="text-body-md text-on-surface-variant">{v}</p>
            </div>
          ))}
        </div>

        {groups.map((g) => (
          <section key={g.model} className="mb-16" aria-labelledby={`g-${g.model}`}>
            <div className="mb-6 border-r-4 border-primary-container pr-4">
              <h2 id={`g-${g.model}`} className="text-headline-lg-mobile md:text-headline-lg text-on-surface font-semibold">
                {g.titleAr}
              </h2>
              <p className="text-body-md text-on-surface-variant mt-1">{g.noteAr}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicesByModel(g.model).map((s) => (
                <PriceCard key={s.id} s={s} featured={s.id === "website"} />
              ))}
            </div>
          </section>
        ))}

        {/* How ordering works */}
        <section className="mb-16 rounded-xl border border-outline-variant/30 bg-surface-container p-6 md:p-8">
          <h2 className="text-headline-lg-mobile text-on-surface font-semibold mb-6">كيف يتم الطلب والدفع والتسليم</h2>
          <ol className="space-y-4">
            {steps.map((st, i) => (
              <li key={st} className="flex gap-4 text-body-md text-on-surface-variant">
                <span className="w-8 h-8 shrink-0 rounded-full border border-primary/40 text-primary flex items-center justify-center font-heading">
                  {i + 1}
                </span>
                <span className="pt-1">{st}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-body-md text-on-surface-variant">
            الإلغاء والاسترداد وفق{" "}
            <a href="/refund-policy" className="text-primary underline underline-offset-4">سياسة الاسترداد والإلغاء</a>،
            وتخضع جميع الخدمات لـ{" "}
            <a href="/terms" className="text-primary underline underline-offset-4">شروط الخدمة</a>.
          </p>
        </section>

        {/* Products in development */}
        <section className="mb-16">
          <h2 className="text-headline-lg-mobile text-on-surface font-semibold mb-2">منتجاتنا قيد التطوير</h2>
          <p className="text-body-md text-on-surface-variant mb-6">
            منتجات تعمل الشركة على تطويرها ولم تُطلق للعامة بعد. ليست معروضة للبيع، ولا تُدفع عبر هذا الموقع أو بوابة الدفع.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {productsInDevelopment.map((p) => (
              <div key={p.name} className="rounded-lg border border-dashed border-outline-variant/50 p-5">
                <p className="font-heading text-title-md text-on-surface" dir="ltr">{p.name}</p>
                <p className="text-body-md text-on-surface-variant mt-1">{p.descAr}</p>
                <span className="inline-block mt-3 text-label-sm px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant">
                  غير متاح للشراء
                </span>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* English summary */}
      <section id="en" lang="en" dir="ltr" className="scroll-mt-28 border-t border-outline-variant/30 pt-12">
        <h2 className="font-heading text-headline-lg-mobile md:text-headline-lg text-on-surface font-semibold mb-2">
          Price list — English summary
        </h2>
        <p className="font-body text-body-md text-on-surface-variant mb-6">
          All prices are in Saudi Riyals (SAR). {company.legalNameEn} is not currently VAT-registered, so no VAT is added.
          Payments are made online through the Moyasar payment gateway. Full details are in Arabic above; the{" "}
          <a href="/terms#en" className="text-primary underline underline-offset-4">Terms of Service</a> and{" "}
          <a href="/refund-policy#en" className="text-primary underline underline-offset-4">Refund &amp; Cancellation Policy</a> apply.
        </p>
        <div className="overflow-x-auto rounded-lg border border-outline-variant/30">
          <table className="w-full font-body text-body-md">
            <thead className="bg-surface-container text-on-surface">
              <tr>
                <th className="text-left p-3 font-semibold">Service</th>
                <th className="hidden sm:table-cell text-left p-3 font-semibold">Billing</th>
                <th className="text-right p-3 font-semibold">Price (SAR)</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr key={s.id} className="border-t border-outline-variant/20 align-top">
                  <td className="p-3">
                    <a href={`#${s.id}`} className="text-on-surface hover:text-primary font-medium">{s.nameEn}</a>
                    <p className="text-label-sm text-on-surface-variant mt-1">{s.summaryEn}</p>
                    <p className="sm:hidden text-label-sm text-primary/80 mt-1">{modelLabels[s.model].en}</p>
                  </td>
                  <td className="hidden sm:table-cell p-3 text-on-surface-variant text-label-sm">{modelLabels[s.model].en}</td>
                  <td className="p-3 text-right text-primary font-semibold sm:whitespace-nowrap">
                    {s.model === "from" ? "from " : ""}
                    {formatSar(s.priceSar)}
                    {s.model === "monthly" ? " / month" : s.model === "hourly" ? " / hour" : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-body text-label-sm text-on-surface-variant mt-4">
          Eduverse and Alyaf are products Future Window is developing; they are not publicly launched and not for sale.
        </p>
      </section>
    </PageShell>
  );
}
