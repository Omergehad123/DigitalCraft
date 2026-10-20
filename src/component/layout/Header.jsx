import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "../ui/Button";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-(--bg-color)">
            {/* Desktop Navbar */}
            <div className='hidden xl:flex items-center justify-between px-10 py-5'>
                <a href="/" className='flex items-center gap-2'>
                    <img src="/logo.png" alt="logo" className='w-50' />
                </a>
                <ul className="flex gap-6 items-center">
                    <li>
                        <a
                            href="/"
                            className="relative uppercase text-(--main-color) text-2xl group"
                        >
                            Home
                            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-(--main-color) transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/services"
                            className="relative uppercase text-(--main-color) text-2xl group"
                        >
                            Services
                            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-(--main-color) transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/portfolio"
                            className="relative uppercase text-(--main-color) text-2xl group"
                        >
                            Portfolio
                            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-(--main-color) transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>

                </ul>

                <div className="flex items-center gap-5">
                    <Button text="Get Started" link="/contact" />
                    <button className=" cursor-pointer flex items-center gap-2 bg-(--main-color) rounded-lg text-(--white-color) p-1">
                        EN
                    </button>

                </div>
            </div>

            {/* Mobile Navbar */}
            <div className='lg:hidden flex items-center justify-between px-4 py-5 relative'>
                <a href="/" className='flex gap-2'>
                    <img src="/logo.png" alt="logo" className='w-50' />
                </a>
                {/* Menu Button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(true)}
                    className="text-3xl text-(--main-color) focus:outline-none"
                    aria-label="Open Menu"
                >
                    <HiMenu />
                </button>
                {/* Mobile Menu */}
                <ul className={`
                    absolute top-full h-screen bg-(--main-color) w-1/2 flex flex-col gap-10 p-8 transition-all duration-300 z-50
                    ${menuOpen ? 'left-0' : '-left-1/2'}
                `}>
                    <li className="absolute top-5 right-5">
                        <button
                            type="button"
                            onClick={() => setMenuOpen(false)}
                            className="text-3xl text-(--white-color) focus:outline-none"
                            aria-label="Close Menu"
                        >
                            <HiX />
                        </button>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="relative uppercase text-(--white-color) text-2xl"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/services"
                            className="relative uppercase text-(--white-color) text-2xl"
                            onClick={() => setMenuOpen(false)}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="/portfolio"
                            className="relative uppercase text-(--white-color) text-2xl"
                            onClick={() => setMenuOpen(false)}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <div onClick={() => setMenuOpen(false)}>
                            <Button text="Get Started" link="/contact" />
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
}