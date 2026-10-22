import Button from "../../component/ui/Button";
import OutlineBtn from "../../component/ui/OutlineBtn";
import useLanguageStore from "../../store/languageStore";

function HeroSection() {
    const { language, t } = useLanguageStore();

    const services = language === 'ar' ? [
        { title: "مواقع إلكترونية", note: "سريعة، متجاوبة ومجهزة للتحويل" },
        { title: "تطبيقات جوال", note: "أداء أصيل على iOS وأندرويد" },
        { title: "تصميم واجهات", note: "واجهات مريحة يستمتع بها المستخدم" },
        { title: "تسويق رقمي", note: "وصول دقيق للعملاء المهتمين" },
    ] : [
        { title: "Websites", note: "Fast, responsive, built to convert" },
        { title: "Mobile apps", note: "Native feel on iOS and Android" },
        { title: "Design", note: "Interfaces people enjoy using" },
        { title: "Digital marketing", note: "Reach the customers who matter" },
    ];

    return (
        <section className="w-full px-4 lg:px-10 py-6 lg:py-10">
            <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-[#06150f] px-6 sm:px-10 lg:px-16 pt-16 lg:pt-24 pb-10 lg:pb-14">
                {/* Ambient glow + faint grid */}
                <div className="pointer-events-none absolute -top-48 -end-32 w-140 h-140 rounded-full bg-emerald-500/25 blur-[130px]" aria-hidden="true" />
                <div className="pointer-events-none absolute -bottom-56 -start-40 w-120 h-120 rounded-full bg-teal-400/10 blur-[120px]" aria-hidden="true" />
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.07]"
                    aria-hidden="true"
                    style={{
                        backgroundImage:
                            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
                        backgroundSize: "56px 56px",
                        maskImage: "radial-gradient(ellipse at top right, black, transparent 70%)",
                        WebkitMaskImage: "radial-gradient(ellipse at top right, black, transparent 70%)",
                    }}
                />

                <div className="relative">
                    <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-200 mb-8">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        {t('servicesPage.badge')}
                    </p>

                    <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] text-(--white-color)">
                        {t('servicesPage.titleLead')}{" "}
                        <span className="text-(--second-color)">
                            {t('servicesPage.titleHighlight')}
                        </span>
                    </h1>

                    <div className="mt-8 lg:mt-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <p className="max-w-xl text-base lg:text-lg leading-relaxed text-white/65">
                            {t('servicesPage.description')}
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Button text={t('common.startProject')} link="/contact" />
                            <OutlineBtn text={t('common.seeOurWork')} link="/portfolio" />
                        </div>
                    </div>

                    {/* Service strip */}
                    <ul className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 border-t border-white/10">
                        {services.map((s, i) => (
                            <li
                                key={s.title}
                                className={`py-6 pe-4 lg:px-6 lg:first:ps-0 ${i > 0 ? "lg:border-s lg:border-white/10" : ""}`}
                            >
                                <span className="block text-sm font-mono text-emerald-300/70 mb-2">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="block text-lg font-bold text-white">{s.title}</span>
                                <span className="block mt-1 text-sm text-white/50">{s.note}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;