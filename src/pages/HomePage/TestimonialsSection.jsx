import { useRef } from 'react';
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { FiMessageSquare, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import useLanguageStore from "../../store/languageStore";

// Empty testimonials array by default - mock data removed as requested
const testimonialsData = [];

function TestimonialCard({ item, language }) {
    const isAr = language === 'ar';
    const name = isAr ? (item.nameAr || item.name) : (item.nameEn || item.name);
    const role = isAr ? (item.roleAr || item.role) : (item.roleEn || item.role);
    const company = isAr ? (item.companyAr || item.company) : (item.companyEn || item.company);
    const content = isAr ? (item.contentAr || item.content) : (item.contentEn || item.content);
    const rating = item.rating || 5;

    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-sm p-7 flex flex-col justify-between w-full h-full border border-[rgba(22,137,113,0.12)] hover:border-[rgba(22,137,113,0.3)] transition-colors relative overflow-hidden"
            style={{ boxShadow: "0 8px 32px 0 rgba(22,117,79,0.06)" }}
        >
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: rating }).map((_, i) => (
                        <FaStar key={i} className="text-sm fill-current" />
                    ))}
                </div>
                <FaQuoteLeft className="text-2xl text-[rgba(22,137,113,0.15)] rtl:rotate-180" />
            </div>

            <p className="text-[#335048] text-sm sm:text-base leading-relaxed mb-6 italic">
                "{content}"
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-[rgba(22,117,79,0.1)] mt-auto">
                {item.avatar ? (
                    <img
                        src={item.avatar}
                        alt={name}
                        className="w-12 h-12 rounded-full object-cover border border-[rgba(22,137,113,0.2)]"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-[rgba(22,137,113,0.12)] text-(--main-color) font-bold flex items-center justify-center text-base border border-[rgba(22,137,113,0.2)]">
                        {name ? name.charAt(0) : 'C'}
                    </div>
                )}
                <div>
                    <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-(--main-color) text-sm sm:text-base leading-snug">
                            {name}
                        </h4>
                        <FiCheckCircle className="text-(--second-color) text-xs" title="Verified Client" />
                    </div>
                    <p className="text-xs text-[#52726B]">
                        {role} {company && `• ${company}`}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default function TestimonialsSection({ testimonials = testimonialsData }) {
    const swiperRef = useRef(null);
    const { language } = useLanguageStore();
    const isAr = language === 'ar';

    const hasTestimonials = Boolean(testimonials && testimonials.length > 0);

    return (
        <section className="w-full py-16 lg:py-24 px-5 lg:px-12 xl:px-16 bg-white overflow-x-hidden">
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
                            {isAr ? '#6 // آراء العملاء' : '#6 // CLIENT TESTIMONIALS'}
                        </h6>
                    </div>
                    <h2 className="text-2xl lg:text-4xl font-extrabold text-(--main-color) tracking-tight">
                        {isAr ? 'ماذا يقول عملاؤنا عن العمل معنا' : 'What Our Clients Say About Us'}
                    </h2>
                </div>
                <p className="text-[#52726B] text-sm sm:text-base max-w-md">
                    {isAr
                        ? 'نعتز بثقة شركائنا ونسعى دائماً لبناء علاقات طويلة الأمد قائمة على النتائج الحقيقية.'
                        : 'We take pride in the trust of our partners, building long-term relationships centered on measurable growth.'}
                </p>
            </motion.div>

            {/* Conditionally Render Testimonials Slider or Coming Soon State */}
            {hasTestimonials ? (
                <>
                    <div className="flex items-center justify-start gap-3 mb-6">
                        <motion.button
                            type="button"
                            aria-label="Previous testimonial"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-(--main-color) text-(--main-color) transition-colors hover:bg-(--main-color) hover:text-(--white-color) cursor-pointer"
                        >
                            <FaLongArrowAltLeft className="rtl:rotate-180" />
                        </motion.button>
                        <motion.button
                            type="button"
                            aria-label="Next testimonial"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => swiperRef.current?.slideNext()}
                            className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-(--main-color) text-(--main-color) transition-colors hover:bg-(--main-color) hover:text-(--white-color) cursor-pointer"
                        >
                            <FaLongArrowAltRight className="rtl:rotate-180" />
                        </motion.button>
                    </div>

                    <Swiper
                        className="testimonials-swiper"
                        key={language}
                        dir={isAr ? 'rtl' : 'ltr'}
                        slidesPerView={3}
                        spaceBetween={28}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        loop={testimonials.length > 3}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {testimonials.map((item, idx) => (
                            <SwiperSlide key={item.id || idx}>
                                <TestimonialCard item={item} language={language} />
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
                    className="relative overflow-hidden rounded-3xl bg-(--bg-color) border border-[rgba(22,137,113,0.18)] p-8 sm:p-12 lg:p-16 text-center shadow-lg shadow-[rgba(22,117,79,0.06)]"
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
                            {isAr ? 'قريباً // آراء العملاء' : 'COMING SOON // CLIENT TESTIMONIALS'}
                        </span>

                        <div className="w-14 h-14 rounded-2xl bg-[rgba(22,137,113,0.10)] border border-[rgba(22,137,113,0.2)] flex items-center justify-center text-2xl text-(--second-color) mb-5">
                            <FiMessageSquare />
                        </div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-(--main-color) tracking-tight mb-4">
                            {isAr ? 'آراء وتجارب عملائنا قادمة قريباً' : 'Client Reviews & Stories Coming Soon'}
                        </h3>

                        <p className="text-[#52726B] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                            {isAr
                                ? 'نعمل حالياً على توثيق شهادات وتقييمات شركائنا في النجاح بعد إطلاق مشاريعهم الرقمية الجديدة. ترقبوا إطلاق هذا القسم قريباً!'
                                : 'We are currently compiling verified reviews and testimonials from our partners across our latest web and mobile deployments. Stay tuned!'}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-(--main-color) hover:bg-(--second-color) text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                            >
                                <span>{isAr ? 'كن قصة نجاحنا القادمة' : 'Become Our Next Success Story'}</span>
                                <FiArrowRight className="text-base rtl:rotate-180" />
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(22,137,113,0.3)] hover:border-(--main-color) text-(--main-color) font-bold text-sm transition-colors hover:bg-emerald-50/50"
                            >
                                <span>{isAr ? 'استكشف خدماتنا' : 'Explore Our Services'}</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </section>
    );
}
