import { FaLongArrowAltRight } from 'react-icons/fa';

/* scrollTo: id of your contact form (default "#contact-form") */
function HeroSection({ scrollTo = "#contact-form" }) {
    return (
        <section className="w-full px-4 lg:px-10 py-6 lg:py-10 bg-(--bg-color)">
            <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-[#06150f] px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
                {/* Glows */}
                <div className="pointer-events-none absolute -top-40 -right-24 w-120 h-120 rounded-full bg-emerald-500/25 blur-[130px]" aria-hidden="true" />
                <div className="pointer-events-none absolute -bottom-48 -left-32 w-110 h-110 rounded-full bg-teal-400/10 blur-[120px]" aria-hidden="true" />

                {/* Outlined watermark word */}
                <span
                    className="pointer-events-none select-none absolute right-0 lg:right-12 bottom-0 translate-y-[26%] text-[8rem] sm:text-[13rem] lg:text-[19rem] font-black leading-none tracking-tighter text-transparent"
                    style={{ WebkitTextStroke: "1.5px rgba(52,211,153,0.16)" }}
                    aria-hidden="true"
                >
                    Hello
                </span>

                <div className="relative">
                    <p className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-200 mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 animate-ping motion-reduce:animate-none" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                        </span>
                        Start a conversation
                    </p>

                    <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.02] text-white">
                        Let&rsquo;s build something{" "}
                        <span className="bg-linear-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
                            exceptional together.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-xl text-base lg:text-lg leading-relaxed text-white/65">
                        Tell us about your idea, your goals, and where you&rsquo;re stuck. We&rsquo;ll take it from there.
                    </p>

                    <a
                        href={scrollTo}
                        className="group mt-9 inline-flex items-center gap-3 rounded-full bg-emerald-400 pl-7 pr-2.5 py-2.5 font-bold text-[#06150f] transition-colors hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                    >
                        <span>Send a message</span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#06150f] text-emerald-300 rotate-90 transition-transform duration-300 group-hover:translate-y-0.5 motion-reduce:transition-none">
                            <FaLongArrowAltRight />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;