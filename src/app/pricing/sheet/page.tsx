import type { Metadata } from "next";
import { company, legalEffectiveDate, legalUrls } from "@/config/company";
import { services, modelLabels, formatSar, activityNamesAr, productsInDevelopment, serviceFields } from "@/data/pricing";
import { isolatePercents as iso } from "@/lib/bidi";

// Print source for Future_Window_Official_Service_Pricing.pdf — same data as /pricing.
export const metadata: Metadata = {
  title: "Future Window — Official Service Pricing (print)",
  robots: { index: false, follow: false },
};

const gold = "#B8913F";
const ink = "#121414";

function priceText(s: (typeof services)[number]) {
  const unit = modelLabels[s.model].unitAr;
  return `${s.model === "from" ? "يبدأ من " : ""}${formatSar(s.priceSar)} ${unit}`;
}

export default function PricingSheet() {
  return (
    <div lang="ar" dir="rtl" style={{ background: "#fff", color: ink, minHeight: "100vh" }}>
      <style>{`
        @font-face { font-family: "FW Plex Arabic"; font-weight: 400; font-display: block; src: url("/fonts/ibm-plex-sans-arabic-arabic-400-normal.woff2") format("woff2"); unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200C-200F, U+2066-2069; }
        @font-face { font-family: "FW Plex Arabic"; font-weight: 400; font-display: block; src: url("/fonts/ibm-plex-sans-arabic-latin-400-normal.woff2") format("woff2"); unicode-range: U+0000-00FF, U+2000-206F, U+20AC; }
        @font-face { font-family: "FW Plex Arabic"; font-weight: 600; font-display: block; src: url("/fonts/ibm-plex-sans-arabic-arabic-600-normal.woff2") format("woff2"); unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200C-200F, U+2066-2069; }
        @font-face { font-family: "FW Plex Arabic"; font-weight: 600; font-display: block; src: url("/fonts/ibm-plex-sans-arabic-latin-600-normal.woff2") format("woff2"); unicode-range: U+0000-00FF, U+2000-206F, U+20AC; }
        @font-face { font-family: "FW Plex Arabic"; font-weight: 700; font-display: block; src: url("/fonts/ibm-plex-sans-arabic-arabic-700-normal.woff2") format("woff2"); unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200C-200F, U+2066-2069; }
        @font-face { font-family: "FW Plex Arabic"; font-weight: 700; font-display: block; src: url("/fonts/ibm-plex-sans-arabic-latin-700-normal.woff2") format("woff2"); unicode-range: U+0000-00FF, U+2000-206F, U+20AC; }
        @page { size: A4; margin: 14mm 12mm 16mm; }
        html, body { background: #fff !important; }
        .sheet { font-family: "FW Plex Arabic", sans-serif; max-width: 186mm; margin: 0 auto; font-size: 10.5pt; line-height: 1.65; }
        .sheet table { width: 100%; border-collapse: collapse; }
        .sheet th, .sheet td { border: 1px solid #ddd6c8; padding: 6px 8px; vertical-align: top; text-align: right; }
        .sheet thead th { background: ${ink}; color: #fff; font-weight: 600; }
        .sheet tr { break-inside: avoid; }
        .sheet .keep { break-inside: avoid; }
        .sheet h2 { break-after: avoid; }
        .sheet strong, .sheet th { font-weight: 600; }
        .sheet h2 { color: ${ink}; font-size: 13pt; font-weight: 700; margin: 18px 0 8px; border-right: 4px solid ${gold}; padding-right: 8px; }
        .sheet .muted { color: #5f5a52; font-size: 9pt; }
        .sheet ul { padding-right: 16px; list-style: disc; }
        .sheet .ltr { direction: ltr; unicode-bidi: isolate; }
        .sheet .svc { border: 1px solid #ddd6c8; margin-bottom: 8px; break-inside: avoid; }
        .sheet .svc-head { display: flex; justify-content: space-between; gap: 12px; align-items: flex-start; background: #f6f2ea; padding: 6px 10px; }
        .sheet .svc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3px 16px; padding: 6px 10px 8px; font-size: 8.6pt; line-height: 1.55; color: #3d3a35; }
        .sheet .svc-grid .wide { grid-column: 1 / -1; }
        .sheet .lbl { font-weight: 600; color: #121414; }
      `}</style>
      <div className="sheet">
        {/* Header band */}
        <div style={{ background: ink, color: "#fff", padding: "16px 20px", borderBottom: `4px solid ${gold}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
            <div>
              <div style={{ fontSize: "17pt", fontWeight: 700 }}>قائمة الأسعار الرسمية للخدمات</div>
              <div className="ltr" style={{ fontSize: "10pt", color: "#e9c176" }}>Official Service Price List</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ textAlign: "left" }}>
                <div className="ltr" style={{ fontSize: "13pt", fontWeight: 700, color: "#e9c176" }}>Future Window</div>
                <div style={{ fontSize: "9pt" }}>{company.brandAr}</div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icon.png" alt="" width={44} height={44} style={{ borderRadius: 6 }} />
            </div>
          </div>
        </div>

        {/* Company block */}
        <h2>بيانات المنشأة</h2>
        <table>
          <tbody>
            <tr><th style={{ width: "32%", background: "#f6f2ea", color: ink }}>الاسم النظامي</th><td>{company.legalNameAr}</td></tr>
            <tr><th style={{ background: "#f6f2ea", color: ink }}>الاسم بالإنجليزية</th><td className="ltr" style={{ textAlign: "left" }}>{company.legalNameEn}</td></tr>
            <tr><th style={{ background: "#f6f2ea", color: ink }}>العلامة التجارية</th><td>{company.brand} ({company.brandAr})</td></tr>
            <tr><th style={{ background: "#f6f2ea", color: ink }}>الكيان النظامي</th><td>{company.entityTypeAr} — {company.countryAr}</td></tr>
            <tr><th style={{ background: "#f6f2ea", color: ink }}>الرقم الوطني الموحد</th><td className="ltr" style={{ textAlign: "right" }}>{company.unifiedNumber}</td></tr>
            <tr><th style={{ background: "#f6f2ea", color: ink }}>ضريبة القيمة المضافة</th><td>المنشأة غير مسجلة حالياً في ضريبة القيمة المضافة، والأسعار المعلنة نهائية لا تُضاف إليها ضريبة.</td></tr>
            <tr><th style={{ background: "#f6f2ea", color: ink }}>التواصل</th><td><span className="ltr">{company.email}</span> — <span className="ltr">{company.website}</span></td></tr>
          </tbody>
        </table>

        <h2>نشاط المنشأة</h2>
        <p>
          تقدم {company.brand} خدمات تقنية للشركات الناشئة وروّاد الأعمال والمنشآت الصغيرة والمتوسطة: تصميم وتطوير المواقع
          وصفحات الهبوط، وتصميم واجهات وتجربة المستخدم، وأتمتة سير العمل وتكامل الأنظمة، وحلول الذكاء الاصطناعي، وتطوير المنصات
          وتطبيقات الجوال، وخطط الصيانة والدعم الشهرية. وجميع الخدمات المدرجة أدناه ضمن الأنشطة المقيدة في السجل التجاري.
        </p>

        <h2>جدول الخدمات والأسعار</h2>
        <table>
          <thead>
            <tr>
              <th style={{ width: "34%" }}>الخدمة</th>
              <th>الوصف</th>
              <th style={{ width: "17%" }}>طريقة الفوترة</th>
              <th style={{ width: "16%" }}>السعر (ريال)</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.id}>
                <td>
                  <strong>{s.nameAr}</strong>
                  <div className="ltr muted" style={{ textAlign: "right" }}>{s.nameEn}</div>
                </td>
                <td>
                  {s.summaryAr}
                  <div className="ltr muted" style={{ textAlign: "left" }}>{s.summaryEn}</div>
                </td>
                <td>{modelLabels[s.model].ar}</td>
                <td style={{ fontWeight: 700, color: ink, whiteSpace: "nowrap" }}>{priceText(s)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>تفاصيل كل خدمة</h2>
        {services.map((s) => (
          <section key={s.id} className="svc">
            <div className="svc-head">
              <div>
                <strong>{s.nameAr}</strong> <span className="ltr muted">— {s.nameEn}</span>
                <div className="muted">
                  {modelLabels[s.model].ar} · النشاط في السجل التجاري:{" "}
                  {s.activity.map((a) => `${activityNamesAr[a]} (${a})`).join("، ")}
                </div>
              </div>
              <div style={{ fontWeight: 700, whiteSpace: "nowrap" }}>{priceText(s)}</div>
            </div>
            <div className="svc-grid">
              {serviceFields(s).map((f) => (
                <div key={f.key} className={f.key === "deliverables" || f.key === "timeline" ? "wide" : undefined}>
                  <span className="lbl">{f.label}: </span>
                  {iso(Array.isArray(f.value) ? f.value.join("؛ ") : f.value)}
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="keep">
        <h2>شروط الشراء الأساسية</h2>
        <ul>
          {[
            "الباقات ذات السعر الثابت: 50% عند تأكيد الطلب و50% عند تسليم العمل للمراجعة النهائية وقبل النشر.",
            "الخدمات التي تبدأ من سعر معلن: يُحدَّد السعر النهائي ومراحل التسليم في عرض سعر مكتوب قبل أي دفع، وتُدفع على مراحل.",
            "الخطط الشهرية: تُدفع مقدماً عن كل شهر عبر فاتورة ورابط دفع، دون خصم تلقائي ودون حد أدنى للمدة، ويُلغى الاشتراك في أي وقت ليسري في نهاية الشهر المدفوع.",
            "الدفع إلكترونياً عبر بوابة ميسر (مدى، البطاقات الائتمانية، Apple Pay). لا تخزن المنشأة بيانات البطاقات.",
            "التسليم رقمي (نشر الموقع أو التطبيق، أو تسليم الملفات والصلاحيات عبر البريد الإلكتروني)، ويبدأ العمل خلال يومي عمل من تأكيد الطلب.",
            "مدد التنفيذ بأيام العمل وتمتد بقدر تأخر العميل في المحتوى أو الملاحظات وبطلبات التغيير المعتمدة.",
            "الإلغاء قبل بدء العمل باسترداد كامل؛ وبعد البدء يدفع العميل قيمة المراحل المكتملة والعمل الموثق والتكاليف المعتمدة فقط، وفق سياسة الاسترداد والإلغاء.",
            "الاستضافة والنطاقات والاشتراكات والخدمات الخارجية على حساب العميل وباسمه، ولا تدخل في الأسعار.",
          ].map((t) => (
            <li key={t}>{iso(t)}</li>
          ))}
        </ul>
        </div>

        <div className="keep">
        <h2>منتجات غير معروضة للبيع</h2>
        <p className="muted">
          {productsInDevelopment.map((p) => `${p.name}: ${p.descAr}`).join(" — ")}
        </p>
        </div>

        <div className="keep">
        <h2>الروابط الرسمية</h2>
        <table>
          <tbody>
            {[
              ["صفحة الأسعار", legalUrls.pricing],
              ["شروط الخدمة", legalUrls.terms],
              ["سياسة الاسترداد والإلغاء", legalUrls.refund],
              ["سياسة الخصوصية", legalUrls.privacy],
            ].map(([k, v]) => (
              <tr key={k}>
                <th style={{ width: "32%", background: "#f6f2ea", color: ink }}>{k}</th>
                <td className="ltr" style={{ textAlign: "left" }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between" }} className="muted">
          <span>تاريخ الإصدار: {legalEffectiveDate.ar}</span>
          <span className="ltr">Issued {legalEffectiveDate.en} · {company.website}</span>
        </div>
      </div>
    </div>
  );
}
