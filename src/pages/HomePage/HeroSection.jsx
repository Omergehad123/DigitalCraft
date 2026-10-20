import Button from "../../component/ui/Button";
import OutlineBtn from "../../component/ui/OutlineBtn";

// Replace these placeholder numbers with your real figures (or delete the stats row).
const stats = [
    { value: "10+", label: "Projects delivered" },
    { value: "20+", label: "Happy clients" },
    { value: "2+", label: "Years of experience" },
];

const services = ["Web development", "Mobile apps", "SEO", "Google Ads", "Maintenance"];

function CheckIcon() {
    return (
        <svg
            viewBox="0 0 20 20"
            className="h-4 w-4 shrink-0 text-(--main-color)"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.31a1 1 0 0 1-1.42.003L3.29 9.27a1 1 0 1 1 1.42-1.41l4.04 4.07 6.54-6.64a1 1 0 0 1 1.414-.001Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function HeroSection() {
    return (
        <section className="relative isolate w-full overflow-hidden bg-(--bg-color)">
            <div className="mx-auto grid min-h-[90vh] w-[90%] max-w-7xl items-center gap-14 py-20 lg:w-[80%] lg:grid-cols-2 lg:gap-10">
                {/* Copy */}
                <div className="hero-rise">
                    <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(22,137,113,0.25)] bg-white/70 px-4 py-1.5 text-sm font-medium text-(--main-color) backdrop-blur">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--main-color) opacity-60 motion-reduce:hidden" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-(--main-color)" />
                        </span>
                        Full-service digital &amp; software company
                    </span>

                    <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-(--main-color) sm:text-5xl xl:text-6xl">
                        Custom websites, mobile apps &amp; data-driven marketing that grow your business.
                    </h1>

                    <p className="mb-8 max-w-xl text-lg leading-relaxed text-(--second-color)">
                        We design and develop web platforms and mobile applications, paired with
                        high-performance SEO, Google Ads campaigns, and full-funnel digital marketing
                        that turns traffic into qualified pipeline and revenue.
                    </p>

                    <div className="mb-8 flex flex-wrap gap-3">
                        <Button text="Start a Project" link="/content" />
                        <OutlineBtn text="Explore Our Work" link="/portfolio" />
                    </div>

                    <ul className="mb-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-(--second-color)">
                        {services.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <CheckIcon />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <dl className="flex flex-wrap gap-x-10 gap-y-4 border-t border-[rgba(22,137,113,0.2)] pt-6">
                        {stats.map((s) => (
                            <div key={s.label}>
                                <dt className="sr-only">{s.label}</dt>
                                <dd className="text-2xl font-bold text-(--main-color)">{s.value}</dd>
                                <p className="text-sm text-(--second-color)">{s.label}</p>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Visual */}
                <div className="hero-rise hidden justify-center lg:flex" style={{ animationDelay: "120ms" }}>
                    <div className="relative w-full max-w-xl">
                        {/* Offset frame behind the image */}
                        <div
                            aria-hidden="true"
                            className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-[rgba(22,137,113,0.35)] bg-[rgba(22,137,113,0.08)]"
                        />
                        <img
                            src="/hero.png"
                            alt="Project screenshot"
                            className="relative aspect-4/3 w-full rounded-2xl object-cover shadow-2xl shadow-[rgba(22,137,113,0.25)] ring-1 ring-black/5"
                        />

                        {/* Floating card */}
                        <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(22,137,113,0.12)] text-(--main-color)">
                                <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                                    <path d="M3 17a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1Zm5 0a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1Zm5 0a1 1 0 0 1-1-1v-5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1Zm5 0a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v9a1 1 0 0 1-1 1Z" />
                                </svg>
                            </span>
                            <div>
                                <p className="text-sm font-semibold text-(--main-color)">Traffic to revenue</p>
                                <p className="text-xs text-(--second-color)">Built, launched and measured</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;