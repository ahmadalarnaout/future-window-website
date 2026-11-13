import { company } from "@/config/company";

/** A block is a paragraph (string) or a bullet list (string[]). */
export type Block = string | string[];

export interface LegalSection {
  titleAr: string;
  ar: Block[];
  titleEn: string;
  en: Block[];
}

export interface LegalDoc {
  slug: string;
  titleAr: string;
  titleEn: string;
  introAr: string;
  introEn: string;
  sections: LegalSection[];
}

const C = company;

/* ======================================================================== */
/*  TERMS OF SERVICE                                                         */
/* ======================================================================== */
export const termsDoc: LegalDoc = {
  slug: "terms",
  titleAr: "شروط الخدمة",
  titleEn: "Terms of Service",
  introAr: `تنظّم هذه الشروط العلاقة بين ${C.legalNameAr} ("الشركة" أو "نحن") وكل من يطلب خدماتها أو يدفع مقابلها ("العميل"). بطلبك أي خدمة أو سدادك أي مبلغ عبر روابط الدفع الإلكترونية الصادرة عنا، فإنك توافق على هذه الشروط.`,
  introEn: `These terms govern the relationship between ${C.legalNameEn} ("the Company", "we") and anyone who orders or pays for its services ("the Customer"). By ordering a service or paying through a payment link issued by us, you agree to these terms.`,
  sections: [
    {
      titleAr: "1. هوية مقدم الخدمة",
      ar: [
        [
          `الاسم النظامي: ${C.legalNameAr}`,
          `الكيان النظامي: ${C.entityTypeAr}، مسجلة في ${C.countryAr}`,
          `الرقم الوطني الموحد: ${C.unifiedNumber}`,
          `العلامة التجارية المستخدمة: ${C.brand} (${C.brandAr})`,
          `البريد الإلكتروني: ${C.email}`,
          `الموقع الإلكتروني: ${C.website}`,
        ],
      ],
      titleEn: "1. Service provider",
      en: [
        [
          `Registered (Arabic) name: ${C.legalNameAr}; English name: ${C.legalNameEn} (translation of the registered Arabic name)`,
          `Legal form: ${C.entityTypeEn}, registered in the ${C.countryEn}`,
          `Unified National Number: ${C.unifiedNumber}`,
          `Trading brand: ${C.brand}`,
          `Email: ${C.email}`,
          `Website: ${C.website}`,
        ],
      ],
    },
    {
      titleAr: "2. نطاق الخدمات",
      ar: [
        "تقدم الشركة خدمات تقنية رقمية تشمل: تصميم وتطوير المواقع الإلكترونية وصفحات الهبوط، وتصميم واجهات وتجربة المستخدم، وأتمتة سير العمل وتكامل الأنظمة، وحلول الذكاء الاصطناعي، وتطوير المنصات وتطبيقات الجوال، وخطط الصيانة والدعم الشهرية.",
        "تُحدَّد تفاصيل كل خدمة وما تشمله وما لا تشمله في صفحة الأسعار المنشورة أو في عرض السعر المكتوب. وعند وجود عرض سعر مكتوب معتمد، تكون تفاصيله هي المرجع لتلك الخدمة فيما لا يخالف هذه الشروط أو الأنظمة.",
        "المنتجات التي تعمل الشركة على تطويرها ولم تُطلق للعامة بعد (مثل Eduverse و Alyaf) ليست معروضة للبيع، ولا تُدفع عبر الموقع أو بوابة الدفع.",
      ],
      titleEn: "2. Scope of services",
      en: [
        "The Company provides digital technology services: website and landing-page design and development, UI/UX design, workflow automation and systems integration, AI solutions, platform and mobile-app development, and monthly maintenance and support plans.",
        "What each service includes and excludes is stated on the published pricing page or in a written quotation. Where an accepted written quotation exists, it governs that service to the extent it does not conflict with these terms or the law.",
        "Products the Company is developing that have not been publicly launched (such as Eduverse and Alyaf) are not offered for sale and cannot be paid for through the website or the payment gateway.",
      ],
    },
    {
      titleAr: "3. أهلية العميل والتواصل",
      ar: [
        "تُقدَّم الخدمات للمنشآت وللأفراد الذين بلغوا 18 عاماً ويملكون الأهلية النظامية للتعاقد. ومن يطلب الخدمة نيابةً عن منشأة يقرّ بأنه مفوَّض بذلك.",
        "لا يتطلب طلب الخدمات إنشاء حساب على الموقع؛ ويتم الطلب والتواصل عبر البريد الإلكتروني أو نموذج التواصل. يلتزم العميل بتقديم بيانات صحيحة وتحديثها عند تغيّرها.",
      ],
      titleEn: "3. Eligibility and communication",
      en: [
        "Services are provided to businesses and to individuals aged 18 or over with legal capacity to contract. Anyone ordering on behalf of a business confirms they are authorised to do so.",
        "No website account is needed to order; ordering and communication take place by email or the contact form. The Customer must provide accurate details and keep them up to date.",
      ],
    },
    {
      titleAr: "4. الأسعار والدفع",
      ar: [
        "جميع الأسعار بالريال السعودي. الشركة غير مسجلة حالياً في ضريبة القيمة المضافة، لذلك لا تُضاف ضريبة القيمة المضافة إلى الأسعار المعلنة ولا تُحصَّل بشكل منفصل. وفي حال تسجيل الشركة مستقبلاً، يُعلَن ذلك قبل تطبيقه ولا يسري على المبالغ المسددة قبله.",
        [
          "الباقات ذات السعر الثابت: 50% عند تأكيد الطلب، و50% عند تسليم العمل للمراجعة النهائية وقبل النشر أو تسليم الملفات النهائية.",
          "الخدمات التي تبدأ من سعر معلن: دفعات مرحلية وفق عرض السعر المكتوب المعتمد.",
          "الخطط الشهرية: تُدفع مقدماً عن كل شهر عبر فاتورة ورابط دفع يصدر قبل بداية الشهر، دون خصم تلقائي من البطاقة.",
          "الساعات الإضافية: تُدفع قبل التنفيذ بعد موافقة العميل كتابياً على التقدير.",
        ],
        "يتم الدفع إلكترونياً عبر بوابة الدفع ميسر (Moyasar) بالوسائل المتاحة فيها (مثل مدى والبطاقات الائتمانية و Apple Pay). لا تطّلع الشركة على بيانات البطاقة ولا تخزنها.",
        "يجوز للشركة تعديل الأسعار المنشورة في أي وقت، ولا يسري التعديل على الطلبات المؤكدة أو عروض الأسعار المعتمدة قبله.",
      ],
      titleEn: "4. Prices and payment",
      en: [
        "All prices are in Saudi Riyals (SAR). The Company is not currently registered for VAT, so no VAT is added to published prices or charged separately. If the Company registers in future, this will be announced before it applies and will not affect amounts already paid.",
        [
          "Fixed-price packages: 50% on order confirmation and 50% when the work is delivered for final review, before publishing or handing over final files.",
          "Starting-from services: milestone payments under the accepted written quotation.",
          "Monthly plans: paid in advance for each month through an invoice and payment link issued before the month starts; cards are never charged automatically.",
          "Additional hours: paid before the work, after the Customer approves the estimate in writing.",
        ],
        "Payments are processed electronically by the Moyasar payment gateway using the methods it offers (such as mada, credit cards and Apple Pay). The Company never sees or stores card details.",
        "The Company may change published prices at any time; changes do not affect confirmed orders or accepted quotations.",
      ],
    },
    {
      titleAr: "5. تأكيد الطلب",
      ar: [
        "يُعدّ الطلب مؤكداً عند اكتمال أمرين: (أ) اتفاق الطرفين كتابياً (بالبريد الإلكتروني أو باعتماد عرض السعر) على الخدمة ونطاقها، و(ب) استلام الدفعة الأولى المستحقة. وترسل الشركة تأكيداً بالبريد الإلكتروني يتضمن: الخدمة ونطاقها، والمبلغ، ومراحل التسليم وقيمة كل مرحلة، وموعد التسليم المتوقع، وما يلزم من العميل للبدء. وتُعدّ قيم المراحل الواردة في التأكيد أساس احتساب أي استرداد.",
      ],
      titleEn: "5. Order confirmation",
      en: [
        "An order is confirmed when both (a) the parties have agreed the service and its scope in writing (by email or by accepting a quotation) and (b) the first payment due has been received. The Company then sends an email confirmation stating: the service and its scope, the amount, the delivery milestones and the value of each, the expected delivery date, and what the Customer must provide to start. The milestone values in the confirmation are the basis for calculating any refund.",
      ],
    },
    {
      titleAr: "6. التنفيذ والمدد وطلبات التغيير",
      ar: [
        "يبدأ العمل خلال يومي عمل من تأكيد الطلب، ما لم يُتفق على غير ذلك. وتُحتسب مدد التنفيذ بأيام العمل، وتبدأ من استلام الدفعة الأولى وكامل المحتوى والصلاحيات التي يحتاجها العمل.",
        "تمتد مواعيد التسليم تلقائياً بقدر: (أ) أي تأخير من العميل في تقديم المحتوى أو الملاحظات أو الاعتمادات أو الصلاحيات؛ (ب) ما يُتفق عليه كتابياً عند اعتماد طلب تغيير؛ (ج) الظروف القاهرة أو أعطال مزودي الخدمات الخارجيين. وتُبلغ الشركة العميل كتابياً بموعد التسليم المعدّل.",
        "طلب التغيير هو أي إضافة أو تعديل خارج النطاق المؤكد أو خارج جولات التعديل المشمولة. ترسل الشركة تقديراً مكتوباً لتكلفته (بسعر الساعة المعلن) وأثره على الموعد، ولا يُنفَّذ إلا بعد موافقة العميل كتابياً وسداد قيمته.",
        "إذا توقف المشروع بانتظار العميل أكثر من 30 يوماً متتالية، يجوز للشركة إيقافه مؤقتاً بعد إشعار كتابي، وتُجدول استئنافه حسب توفر الفريق. وإذا لم يرد العميل خلال 30 يوماً أخرى بعد إشعار كتابي ثانٍ، يجوز للشركة إغلاق المشروع ومعاملته كإلغاء من العميل وفق سياسة الاسترداد والإلغاء.",
        "يتم التسليم رقمياً بحسب طبيعة الخدمة: نشر الموقع أو التطبيق على النطاق أو البيئة التي يحددها العميل، أو مشاركة ملفات التصميم، أو تسليم الشيفرة المصدرية وصلاحيات الوصول والوثائق عبر البريد الإلكتروني. ولا توجد منتجات مادية تُشحن. وتبدأ الخطط الشهرية خلال يومي عمل من سداد الشهر الأول.",
      ],
      titleEn: "6. Performance, timelines and change requests",
      en: [
        "Work starts within two business days of order confirmation unless agreed otherwise. Timelines are counted in business days and run from receipt of the first payment and of all content and access the work needs.",
        "Delivery dates are automatically extended by: (a) any delay by the Customer in providing content, feedback, approvals or access; (b) whatever is agreed in writing when a change request is approved; (c) force majeure or outages of third-party providers. The Company confirms the revised delivery date to the Customer in writing.",
        "A change request is any addition or change outside the confirmed scope or beyond the included revision rounds. The Company sends a written estimate of its cost (at the published hourly rate) and its effect on the timeline; it is carried out only after the Customer approves it in writing and pays for it.",
        "If a project waits on the Customer for more than 30 consecutive days, the Company may pause it after written notice and schedule its resumption according to team availability. If the Customer does not respond within a further 30 days after a second written notice, the Company may close the project and treat it as a cancellation by the Customer under the Refund and Cancellation Policy.",
        "Delivery is digital and depends on the service: publishing the website or app to the domain or environment the Customer specifies, sharing design files, or handing over source code, access credentials and documentation by email. No physical goods are shipped. Monthly plans start within two business days of payment for the first month.",
      ],
    },
    {
      titleAr: "7. الخطط الشهرية: التجديد والإلغاء",
      ar: [
        "تتجدد الخطط الشهرية شهراً بشهر بسداد فاتورة الشهر التالي، ولا يوجد حد أدنى لمدة الاشتراك.",
        "يمكن للعميل إلغاء الخطة في أي وقت بإرسال بريد إلكتروني إلى العنوان أدناه. ويسري الإلغاء في نهاية الشهر المدفوع الجاري، ولا تصدر فواتير بعده. ويُفضَّل إرسال طلب الإلغاء قبل 3 أيام عمل على الأقل من تاريخ الفاتورة التالية؛ وإذا سُددت فاتورة بعد طلب الإلغاء، تُرَد كاملة.",
        "الساعات غير المستخدمة في أي شهر لا تُرحَّل ولا تُسترد قيمتها، إلا وفق سياسة الاسترداد والإلغاء.",
      ],
      titleEn: "7. Monthly plans: renewal and cancellation",
      en: [
        "Monthly plans renew month by month when the next month's invoice is paid. There is no minimum term.",
        "The Customer may cancel at any time by emailing the address below. Cancellation takes effect at the end of the current paid month and no further invoices are issued. We recommend cancelling at least 3 business days before the next invoice date; if an invoice is paid after a cancellation request, it is refunded in full.",
        "Unused hours in a month do not roll over and are not refunded, except as provided in the Refund and Cancellation Policy.",
      ],
    },
    {
      titleAr: "8. الاسترداد والإلغاء",
      ar: [
        "تخضع طلبات الإلغاء والاسترداد لـ سياسة الاسترداد والإلغاء المنشورة على الموقع (futurewindow.me/refund-policy)، وهي جزء لا يتجزأ من هذه الشروط. ولا يُخل شيء فيها أو في هذه الشروط بأي حق نظامي للعميل.",
      ],
      titleEn: "8. Refunds and cancellation",
      en: [
        "Cancellation and refund requests are governed by the Refund and Cancellation Policy published on the website (futurewindow.me/refund-policy), which forms part of these terms. Nothing in it or in these terms limits any statutory right of the Customer.",
      ],
    },
    {
      titleAr: "9. التزامات العميل والاستخدام المقبول",
      ar: [
        [
          "تقديم المحتوى والمعلومات والصلاحيات اللازمة في الوقت المناسب، والرد على طلبات المراجعة.",
          "ضمان امتلاكه أو حصوله على حق استخدام كل محتوى يقدمه (نصوص، صور، شعارات، بيانات).",
          "عدم طلب أو استخدام الخدمات لأي غرض مخالف لأنظمة المملكة العربية السعودية، أو لنشر محتوى مسيء أو مضلل أو منتهك لحقوق الغير.",
          "حماية بيانات الدخول التي تُسلَّم إليه.",
        ],
        "يحق للشركة رفض أو إيقاف تنفيذ أي طلب يخالف ما سبق، مع رد ما يستحق للعميل وفق سياسة الاسترداد.",
      ],
      titleEn: "9. Customer obligations and acceptable use",
      en: [
        [
          "Provide the content, information and access needed on time, and respond to review requests.",
          "Ensure they own or have the right to use any content they supply (text, images, logos, data).",
          "Not order or use the services for any purpose that breaks the laws of the Kingdom of Saudi Arabia, or to publish offensive, misleading or infringing content.",
          "Keep any access credentials handed over to them secure.",
        ],
        "The Company may decline or stop work on any order that breaches the above, refunding any amount due under the Refund Policy.",
      ],
    },
    {
      titleAr: "10. الملكية الفكرية",
      ar: [
        "بعد سداد كامل قيمة الخدمة، تنتقل إلى العميل ملكية المخرجات النهائية المنفذة له خصيصاً (التصاميم والشيفرة البرمجية الخاصة بمشروعه).",
        "تحتفظ الشركة بملكية أدواتها ومكوناتها البرمجية العامة وخبراتها السابقة، وتمنح العميل ترخيصاً دائماً لاستخدام ما يدخل منها في مشروعه. وتخضع المكونات مفتوحة المصدر والأدوات الخارجية لتراخيصها الخاصة.",
        "يجوز للشركة عرض العمل المنجز ضمن أعمالها السابقة، ما لم يطلب العميل كتابياً عدم ذلك، ودون الإفصاح عن أي معلومات سرية.",
      ],
      titleEn: "10. Intellectual property",
      en: [
        "Once the full price has been paid, ownership of the final deliverables made specifically for the Customer (their project's designs and code) passes to the Customer.",
        "The Company keeps ownership of its general tools, reusable components and prior know-how, and grants the Customer a perpetual licence to use any of them included in the project. Open-source components and third-party tools remain under their own licences.",
        "The Company may show completed work in its portfolio unless the Customer asks in writing that it does not, and never discloses confidential information.",
      ],
    },
    {
      titleAr: "11. توفر الخدمة والانقطاعات التقنية",
      ar: [
        "تعتمد المواقع والمنصات على مزودي استضافة وخدمات خارجية. تبذل الشركة عناية مهنية معقولة لتقليل الانقطاعات ومعالجتها ضمن نطاق الخطة التي اشتراها العميل، لكنها لا تضمن عمل الخدمات الخارجية دون انقطاع، ولا تتحمل مسؤولية الانقطاعات الناتجة عن مزودين خارجيين أو قوة قاهرة.",
      ],
      titleEn: "11. Availability and technical interruptions",
      en: [
        "Websites and platforms rely on third-party hosting and services. The Company uses reasonable professional care to minimise and fix interruptions within the scope of the plan the Customer has purchased, but cannot guarantee uninterrupted third-party services and is not responsible for outages caused by third-party providers or force majeure.",
      ],
    },
    {
      titleAr: "12. الدعم وتقديم الشكاوى",
      ar: [
        `للدعم أو الاستفسار أو تقديم شكوى، راسلنا على ${C.email}. نؤكد استلام الرسالة خلال يومي عمل، ونسعى لمعالجة الشكوى خلال 7 أيام عمل. ويحق للعميل التقدم بشكواه إلى الجهات الرسمية المختصة، ومنها وزارة التجارة.`,
      ],
      titleEn: "12. Support and complaints",
      en: [
        `For support, questions or complaints, email ${C.email}. We acknowledge messages within two business days and aim to resolve complaints within 7 business days. Customers may also complain to the competent authorities, including the Ministry of Commerce.`,
      ],
    },
    {
      titleAr: "13. الخصوصية وحماية البيانات",
      ar: [
        "نعالج البيانات الشخصية وفق نظام حماية البيانات الشخصية وسياسة الخصوصية المنشورة على الموقع (futurewindow.me/privacy).",
      ],
      titleEn: "13. Privacy and data protection",
      en: [
        "We process personal data in line with the Personal Data Protection Law and the Privacy Policy published on the website (futurewindow.me/privacy).",
      ],
    },
    {
      titleAr: "14. حدود المسؤولية",
      ar: [
        "في الحدود التي تجيزها الأنظمة، لا تتجاوز مسؤولية الشركة عن أي مطالبة تتعلق بخدمة ما إجمالي المبالغ التي دفعها العميل مقابل تلك الخدمة، ولا تُسأل الشركة عن الأضرار غير المباشرة كفوات الأرباح. ولا يسري هذا القيد على حالات الغش أو الخطأ الجسيم أو أي مسؤولية لا يجوز نظاماً تقييدها.",
      ],
      titleEn: "14. Limitation of liability",
      en: [
        "To the extent permitted by law, the Company's liability for any claim relating to a service is limited to the total amount the Customer paid for that service, and the Company is not liable for indirect losses such as lost profits. This limit does not apply to fraud, gross negligence, or any liability that cannot lawfully be limited.",
      ],
    },
    {
      titleAr: "15. تعديل الشروط",
      ar: [
        "يجوز للشركة تعديل هذه الشروط، وتنشر النسخة المعدلة على هذه الصفحة مع تاريخ سريانها. ولا تسري التعديلات على الطلبات المؤكدة قبل تاريخ سريانها، ما لم يوافق العميل على ذلك.",
      ],
      titleEn: "15. Changes to these terms",
      en: [
        "The Company may amend these terms and will publish the updated version on this page with its effective date. Amendments do not apply to orders confirmed before that date unless the Customer agrees.",
      ],
    },
    {
      titleAr: "16. النظام الواجب التطبيق وتسوية النزاعات",
      ar: [
        "تخضع هذه الشروط لأنظمة المملكة العربية السعودية. ويسعى الطرفان لحل أي خلاف ودياً خلال 30 يوماً من إخطار أحدهما الآخر به كتابياً، فإن تعذّر ذلك يُحال إلى الجهة القضائية المختصة في المملكة العربية السعودية.",
      ],
      titleEn: "16. Governing law and disputes",
      en: [
        "These terms are governed by the laws of the Kingdom of Saudi Arabia. The parties will try to settle any dispute amicably within 30 days of written notice; failing that, it will be referred to the competent judicial authority in the Kingdom of Saudi Arabia.",
      ],
    },
    {
      titleAr: "17. التواصل",
      ar: [`${C.legalNameAr} — الرقم الوطني الموحد ${C.unifiedNumber} — ${C.email} — ${C.website}`],
      titleEn: "17. Contact",
      en: [`${C.legalNameEn} — Unified National Number ${C.unifiedNumber} — ${C.email} — ${C.website}`],
    },
  ],
};

