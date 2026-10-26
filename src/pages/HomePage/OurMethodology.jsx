import { motion } from "framer-motion";
import useLanguageStore from "../../store/languageStore";

const stepIcons = [
    (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-(--main-color)" fill="none" key="1">
            <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 9h8M8 12h5M8 15h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
    ),
    (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-(--main-color)" fill="none" key="2">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
    ),
    (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-(--main-color)" fill="none" key="3">
            <rect x="6" y="6" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="m9 10-2 2 2 2m6-4 2 2-2 2m-2-5-2 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-(--main-color)" fill="none" key="4">
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
            <path d="m8.5 12 2.3 2.3 4.7-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-(--main-color)" fill="none" key="5">
            <path d="M4 17l5-5 4 3 7-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 7h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
];

function OurMethodology() {
    const { language, t } = useLanguageStore();

    const methodologySteps = language === 'ar' ? [
        {
            id: "01.",
            title: "الاكتشاف والتخطيط",
            desc: "نتعرف على نشاطك التجاري وأهدافك وجمهورك ومتطلبات المشروع لتحديد الحل الأنسب وخريطة طريق واضحة.",
            sublabel: "فهم واستكشاف",
        },
        {
            id: "02.",
            title: "التصميم وتجربة المستخدم",
            desc: "نبلور أفكارك في تجارب مستخدم تفاعلية جذابة وتخطيطات مدروسة وهوية بصرية عصرية وسهلة التصفح.",
            sublabel: "تصميم وإبداع",
        },
        {
            id: "03.",
            title: "التطوير والدمج التقني",
            desc: "نحول التصاميم المعتمدة إلى منتجات رقمية متكاملة، ونبني واجهات سريعة ونربط الأدوات والأنظمة التي يحتاجها مشروعك.",
            sublabel: "بناء وتطوير",
        },
        {
            id: "04.",
            title: "الفحص والاختبار والإطلاق",
            desc: "نراجع الوظائف وسرعة الاستجابة وسهولة الاستخدام، ونصلح أي ملاحظات، ونجهز موقعك أو تطبيقك لإطلاق سلس ومثالي.",
            sublabel: "تسليم وإطلاق",
        },
        {
            id: "05.",
            title: "الدعم والتطوير المستمر",
            desc: "بعد الإطلاق، نواصل دعم وصيانة منتجك الرقمي وحل أي استفسارات وتطوير الميزات الجديدة مع نمو وتوسع أعمالك.",
            sublabel: "نمو مستدام",
        },
    ] : [
        {
            id: "01.",
            title: "Discovery & Planning",
            desc: "We learn about your business, goals, target audience, and project requirements to define the right solution and a clear direction.",
            sublabel: "UNDERSTAND",
        },
        {
            id: "02.",
            title: "Design & Experience",
            desc: "We shape your ideas into clear, engaging user experiences with thoughtful layouts, modern visuals, and intuitive navigation.",
            sublabel: "DESIGN",
        },
        {
            id: "03.",
            title: "Development & Integration",
            desc: "We turn approved designs into functional digital products, building responsive interfaces and connecting the tools and systems your project needs.",
            sublabel: "BUILD",
        },
        {
            id: "04.",
            title: "Testing & Launch",
            desc: "We review functionality, responsiveness, and usability, fix issues, and prepare your website or application for a smooth launch.",
            sublabel: "DELIVER",
        },
        {
            id: "05.",
            title: "Support & Improvement",
            desc: "After launch, we can help maintain your digital product, resolve issues, and make improvements as your business and needs evolve.",
            sublabel: "GROW",
        },
    ];

    return (
        <section className="w-full bg-(--bg-color) py-16 lg:py-24 px-5 lg:px-12 xl:px-16 overflow-hidden">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--second-color) font-mono">
                    {t('methodology.label')}
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-(--main-color) mb-4 leading-tight">
                    {t('methodology.title')}
                </h2>
                <p className="max-w-2xl text-base md:text-lg text-(--second-color) font-medium leading-relaxed">
                    {t('methodology.description')}
                </p>
            </motion.div>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {methodologySteps.map((step, idx) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.45, delay: idx * 0.08 }}
                        whileHover={{ y: -6, scale: 1.02 }}
                        className="rounded-2xl bg-white border border-[rgba(22,137,113,0.12)] hover:border-[rgba(22,137,113,0.3)] shadow-sm p-6 flex flex-col gap-4 transition-colors"
                        style={{ boxShadow: "0 6px 24px 0 rgba(22,117,79,0.08)" }}
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-mono text-xs px-2 py-0.5 rounded bg-(--bg-color) text-(--second-color) font-bold tracking-wider">
                                {step.id}
                            </span>
                            <div className="opacity-80">
                                {stepIcons[idx]}
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-(--main-color)">{step.title}</h3>
                        <p className="text-[15px] text-[#52726B] font-normal leading-relaxed">{step.desc}</p>
                        <span className="text-xs text-(--second-color) mt-auto pt-2 font-mono font-semibold tracking-wide uppercase">
                            {step.sublabel}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default OurMethodology;