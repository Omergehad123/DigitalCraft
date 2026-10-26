import { useRef } from 'react';
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { FiLayers, FiArrowRight } from 'react-icons/fi';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import useLanguageStore from "../../store/languageStore";

// Empty projects array - mock data removed as requested
const projectsData = [];

function ProjectCard({ project, language, liveText }) {
    const isAr = language === 'ar';
    const title = isAr ? project.titleAr : project.titleEn;
    const desc = isAr ? project.descAr : project.descEn;
    const category = isAr ? project.categoryAr : project.categoryEn;

    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-5 w-full h-full border border-[rgba(22,137,113,0.12)] hover:border-[rgba(22,137,113,0.3)] transition-colors"
            style={{ boxShadow: "0 8px 32px 0 rgba(22,117,79,0.07)" }}
        >
            <div className="relative overflow-hidden rounded-lg">
                <span className="absolute top-3 start-3 z-10 bg-(--main-color) text-(--white-color) text-xs font-semibold px-3 py-1 rounded-full border border-[rgba(22,137,113,0.15)] uppercase tracking-wide shadow-sm">
                    {category}
                </span>
                <motion.img
                    src={project.image}
                    alt={title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-44 object-cover rounded-lg border border-[rgba(22,137,113,0.09)]"
                />
            </div>
            <div>
                <h3 className="text-lg font-extrabold text-(--main-color) leading-snug">
                    {title}
                </h3>
                <p className="text-sm text-[#52726B] font-normal mb-4 mt-1 min-h-[48px]">
                    {desc}
                </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
                {project.techs?.map((tech) => (
                    <span
                        key={tech}
                        className="bg-[rgba(22,137,113,0.10)] px-3 py-1 rounded font-semibold text-xs text-(--main-color) border border-[rgba(22,137,113,0.19)]"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <a
                href={project.site || "#"}
                className="mt-auto flex items-center gap-2 font-semibold text-[--second-color] hover:text-(--main-color) text-[15px] transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
            >
                {liveText}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3" />
                </svg>
            </a>
        </motion.div>
    );
}

function ProjectsSection({ projects = projectsData }) {
    const swiperRef = useRef(null);
    const { language, t } = useLanguageStore();
    const isAr = language === 'ar';

    const hasProjects = projects && projects.length > 0;

    return (
        <section className="w-full py-16 lg:py-24 px-5 lg:px-12 xl:px-16 bg-(--bg-color) overflow-x-hidden">
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="flex items-end justify-between flex-wrap gap-6 pb-8 mb-12 lg:mb-16 border-b border-[rgba(22,117,79,0.14)]"
            >
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <h6 className="text-(--second-color) uppercase tracking-[0.2em] text-xs font-semibold font-mono">
                            {t('homeProjects.label')}
                        </h6>
                    </div>
                    <h2 className="text-2xl lg:text-4xl font-extrabold text-(--main-color) tracking-tight">
                        {t('homeProjects.title')}
                    </h2>
                </div>
                <Link
                    to="/portfolio"
                    className="group inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-(--main-color) hover:text-(--second-color) transition-colors"
                >
                    <span>{isAr ? 'استكشف معرض الأعمال كاملاً' : 'Explore Full Portfolio'}</span>
                    <FaLongArrowAltRight className="transition-transform duration-300 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 rtl:rotate-180" />
                </Link>
            </motion.div>

            {/* Conditionally Render Slider or Coming Soon State */}
            {hasProjects ? (
                <>
                    <div className="flex items-center justify-start gap-3 mb-6">
                        <motion.button
                            type="button"
                            aria-label="Previous slide"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-(--main-color) text-(--main-color) transition-colors hover:bg-(--main-color) hover:text-(--white-color) cursor-pointer"
                        >
                            <FaLongArrowAltLeft className="rtl:rotate-180" />
                        </motion.button>
                        <motion.button
                            type="button"
                            aria-label="Next slide"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => swiperRef.current?.slideNext()}
                            className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-(--main-color) text-(--main-color) transition-colors hover:bg-(--main-color) hover:text-(--white-color) cursor-pointer"
                        >
                            <FaLongArrowAltRight className="rtl:rotate-180" />
                        </motion.button>
                    </div>

                    <Swiper
                        className="projects-swiper"
                        key={language}
                        dir={isAr ? 'rtl' : 'ltr'}
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        loop
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {projects.map((project, idx) => (
                            <SwiperSlide key={project.titleEn || idx}>
                                <ProjectCard
                                    project={project}
                                    language={language}
                                    liveText={t('common.liveLink')}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            ) : (
                /* Premium Coming Soon State */
                <motion.div
                    initial={{ opacity: 0, y: 25, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.55 }}
                    className="relative overflow-hidden rounded-3xl bg-white border border-[rgba(22,137,113,0.18)] p-8 sm:p-12 lg:p-16 text-center shadow-lg shadow-[rgba(22,117,79,0.06)]"
                >
                    {/* Subtle Background Glow */}
                    <div
                        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-emerald-400/10 blur-[100px]"
                        aria-hidden="true"
                    />

                    <div className="relative max-w-2xl mx-auto flex flex-col items-center">
                        <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[rgba(22,137,113,0.10)] border border-[rgba(22,137,113,0.22)] text-(--second-color) text-xs font-mono font-bold tracking-wider uppercase mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-(--second-color) opacity-75 animate-ping" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-(--second-color)" />
                            </span>
                            {isAr ? 'قريباً // قيد التوثيق' : 'COMING SOON // IN PRODUCTION'}
                        </span>

                        <div className="w-14 h-14 rounded-2xl bg-[rgba(22,137,113,0.10)] border border-[rgba(22,137,113,0.2)] flex items-center justify-center text-2xl text-(--second-color) mb-5">
                            <FiLayers />
                        </div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-(--main-color) tracking-tight mb-4">
                            {isAr ? 'أعمالنا ودراسات الحالة قيد التجهيز' : 'Featured Case Studies Coming Soon'}
                        </h3>

                        <p className="text-[#52726B] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                            {isAr
                                ? 'نعمل حالياً على توثيق نخبة من أحدث منتجاتنا الرقمية وقصص نجاح عملائنا لإطلاقها هنا قريباً جداً.'
                                : 'We are currently curating and documenting our latest client success stories and digital products. Stay tuned for the upcoming launch!'}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-(--main-color) hover:bg-(--second-color) text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                            >
                                <span>{isAr ? 'ابدأ مشروعك معنا' : 'Start a Project With Us'}</span>
                                <FiArrowRight className="text-base rtl:rotate-180" />
                            </Link>
                            <Link
                                to="/portfolio"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(22,137,113,0.3)] hover:border-(--main-color) text-(--main-color) font-bold text-sm transition-colors hover:bg-emerald-50/50"
                            >
                                <span>{isAr ? 'عرض معرض الأعمال' : 'Browse Portfolio Page'}</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </section>
    );
}

export default ProjectsSection;