/* ======================================================================== */
/*  REFUND & CANCELLATION POLICY                                             */
/* ======================================================================== */
export const refundDoc: LegalDoc = {
  slug: "refund-policy",
  titleAr: "سياسة الاسترداد والإلغاء",
  titleEn: "Refund and Cancellation Policy",
  introAr: `توضح هذه السياسة متى وكيف يمكن إلغاء الخدمات المقدمة من ${C.legalNameAr} واسترداد المبالغ المدفوعة. وهي جزء من شروط الخدمة، وتقوم على مبدأ واحد: يدفع العميل مقابل العمل المنجز فعلاً والموثق والتكاليف التي وافق عليها مسبقاً، ويُرَد إليه ما زاد على ذلك. ولا تُخل هذه السياسة بأي حق نظامي للعميل بموجب نظام التجارة الإلكترونية ونظام حماية المستهلك وغيرهما من الأنظمة السارية.`,
  introEn: `This policy explains when and how services from ${C.legalNameEn} can be cancelled and payments refunded. It forms part of the Terms of Service and rests on one principle: the Customer pays for work actually completed and documented, and for costs they approved in advance, and is refunded the rest. It does not limit any statutory right the Customer has under the E-Commerce Law, consumer-protection rules or any other applicable law.`,
  sections: [
    {
      titleAr: "1. الإلغاء قبل بدء العمل",
      ar: [
        "يمكن للعميل إلغاء أي طلب قبل بدء العمل واسترداد كامل المبلغ المدفوع دون أي خصم. ويُعدّ العمل قد بدأ عند عقد اجتماع الانطلاق أو عند بدء التنفيذ الذي تؤكده الشركة للعميل كتابياً، أيهما أسبق.",
        "لا نفرض عربونات أو رسوم تأسيس غير قابلة للاسترداد.",
      ],
      titleEn: "1. Cancelling before work starts",
      en: [
        "The Customer may cancel any order before work starts and receive a full refund with no deduction. Work is treated as started at the kick-off meeting, or when the Company confirms in writing that work has begun, whichever comes first.",
        "We charge no non-refundable deposits or setup fees.",
      ],
    },
    {
      titleAr: "2. مراحل التسليم",
      ar: [
        "يُقسَّم كل مشروع إلى مراحل تسليم (مثل: اعتماد التصميم، ثم التسليم للمراجعة، ثم النشر وتسليم الصلاحيات).",
        "قبل أي دفع، يتضمن تأكيد الطلب أو عرض السعر الذي يوافق عليه العميل كتابياً ما يلي، ويُعدّ أساس أي احتساب لاحق:",
        [
          "مراحل التسليم وقيمة كل مرحلة بالريال، بحيث يساوي مجموعها سعر الخدمة.",
          "سعر الساعة المعتمد لاحتساب العمل الجاري (السعر المعلن في صفحة الأسعار ما لم يُتفق على أقل منه).",
          "أي تكاليف خارجية متوقعة تدفعها الشركة نيابةً عن العميل، مع وصفها وحدها الأقصى. ولا تُحتسب أي تكلفة خارجية لم تُذكر أو لم يوافق العميل عليها كتابياً قبل دفعها.",
        ],
        "تكتمل المرحلة عندما تسلّم الشركة مخرجاتها ويعتمدها العميل كتابياً، أو إذا لم يبدِ ملاحظات خلال 5 أيام عمل من تسليمها رغم تذكيره كتابياً.",
      ],
      titleEn: "2. Delivery milestones",
      en: [
        "Every project is divided into delivery milestones (for example: design approval, then delivery for review, then publishing and handover).",
        "Before any payment, the order confirmation or quotation the Customer accepts in writing states the following, which is the basis for any later calculation:",
        [
          "The delivery milestones and the value of each in SAR, adding up to the price of the service.",
          "The hourly rate used to value work in progress (the published rate, unless a lower one is agreed).",
          "Any expected third-party costs the Company will pay on the Customer's behalf, with a description and a maximum amount. No third-party cost is charged unless it was listed, or the Customer approved it in writing before it was paid.",
        ],
        "A milestone is complete when the Company delivers its output and the Customer approves it in writing, or when the Customer gives no feedback within 5 business days of delivery despite a written reminder.",
      ],
    },
    {
      titleAr: "3. الإلغاء بعد بدء العمل",
      ar: [
        "يمكن للعميل إلغاء الطلب في أي وقت. ويُرَد إليه المبلغ المدفوع بعد خصم ما يلي فقط:",
        [
          "قيمة المراحل المكتملة كما وردت في تأكيد الطلب أو عرض السعر.",
          "العمل الموثق في المرحلة الجارية، محسوباً بالساعات المسجلة بسعر الساعة المتفق عليه، وبما لا يتجاوز قيمة تلك المرحلة. وتسجّل الشركة الساعات مع وصف العمل، ويحق للعميل الاطلاع على السجل في أي وقت.",
          "التكاليف الخارجية المعتمدة وفق البند 2 والتي دفعتها الشركة فعلاً نيابةً عن العميل، مع تقديم إيصالاتها.",
        ],
        "تقدّم الشركة للعميل بياناً مكتوباً بالمراحل المكتملة وسجل الساعات والإيصالات وطريقة الاحتساب، وتسلّمه كل ما أُنجز حتى تاريخ الإلغاء. فإن كان المستحق أقل مما دفعه العميل رُدَّ إليه الفرق، وإن زاد عليه استُحق الفرق، ولا يتجاوز المستحق في جميع الأحوال قيمة المراحل المكتملة والعمل الموثق والتكاليف المعتمدة.",
        "إذا كانت الشركة هي من ألغت الطلب لغير سبب يعود إلى العميل، يُرَد إليه كامل ما دفعه عن المراحل غير المكتملة.",
      ],
      titleEn: "3. Cancelling after work starts",
      en: [
        "The Customer may cancel at any time and will be refunded the amount paid, less only:",
        [
          "The value of completed milestones as stated in the order confirmation or quotation.",
          "Documented work on the current milestone, calculated from logged hours at the agreed hourly rate, up to that milestone's value. The Company logs hours with a description of the work, and the Customer may see the log at any time.",
          "Third-party costs approved under section 2 that the Company actually paid on the Customer's behalf, supported by receipts.",
        ],
        "The Company gives the Customer a written statement of completed milestones, logged hours, receipts and the calculation, and hands over everything completed up to cancellation. If the amount due is less than the Customer paid, the difference is refunded; if it is more, the difference is payable. In every case the amount due never exceeds the value of completed milestones, documented work and approved costs.",
        "If the Company cancels for a reason not caused by the Customer, the Customer is refunded in full for all milestones not completed.",
      ],
    },
    {
      titleAr: "4. التأخير والتغييرات",
      ar: [
        "مواعيد التسليم وطريقة تمديدها (تأخر العميل، وطلبات التغيير المعتمدة، والظروف القاهرة) موضحة في البند 6 من شروط الخدمة.",
        "إذا تجاوزت الشركة موعد التسليم المعدّل بأكثر من 15 يوم عمل لسبب لا يعود إلى العميل، يحق للعميل إرسال إشعار كتابي. فإذا لم تسلّم الشركة المرحلة المتأخرة خلال 5 أيام عمل من الإشعار، يحق للعميل إلغاء الطلب واسترداد كامل ما دفعه عن المراحل غير المكتملة، دون خصم قيمة العمل الجاري فيها.",
        "إذا أغلقت الشركة المشروع لعدم رد العميل وفق البند 6 من شروط الخدمة، يُعامل ذلك كإلغاء من العميل ويُحتسب وفق البند 3 أعلاه.",
      ],
      titleEn: "4. Delays and changes",
      en: [
        "Delivery dates and how they are extended (Customer delays, approved change requests, force majeure) are set out in section 6 of the Terms of Service.",
        "If the Company misses the revised delivery date by more than 15 business days for reasons not caused by the Customer, the Customer may send written notice. If the Company does not deliver the late milestone within 5 business days of that notice, the Customer may cancel and be refunded in full for all milestones not completed, with no deduction for work in progress on them.",
        "If the Company closes a project because the Customer stopped responding, as described in section 6 of the Terms of Service, it is treated as a cancellation by the Customer and calculated under section 3 above.",
      ],
    },
    {
      titleAr: "5. إصلاح العيوب",
      ar: [
        "العيب هو خلل في عمل سلّمته الشركة يجعله لا يعمل وفق النطاق المتفق عليه أصلاً والتصميم المعتمد. وتصلح الشركة العيوب دون رسوم خلال الفترة المذكورة لكل خدمة في صفحة الأسعار، وتبدأ من تاريخ التسليم، أو من تاريخ النشر إذا تم خلال 14 يوماً من التسليم.",
        "لا يُعدّ عيباً، ويُعامل كطلب تغيير:",
        [
          "الخصائص أو التعديلات الجديدة، أو تغيير ما اعتمده العميل.",
          "ما ينتج عن تعديلات العميل أو أي طرف آخر على العمل المسلَّم.",
          "تغييرات أو أعطال الاستضافة والخدمات الخارجية التي لا تديرها الشركة.",
          "المحتوى الذي يقدمه العميل، أو المتصفحات والأجهزة غير المتفق عليها.",
        ],
        "يُبلغ العميل عن العيب كتابياً مع وصفه وخطوات ظهوره، وتصنّفه الشركة حسب أثره وتبلغه بالتصنيف عند تأكيد الاستلام:",
        [
          "حرج — توقف الموقع أو التطبيق أو تعطل وظيفة أساسية دون بديل، أو خطر أمني: تأكيد الاستلام خلال يوم عمل، والبدء فوراً، ونستهدف الإصلاح أو حلاً مؤقتاً خلال 3 أيام عمل.",
          "رئيسي — تعطل وظيفة مهمة مع وجود بديل مؤقت: تأكيد الاستلام خلال يومي عمل، ونستهدف الإصلاح خلال 7 أيام عمل.",
          "بسيط — خلل شكلي أو محدود الأثر: تأكيد الاستلام خلال يومي عمل، ونستهدف الإصلاح خلال 15 يوم عمل أو ضمن أقرب تحديث مجدول.",
        ],
        "هذه المدد أهداف نعمل على الالتزام بها ونُطلع العميل على سير العمل، وقد تمتد إذا احتاج الإصلاح معلومات أو صلاحيات من العميل أو تدخل مزود خارجي. ولا يُحتسب العيب المبلَّغ عنه خلال الفترة خارجها لاحقاً بسبب مدة إصلاحه.",
        "إذا تعذّر إصلاح عيب حرج أو رئيسي ضمن النطاق خلال مدة معقولة بعد محاولات جادة، يتفق الطرفان كتابياً على المعالجة المناسبة: خطة إصلاح بموعد جديد، أو بديل وظيفي، أو تخفيض أو استرداد يتناسب مع الجزء المتأثر من قيمة المرحلة. ولا يُخل ذلك بحقوق العميل النظامية.",
      ],
      titleEn: "5. Fixing defects",
      en: [
        "A defect is a fault in work the Company delivered that stops it working as originally agreed in the scope and the approved design. The Company fixes defects free of charge for the period stated for each service on the pricing page, counted from delivery, or from publishing if that happens within 14 days of delivery.",
        "The following are not defects and are handled as change requests:",
        [
          "New features or changes, or changing something the Customer approved.",
          "Problems caused by changes the Customer or anyone else made to the delivered work.",
          "Changes to, or outages of, hosting and third-party services the Company does not manage.",
          "Content supplied by the Customer, or browsers and devices outside those agreed.",
        ],
        "The Customer reports a defect in writing with a description and the steps that cause it. The Company classifies it by impact and tells the Customer the classification when acknowledging it:",
        [
          "Critical — the site or app is down, a core function fails with no workaround, or there is a security risk: acknowledged within one business day, worked on immediately, with a target of a fix or workaround within 3 business days.",
          "Major — an important function fails but a temporary workaround exists: acknowledged within two business days, target fix within 7 business days.",
          "Minor — cosmetic or limited impact: acknowledged within two business days, target fix within 15 business days or in the next scheduled update.",
        ],
        "These are targets we work to and we keep the Customer informed; they may extend if the fix needs information or access from the Customer or action by a third-party provider. A defect reported within the free period stays covered even if the fix finishes after it.",
        "If a critical or major in-scope defect cannot be fixed within a reasonable time despite serious attempts, the parties agree in writing on a suitable remedy: a repair plan with a new date, a functional workaround, or a reduction or refund proportionate to the affected part of the milestone's value. This does not affect the Customer's statutory rights.",
      ],
    },
    {
      titleAr: "6. الخطط الشهرية",
      ar: [
        "يمكن إلغاء الخطط الشهرية في أي وقت، ويسري الإلغاء في نهاية الشهر المدفوع الجاري. ولا تُسترد قيمة الشهر الجاري بعد بدئه، إلا إذا لم تقدّم الشركة الخدمة المتفق عليها فيه، فيُرَد إلى العميل جزء يتناسب مع المدة أو الخدمات غير المقدمة.",
        "إذا سُددت فاتورة شهر لاحق بعد طلب الإلغاء، تُرَد كاملة.",
      ],
      titleEn: "6. Monthly plans",
      en: [
        "Monthly plans can be cancelled at any time, effective at the end of the current paid month. The current month is not refundable once it has started, unless the Company failed to provide the agreed service, in which case a pro-rata refund is given for the period or services not provided.",
        "If a later month's invoice is paid after a cancellation request, it is refunded in full.",
      ],
    },
    {
      titleAr: "7. حقوق المستهلك النظامية",
      ar: [
        "إذا كان العميل مستهلكاً وتنطبق عليه حقوق العدول أو الاسترداد المقررة نظاماً، فتُطبَّق تلك الحقوق وفق الأنظمة السارية، ولا يقيّدها شيء في هذه السياسة.",
      ],
      titleEn: "7. Statutory consumer rights",
      en: [
        "Where the Customer is a consumer entitled to statutory withdrawal or refund rights, those rights apply in accordance with applicable law and nothing in this policy limits them.",
      ],
    },
    {
      titleAr: "8. كيفية طلب الاسترداد ومواعيده",
      ar: [
        [
          `أرسل طلبك إلى ${C.email} بعنوان "طلب إلغاء / استرداد"، مع رقم الفاتورة أو تأكيد الطلب وسبب الطلب.`,
          "نؤكد استلام الطلب خلال يومي عمل.",
          "نرسل قرارنا مع بيان الاحتساب والمستندات المؤيدة خلال 7 أيام عمل من استلام الطلب.",
          "يُنفَّذ الاسترداد المعتمد إلى وسيلة الدفع الأصلية عبر بوابة الدفع خلال 14 يوم عمل من اعتماده، وقد يستغرق ظهوره في حساب العميل مدة إضافية بحسب البنك المُصدِر.",
        ],
        "إذا لم يقتنع العميل بالقرار، يمكنه الرد على البريد نفسه لمراجعته من الإدارة، أو التقدم إلى الجهات الرسمية المختصة.",
      ],
      titleEn: "8. How to request a refund, and timelines",
      en: [
        [
          `Email ${C.email} with the subject "Cancellation / Refund request", including the invoice or order confirmation number and the reason.`,
          "We acknowledge requests within two business days.",
          "We send our decision, with the calculation and supporting records, within 7 business days of receiving the request.",
          "Approved refunds are made to the original payment method through the payment gateway within 14 business days of approval; the issuing bank may take extra time to show it.",
        ],
        "If the Customer disagrees with the decision, they can reply to the same email for review by management, or contact the competent authorities.",
      ],
    },
  ],
};

