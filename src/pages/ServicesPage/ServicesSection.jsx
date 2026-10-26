import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import useLanguageStore from "../../store/languageStore";

const servicesEn = [
    {
        id: "01",
        num: "01",
        category: "Web Development",
        title: "Website & Web Application Development",
        description:
            "We design and develop high-performance business websites, custom web apps, and digital experiences tailored to scale your brand and convert visitors.",
        suitedFor:
            "Enterprises, growing startups, and businesses looking for modern, secure, and conversion-focused web platforms.",
        builtToAchieve: [
            "Ultra-fast loading speed and seamless responsive design across all screen sizes",
            "Tailored digital architecture engineered for maximum user engagement and conversion",
            "Scalable front-end & back-end code structure built with modern frameworks",
            "Solid SEO foundation and web vitals optimization for high search engine visibility",
        ],
        canInclude: [
            "Custom Web Applications (React, Next.js)",
            "High-Converting Landing Pages & Portals",
            "E-Commerce & Secure Payment Gateways",
            "RESTful API & Cloud Database Integrations",
            "Interactive UI/UX with Fluid Motion",
            "Technical SEO & Speed Optimization",
        ],
    },
    {
        id: "02",
        num: "02",
        category: "Mobile Apps",
        title: "Cross-Platform Mobile Application Development",
        description:
            "Intuitive, feature-rich mobile applications built to deliver smooth native performance and engaging user journeys across iOS and Android.",
        suitedFor:
            "Businesses and founders seeking to engage customers on mobile with dependable, responsive, and connected native-feel apps.",
        builtToAchieve: [
            "Native feel, high frame-rate performance, and responsive touch gestures",
            "Unified single codebase for simultaneous iOS and Android market release",
            "Secure user authentication, push notifications, and offline data caching",
            "Robust backend connectivity and real-time cloud data synchronization",
        ],
        canInclude: [
            "Cross-Platform Apps (Flutter / React Native)",
            "Interactive UI/UX Design & Prototypes",
            "Push Notifications & Cloud Messaging",
            "Biometric & Social Authentication",
            "In-App Purchases & Payment Gateways",
            "App Store & Google Play Launch Support",
        ],
    },
];

const servicesAr = [
    {
        id: "01",
        num: "01",
        category: "تطوير الويب",
        title: "تطوير المواقع وتطبيقات الويب المتقدمة",
        description:
            "نصمم ونطور مواقع وتطبيقات ويب فائقة السرعة والأداء، مخصصة لتمكين علامتك التجارية وتحويل الزوار إلى عملاء فعليين.",
        suitedFor:
            "الشركات والمؤسسات الناشئة والمتوسطة الراغبة في منصات ويب حديثة وآمنة تحقق أعلى معدلات التحويل.",
        builtToAchieve: [
            "سرعة تحميل فائقة وتصميم متجاوب بسلاسة على كل مقاسات الشاشات",
            "هندسة رقمية مخصصة لتحقيق أعلى تفاعل وتحويل للعملاء",
            "بنية برمجية نظيفة وقابلة للتوسع مبنية بأحدث أطر العمل العالمية",
            "أساس سيو قوي وتحسين مؤشرات أداء الويب لتصدر نتائج محركات البحث",
        ],
        canInclude: [
            "تطبيقات ويب مخصصة (React, Next.js)",
            "صفحات هبوط وبوابات إلكترونية عالية التحويل",
            "متاجر إلكترونية وبوابات دفع إلكتروني آمنة",
            "ربط واجهات برمجة التطبيقات RESTful وقواعد البيانات السحابية",
            "تصميم واجهات وتجارب مستخدم تفاعلية",
            "تهيئة محركات البحث الفنية وتحسين السرعة",
        ],
    },
    {
        id: "02",
        num: "02",
        category: "تطبيقات الجوال",
        title: "تطوير تطبيقات الجوال متعددة المنصات",
        description:
            "تطبيقات جوال بديهية وغنية بالميزات تقدم أداء أصيلاً فائق السلاسة وتجربة استخدام استثنائية على نظامي iOS وأندرويد.",
        suitedFor:
            "الشركات ورواد الأعمال الساعين للتواصل المباشر مع عملائهم عبر تطبيقات جوال سريعة وسهلة الاستخدام.",
        builtToAchieve: [
            "إحساس التطبيقات الأصيلة مع استجابة فورية وحركات لمس انسيابية",
            "كود برمجي موحد للإطلاق المتزامن على متجري App Store و Google Play",
            "توثيق أمني للمستخدمين، وإشعارات فورية، وتخزين بيانات للعمل دون إنترنت",
            "ربط سحابي فوري ومزامنة لحظية للبيانات",
        ],
        canInclude: [
            "تطبيقات متعددة المنصات (Flutter / React Native)",
            "تصميم واجهات ونماذج تفاعلية UI/UX",
            "إشعارات Push والرسائل السحابية",
            "تسجيل دخول بالبصمة ووسائل التواصل",
            "مشتريات داخل التطبيق وبوابات الدفع",
            "الدعم الكامل للإطلاق على المتاجر",
        ],
    },
];

