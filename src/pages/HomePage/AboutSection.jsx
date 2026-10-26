import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineSearch } from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";
import useLanguageStore from "../../store/languageStore";

const serviceIcons = [
    <CgWebsite key="web" />,
    <MdOutlineSearch key="seo" />,
    <SiGooglemarketingplatform key="marketing" />
];

function AboutSection() {
    const { language, t } = useLanguageStore();

    const services = language === 'ar' ? [
        {
            title: "هندسة الويب وتطبيقات الجوال",
            description: "مواقع ويب فائقة السرعة، تطبيقات ويب تفاعلية، وتطبيقات جوال لأنظمة iOS وأندرويد بأكواد برمجية نظيفة وتجربة مستخدم استثنائية.",
        },
        {
            title: "تحسين محركات البحث (SEO)",
            description: "تهيئة تقنية متكاملة، استراتيجية كلمات بحث، وهيكلة محتوى مصممة لتتصدر نتائج البحث وجذب عملاء مستهدفين بدقة.",
        },
        {
            title: "إعلانات جوجل والتسويق الرقمي",
            description: "حملات إعلانية مدفوعة بدقة، وتحسين معدل التحويل (CRO)، وتسويق قائم على الأداء لتحقيق أعلى عائد على الإنفاق الإعلاني.",
        }
    ] : [
        {
            title: "Web & Mobile Engineering",
            description: "High-speed custom websites, responsive web apps, and native/cross-platform iOS & Android mobile applications engineered with clean code and seamless UX.",
        },
        {
            title: "Search Engine Optimization (SEO)",
            description: "Comprehensive technical SEO, keyword strategy, and content architecture designed to dominate organic rankings and capture high-intent search traffic.",
        },
        {
            title: "Google Ads & Digital Marketing",
            description: "Precision-targeted PPC campaigns, conversion rate optimization (CRO), and measurable performance marketing built to maximize ROAS and acquire clients at scale.",
        }
    ];

    return (
        <section className="py-16 lg:py-24 px-5 lg:px-12 xl:px-16 bg-(--bg-color) overflow-hidden">
            <div className="flex lg:justify-between flex-wrap gap-5 w-full">
                {/* header of the section */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <h6 className="text-(--second-color) uppercase tracking-[0.2em] text-xs font-semibold font-mono">
                            {t('about.label')}
                        </h6>
                    </div>
                    <h2 className="text-2xl lg:text-4xl font-extrabold text-(--main-color) tracking-tight">
                        {t('about.title')}
                    </h2>
                </motion.div>

                <div className="flex-1 max-w-3xl">
                    <motion.h3
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl lg:text-3xl font-medium text-(--main-color) leading-relaxed"
                    >
                        {t('about.statement')}
                    </motion.h3>

                    <div className="flex items-center justify-center flex-wrap gap-5 mt-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.45, delay: 0.15 + idx * 0.1 }}
                                whileHover={{ y: -6, scale: 1.02 }}
                                className="bg-[rgba(22,137,113,0.05)] border border-[rgba(22,137,113,0.13)] rounded-xl p-6 w-80 min-h-[260px] flex flex-col shadow-sm transition-shadow duration-300 hover:shadow-lg hover:border-[rgba(22,137,113,0.3)] cursor-default"
                            >
                                <div className="mb-5">
                                    <div className="w-10 h-10 flex items-center justify-center bg-[rgba(22,137,113,0.10)] rounded-md text-2xl text-(--second-color)">
                                        {serviceIcons[idx]}
                                    </div>
                                </div>
                                <div className="mb-2 font-bold text-lg text-(--main-color)">
                                    {service.title}
                                </div>
                                <div className="text-(--main-color) text-[15px] leading-relaxed font-normal">
                                    {service.description}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;