/* ======================================================================== */
/*  PRIVACY POLICY                                                           */
/* ======================================================================== */
export const privacyDoc: LegalDoc = {
  slug: "privacy",
  titleAr: "سياسة الخصوصية",
  titleEn: "Privacy Policy",
  introAr: `توضح هذه السياسة كيف تجمع ${C.legalNameAr} البيانات الشخصية وتستخدمها وتحميها، وفق نظام حماية البيانات الشخصية في المملكة العربية السعودية.`,
  introEn: `This policy explains how ${C.legalNameEn} collects, uses and protects personal data, in line with the Personal Data Protection Law of the Kingdom of Saudi Arabia.`,
  sections: [
    {
      titleAr: "1. جهة التحكم بالبيانات",
      ar: [`${C.legalNameAr}، الرقم الوطني الموحد ${C.unifiedNumber}. للتواصل بشأن البيانات الشخصية: ${C.email}`],
      titleEn: "1. Data controller",
      en: [`${C.legalNameEn}, Unified National Number ${C.unifiedNumber}. Personal-data contact: ${C.email}`],
    },
    {
      titleAr: "2. البيانات التي نجمعها",
      ar: [
        [
          "بيانات التواصل التي ترسلها عبر نموذج التواصل أو البريد الإلكتروني: الاسم، واسم المنشأة (اختياري)، والبريد الإلكتروني، والخدمة المطلوبة، ومحتوى الرسالة.",
          "بيانات المشروع التي تزودنا بها لتنفيذ الخدمة.",
          "سجلات الفواتير والمدفوعات: الاسم والمبلغ وتاريخ الدفع ورقم العملية.",
          "سجلات تقنية تُنشئها خدمة الاستضافة تلقائياً عند زيارة الموقع (مثل عنوان IP ونوع المتصفح) لأغراض الأمان والتشغيل.",
        ],
        "لا نجمع بيانات بطاقات الدفع ولا نخزنها؛ إذ تُعالَج مباشرة لدى بوابة الدفع ميسر (Moyasar).",
      ],
      titleEn: "2. Data we collect",
      en: [
        [
          "Contact details you send through the contact form or by email: name, company (optional), email address, service of interest and your message.",
          "Project information you give us to deliver a service.",
          "Invoice and payment records: name, amount, payment date and transaction reference.",
          "Technical logs created automatically by our hosting provider when you visit the site (such as IP address and browser type), for security and operation.",
        ],
        "We do not collect or store payment-card details; they are processed directly by the Moyasar payment gateway.",
      ],
    },
    {
      titleAr: "3. أغراض المعالجة وأساسها",
      ar: [
        [
          "الرد على استفساراتك وإعداد عروض الأسعار (بناءً على طلبك).",
          "تنفيذ الخدمات وإصدار الفواتير وتقديم الدعم (لتنفيذ العقد).",
          "الوفاء بالالتزامات النظامية والمحاسبية (التزام نظامي).",
          "حماية الموقع من إساءة الاستخدام (مصلحة مشروعة).",
        ],
        "لا نبيع البيانات الشخصية، ولا نستخدمها للإعلانات الموجّهة.",
      ],
      titleEn: "3. Purposes and legal basis",
      en: [
        [
          "Answering your enquiries and preparing quotations (at your request).",
          "Delivering services, invoicing and support (performance of a contract).",
          "Meeting legal and accounting obligations (legal obligation).",
          "Protecting the website from abuse (legitimate interest).",
        ],
        "We do not sell personal data or use it for targeted advertising.",
      ],
    },
    {
      titleAr: "4. مشاركة البيانات",
      ar: [
        "نشارك الحد الأدنى اللازم من البيانات مع مزودي خدمات يعملون نيابةً عنا فقط:",
        [
          "بوابة الدفع ميسر (Moyasar) لمعالجة المدفوعات.",
          "مزود استضافة الموقع (Vercel).",
          "مزود البريد الإلكتروني للشركة (Zoho Mail) لاستلام الرسائل.",
          "خدمة خطوط Google لعرض أيقونات الموقع.",
        ],
        "وقد نفصح عن البيانات للجهات الحكومية المختصة عندما يقتضي النظام ذلك.",
        "بعض هؤلاء المزودين يعالجون البيانات خارج المملكة العربية السعودية. وفي هذه الحالة نقتصر على الحد الأدنى من البيانات اللازمة للخدمة، ونلتزم بالضوابط النظامية لنقل البيانات خارج المملكة.",
      ],
      titleEn: "4. Sharing",
      en: [
        "We share only the minimum data needed with providers acting on our behalf:",
        [
          "Moyasar, to process payments.",
          "Our website hosting provider (Vercel).",
          "Our company email provider (Zoho Mail), to receive messages.",
          "Google Fonts, to display the website's icons.",
        ],
        "We may disclose data to competent government authorities where the law requires it.",
        "Some of these providers process data outside the Kingdom of Saudi Arabia. Where that happens we limit it to the minimum the service needs and follow the legal requirements for transfers outside the Kingdom.",
      ],
    },
    {
      titleAr: "5. مدة الاحتفاظ",
      ar: [
        [
          "رسائل الاستفسار التي لم تتحول إلى طلب: حتى 24 شهراً من آخر تواصل.",
          "بيانات المشاريع والمراسلات المرتبطة بها: طوال مدة الخدمة وحتى 24 شهراً بعد انتهائها.",
          "الفواتير وسجلات الدفع: المدة التي تفرضها الأنظمة المحاسبية والضريبية.",
        ],
        "ثم تُحذف البيانات أو تُجعل مجهولة الهوية.",
      ],
      titleEn: "5. Retention",
      en: [
        [
          "Enquiries that do not become orders: up to 24 months after the last contact.",
          "Project data and related correspondence: for the duration of the service and up to 24 months after it ends.",
          "Invoices and payment records: for the period required by accounting and tax laws.",
        ],
        "After that, data is deleted or anonymised.",
      ],
    },
    {
      titleAr: "6. ملفات تعريف الارتباط (الكوكيز)",
      ar: [
        "لا يستخدم الموقع ملفات تعريف ارتباط إعلانية أو أدوات تحليل لتتبع الزوار.",
      ],
      titleEn: "6. Cookies",
      en: ["The website does not use advertising cookies or analytics tools that track visitors."],
    },
    {
      titleAr: "7. حماية البيانات",
      ar: [
        "نتخذ تدابير تقنية وتنظيمية معقولة لحماية البيانات، منها: الاتصال المشفر (HTTPS)، وقصر الوصول على من يحتاجه لأداء عمله، وعدم تخزين بيانات البطاقات.",
      ],
      titleEn: "7. Security",
      en: [
        "We take reasonable technical and organisational measures to protect data, including encrypted connections (HTTPS), access limited to those who need it, and never storing card data.",
      ],
    },
    {
      titleAr: "8. حقوقك",
      ar: [
        "وفق نظام حماية البيانات الشخصية، يحق لك:",
        [
          "العلم بكيفية معالجة بياناتك.",
          "الوصول إلى بياناتك والحصول على نسخة منها.",
          "طلب تصحيحها أو استكمالها أو تحديثها.",
          "طلب إتلافها حين تنتفي الحاجة إليها، ما لم يقتضِ النظام الاحتفاظ بها.",
          "الرجوع عن موافقتك متى كانت المعالجة قائمة عليها.",
        ],
        `لممارسة أي من هذه الحقوق راسلنا على ${C.email}، وسنرد خلال المدة النظامية. ويحق لك تقديم شكوى إلى الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا).`,
      ],
      titleEn: "8. Your rights",
      en: [
        "Under the Personal Data Protection Law you have the right to:",
        [
          "Be informed about how your data is processed.",
          "Access your data and obtain a copy.",
          "Ask for it to be corrected, completed or updated.",
          "Ask for it to be destroyed when no longer needed, unless the law requires us to keep it.",
          "Withdraw consent where processing is based on consent.",
        ],
        `To exercise any of these rights, email ${C.email}; we respond within the statutory period. You may also complain to the Saudi Data & AI Authority (SDAIA).`,
      ],
    },
    {
      titleAr: "9. الأطفال",
      ar: ["خدماتنا موجهة لمن بلغوا 18 عاماً، ولا نجمع عن قصد بيانات من هم دون ذلك."],
      titleEn: "9. Children",
      en: ["Our services are intended for people aged 18 and over, and we do not knowingly collect data from anyone younger."],
    },
    {
      titleAr: "10. تحديث السياسة",
      ar: ["قد نحدّث هذه السياسة، وننشر النسخة المحدثة على هذه الصفحة مع تاريخ سريانها."],
      titleEn: "10. Changes",
      en: ["We may update this policy and will publish the updated version on this page with its effective date."],
    },
  ],
};