function ServicesSection() {
    const { language } = useLanguageStore();
    const isAr = language === 'ar';
    const rawServices = isAr ? servicesAr : servicesEn;

    const [selectedCategory, setSelectedCategory] = useState('All');

    const allLabel = isAr ? 'الكل' : 'All';
    const categories = [allLabel, ...Array.from(new Set(rawServices.map(s => s.category).filter(Boolean)))];

    const filteredServices = selectedCategory === allLabel || selectedCategory === 'All'
        ? rawServices
        : rawServices.filter(s => s.category === selectedCategory);

    return (
        <section className="w-full font-sans overflow-x-hidden">
            {/* Filters */}
            <div className="w-full flex justify-center py-8">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-(--bg-color) border border-(--main-color) rounded-md flex flex-wrap justify-center gap-2 shadow-sm p-1"
                >
                    {categories.map((category) => {
                        const isActive = selectedCategory === category;
                        return (
                            <motion.button
                                key={category}
                                type="button"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.96 }}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2 rounded-md text-sm font-semibold tracking-wide transition-colors duration-200 cursor-pointer ${
                                    isActive
                                        ? 'bg-(--main-color) text-white'
                                        : 'bg-transparent text-(--main-color) hover:bg-(--main-color)/10'
                                }`}
                                style={isActive ? { boxShadow: '0 2px 8px rgba(31, 106, 80, 0.09)' } : {}}
                            >
                                {category}
                            </motion.button>
                        );
                    })}
                </motion.div>
            </div>

            {/* Services Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedCategory}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {filteredServices.length === 0 ? (
                        <div className="py-20 px-6 max-w-7xl mx-auto">
                            <div className="bg-white border border-[#cde4d8] rounded-3xl p-12 text-center text-[#386650]">
                                <h3 className="text-2xl font-bold text-(--main-color) mb-2">
                                    {isAr ? 'لا توجد خدمات متاحة' : 'No services found'}
                                </h3>
                                <p>{isAr ? 'ستظهر الخدمات هنا فور إضافتها.' : 'Services will appear here once added.'}</p>
                            </div>
                        </div>
                    ) : (
                        <div>
                            {filteredServices.map((service, index) => {
                                const num = service.num || String(index + 1).padStart(2, '0');
                                const isEven = (index + 1) % 2 === 0;

                                return (
                                    <motion.div
                                        key={service.id || index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-60px" }}
                                        transition={{ duration: 0.55 }}
                                        className={`w-full transition-colors ${
                                            isEven ? 'bg-(--main-color) text-white' : 'bg-(--bg-color) text-(--main-color)'
                                        }`}
                                    >
                                        <div className="max-w-7xl mx-auto p-8 sm:p-10 md:p-14 py-16 md:py-24">
                                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

                                                {/* Left Column */}
                                                <div className="lg:col-span-5 space-y-6">
                                                    <div className="flex items-center gap-3">
                                                        <span
                                                            className={`text-3xl font-black ${
                                                                isEven ? 'text-white' : 'text-(--main-color)'
                                                            }`}
                                                        >
                                                            {num}
                                                        </span>
                                                        <span
                                                            className={`text-md font-bold uppercase tracking-[2px] ${
                                                                isEven ? 'text-emerald-400' : 'text-(--second-color)'
                                                            }`}
                                                        >
                                                            {service.category}
                                                        </span>
                                                    </div>

                                                    <h2
                                                        className={`text-3xl sm:text-4xl md:text-5xl font-black leading-tight ${
                                                            isEven ? 'text-white' : 'text-(--main-color)'
                                                        }`}
                                                    >
                                                        {service.title}
                                                    </h2>

                                                    <p
                                                        className={`text-md leading-relaxed ${
                                                            isEven ? 'text-white/70' : 'text-[#386650]'
                                                        }`}
                                                    >
                                                        {service.description}
                                                    </p>

                                                    <div className={`h-[1px] ${isEven ? 'bg-white/10' : 'bg-[#cde4d8]'}`} />

                                                    <div className="space-y-2">
                                                        <span
                                                            className={`text-md font-bold uppercase tracking-[2px] ${
                                                                isEven ? 'text-emerald-400' : 'text-(--second-color)'
                                                            }`}
                                                        >
                                                            {isAr ? 'الأنسب لـ' : 'BEST SUITED FOR'}
                                                        </span>
                                                        <p
                                                            className={`text-md leading-relaxed ${
                                                                isEven ? 'text-white/70' : 'text-[#386650]'
                                                            }`}
                                                        >
                                                            {service.suitedFor}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Right Column */}
                                                <div
                                                    className={`lg:col-span-7 space-y-8 lg:border-s lg:ps-12 ${
                                                        isEven ? 'lg:border-white/10' : 'lg:border-[#cde4d8]'
                                                    }`}
                                                >

                                                    {/* Built to Achieve */}
                                                    {service.builtToAchieve && service.builtToAchieve.length > 0 && (
                                                        <div className="space-y-3">
                                                            <span
                                                                className={`text-md font-bold uppercase tracking-[2px] ${
                                                                    isEven ? 'text-emerald-400' : 'text-(--second-color)'
                                                                }`}
                                                            >
                                                                {isAr ? 'أبرز الأهداف والقدرات' : 'BUILT TO ACHIEVE'}
                                                            </span>
                                                            <ul className="space-y-2.5">
                                                                {service.builtToAchieve.map((item, idx) => (
                                                                    <li
                                                                        key={idx}
                                                                        className={`flex items-start gap-3 text-sm leading-relaxed ${
                                                                            isEven ? 'text-white/90' : 'text-[#386650]'
                                                                        }`}
                                                                    >
                                                                        <span
                                                                            className={`w-1.5 h-1.5 rounded-[1px] mt-2 shrink-0 ${
                                                                                isEven ? 'bg-emerald-400' : 'bg-(--second-color)'
                                                                            }`}
                                                                        />
                                                                        <span>{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    <div className={`h-[1px] ${isEven ? 'bg-white/10' : 'bg-[#cde4d8]'}`} />

                                                    {/* Can Include */}
                                                    {service.canInclude && service.canInclude.length > 0 && (
                                                        <div className="space-y-3">
                                                            <span
                                                                className={`text-md font-bold uppercase tracking-[2px] ${
                                                                    isEven ? 'text-emerald-400' : 'text-(--second-color)'
                                                                }`}
                                                            >
                                                                {isAr ? 'يمكن أن تشمل' : 'CAN INCLUDE'}
                                                            </span>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                                                                {service.canInclude.map((item, idx) => (
                                                                    <div
                                                                        key={idx}
                                                                        className={`flex items-start gap-3 text-sm leading-relaxed ${
                                                                            isEven ? 'text-white/70' : 'text-[#386650]'
                                                                        }`}
                                                                    >
                                                                        <span
                                                                            className={`w-1.5 h-1.5 rounded-[1px] mt-2 shrink-0 ${
                                                                                isEven ? 'bg-emerald-400' : 'bg-(--second-color)'
                                                                            }`}
                                                                        />
                                                                        <span>{item}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Scope Note & Action */}
                                                    <div className="space-y-4 pt-2">
                                                        <p
                                                            className={`text-xs italic ps-3 border-s-2 ${
                                                                isEven
                                                                    ? 'text-white/50 border-emerald-400'
                                                                    : 'text-[#386650] border-(--second-color)'
                                                            }`}
                                                        >
                                                            {isAr
                                                                ? 'تعتمد الميزات والوظائف النهائية على نطاق المشروع المتفق عليه.'
                                                                : 'Final store features depend on the agreed project scope.'}
                                                        </p>

                                                        <Link
                                                            to={`/contact?service=${encodeURIComponent(service.title)}`}
                                                            className={`inline-flex items-center gap-1.5 text-sm font-bold group ${
                                                                isEven
                                                                    ? 'text-white hover:text-emerald-300'
                                                                    : 'text-(--main-color) hover:text-(--second-color)'
                                                            }`}
                                                        >
                                                            <span>
                                                                {isAr ? `ناقش ${service.title}` : `Explore ${service.title}`}
                                                            </span>
                                                            <FiArrowUpRight
                                                                className={`text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-270 ${
                                                                    isEven ? 'text-emerald-400' : 'text-(--second-color)'
                                                                }`}
                                                            />
                                                        </Link>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </section>
    );
}

export default ServicesSection;