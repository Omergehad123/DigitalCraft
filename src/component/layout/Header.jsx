import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX, HiTranslate } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import useLanguageStore from "../../store/languageStore";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguageStore();
    const isAr = language === 'ar';

    const navLinks = [
        { to: "/", label: t('header.home') },
        { to: "/services", label: t('header.services') },
        { to: "/portfolio", label: t('header.portfolio') },
    ];

    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="shadow-sm bg-white/95 backdrop-blur-md sticky top-0 z-50"
        >
            {/* Desktop Navbar */}
            <div className="hidden lg:flex items-center justify-between px-8 xl:px-12 py-4">
                <Link to="/" className="flex items-center gap-2 group">
                    <motion.img
                        src="/logo.png"
                        alt="Digital Craft logo"
                        className="w-48 xl:w-52 object-contain"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    />
                </Link>

                <nav aria-label="Main navigation">
                    <ul className="flex gap-8 items-center">
                        {navLinks.map((item) => (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
                                    className="relative uppercase text-(--main-color) text-xl xl:text-2xl font-semibold tracking-wide group py-1"
                                >
                                    {item.label}
                                    <span className="absolute start-0 -bottom-1 w-0 h-1 bg-(--main-color) transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <Button text={t('header.getStarted')} link="/contact" />

                    {/* Desktop Language Switch Button */}
                    <motion.button
                        type="button"
                        onClick={toggleLanguage}
                        aria-label={t('header.langSwitchLabel')}
                        title={language === 'en' ? 'التحويل إلى اللغة العربية' : 'Switch to English'}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 bg-(--main-color) hover:bg-(--second-color) text-(--white-color) rounded-lg font-bold text-sm tracking-wider transition-colors duration-200 shadow-sm hover:shadow-md"
                    >
                        <HiTranslate className="text-lg" />
                        <span>{language === 'en' ? 'AR' : 'EN'}</span>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden flex items-center justify-between px-5 py-4 relative">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo.png" alt="Digital Craft logo" className="w-40 object-contain" />
                </Link>

                <div className="flex items-center gap-3">
                    {/* Mobile Quick Language Toggle */}
                    <motion.button
                        type="button"
                        onClick={toggleLanguage}
                        aria-label={t('header.langSwitchLabel')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="cursor-pointer inline-flex items-center gap-1 px-2.5 py-1.5 bg-(--main-color) hover:bg-(--second-color) text-(--white-color) rounded-md font-bold text-xs tracking-wider transition-colors duration-200"
                    >
                        <HiTranslate className="text-base" />
                        <span>{language === 'en' ? 'AR' : 'EN'}</span>
                    </motion.button>

                    {/* Menu Toggle Button */}
                    <motion.button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        whileTap={{ scale: 0.9 }}
                        className="text-3xl text-(--main-color) focus:outline-none p-1 cursor-pointer"
                        aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {menuOpen ? <HiX /> : <HiMenu />}
                    </motion.button>
                </div>

                {/* Animated Mobile Drawer Backdrop & Drawer */}
                <AnimatePresence>
                    {menuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40"
                                onClick={() => setMenuOpen(false)}
                                aria-hidden="true"
                            />

                            <motion.div
                                initial={{ x: isAr ? "100%" : "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: isAr ? "100%" : "-100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                                className={`fixed top-0 ${isAr ? "right-0" : "left-0"} h-screen w-3/4 max-w-xs bg-(--main-color) flex flex-col justify-between p-8 z-50 shadow-2xl`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="text-xl font-bold text-(--white-color)">
                                            {language === 'en' ? 'Navigation' : 'القائمة'}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => setMenuOpen(false)}
                                            className="text-3xl text-(--white-color) focus:outline-none p-1 cursor-pointer"
                                            aria-label="Close Menu"
                                        >
                                            <HiX />
                                        </button>
                                    </div>

                                    <ul className="flex flex-col gap-6">
                                        {navLinks.map((item, idx) => (
                                            <motion.li
                                                key={item.to}
                                                initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 + idx * 0.06 }}
                                            >
                                                <Link
                                                    to={item.to}
                                                    className="block uppercase text-(--white-color) text-2xl font-semibold tracking-wide hover:opacity-80 transition-opacity"
                                                    onClick={() => setMenuOpen(false)}
                                                >
                                                    {item.label}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col gap-4 pt-6 border-t border-white/20"
                                >
                                    <div onClick={() => setMenuOpen(false)}>
                                        <Button text={t('header.getStarted')} link="/contact" className="w-full" />
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
                                </motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}