import { FaLongArrowAltRight } from 'react-icons/fa';

/*
  Optional props:
  - categories: string[]            e.g. ["All", "Web", "Mobile", "Design"]
  - active: string                  currently selected category
  - onChange: (category) => void    called when a chip is clicked
  - scrollTo: string                id of the projects list (default "#projects")
*/
function HeroSection({ categories, active, onChange, scrollTo = "#projects" }) {
    return (
        <section className="w-full px-4 lg:px-10 py-6 lg:py-10 bg-(--bg-color)">
            <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-[#06150f] px-6 sm:px-10 lg:px-16 pt-16 lg:pt-24 pb-12 lg:pb-16">
                {/* Glows */}
                <div className="pointer-events-none absolute -top-44 -left-32 w-130 h-130 rounded-full bg-emerald-500/20 blur-[130px]" aria-hidden="true" />
                <div className="pointer-events-none absolute -bottom-52 -right-32 w-120 h-120 rounded-full bg-teal-400/15 blur-[120px]" aria-hidden="true" />

                {/* Outlined watermark word */}
                <span
                    className="pointer-events-none select-none absolute -right-4 lg:right-10 bottom-0 translate-y-[28%] text-[9rem] sm:text-[14rem] lg:text-[20rem] font-black leading-none tracking-tighter text-transparent"
                    style={{ WebkitTextStroke: "1.5px rgba(52,211,153,0.16)" }}
                    aria-hidden="true"
                >
                    Work
                </span>

                <div className="relative">
                    <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-200 mb-8">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        Our work &amp; projects
                    </p>

                    <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.02] text-white mb-8">
                        Ideas built into{" "}
                        <span className="bg-linear-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
                            digital experiences.
                        </span>
                    </h1>

                    <p className="max-w-2xl text-base lg:text-lg leading-relaxed text-white/65">
                        Explore a selection of websites and digital solutions we&apos;ve created to bring ideas to life, solve real business challenges, and help brands build a stronger online presence.
                    </p>

                    <div className="mt-10 lg:mt-14 flex flex-wrap items-center gap-x-8 gap-y-5">
                        <a
                            href={scrollTo}
                            className="group inline-flex items-center gap-3 rounded-full border border-white/15 pl-6 pr-2 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-[#06150f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                        >
                            <span>View projects</span>
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400 text-[#06150f] rotate-90 transition-transform duration-300 group-hover:translate-y-0.5 motion-reduce:transition-none">
                                <FaLongArrowAltRight />
                            </span>
                        </a>

                        {categories?.length > 0 && (
                            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
                                {categories.map((cat) => {
                                    const isActive = cat === active;
                                    return (
                                        <button
                                            key={cat}
                                            type="button"
                                            aria-pressed={isActive}
                                            onClick={() => onChange?.(cat)}
                                            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${isActive
                                                ? "bg-emerald-400 text-[#06150f]"
                                                : "border border-white/15 text-white/70 hover:text-white hover:border-white/40"
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;