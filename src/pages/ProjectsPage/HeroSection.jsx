import { FaLongArrowAltRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useLanguageStore from "../../store/languageStore";

function HeroSection({ categories, active, onChange, scrollTo = "#projects" }) {
    const { language, t } = useLanguageStore();
    const isAr = language === 'ar';

    const getCategoryDisplay = (cat) => {
        if (!isAr) return cat;
        if (cat === 'Websites') return 'مواقع إلكترونية';
        if (cat === 'Mobile Apps') return 'تطبيقات جوال';
        if (cat === 'AI / ML') return 'ذكاء اصطناعي';
        if (cat === 'Desktop' || cat === 'Systems') return 'أنظمة وبرمجيات';
        if (cat === 'All') return 'الكل';
        return cat;
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section className="w-full px-4 lg:px-10 py-6 lg:py-10 bg-(--bg-color) overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-[#06150f] px-6 sm:px-10 lg:px-16 pt-16 lg:pt-24 pb-12 lg:pb-16 shadow-2xl shadow-emerald-950/20"
            >
                {/* Glows */}
                <motion.div
                    animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="pointer-events-none absolute -top-44 -start-32 w-130 h-130 rounded-full bg-emerald-500/20 blur-[130px]"
                    aria-hidden="true"
                />
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
                    transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
                    className="pointer-events-none absolute -bottom-52 -end-32 w-120 h-120 rounded-full bg-teal-400/15 blur-[120px]"
                    aria-hidden="true"
                />

                {/* Outlined watermark word with subtle floating motion */}
                <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="pointer-events-none select-none absolute -end-4 lg:end-10 bottom-0 translate-y-[28%] text-[9rem] sm:text-[14rem] lg:text-[20rem] font-black leading-none tracking-tighter text-transparent"
                    style={{ WebkitTextStroke: "1.5px rgba(52,211,153,0.16)" }}
                    aria-hidden="true"
                >
                    {isAr ? 'أعمالنا' : 'Work'}
                </motion.span>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative"
                >
                    <motion.p
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-200 mb-8"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        {t('projectsPage.badge')}
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="max-w-4xl text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white mb-8"
                    >
                        {t('projectsPage.titleLead')}{" "}
                        <span className="bg-linear-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
                            {t('projectsPage.titleHighlight')}
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="max-w-2xl text-base lg:text-lg leading-relaxed text-white/65"
                    >
                        {t('projectsPage.description')}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="mt-10 lg:mt-14 flex flex-wrap items-center gap-x-8 gap-y-5"
                    >
                        <a
                            href={scrollTo}
                            className="group inline-flex items-center gap-3 rounded-full border border-white/15 ps-6 pe-2 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-[#06150f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                        >
                            <span>{t('projectsPage.viewProjects')}</span>
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400 text-[#06150f] rotate-90 transition-transform duration-300 group-hover:translate-y-0.5 motion-reduce:transition-none">
                                <FaLongArrowAltRight />
                            </span>
                        </a>

                        {categories?.length > 0 && (
                            <div className="flex flex-wrap gap-2" role="group" aria-label={t('projectsPage.filterLabel')}>
                                {categories.map((cat) => {
                                    const isActive = cat === active;
                                    return (
                                        <motion.button
                                            key={cat}
                                            type="button"
                                            aria-pressed={isActive}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => onChange?.(cat)}
                                            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${
                                                isActive
                                                    ? "bg-emerald-400 text-[#06150f] font-bold"
                                                    : "border border-white/15 text-white/70 hover:text-white hover:border-white/40"
                                            }`}
                                        >
                                            {getCategoryDisplay(cat)}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default HeroSection;