/**
 * Future Window — official service price list.
 * Single source of truth for /pricing, /pricing/sheet (the PDF) and the
 * contact form's service list. Only services covered by the activities in the
 * company's commercial registration are listed here.
 */

export type PriceModel = "fixed" | "from" | "monthly" | "hourly";

export interface ServiceItem {
  id: string;
  model: PriceModel;
  priceSar: number;
  /** CR activity code(s) this service falls under. */
  activity: string[];
  nameAr: string;
  nameEn: string;
  summaryAr: string;
  summaryEn: string;
  /** What the customer receives. */
  deliverablesAr: string[];
  /** Revision limit. */
  revisionsAr: string;
  /** Delivery or activation time, and what extends it. */
  timelineAr: string;
  /** Not included. */
  excludesAr: string[];
  /** Hosting and third-party costs. */
  costsAr: string;
  /** Free defect-fix period (see Refund Policy for the definition of a defect). */
  warrantyAr: string;
  /** Delivery milestones (projects only); each milestone's value is stated in the order confirmation. */
  milestonesAr?: string[];
  /** Priced add-ons. */
  addOnsAr?: string[];
  paymentAr: string;
}

export const modelLabels: Record<PriceModel, { ar: string; en: string; unitAr: string; unitEn: string }> = {
  fixed: { ar: "سعر ثابت — دفعة لمرة واحدة", en: "Fixed price — one-time", unitAr: "ريال", unitEn: "SAR" },
  from: { ar: "يبدأ من — بعرض سعر مكتوب", en: "Starting from — written quotation", unitAr: "ريال", unitEn: "SAR" },
  monthly: { ar: "اشتراك شهري", en: "Monthly plan", unitAr: "ريال / شهرياً", unitEn: "SAR / month" },
  hourly: { ar: "بالساعة", en: "Hourly", unitAr: "ريال / ساعة", unitEn: "SAR / hour" },
};

export const activityNamesAr: Record<string, string> = {
  "620101": "تكامل الأنظمة",
  "620102": "تصميم وبرمجة البرمجيات الخاصة",
  "620104": "تصميم واجهة وتجربة المستخدم",
  "620111": "تطوير التطبيقات",
  "620113": "تقنيات الذكاء الاصطناعي",
};

/** Field labels shared by the web card and the PDF so both read the same. */
export const fieldLabelsAr = {
  deliverables: "ما تستلمه",
  revisions: "جولات التعديل",
  timeline: "مدة التنفيذ",
  excludes: "لا يشمل",
  costs: "الاستضافة والتكاليف الخارجية",
  warranty: "إصلاح العيوب",
  milestones: "مراحل التسليم",
  addOns: "إضافات مسعّرة",
  payment: "طريقة الدفع",
};

const FIFTY_FIFTY =
  "50% عند تأكيد الطلب لبدء العمل، و50% عند تسليم العمل للمراجعة النهائية وقبل النشر أو تسليم الملفات النهائية.";
const MILESTONE_PAY =
  "دفعات مرتبطة بمراحل التسليم المحددة في عرض السعر المكتوب، ولا تُستحق دفعة مرحلة قبل بدئها.";
const MONTHLY_PAY =
  "تُصدر فاتورة ورابط دفع إلكتروني قبل بداية كل شهر، ويُدفع الشهر مقدماً. لا يوجد خصم تلقائي من البطاقة، ولا حد أدنى لمدة الاشتراك.";
const CLIENT_DELAY = "وتمتد المدة بقدر أي تأخير من العميل في تقديم المحتوى أو الملاحظات أو الاعتمادات أو الصلاحيات، وبما يُتفق عليه كتابياً عند تغيير النطاق.";
const TWO_ROUNDS =
  "جولتا تعديل مشمولتان: الأولى على التصميم والثانية بعد التطوير. كل جولة قائمة ملاحظات واحدة مجمّعة ضمن النطاق المتفق عليه. التعديلات الإضافية أو خارج النطاق بسعر الساعة بعد موافقتك الكتابية.";
const WARRANTY_30 = "30 يوماً من التسليم لإصلاح العيوب البرمجية ضمن النطاق المتفق عليه، دون رسوم، وفق تصنيف الأولوية في سياسة الاسترداد.";
const SITE_COSTS =
  "النطاق والاستضافة وأي أدوات أو خطوط أو صور مدفوعة تُشترى باسم العميل وعلى حسابه وتُدفع لمزوديها مباشرة، ولا تدخل في السعر. نساعد في إعدادها ضمن الباقة دون رسوم إضافية.";

