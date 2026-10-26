import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from 'react-icons/fa';
import { motion } from "framer-motion";
import useLanguageStore from "../../store/languageStore";

const MotionLink = motion.create(Link);

function CTAsection() {
    const { t } = useLanguageStore();

    return (
        <section className="w-full bg-(--white-color) px-4 lg:px-10 py-10 lg:py-16 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-(--main-color) px-6 sm:px-10 lg:px-16 py-14 lg:py-20 shadow-2xl shadow-[rgba(1,62,44,0.18)]"
            >
                {/* Concentric rings, anchored to the button side */}
                <div className="pointer-events-none absolute -end-40 top-1/2 -translate-y-1/2 hidden md:block" aria-hidden="true">
                    {[560, 420, 280].map((size, idx) => (
                        <motion.div
                            key={size}
                            animate={{ scale: [1, 1.03, 1], opacity: [0.15, 0.25, 0.15] }}
                            transition={{ repeat: Infinity, duration: 6 + idx * 2, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
                            style={{ width: size, height: size }}
                        />
                    ))}
                    <div className="w-140 h-140" />
                </div>

                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="pointer-events-none absolute -bottom-32 -start-24 w-96 h-96 rounded-full bg-emerald-300/20 blur-[100px]"
                />

                <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-16">
                    {/* Text */}
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="inline-flex items-center gap-2.5 rounded-full bg-black/20 backdrop-blur px-4 py-1.5 mb-7 border border-white/10"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 animate-ping motion-reduce:animate-none" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
                            </span>
                            <span className="text-sm font-medium text-white">{t('cta.badge')}</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white mb-6"
                        >
                            {t('cta.title1')}
                            <br />
                            {t('cta.title2')}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="max-w-lg text-base lg:text-lg leading-relaxed text-emerald-50/85"
                        >
                            {t('cta.description')}
                        </motion.p>
                    </div>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="flex flex-col items-start md:items-end gap-4 shrink-0"
                    >
                        <MotionLink
                            to="/contact"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            className="group inline-flex items-center gap-4 rounded-full bg-white ps-8 pe-3 py-3 text-lg font-bold text-emerald-900 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            <span>{t('cta.bookConsultation')}</span>
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-white transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180">
                                <FaLongArrowAltRight />
                            </span>
                        </MotionLink>

                        <Link
                            to="/portfolio"
                            className="text-sm font-semibold text-white/85 border-b border-white/30 pb-0.5 hover:text-white hover:border-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            {t('cta.browseWork')}
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default CTAsection;