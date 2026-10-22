import { useRef } from 'react';
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import useLanguageStore from "../../store/languageStore";

const projectsData = [
    {
        categoryEn: "Enterprise",
        categoryAr: "منصات مؤسسية",
        titleEn: "Aetheria Cloud Infrastructure",
        titleAr: "بنية أثيريا السحابية",
        descEn: "A mission-critical global telemetry and cloud resource orchestration backend, engineered to handle over 40 million concurrent telemetry events with zero downtime.",
        descAr: "نظام قياس وإدارة موارد سحابية للمؤسسات مصمم لمعالجة أكثر من 40 مليون عملية متزامنة دون أي توقف في الخدمة.",
        techs: ["React", "Node.js", "AWS", "TimescaleDB", "Microservices"],
        image: "project1.png",
        site: "https://aetheria.cloud/casestudy",
    },
    {
        categoryEn: "Health & Fitness",
        categoryAr: "الصحة واللياقة",
        titleEn: "Pulse360 Fitness Tracker",
        titleAr: "تطبيق النبض 360 الرياضي",
        descEn: "Cross-platform native mobile app delivering real-time health insights with live biometric integration, AI workout guidance, and offline-first exercise logging.",
        descAr: "تطبيق جوال متعدد المنصات يقدم بيانات صحية فورية مع دمج القياسات الحيوية وتوجيه التمارين بالذكاء الاصطناعي.",
        techs: ["React Native", "TensorFlow Lite", "Firebase", "Apple HealthKit"],
        image: "project2.png",
        site: "https://pulse360.com/casestudy",
    },
    {
        categoryEn: "E-Commerce",
        categoryAr: "تجارة إلكترونية",
        titleEn: "Lumen Marketplace",
        titleAr: "سوق لومن التجاري",
        descEn: "A high-conversion storefront and vendor dashboard with realtime inventory, checkout optimization, and campaign analytics for multi-brand retail teams.",
        descAr: "متجر إلكتروني فائق التحويل ولوحة تحكم متطورة للبائعين مع تتبع فوري للمخزون وتحليلات دقيقة للمبيعات.",
        techs: ["Next.js", "Stripe", "PostgreSQL", "Redis", "Tailwind"],
        image: "project1.png",
        site: "https://lumen.shop/casestudy",
    },
    {
        categoryEn: "Fintech",
        categoryAr: "تكنولوجيا مالية",
        titleEn: "Northline Payments",
        titleAr: "بوابة نورث لاين للمدفوعات",
        descEn: "Secure payment orchestration with fraud scoring, settlement reporting, and a merchant portal designed for high-volume transaction workflows.",
        descAr: "معالجة مدفوعات آمنة مع نظام كشف الاحتيال وتقارير تسوية مالية وبوابة تجار للمدفوعات الضخمة.",
        techs: ["React", "Go", "Kafka", "PostgreSQL", "Kubernetes"],
        image: "project2.png",
        site: "https://northline.pay/casestudy",
    },
    {
        categoryEn: "SaaS",
        categoryAr: "برمجيات SaaS",
        titleEn: "Harbor Ops Platform",
        titleAr: "منصة عمليات هاربور",
        descEn: "An operations console for distributed teams with live status boards, role-based access, and automated incident routing across regions.",
        descAr: "منصة إدارة عمليات للفرق الموزعة مع لوحات متابعة فورية وإدارة صلاحيات وأتمتة مسارات الحوادث التقنية.",
        techs: ["React", "TypeScript", "GraphQL", "Node.js", "MongoDB"],
        image: "project1.png",
        site: "https://harborops.io/casestudy",
    },
];

function ProjectCard({ project, language, liveText }) {
    const isAr = language === 'ar';
    const title = isAr ? project.titleAr : project.titleEn;
    const desc = isAr ? project.descAr : project.descEn;
    const category = isAr ? project.categoryAr : project.categoryEn;

    return (
        <div
            className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-5 w-full h-full border border-[rgba(22,137,113,0.10)]"
            style={{ boxShadow: "0 8px 32px 0 rgba(22,117,79,0.07)" }}
        >
            <div className="relative">
                <span className="absolute top-3 start-3 z-10 bg-(--main-color) text-(--white-color) text-xs font-semibold px-3 py-1 rounded-full border border-[rgba(22,137,113,0.15)] uppercase tracking-wide shadow-sm">
                    {category}
                </span>
                <img
                    src={project.image}
                    alt={title}
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
                {project.techs.map((tech) => (
                    <span
                        key={tech}
                        className="bg-[rgba(22,137,113,0.10)] px-3 py-1 rounded font-semibold text-xs text-(--main-color) border border-[rgba(22,137,113,0.19)]"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <a
                href={project.site}
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
        </div>
    );
}

function ProjectsSection() {
    const swiperRef = useRef(null);
    const { language, t } = useLanguageStore();

    return (
        <section className="w-full py-16 lg:py-24 px-5 lg:px-12 xl:px-16 bg-(--bg-color) overflow-x-hidden">
            <div className="flex items-end justify-between flex-wrap gap-6 pb-8 mb-12 lg:mb-16 border-b border-[rgba(22,117,79,0.14)]">
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
                    <span>{language === 'ar' ? 'استكشف معرض الأعمال كاملاً' : 'Explore Full Portfolio'}</span>
                    <FaLongArrowAltRight className="transition-transform duration-300 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 rtl:rotate-180" />
                </Link>
            </div>

            <div className="flex items-center justify-start gap-3 mb-6">
                <button
                    type="button"
                    aria-label="Previous slide"
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-(--main-color) text-(--main-color) transition-all duration-300 hover:bg-(--main-color) hover:text-(--white-color) cursor-pointer"
                >
                    <FaLongArrowAltLeft className="rtl:rotate-180" />
                </button>
                <button
                    type="button"
                    aria-label="Next slide"
                    onClick={() => swiperRef.current?.slideNext()}
                    className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-(--main-color) text-(--main-color) transition-all duration-300 hover:bg-(--main-color) hover:text-(--white-color) cursor-pointer"
                >
                    <FaLongArrowAltRight className="rtl:rotate-180" />
                </button>
            </div>

            <Swiper
                className="projects-swiper"
                key={language}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
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
                {projectsData.map((project) => (
                    <SwiperSlide key={project.titleEn}>
                        <ProjectCard
                            project={project}
                            language={language}
                            liveText={t('common.liveLink')}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default ProjectsSection;