export const services: ServiceItem[] = [
  // ---------------- Fixed-price packages ----------------
  {
    id: "landing",
    model: "fixed",
    priceSar: 2900,
    activity: ["620102"],
    nameAr: "صفحة هبوط احترافية",
    nameEn: "Landing Page",
    summaryAr: "صفحة واحدة سريعة ومتجاوبة لعرض منتج أو خدمة واحدة وجمع طلبات العملاء.",
    summaryEn: "A fast, responsive single page to present one product or service and capture leads.",
    deliverablesAr: [
      "تصميم وتطوير صفحة واحدة متجاوبة مع الجوال، حتى 6 أقسام",
      "لغة واحدة (العربية أو الإنجليزية)",
      "نموذج تواصل أو زر واتساب",
      "تهيئة أساسية لمحركات البحث (العنوان، الوصف، سرعة التحميل)",
      "النشر على نطاق العميل واستضافته، وتسليم الشيفرة المصدرية والصلاحيات",
    ],
    revisionsAr: TWO_ROUNDS,
    timelineAr: `10 أيام عمل من استلام الدفعة الأولى وكامل المحتوى. ${CLIENT_DELAY}`,
    excludesAr: [
      "كتابة المحتوى أو الترجمة أو التصوير",
      "الشعار والهوية البصرية",
      "الدفع الإلكتروني أو المتاجر أو حسابات المستخدمين",
      "الصيانة بعد فترة إصلاح العيوب (متاحة عبر خطة رعاية الموقع)",
    ],
    costsAr: SITE_COSTS,
    warrantyAr: WARRANTY_30,
    milestonesAr: ["اعتماد التصميم", "تسليم الصفحة للمراجعة", "النشر وتسليم الصلاحيات"],
    paymentAr: FIFTY_FIFTY,
  },
  {
    id: "website",
    model: "fixed",
    priceSar: 7900,
    activity: ["620102"],
    nameAr: "موقع الشركة الناشئة",
    nameEn: "Startup Website",
    summaryAr: "موقع تعريفي متكامل بالعربية والإنجليزية للشركات الناشئة والمشاريع الجديدة.",
    summaryEn: "A complete bilingual (Arabic/English) company website for startups and new ventures.",
    deliverablesAr: [
      "حتى 6 صفحات (مثل: الرئيسية، من نحن، الخدمات، تفاصيل خدمة، الأسئلة الشائعة، تواصل معنا)",
      "نسخة عربية وأخرى إنجليزية من المحتوى الذي يقدمه العميل",
      "تصميم متجاوب مع الجوال والأجهزة اللوحية",
      "نموذج تواصل",
      "تهيئة أساسية لمحركات البحث",
      "النشر على نطاق العميل واستضافته، وتسليم الشيفرة المصدرية والصلاحيات",
    ],
    revisionsAr: TWO_ROUNDS,
    timelineAr: `20 يوم عمل من استلام الدفعة الأولى وكامل المحتوى باللغتين. ${CLIENT_DELAY}`,
    excludesAr: [
      "كتابة المحتوى أو ترجمته أو التصوير",
      "الشعار والهوية البصرية",
      "المتاجر الإلكترونية أو بوابات الدفع أو حسابات المستخدمين أو لوحات التحكم",
      "الصيانة بعد فترة إصلاح العيوب (متاحة عبر خطة رعاية الموقع)",
    ],
    costsAr: SITE_COSTS,
    warrantyAr: WARRANTY_30,
    milestonesAr: ["اعتماد التصميم", "تسليم الموقع للمراجعة", "النشر وتسليم الصلاحيات"],
    addOnsAr: ["صفحة إضافية بنفس التصميم: 650 ريالاً"],
    paymentAr: FIFTY_FIFTY,
  },
  {
    id: "uiux",
    model: "fixed",
    priceSar: 4500,
    activity: ["620104"],
    nameAr: "حزمة تصميم واجهات وتجربة المستخدم",
    nameEn: "UI/UX Design Package",
    summaryAr: "تصميم واجهات تطبيق أو منصة رقمية جاهزة للتطوير، مع نموذج تفاعلي قابل للتجربة.",
    summaryEn: "Development-ready interface design for an app or platform, with a clickable prototype.",
    deliverablesAr: [
      "حتى 12 شاشة (ويب أو جوال، منصة واحدة)",
      "مخطط رحلة المستخدم الأساسية",
      "تصميم بصري كامل في ملف Figma تنتقل ملكيته للعميل",
      "نموذج تفاعلي قابل للنقر (Prototype)",
      "دليل مختصر للألوان والخطوط والمكونات المستخدمة لفريق التطوير",
    ],
    revisionsAr:
      "جولتا تعديل مشمولتان على مجموعة الشاشات كاملة، كل جولة قائمة ملاحظات واحدة مجمّعة. التعديلات الإضافية بسعر الساعة بعد موافقتك الكتابية.",
    timelineAr: `12 يوم عمل من اجتماع الانطلاق واستلام الدفعة الأولى. ${CLIENT_DELAY}`,
    excludesAr: [
      "البرمجة أو التطوير",
      "الشعار والهوية البصرية والرسومات التوضيحية المخصصة",
      "جلسات اختبار المستخدمين",
    ],
    costsAr: "اشتراك Figma للعميل إن رغب في التعديل بنفسه لاحقاً على حسابه. لا توجد تكاليف خارجية أخرى.",
    warrantyAr: "لا ينطبق (خدمة تصميم). نصحح أي نقص في الشاشات المتفق عليها دون رسوم.",
    milestonesAr: ["اعتماد رحلة المستخدم والهيكل", "تسليم التصاميم للمراجعة", "تسليم الملفات النهائية والنموذج التفاعلي"],
    addOnsAr: ["شاشة إضافية: 300 ريال"],
    paymentAr: FIFTY_FIFTY,
  },
  {
    id: "automation",
    model: "fixed",
    priceSar: 3500,
    activity: ["620101", "620113"],
    nameAr: "حزمة أتمتة سير العمل",
    nameEn: "Workflow Automation Package",
    summaryAr: "ربط أدواتك الحالية وأتمتة المهام المتكررة لتوفير الوقت وتقليل الأخطاء.",
    summaryEn: "Connect your existing tools and automate repetitive tasks to save time and reduce errors.",
    deliverablesAr: [
      "تحليل الإجراء الحالي واقتراح مسار الأتمتة كتابياً قبل التنفيذ",
      "بناء حتى 3 مسارات أتمتة، كل مسار حتى 6 خطوات، بين أدوات العميل التي توفر ربطاً (API) أو تدعمها منصة الأتمتة",
      "اختبار كل مسار ببيانات تجريبية قبل التسليم",
      "دليل استخدام مختصر وتسليم الصلاحيات",
    ],
    revisionsAr: "جولة تعديل واحدة لكل مسار بعد الاختبار. التعديلات الإضافية بسعر الساعة بعد موافقتك الكتابية.",
    timelineAr: `7 أيام عمل من استلام الدفعة الأولى وصلاحيات الوصول إلى الأدوات. ${CLIENT_DELAY}`,
    excludesAr: [
      "تطوير برمجيات مخصصة أو ربط أنظمة لا توفر واجهة ربط",
      "نقل البيانات أو تنظيفها",
      "مراقبة المسارات وتشغيلها بعد فترة الدعم",
    ],
    costsAr: "اشتراكات منصة الأتمتة والأدوات المربوطة ورسوم استخدام الواجهات البرمجية على حساب العميل وباسمه.",
    warrantyAr: "14 يوماً من التسليم لإصلاح العيوب في المسارات المسلَّمة ضمن النطاق المتفق عليه، دون رسوم.",
    milestonesAr: ["اعتماد تصميم المسارات", "تسليم المسارات للاختبار", "التشغيل وتسليم الدليل والصلاحيات"],
    paymentAr: FIFTY_FIFTY,
  },

  // ---------------- Starting-from (quotation) ----------------
  {
    id: "ai-assistant",
    model: "from",
    priceSar: 9500,
    activity: ["620113"],
    nameAr: "مساعد ذكاء اصطناعي للأعمال",
    nameEn: "AI Business Assistant",
    summaryAr: "مساعد ذكي يجيب عملاءك أو فريقك من محتوى منشأتك (الموقع، الأسئلة الشائعة، المستندات).",
    summaryEn: "An AI assistant that answers customers or staff from your own content (site, FAQs, documents).",
    deliverablesAr: [
      "يغطي السعر الابتدائي: قناة واحدة (نافذة محادثة على موقع العميل)",
      "الإجابة بالعربية والإنجليزية من محتوى يقدمه العميل، حتى 50 صفحة أو مستنداً",
      "اختبار جودة الإجابات على قائمة أسئلة متفق عليها قبل الإطلاق",
      "دليل تحديث المحتوى وتسليم الصلاحيات",
    ],
    revisionsAr: "جولة تعديل واحدة على أسلوب الإجابات بعد الاختبار؛ وأي جولات إضافية تُحدَّد في عرض السعر.",
    timelineAr: `تُحدَّد في عرض السعر المكتوب. ${CLIENT_DELAY}`,
    excludesAr: [
      "قنوات إضافية (واتساب، تطبيقات) إلا إذا شملها عرض السعر",
      "إعداد المحتوى المصدري أو كتابته",
      "ضمان دقة مطلقة لإجابات الذكاء الاصطناعي؛ نختبر الجودة ونضع ضوابط للحد من الأخطاء",
    ],
    costsAr: "رسوم استخدام نماذج الذكاء الاصطناعي والاستضافة وقواعد البيانات تُدفع من العميل لمزوديها مباشرة، ونقدّر حجمها في عرض السعر.",
    warrantyAr: "30 يوماً من الإطلاق لإصلاح العيوب البرمجية ضمن النطاق المتفق عليه، دون رسوم، وفق تصنيف الأولوية في سياسة الاسترداد.",
    milestonesAr: ["تُحدَّد مراحل التسليم وقيمة كل مرحلة في عرض السعر المكتوب"],
    paymentAr: MILESTONE_PAY,
  },
  {
    id: "saas-mvp",
    model: "from",
    priceSar: 35000,
    activity: ["620102"],
    nameAr: "منصة SaaS أو تطبيق ويب — النسخة الأولى (MVP)",
    nameEn: "SaaS Platform / Web App MVP",
    summaryAr: "بناء النسخة الأولى من منصتك: لوحات تحكم، بوابات عملاء، أنظمة حجز، أو أنظمة إدارة علاقات العملاء.",
    summaryEn: "Build the first version of your platform: dashboards, client portals, booking or CRM systems.",
    deliverablesAr: [
      "جلسة اكتشاف لتحديد النطاق دون رسوم، ثم عرض سعر مكتوب",
      "يغطي السعر الابتدائي: حسابات المستخدمين، ولوحة إدارة، وحتى 3 وحدات وظيفية أساسية",
      "تصميم الواجهات وتطوير الخصائص المتفق عليها في عرض السعر",
      "النشر على بنية سحابية باسم العميل، وتسليم الشيفرة المصدرية والصلاحيات",
    ],
    revisionsAr: "تُحدَّد جولات التعديل لكل مرحلة في عرض السعر؛ والتغييرات خارج النطاق تُعامل كطلب تغيير بتقدير مكتوب.",
    timelineAr: `تُحدَّد في عرض السعر المكتوب. ${CLIENT_DELAY}`,
    excludesAr: [
      "أي خصائص غير مذكورة في عرض السعر",
      "الدعم والتطوير بعد فترة إصلاح العيوب (متاح عبر خطة الشريك التقني أو بالساعة)",
    ],
    costsAr: "الاستضافة والخدمات السحابية وخدمات البريد والرسائل والواجهات البرمجية الخارجية على حساب العميل وباسمه، ونقدّر حجمها في عرض السعر.",
    warrantyAr: "30 يوماً من الإطلاق لإصلاح العيوب البرمجية ضمن النطاق المتفق عليه، دون رسوم، وفق تصنيف الأولوية في سياسة الاسترداد.",
    milestonesAr: ["تُحدَّد مراحل التسليم وقيمة كل مرحلة في عرض السعر المكتوب"],
    paymentAr: MILESTONE_PAY,
  },
  {
    id: "mobile-mvp",
    model: "from",
    priceSar: 45000,
    activity: ["620111"],
    nameAr: "تطبيق جوال — النسخة الأولى (iOS و Android)",
    nameEn: "Mobile App MVP (iOS & Android)",
    summaryAr: "تطبيق جوال للنظامين بخصائصه الأساسية، جاهز للنشر في متاجر التطبيقات.",
    summaryEn: "A cross-platform mobile app with its core features, ready for app-store submission.",
    deliverablesAr: [
      "جلسة اكتشاف لتحديد النطاق دون رسوم، ثم عرض سعر مكتوب",
      "يغطي السعر الابتدائي: حسابات المستخدمين، وحتى 3 وحدات وظيفية أساسية، ولوحة إدارة بسيطة",
      "تطبيق واحد يعمل على iOS و Android",
      "المساعدة في رفع التطبيق إلى المتاجر باسم العميل، وتسليم الشيفرة المصدرية والصلاحيات",
    ],
    revisionsAr: "تُحدَّد جولات التعديل لكل مرحلة في عرض السعر؛ والتغييرات خارج النطاق تُعامل كطلب تغيير بتقدير مكتوب.",
    timelineAr: `تُحدَّد في عرض السعر المكتوب، ولا تشمل مدة مراجعة المتاجر. ${CLIENT_DELAY}`,
    excludesAr: [
      "أي خصائص غير مذكورة في عرض السعر",
      "ضمان قبول التطبيق في المتاجر؛ نعالج ملاحظات المراجعة المتعلقة بعملنا دون رسوم",
      "الدعم والتطوير بعد فترة إصلاح العيوب",
    ],
    costsAr: "رسوم حسابات المطورين في متجري Apple و Google والخدمات السحابية والواجهات البرمجية الخارجية على حساب العميل وباسمه.",
    warrantyAr: "30 يوماً من الإطلاق لإصلاح العيوب البرمجية ضمن النطاق المتفق عليه، دون رسوم، وفق تصنيف الأولوية في سياسة الاسترداد.",
    milestonesAr: ["تُحدَّد مراحل التسليم وقيمة كل مرحلة في عرض السعر المكتوب"],
    paymentAr: MILESTONE_PAY,
  },

  // ---------------- Monthly plans ----------------
  {
    id: "care",
    model: "monthly",
    priceSar: 390,
    activity: ["620102"],
    nameAr: "خطة رعاية الموقع",
    nameEn: "Website Care Plan",
    summaryAr: "صيانة شهرية تبقي موقعك محدثاً وآمناً ومتاحاً.",
    summaryEn: "Monthly maintenance that keeps your website updated, secure and online.",
    deliverablesAr: [
      "تحديثات أمنية وتقنية شهرية للموقع ومكوناته",
      "مراقبة توفر الموقع والتنبيه عند انقطاعه",
      "نسخة احتياطية شهرية (عندما تتيح الاستضافة ذلك)",
      "حتى ساعة واحدة شهرياً لتعديلات المحتوى البسيطة",
      "الرد على الطلبات خلال يومي عمل",
    ],
    revisionsAr: "لا ينطبق؛ الطلبات ضمن الساعة الشهرية، وما زاد عنها بسعر الساعة بعد موافقتك.",
    timelineAr: "تبدأ الخطة خلال يومي عمل من سداد الشهر الأول.",
    excludesAr: [
      "تطوير خصائص أو صفحات جديدة أو إعادة التصميم",
      "إصلاح أعطال سببها تعديلات طرف آخر أو تغييرات مزود الاستضافة",
      "المواقع التي لم نطوّرها إلا بعد فحص أولي مدفوع بسعر الساعة والموافقة عليها",
    ],
    costsAr: "رسوم الاستضافة والنطاق والأدوات الخارجية على حساب العميل وباسمه، ولا تدخل في الاشتراك.",
    warrantyAr: "طوال مدة الاشتراك ضمن نطاق الخطة.",
    paymentAr: MONTHLY_PAY,
  },
  {
    id: "tech-partner",
    model: "monthly",
    priceSar: 2900,
    activity: ["620102", "620104"],
    nameAr: "الشريك التقني الشهري",
    nameEn: "Monthly Tech Partner",
    summaryAr: "فريق تطوير وتصميم تحت الطلب للشركات الناشئة التي لا تملك فريقاً تقنياً داخلياً.",
    summaryEn: "An on-demand development and design team for startups without an in-house tech team.",
    deliverablesAr: [
      "حتى 12 ساعة تطوير أو تصميم أو دعم فني شهرياً لمنتج أو موقع واحد",
      "أولوية الرد على الطلبات خلال يوم عمل واحد",
      "اجتماع متابعة شهري (30 دقيقة، من ضمن الساعات)",
      "تقرير شهري بالساعات والأعمال المنجزة",
    ],
    revisionsAr: "لا ينطبق؛ كل طلب يُنفَّذ من رصيد الساعات الشهري.",
    timelineAr: "تبدأ الخطة خلال يومي عمل من سداد الشهر الأول؛ ومدة كل طلب تُقدَّر عند استلامه.",
    excludesAr: [
      "ترحيل الساعات غير المستخدمة إلى الشهر التالي",
      "أعمال تتجاوز 12 ساعة دون موافقتك الكتابية المسبقة (تُحتسب بسعر الساعة)",
    ],
    costsAr: "الاستضافة والأدوات والخدمات الخارجية على حساب العميل وباسمه.",
    warrantyAr: "نصلح دون خصم من الساعات أي عيب في عمل سلّمناه خلال 30 يوماً من تسليمه.",
    paymentAr: MONTHLY_PAY,
  },

  // ---------------- Hourly ----------------
  {
    id: "extra-hour",
    model: "hourly",
    priceSar: 250,
    activity: ["620102", "620104"],
    nameAr: "ساعة عمل إضافية",
    nameEn: "Additional Work Hour",
    summaryAr: "للتعديلات والأعمال التي تتجاوز نطاق الباقة أو الخطة المتفق عليها.",
    summaryEn: "For changes and work beyond the agreed package or plan scope.",
    deliverablesAr: ["تطوير أو تصميم أو دعم فني وفق طلب مكتوب", "بيان بالساعات المنفذة مع الفاتورة"],
    revisionsAr: "لا ينطبق.",
    timelineAr: "تُقدَّر عند استلام الطلب.",
    excludesAr: ["لا يُنفَّذ أي عمل بالساعة قبل موافقتك الكتابية على عدد الساعات التقديري"],
    costsAr: "أي تكاليف خارجية تُذكر في التقدير وتُدفع من العميل مباشرة.",
    warrantyAr: "14 يوماً لإصلاح العيوب في العمل المنفذ ضمن الطلب المعتمد، دون رسوم.",
    addOnsAr: ["الحد الأدنى ساعة واحدة، ثم تُحتسب بوحدات نصف ساعة"],
    paymentAr: "فاتورة ورابط دفع بعد موافقتك على التقدير، وتُدفع قبل التنفيذ.",
  },
];

