import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from 'react-icons/fa';
import useLanguageStore from "../../store/languageStore";

function CTAsection() {
    const { t } = useLanguageStore();

    return (
        <section className="w-full bg-(--white-color) px-4 lg:px-10 py-10 lg:py-16">
            <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-(--main-color) px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
                {/* Concentric rings, anchored to the button side */}
                <div className="pointer-events-none absolute -end-40 top-1/2 -translate-y-1/2 hidden md:block" aria-hidden="true">
                    {[560, 420, 280].map((size) => (
                        <div
                            key={size}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15"
                            style={{ width: size, height: size }}
                        />
                    ))}
                    <div className="w-140 h-140" />
                </div>
                <div className="pointer-events-none absolute -bottom-32 -start-24 w-96 h-96 rounded-full bg-emerald-300/20 blur-[100px]" />

                <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-16">
                    {/* Text */}
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2.5 rounded-full bg-black/20 backdrop-blur px-4 py-1.5 mb-7">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 animate-ping motion-reduce:animate-none" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
                            </span>
                            <span className="text-sm font-medium text-white">{t('cta.badge')}</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white mb-6">
                            {t('cta.title1')}
                            <br />
                            {t('cta.title2')}
                        </h2>
                        <p className="max-w-lg text-base lg:text-lg leading-relaxed text-emerald-50/85">
                            {t('cta.description')}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
                        <Link
                            to="/contact"
                            className="group inline-flex items-center gap-4 rounded-full bg-white ps-8 pe-3 py-3 text-lg font-bold text-emerald-900 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            <span>{t('cta.bookConsultation')}</span>
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-white transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 motion-reduce:transition-none">
                                <FaLongArrowAltRight />
                            </span>
                        </Link>
                        <Link
                            to="/portfolio"
                            className="text-sm font-semibold text-white/85 border-b border-white/30 pb-0.5 hover:text-white hover:border-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            {t('cta.browseWork')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTAsection;