import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import {
    LuPanelRight,
    LuSmartphone,
    LuTrendingUp,
    LuTarget,
    LuCheck,
} from "react-icons/lu";
import useLanguageStore from "../../store/languageStore";

const icons = [LuPanelRight, LuSmartphone, LuTrendingUp, LuTarget];

const defaultTools = [
    ["React", "Next.js", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    ["Flutter", "React Native", "Firebase", "REST APIs", "iOS", "Android"],
    ["Technical SEO", "On-Page SEO", "Google Search Console", "Google Analytics", "Core Web Vitals"],
    ["Google Ads", "Meta Ads", "Google Analytics", "Conversion Tracking", "Funnel Strategy"]
];

function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const cardRefs = useRef([]);
    const { language } = useLanguageStore();

    const services = language === 'ar' ? [
        {
            id: "01",
            spec: "خدمة : 01",
            title: "تطوير المواقع وتطبيقات الويب",
            tagline: "مواقع عصرية ومبنية خصيصاً لتحقيق أهداف عملك.",
            description: "نصمم ونطور مواقع الأعمال المتجاوبة، وصفحات الهبوط، والمتاجر الإلكترونية، وتطبيقات الويب المخصصة التي تبرز حضورك الرقمي وتخدم عملاءك بأعلى كفاءة.",
            tools: defaultTools[0],
            icon: icons[0],
            highlights: [
                "تصميم متجاوب وسلس على جميع الأجهزة",
                "واجهات مستخدم نظيفة وسهلة الاستخدام",
                "أداء فائق واستقرار وموثوقية عالية",
            ],
        },
        {
            id: "02",
            spec: "خدمة : 02",
            title: "تطوير تطبيقات الجوال",
            tagline: "حوّل أفكارك إلى تطبيقات جوال متميزة.",
            description: "نحول أفكار التطبيقات إلى تجارب رقمية عملية مع التركيز على الواجهات البديهية والتنقل السلس والوظائف الموثوقة التي تلبي تطلعات مستخدميك.",
            tools: defaultTools[1],
            icon: icons[1],
            highlights: [
                "تجارب استخدام بديهية ومريحة",
                "حلول متعددة المنصات تناسب مشروعك",
                "ربط متكامل مع الخوادم وواجهات API",
            ],
        },
        {
            id: "03",
            spec: "خدمة : 03",
            title: "تحسين محركات البحث (SEO)",
            tagline: "ساعد عملاءك المثاليين على الوصول إليك بسهولة.",
            description: "نطور الأسس الفنية لموقعك وظهوره في نتائج البحث وبنية المحتوى لمساعدة محركات البحث على فهم صفحاتك وزيادة زوارك المستهدفين.",
            tools: defaultTools[2],
            icon: icons[2],
            highlights: [
                "بنية موقع متوافقة تماماً مع معايير البحث",
                "تحسينات فنية متقدمة وسرعة الفهرسة",
                "تحسين مؤشرات الأداء والبيانات الوصفية",
            ],
        },
        {
            id: "04",
            spec: "خدمة : 04",
            title: "التسويق الرقمي والإعلانات الممولة",
            tagline: "اصنع وصولاً قوياً وحوّل الاهتمام إلى مبيعات.",
            description: "نساعد الشركات على بناء حضور رقمي قوي من خلال استراتيجيات إعلانية مستهدفة، وصفحات هبوط تركز على التحويل، وتتبع أداء دقيق.",
            tools: defaultTools[3],
            icon: icons[3],
            highlights: [
                "حملات موجهة لتحقيق أهداف عملك",
                "استهداف دقيق للجمهور وتحسين مستمر",
                "تتبع التحويلات وتقارير أداء دورية",
            ],
        },
    ] : [
        {
            id: "01",
            spec: "service : 01",
            title: "Website & Web Application Development",
            tagline: "Modern websites built around your business goals.",
            description: "We design and develop responsive business websites, landing pages, e-commerce experiences, and custom web applications that help businesses establish their online presence and serve their customers better.",
            tools: defaultTools[0],
            icon: icons[0],
            highlights: [
                "Responsive design across all devices",
                "Clean, user-friendly interfaces",
                "Reliable functionality and performance",
            ],
        },
        {
            id: "02",
            spec: "service : 02",
            title: "Mobile App Development",
            tagline: "Bring your ideas to life on mobile devices.",
            description: "We help turn mobile app ideas into practical digital experiences, focusing on intuitive interfaces, smooth navigation, and reliable functionality that meets your users' needs.",
            tools: defaultTools[1],
            icon: icons[1],
            highlights: [
                "Intuitive and user-friendly experiences",
                "Cross-platform solutions where appropriate",
                "Seamless backend and API integration",
            ],
        },
        {
            id: "03",
            spec: "service : 03",
            title: "Search Engine Optimization (SEO)",
            tagline: "Help the right customers discover your business.",
            description: "We improve your website's technical foundations, search visibility, and content structure to help search engines understand your pages and make it easier for potential customers to find your business.",
            tools: defaultTools[2],
            icon: icons[2],
            highlights: [
                "Search-friendly website structure",
                "Technical SEO and indexing improvements",
                "Performance and metadata optimization",
            ],
        },
        {
            id: "04",
            spec: "service : 04",
            title: "Digital Marketing & Advertising",
            tagline: "Reach your audience and turn interest into action.",
            description: "We help businesses build a stronger digital presence through targeted advertising strategies, conversion-focused landing pages, and performance tracking to support informed marketing decisions.",
            tools: defaultTools[3],
            icon: icons[3],
            highlights: [
                "Campaigns aligned with business goals",
                "Audience targeting and campaign optimization",
                "Conversion tracking and performance insights",
            ],
        },
    ];

    // Scroll listener to detect active service card
    useEffect(() => {
        const handleScroll = () => {
            const cards = cardRefs.current;
            if (!cards || cards.length === 0) return;

            const triggerY = window.innerHeight * 0.38;
            let currentIndex = 0;
            cards.forEach((cardEl, idx) => {
                if (!cardEl) return;
                const rect = cardEl.getBoundingClientRect();
                if (rect.top <= triggerY) {
                    currentIndex = idx;
                }
            });

            setActiveIndex(currentIndex);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSelectService = (idx) => {
        const el = cardRefs.current[idx];
        if (el) {
            const offset = 100;
            const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth"
            });
        }
    };

    const activeService = services[activeIndex] || services[0];
    const progressPercent = Math.round(((activeIndex + 1) / services.length) * 100);

    return (
        <section className="relative w-full py-16 lg:py-24 px-5 lg:px-12 xl:px-16">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(22,117,79,0.06),transparent_60%)]"
            />

            {/* Header of the section */}
            <div className="flex items-end justify-between flex-wrap gap-6 pb-8 mb-12 lg:mb-16 border-b border-[rgba(22,117,79,0.14)]">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <h6 className="text-(--second-color) uppercase tracking-[0.2em] text-xs font-semibold font-mono">
                            {language === 'ar' ? '#2 // مجالات خبرتنا' : '#2 // Our Capabilities'}
                        </h6>
                    </div>
                    <h2 className="text-2xl lg:text-4xl font-extrabold text-(--main-color) tracking-tight">
                        {language === 'ar' ? 'ما نقوم ببنائه' : 'What We Build'}
                    </h2>
                </div>

                <Link
                    to="/services"
                    className="group inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-(--main-color) hover:text-(--second-color) transition-colors"
                >
                    <span>{language === 'ar' ? 'استكشف جميع الخدمات' : 'Explore All Services'}</span>
                    <FaLongArrowAltRight className="transition-transform duration-300 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 rtl:rotate-180" />
                </Link>
            </div>

            {/* Main Interactive Div: Left Title (Sticky) + Right Service Cards */}
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* LEFT COLUMN: Static / Sticky Title & Interactive Navigator */}
                <div className="lg:col-span-5 lg:sticky lg:top-28 z-20 lg:block hidden">
                    <div className="bg-white/90 backdrop-blur-md lg:bg-transparent rounded-2xl p-5 sm:p-7 lg:p-0 border border-[rgba(22,117,79,0.12)] lg:border-none shadow-sm lg:shadow-none">
                        {/* Spec Tag & Progress */}
                        <div className="flex items-center justify-between gap-4 mb-4">
                            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-[rgba(22,117,79,0.10)] text-(--second-color) font-bold">
                                <span className="w-1.5 h-1.5 rounded-full bg-(--second-color)" />
                                {activeService.spec}
                            </span>
                            <span className="font-mono text-xs text-gray-500 font-medium">
                                {String(activeIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                            </span>
                        </div>

                        {/* Dynamic Sticky Title */}
                        <div className="min-h-[70px] sm:min-h-[85px] lg:min-h-[110px] flex items-center">
                            <h3
                                key={activeService.id}
                                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-(--main-color) tracking-tight leading-tight transition-all duration-300"
                            >
                                {activeService.title}
                            </h3>
                        </div>

                        {/* Dynamic Tagline */}
                        <p
                            key={`tagline-${activeService.id}`}
                            className="text-(--second-color) text-sm sm:text-base lg:text-lg mt-3 leading-relaxed max-w-md"
                        >
                            {activeService.tagline}
                        </p>

                        {/* Visual Progress Bar */}
                        <div className="w-full bg-[rgba(22,117,79,0.1)] h-1 rounded-full my-6 overflow-hidden">
                            <div
                                className="bg-(--second-color) h-full transition-all duration-500 ease-out"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>

                        {/* Quick Interactive Index Selector */}
                        <div className="hidden lg:flex flex-col gap-2 my-6">
                            <p className="text-xs uppercase tracking-widest text-[#777] font-mono mb-1 font-semibold">
                                {language === 'ar' ? 'انتقل إلى الخدمة:' : 'Jump to capability:'}
                            </p>
                            {services.map((s, idx) => {
                                const isActive = idx === activeIndex;
                                return (
                                    <button
                                        key={s.id}
                                        type="button"
                                        onClick={() => handleSelectService(idx)}
                                        className={`flex items-center justify-between text-start px-3.5 py-2.5 rounded-xl transition-all duration-300 cursor-pointer ${isActive
                                            ? "bg-[rgba(22,117,79,0.12)] text-(--main-color) font-bold shadow-xs translate-x-1.5 rtl:-translate-x-1.5"
                                            : "text-gray-500 hover:text-(--main-color) hover:bg-[rgba(22,117,79,0.05)] font-medium"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`font-mono text-xs px-1.5 py-0.5 rounded ${isActive
                                                    ? "bg-(--second-color) text-white font-bold"
                                                    : "bg-gray-100 text-gray-500"
                                                    }`}
                                            >
                                                {s.id}
                                            </span>
                                            <span className="text-sm truncate max-w-[260px]">{s.title}</span>
                                        </div>
                                        {isActive && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-(--second-color) animate-pulse" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Service Cards */}
                <div className="lg:col-span-7 flex flex-col gap-10 sm:gap-14 lg:gap-16 pb-12">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={service.id}
                                ref={(el) => (cardRefs.current[index] = el)}
                                data-index={index}
                                className={`relative rounded-3xl p-7 sm:p-10 lg:p-11 transition-all duration-500 ${isActive
                                    ? "bg-[#eaf5ef] border-2 border-[#16754F]/35 shadow-xl shadow-[rgba(22,117,79,0.08)] scale-[1.01]"
                                    : "bg-[#eaf5ef]/90 border border-[#d1e8dc] opacity-85 hover:opacity-100 shadow-sm"
                                    }`}
                            >
                                {isActive && (
                                    <div
                                        aria-hidden="true"
                                        className="absolute -top-[2px] start-8 end-8 h-[3px] bg-gradient-to-r from-transparent via-(--second-color) to-transparent rounded-full"
                                    />
                                )}

                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-(--second-color) uppercase">
                                        {service.spec}
                                    </span>

                                    <div className="w-11 h-11 rounded-xl bg-white/85 border border-[#bfe0ce] flex items-center justify-center text-xl text-(--main-color) shadow-xs transition-transform duration-300 hover:rotate-3">
                                        <Icon />
                                    </div>
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-bold text-(--main-color) mt-6 mb-4 tracking-tight">
                                    {service.title}
                                </h3>

                                <p className="text-[#1a4436] text-base sm:text-lg leading-relaxed font-normal mb-6">
                                    {service.description}
                                </p>

                                <div className="mb-7 grid grid-cols-1 gap-2 pt-1">
                                    {service.highlights.map((highlight, hIdx) => (
                                        <div
                                            key={hIdx}
                                            className="flex items-center gap-2.5 text-xs sm:text-sm text-(--second-color) font-medium"
                                        >
                                            <span className="w-4 h-4 rounded-full bg-[rgba(22,117,79,0.12)] flex items-center justify-center text-[10px] text-(--main-color) shrink-0">
                                                <LuCheck />
                                            </span>
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-5 border-t border-[rgba(22,117,79,0.14)]">
                                    <div className="flex flex-wrap gap-2.5">
                                        {service.tools.map((tool, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white/90 text-xs sm:text-sm font-medium text-(--main-color) border border-[#cbe4d7] shadow-xs hover:border-(--second-color) hover:bg-white transition-all cursor-default"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;