export const servicesByModel = (model: PriceModel) => services.filter((s) => s.model === model);

export const formatSar = (n: number) => n.toLocaleString("en-US");

/**
 * Products Future Window is developing that are NOT sold through this merchant
 * account. (Ownership is not asserted here — it is pending the owner's verification.)
 */
export const productsInDevelopment = [
  {
    name: "Eduverse",
    descAr: "منصة تعليمية رقمية لطلاب الجامعات — قيد التطوير، غير مطلقة للعامة، وغير متاحة للشراء.",
    descEn: "A digital learning platform for university students — in development, not publicly launched and not for sale.",
  },
  {
    name: "Alyaf",
    descAr: "تطبيق للياقة البدنية والصحة — قيد التطوير، غير مطلق للعامة، وغير متاح للشراء.",
    descEn: "A fitness and wellness app — in development, not publicly launched and not for sale.",
  },
];

/**
 * The detail rows shown for a service, in display order. Both the web card and
 * the PDF render exactly this list, so they cannot drift apart.
 */
export function serviceFields(s: ServiceItem): { key: keyof typeof fieldLabelsAr; label: string; value: string | string[] }[] {
  const rows: { key: keyof typeof fieldLabelsAr; value?: string | string[] }[] = [
    { key: "deliverables", value: s.deliverablesAr },
    { key: "revisions", value: s.revisionsAr },
    { key: "timeline", value: s.timelineAr },
    { key: "milestones", value: s.milestonesAr },
    { key: "excludes", value: s.excludesAr },
    { key: "costs", value: s.costsAr },
    { key: "warranty", value: s.warrantyAr },
    { key: "addOns", value: s.addOnsAr },
    { key: "payment", value: s.paymentAr },
  ];
  return rows
    .filter((r): r is { key: keyof typeof fieldLabelsAr; value: string | string[] } => r.value !== undefined)
    .map((r) => ({ key: r.key, label: fieldLabelsAr[r.key], value: r.value }));
}
