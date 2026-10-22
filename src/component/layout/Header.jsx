import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX, HiTranslate } from "react-icons/hi";
import Button from "../ui/Button";
import useLanguageStore from "../../store/languageStore";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguageStore();

    return (
        <header className="shadow-sm bg-white/95 backdrop-blur-md sticky top-0 z-50">
            {/* Desktop Navbar */}
            <div className="hidden lg:flex items-center justify-between px-8 xl:px-12 py-4">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo.png" alt="Digital Craft logo" className="w-48 xl:w-52 object-contain" />
                </Link>

                <nav aria-label="Main navigation">
                    <ul className="flex gap-8 items-center">
                        <li>
                            <Link
                                to="/"
                                className="relative uppercase text-(--main-color) text-xl xl:text-2xl font-semibold tracking-wide group py-1"
                            >
                                {t('header.home')}
                                <span className="absolute start-0 -bottom-1 w-0 h-1 bg-(--main-color) transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className="relative uppercase text-(--main-color) text-xl xl:text-2xl font-semibold tracking-wide group py-1"
                            >
                                {t('header.services')}
                                <span className="absolute start-0 -bottom-1 w-0 h-1 bg-(--main-color) transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/portfolio"
                                className="relative uppercase text-(--main-color) text-xl xl:text-2xl font-semibold tracking-wide group py-1"
                            >
                                {t('header.portfolio')}
                                <span className="absolute start-0 -bottom-1 w-0 h-1 bg-(--main-color) transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <Button text={t('header.getStarted')} link="/contact" />

                    {/* Desktop Language Switch Button */}
                    <button
                        type="button"
                        onClick={toggleLanguage}
                        aria-label={t('header.langSwitchLabel')}
                        title={language === 'en' ? 'التحويل إلى اللغة العربية' : 'Switch to English'}
                        className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 bg-(--main-color) hover:bg-(--second-color) text-(--white-color) rounded-lg font-bold text-sm tracking-wider transition-all duration-200 hover:shadow-md active:scale-95"
                    >
                        <HiTranslate className="text-lg" />
                        <span>{language === 'en' ? 'AR' : 'EN'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden flex items-center justify-between px-5 py-4 relative">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo.png" alt="Digital Craft logo" className="w-40 object-contain" />
                </Link>

                <div className="flex items-center gap-3">
                    {/* Mobile Quick Language Toggle */}
                    <button
                        type="button"
                        onClick={toggleLanguage}
                        aria-label={t('header.langSwitchLabel')}
                        className="cursor-pointer inline-flex items-center gap-1 px-2.5 py-1.5 bg-(--main-color) hover:bg-(--second-color) text-(--white-color) rounded-md font-bold text-xs tracking-wider transition-all duration-200"
                    >
                        <HiTranslate className="text-base" />
                        <span>{language === 'en' ? 'AR' : 'EN'}</span>
                    </button>

                    {/* Menu Toggle Button */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-3xl text-(--main-color) focus:outline-none p-1"
                        aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {menuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>

                {/* Mobile Drawer Backdrop */}
                {menuOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 z-40 transition-opacity"
                        onClick={() => setMenuOpen(false)}
                        aria-hidden="true"
                    />
                )}

                {/* Mobile Menu Drawer */}
                <div
                    className={`fixed top-0 start-0 h-screen w-3/4 max-w-xs bg-(--main-color) flex flex-col justify-between p-8 transition-transform duration-300 ease-in-out z-50 ${
                        menuOpen
                            ? "translate-x-0"
                            : "ltr:-translate-x-full rtl:translate-x-full"
                    }`}
                >
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-xl font-bold text-(--white-color)">
                                {language === 'en' ? 'Navigation' : 'القائمة'}
                            </span>
                            <button
                                type="button"
                                onClick={() => setMenuOpen(false)}
                                className="text-3xl text-(--white-color) focus:outline-none p-1"
                                aria-label="Close Menu"
                            >
                                <HiX />
                            </button>
                        </div>

                        <ul className="flex flex-col gap-6">
                            <li>
                                <Link
                                    to="/"
                                    className="block uppercase text-(--white-color) text-2xl font-semibold tracking-wide hover:opacity-80 transition-opacity"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {t('header.home')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services"
                                    className="block uppercase text-(--white-color) text-2xl font-semibold tracking-wide hover:opacity-80 transition-opacity"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {t('header.services')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/portfolio"
                                    className="block uppercase text-(--white-color) text-2xl font-semibold tracking-wide hover:opacity-80 transition-opacity"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {t('header.portfolio')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 pt-6 border-t border-white/20">
                        <div onClick={() => setMenuOpen(false)}>
                            <Button text={t('header.getStarted')} link="/contact" />
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                toggleLanguage();
                                setMenuOpen(false);
                            }}
                            className="cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white rounded-lg font-semibold text-base transition-colors"
                        >
                            <HiTranslate className="text-lg" />
                            <span>
                                {language === 'en'
                                    ? 'التحويل إلى العربية'
                                    : 'Switch to English'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}