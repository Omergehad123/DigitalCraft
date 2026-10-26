import { motion } from "framer-motion";
import useLanguageStore from "../../store/languageStore";

function AdvantagesSection() {
    const { language, t } = useLanguageStore();

    const advantages = language === 'ar' ? [
        {
            id: 1,
            label: "ميزة // 01",
            title: "مصممة وفقاً لأهدافك",
            desc: "نأخذ الوقت الكافي لفهم نشاطك التجاري وجمهورك ورؤيتك قبل بناء الحل البرمجي المناسب تماماً لاحتياجاتك.",
            iconLabel: "رؤيتك، هي بوصلتنا."
        },
        {
            id: 2,
            label: "ميزة // 02",
            title: "تصميم يصنع فارقاً حقيقياً",
            desc: "نجمع بين التصميم العصري وتجارب الاستخدام البديهية لمساعدة عملك على التميز وترك انطباع دائم لدى العملاء.",
            iconLabel: "تميز بهدف ووضوح."
        },
        {
            id: 3,
            label: "ميزة // 03",
            title: "تكنولوجيا تعمل من أجلك",
            desc: "من المواقع المتجاوبة إلى الحلول الرقمية المخصصة، نركز على الأداء والاستقرار وسلاسة العمل لخدمة مشروعك.",
            iconLabel: "مبنية بدقة لتخدمك."
        },
        {
            id: 4,
            label: "ميزة // 04",
            title: "شريك نجاح، لا مجرد مزود خدمة",
            desc: "نؤمن بأن النتائج العظيمة تنبع من التواصل الواضح والتعاون الوثيق والالتزام المشترك بتحويل أفكارك إلى واقع ناجح.",
            iconLabel: "نبني معاً، من الفكرة إلى الإطلاق."
        }
    ] : [
        {
            id: 1,
            label: "ADV // 01",
            title: "Designed Around Your Goals",
            desc: "We take the time to understand your business, your audience, and your vision before building a solution that fits your needs.",
            iconLabel: "Your vision, our direction."
        },
        {
            id: 2,
            label: "ADV // 02",
            title: "Design That Makes an Impact",
            desc: "We combine modern design with intuitive user experiences to help your business stand out and make a lasting impression.",
            iconLabel: "Stand out with purpose."
        },
        {
            id: 3,
            label: "ADV // 03",
            title: "Technology That Works for You",
            desc: "From responsive websites to custom digital solutions, we focus on performance, reliability, and functionality that serves your business.",
            iconLabel: "Built with purpose."
        },
        {
            id: 4,
            label: "ADV // 04",
            title: "A Partner, Not Just a Provider",
            desc: "We believe great results come from clear communication, collaboration, and a shared commitment to bringing your ideas to life.",
            iconLabel: "Built together, from idea to launch."
        }
    ];

    return (
        <section className="w-full bg-(--white-color) py-16 lg:py-24 px-5 lg:px-12 xl:px-16 overflow-hidden">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-(--second-color) font-mono">
                    {t('advantages.label')}
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-(--main-color) mb-4">
                    {t('advantages.title')}
                </h2>
                <p className="max-w-xl text-base text-(--second-color) font-medium">
                    {t('advantages.description')}
                </p>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                {advantages.map((adv, idx) => (
                    <motion.div
                        key={adv.id}
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.45, delay: idx * 0.1 }}
                        whileHover={{ y: -6, scale: 1.02 }}
                        className="bg-(--main-color) rounded-2xl shadow-sm p-6 flex flex-col border border-[rgba(22,137,113,0.15)] hover:border-emerald-400/40 transition-colors"
                        style={{ boxShadow: "0 8px 32px 0 rgba(22,117,79,0.07)" }}
                    >
                        <div className="text-sm font-semibold uppercase tracking-wide text-(--second-color) font-mono">
                            {adv.label}
                        </div>
                        <h3 className="text-xl text-(--white-color) mt-3">{adv.title}</h3>
                        <p className="text-sm text-[#aaa] font-normal mt-2 leading-relaxed">{adv.desc}</p>
                        <span className="text-xs text-(--second-color) mt-auto pt-3 font-mono font-semibold">{adv.iconLabel}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default AdvantagesSection;