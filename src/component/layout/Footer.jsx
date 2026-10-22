import { Link } from "react-router-dom";
import useLanguageStore from "../../store/languageStore";

const headingClass =
    "mb-5 text-lg font-semibold uppercase tracking-[0.12em] text-(--white-color)";

const linkClass =
    "text-[15px] sm:text-base text-[#999] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300";

export default function Footer() {
    const { language, t } = useLanguageStore();

    const studioLinks = [
        { label: t('header.home'), href: "/" },
        { label: t('header.services'), href: "/services" },
        { label: t('header.portfolio'), href: "/portfolio" },
        { label: t('header.contact'), href: "/contact" },
    ];

    const capabilities = language === 'ar' ? [
        "تطوير المواقع والويب",
        "تطوير المتاجر الإلكترونية",
        "تطوير تطبيقات الجوال",
        "تصميم واجهات وتجربة المستخدم UI/UX",
        "تطوير الخوادم وواجهات API",
        "تحسين محركات البحث SEO",
        "الدعم الفني والصيانة المستمرة",
    ] : [
        "Website Development",
        "E-Commerce Development",
        "Mobile App Development",
        "UI/UX Design",
        "Backend & API Development",
        "SEO & Digital Marketing",
        "Maintenance & Support",
    ];

    return (
        <footer className="w-full bg-[#013E2C] text-emerald-100">
            <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr_1fr]">

                {/* Brand */}
                <div className="max-w-sm">
                    <Link
                        to="/"
                        aria-label="Digital Craft home"
                        className="inline-flex items-center gap-3 mb-5"
                    >
                        <img src="/icon.jpeg" alt="Digital Craft" className="w-20 rounded-lg shadow-sm" />
                    </Link>

                    <p className="text-[15px] sm:text-base leading-relaxed text-emerald-100/70">
                        {t('footer.tagline')}
                    </p>

                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-white transition-colors hover:text-emerald-300"
                    >
                        {t('footer.buildTogether')}
                        <span aria-hidden="true" className="rtl:rotate-180">↗</span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav aria-label="Footer navigation">
                    <h3 className={headingClass}>
                        {t('footer.explore')}
                    </h3>

                    <ul className="flex flex-col gap-3">
                        {studioLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    to={link.href}
                                    className={linkClass}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Services */}
                <div>
                    <h3 className={headingClass}>
                        {t('footer.whatWeDo')}
                    </h3>

                    <ul className="flex flex-col gap-3">
                        {capabilities.map((capability) => (
                            <li key={capability}>
                                <Link
                                    to="/services"
                                    className={linkClass}
                                >
                                    {capability}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className={headingClass}>
                        {t('footer.connectHeading')}
                    </h3>

                    <p className="mb-4 text-sm leading-relaxed text-emerald-100/70">
                        {t('footer.connectText')}
                    </p>

                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#013E2C] transition-colors hover:bg-emerald-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                        {t('footer.startProject')}
                    </Link>
                </div>
            </div>

            {/* Copyright bottom bar */}
            <div className="border-t border-emerald-900/50 py-6 text-center text-xs text-emerald-100/60">
                <p>© {new Date().getFullYear()} {t('common.brand')}. {t('footer.allRightsReserved')}</p>
            </div>
        </footer>
    );
}
