import React from 'react';

function OurMethodology() {

    const methodologySteps = [
        {
            id: "01.",
            title: "Discovery & Planning",
            desc: (
                <>
                    We learn about your business, goals, target audience, and project
                    requirements to define the right solution and a clear direction.
                </>
            ),
            sublabel: "UNDERSTAND",
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-(--main-color)" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 9h8M8 12h5M8 15h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            id: "02.",
            title: "Design & Experience",
            desc: (
                <>
                    We shape your ideas into clear, engaging user experiences with
                    thoughtful layouts, modern visuals, and intuitive navigation.
                </>
            ),
            sublabel: "DESIGN",
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-(--main-color)" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            id: "03.",
            title: "Development & Integration",
            desc: (
                <>
                    We turn approved designs into functional digital products, building
                    responsive interfaces and connecting the tools and systems your
                    project needs.
                </>
            ),
            sublabel: "BUILD",
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-(--main-color)" fill="none">
                    <rect x="6" y="6" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
                    <path d="m9 10-2 2 2 2m6-4 2 2-2 2m-2-5-2 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            id: "04.",
            title: "Testing & Launch",
            desc: (
                <>
                    We review functionality, responsiveness, and usability, fix issues,
                    and prepare your website or application for a smooth launch.
                </>
            ),
            sublabel: "DELIVER",
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-(--main-color)" fill="none">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
                    <path d="m8.5 12 2.3 2.3 4.7-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            id: "05.",
            title: "Support & Improvement",
            desc: (
                <>
                    After launch, we can help maintain your digital product, resolve
                    issues, and make improvements as your business and needs evolve.
                </>
            ),
            sublabel: "GROW",
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-(--main-color)" fill="none">
                    <path d="M4 17l5-5 4 3 7-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 7h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
    ];


    return (
        <section className="w-full bg-(--bg-color) py-16 lg:py-24 px-5 lg:px-12 xl:px-16">
            {/* Header */}
            <div className="mb-12">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--second-color) font-mono">
                    05 // METHODOLOGY
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-(--main-color) mb-4 leading-tight">
                    From Idea to Launch
                </h2>
                <p className="max-w-2xl text-base md:text-lg text-(--second-color) font-medium">
                    We bring your ideas to life through thoughtful design, modern development, and digital solutions tailored to your business. From the first conversation to launch and beyond, we focus on creating experiences that work for your customers and help your business grow. </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {methodologySteps.map((step, idx) => (
                    <div
                        key={step.id}
                        className="rounded-2xl bg-white border border-[rgba(22,137,113,0.10)] shadow-sm p-6 flex flex-col gap-4"
                        style={{ boxShadow: "0 6px 24px 0 rgba(22,117,79,0.08)" }}
                    >
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-xs px-2 py-0.5 rounded bg-(--bg-color) text-(--second-color) font-bold tracking-wider">
                                {step.id}
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-(--main-color)">{step.title}</h3>
                        <p className="text-[15px] text-[#689e8d] font-normal">{step.desc}</p>
                        <span className="text-xs text-(--second-color) mt-2 font-mono font-semibold tracking-wide uppercase">
                            {step.sublabel}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default OurMethodology;