import { Link } from 'react-router-dom';
import {
    FiGlobe,
    FiSmartphone,
    FiLayout,
    FiTrendingUp,
    FiSearch,
    FiDatabase,
    FiShoppingBag,
    FiCpu
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import useLanguageStore from '../../store/languageStore';

const marqueeServices = [
    {
        id: 'web',
        icon: FiGlobe,
        tagEn: 'ENGINEERING',
        tagAr: 'هندسة برمجية',
        titleEn: 'Website & Web Application Development',
        titleAr: 'تطوير المواقع وتطبيقات الويب',
    },
    {
        id: 'mobile',
        icon: FiSmartphone,
        tagEn: 'MOBILE',
        tagAr: 'تطبيقات جوال',
        titleEn: 'iOS & Android Mobile Applications',
        titleAr: 'تطوير تطبيقات الآيفون والأندرويد',
    },
    {
        id: 'ecommerce',
        icon: FiShoppingBag,
        tagEn: 'COMMERCE',
        tagAr: 'تجارة إلكترونية',
        titleEn: 'E-Commerce Platforms & Payments',
        titleAr: 'المتاجر الإلكترونية وبوابات الدفع',
    },
    {
        id: 'uiux',
        icon: FiLayout,
        tagEn: 'DESIGN',
        tagAr: 'تصميم واجهات',
        titleEn: 'UI/UX Design & Brand Systems',
        titleAr: 'تصميم واجهات وتجربة المستخدم UI/UX',
    },
    {
        id: 'seo',
        icon: FiSearch,
        tagEn: 'VISIBILITY',
        tagAr: 'تصدر البحث',
        titleEn: 'Technical SEO & Performance Growth',
        titleAr: 'تحسين محركات البحث والتهيئة الفنية',
    },
    {
        id: 'marketing',
        icon: FiTrendingUp,
        tagEn: 'PERFORMANCE',
        tagAr: 'تسويق أداء',
        titleEn: 'Targeted Google Ads & PPC Funnels',
        titleAr: 'إعلانات جوجل والحملات الممولة',
    },
    {
        id: 'backend',
        icon: FiDatabase,
        tagEn: 'ARCHITECTURE',
        tagAr: 'بنية سحابية',
        titleEn: 'Scalable APIs & Cloud Microservices',
        titleAr: 'تطوير الخوادم وواجهات API السحابية',
    },
    {
        id: 'ai',
        icon: FiCpu,
        tagEn: 'INNOVATION',
        tagAr: 'ذكاء اصطناعي',
        titleEn: 'AI Integrations & Workflow Automation',
        titleAr: 'دمج الذكاء الاصطناعي وأتمتة العمليات',
    },
];

function ServicesMarquee() {
    const { language } = useLanguageStore();
    const isAr = language === 'ar';

    // Duplicate services array 3 times to guarantee continuous loop with zero gaps on any screen
    const trackItems = [...marqueeServices, ...marqueeServices, ...marqueeServices, ...marqueeServices];

    return (
        <section
            aria-label="Capabilities Marquee"
            className="w-full relative bg-[#013425] text-white overflow-hidden border-y border-emerald-500/20 shadow-inner"
        >
            {/* Ambient Background Glow */}
            <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                    background: 'radial-gradient(ellipse at 50% 50%, rgba(52, 211, 153, 0.15), transparent 70%)',
                }}
                aria-hidden="true"
            />

            {/* Left and Right Fade Edge Masks */}
            <div
                className="pointer-events-none absolute inset-y-0 start-0 w-24 sm:w-44 z-20 bg-linear-to-r from-[#013425] via-[#013425]/90 to-transparent"
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute inset-y-0 end-0 w-24 sm:w-44 z-20 bg-linear-to-l from-[#013425] via-[#013425]/90 to-transparent"
                aria-hidden="true"
            />

            {/* Infinite Horizontal Marquee Container */}
            <div className="marquee-wrapper relative flex overflow-hidden select-none" dir="ltr">
                <div className="animate-marquee-infinite flex items-center gap-6 sm:gap-8">
                    {trackItems.map((item, idx) => {
                        const Icon = item.icon;
                        const title = isAr ? item.titleAr : item.titleEn;
                        const tag = isAr ? item.tagAr : item.tagEn;

                        return (
                            <Link
                                to="/services"
                                key={`${item.id}-${idx}`}
                                className="group flex items-center gap-3.5 sm:gap-4 shrink-0 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 hover:border-emerald-400 hover:bg-emerald-900/50 transition-all duration-300 shadow-sm"
                            >
                                <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 group-hover:scale-110 group-hover:bg-emerald-400 group-hover:text-emerald-950 transition-all duration-300">
                                    <Icon className="text-sm sm:text-base" />
                                </span>

                                <span
                                    className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-emerald-300/80 uppercase px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/15"
                                    dir={isAr ? "rtl" : "ltr"}
                                >
                                    {tag}
                                </span>

                                <span
                                    className="text-sm sm:text-base font-bold text-white tracking-wide whitespace-nowrap group-hover:text-emerald-200 transition-colors"
                                    dir={isAr ? "rtl" : "ltr"}
                                >
                                    {title}
                                </span>

                                <span className="ms-2 text-emerald-400/50 group-hover:text-emerald-300 transition-colors" aria-hidden="true">
                                    <HiSparkles className="w-3.5 h-3.5" />
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ServicesMarquee;
