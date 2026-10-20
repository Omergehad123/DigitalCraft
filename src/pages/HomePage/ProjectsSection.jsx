import { useRef } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
    {
        category: "Enterprise",
        title: "Aetheria Cloud Infrastructure",
        description:
            "A mission-critical global telemetry and cloud resource orchestration backend, engineered to handle over 40 million concurrent telemetry events with zero downtime.",
        techs: ["React", "Node.js", "AWS", "TimescaleDB", "Microservices"],
        image: "project1.png",
        site: "https://aetheria.cloud/casestudy",
    },
    {
        category: "Health & Fitness",
        title: "Pulse360 Fitness Tracker",
        description:
            "Cross-platform native mobile app delivering real-time health insights with live biometric integration, AI workout guidance, and offline-first exercise logging.",
        techs: ["React Native", "TensorFlow Lite", "Firebase", "Apple HealthKit", "Android Sensors"],
        image: "project2.png",
        site: "https://pulse360.com/casestudy",
    },
    {
        category: "E-Commerce",
        title: "Lumen Marketplace",
        description:
            "A high-conversion storefront and vendor dashboard with realtime inventory, checkout optimization, and campaign analytics for multi-brand retail teams.",
        techs: ["Next.js", "Stripe", "PostgreSQL", "Redis", "Tailwind"],
        image: "project1.png",
        site: "https://lumen.shop/casestudy",
    },
    {
        category: "Fintech",
        title: "Northline Payments",
        description:
            "Secure payment orchestration with fraud scoring, settlement reporting, and a merchant portal designed for high-volume transaction workflows.",
        techs: ["React", "Go", "Kafka", "PostgreSQL", "Kubernetes"],
        image: "project2.png",
        site: "https://northline.pay/casestudy",
    },
    {
        category: "SaaS",
        title: "Harbor Ops Platform",
        description:
            "An operations console for distributed teams with live status boards, role-based access, and automated incident routing across regions.",
        techs: ["React", "TypeScript", "GraphQL", "Node.js", "MongoDB"],
        image: "project1.png",
        site: "https://harborops.io/casestudy",
    },
    {
        category: "Education",
        title: "Atlas Learning Hub",
        description:
            "A learner platform with adaptive courses, progress analytics, and instructor tools built for high-concurrency live classrooms.",
        techs: ["Next.js", "WebRTC", "Prisma", "PostgreSQL", "AWS"],
        image: "project2.png",
        site: "https://atlaslearn.app/casestudy",
    },
];

function ProjectCard({ project }) {
    return (
        <div
            className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-5 w-full h-full border border-[rgba(22,137,113,0.10)]"
            style={{ boxShadow: "0 8px 32px 0 rgba(22,117,79,0.07)" }}
        >
            <div className="relative">
                <span className="absolute top-3 left-3 z-10 bg-(--main-color) text-(--white-color) text-xs font-semibold px-3 py-1 rounded-full border border-[rgba(22,137,113,0.15)] uppercase tracking-wide shadow-sm">
                    {project.category}
                </span>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover rounded-lg border border-[rgba(22,137,113,0.09)]"
                />
            </div>
            <div>
                <h3 className="text-lg font-extrabold text-(--main-color) leading-snug">
                    {project.title}
                </h3>
                <p className="text-sm text-[#52726B] font-normal mb-4 mt-1 min-h-[48px]">
                    {project.description}
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
                Live Link
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3" />
                </svg>
            </a>
        </div>
    );
}

function ProjectsSection() {
    const swiperRef = useRef(null);

    return (
        <section className="w-full py-16 lg:py-24 px-5 lg:px-12 xl:px-16 bg-(--bg-color) overflow-x-hidden">
            <div className="flex items-end justify-between flex-wrap gap-6 pb-8 mb-12 lg:mb-16 border-b border-[rgba(22,117,79,0.14)]">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <h6 className="text-(--second-color) uppercase tracking-[0.2em] text-xs font-semibold font-mono">
                            #3 // Selected Work
                        </h6>
                    </div>
                    <h2 className="text-2xl lg:text-4xl font-extrabold text-(--main-color) tracking-tight">
                        Real Digital Experiences
                    </h2>
                </div>
                <a
                    href="/projects"
                    className="group inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-(--main-color) hover:text-(--second-color) transition-colors"
                >
                    <span>Explore Full Portfolio</span>
                    <FaLongArrowAltRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
            </div>

            <div className="flex items-center justify-start gap-3 mb-6">
                <button
                    type="button"
                    aria-label="Previous slide"
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-(--main-color) text-(--main-color) transition-all duration-300 hover:bg-(--main-color) hover:text-(--white-color) cursor-pointer"
                >
                    <FaLongArrowAltLeft />
                </button>
                <button
                    type="button"
                    aria-label="Next slide"
                    onClick={() => swiperRef.current?.slideNext()}
                    className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-(--main-color) text-(--main-color) transition-all duration-300 hover:bg-(--main-color) hover:text-(--white-color) cursor-pointer"
                >
                    <FaLongArrowAltRight />
                </button>
            </div>

            <Swiper
                className="projects-swiper"
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
                {projects.map((project) => (
                    <SwiperSlide key={project.title}>
                        <ProjectCard project={project} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default ProjectsSection;
