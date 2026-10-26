import { FaLongArrowAltRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useLanguageStore from "../../store/languageStore";

function HeroSection({ scrollTo = "#contact-form" }) {
    const { language, t } = useLanguageStore();
    const isAr = language === 'ar';

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
                className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-[#06150f] px-6 sm:px-10 lg:px-16 py-14 lg:py-20 shadow-2xl shadow-emerald-950/20"
            >
                {/* Glows */}
                <motion.div
                    animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="pointer-events-none absolute -top-40 -end-24 w-120 h-120 rounded-full bg-emerald-500/25 blur-[130px]"
                    aria-hidden="true"
                />
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
                    transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
                    className="pointer-events-none absolute -bottom-48 -start-32 w-110 h-110 rounded-full bg-teal-400/10 blur-[120px]"
                    aria-hidden="true"
                />

                {/* Outlined watermark word */}
                <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="pointer-events-none select-none absolute end-0 lg:end-12 bottom-0 translate-y-[26%] text-[8rem] sm:text-[13rem] lg:text-[19rem] font-black leading-none tracking-tighter text-transparent"
                    style={{ WebkitTextStroke: "1.5px rgba(52,211,153,0.16)" }}
                    aria-hidden="true"
                >
                    {isAr ? 'مرحباً' : 'Hello'}
                </motion.span>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative"
                >
                    <motion.p
                        variants={itemVariants}
                        className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-200 mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 animate-ping motion-reduce:animate-none" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                        </span>
                        {t('contactPage.heroBadge')}
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="max-w-4xl text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white"
                    >
                        {t('contactPage.heroTitleLead')}{" "}
                        <span className="bg-linear-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
                            {t('contactPage.heroTitleHighlight')}
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mt-7 max-w-xl text-base lg:text-lg leading-relaxed text-white/65"
                    >
                        {t('contactPage.heroDesc')}
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-9">
                        <motion.a
                            href={scrollTo}
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            className="group inline-flex items-center gap-3 rounded-full bg-emerald-400 ps-7 pe-2.5 py-2.5 font-bold text-[#06150f] cursor-pointer shadow-lg shadow-emerald-400/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                        >
                            <span>{t('contactPage.sendMessageBtn')}</span>
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#06150f] text-emerald-300 rotate-90 transition-transform duration-300 group-hover:translate-y-0.5">
                                <FaLongArrowAltRight />
                            </span>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default HeroSection;