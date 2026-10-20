
import { useEffect, useState } from 'react';

const studioLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

const capabilities = [
    "Website Development",
    "E-Commerce Development",
    "Mobile App Development",
    "UI/UX Design",
    "Backend & API Development",
    "SEO & Digital Marketing",
    "Maintenance & Support",
];

const headingClass =
    "mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300/80";

const linkClass =
    "text-[15px] sm:text-base text-emerald-200/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300";

export default function Footer() {
    return (
        <footer className="w-full bg-[#013E2C] text-emerald-100">
            <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr_1fr]">

                {/* Brand */}
                <div className="max-w-sm">
                    <a
                        href="/"
                        aria-label="Digital Craft home"
                        className="inline-flex items-center gap-3 mb-5"
                    >
                        <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-[#013E2C] text-lg font-black tracking-tighter">
                            DC
                        </span>

                        <span className="text-xl font-bold text-white">
                            Digital Craft
                        </span>
                    </a>

                    <p className="text-[15px] sm:text-base leading-relaxed text-emerald-100/70">
                        We bring design, technology, and creativity together
                        to build digital experiences that help businesses
                        grow and stand out online.
                    </p>

                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-white transition-colors hover:text-emerald-300"
                    >
                        Let's build something together
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>

                {/* Navigation */}
                <nav aria-label="Footer navigation">
                    <h3 className={headingClass}>
                        Explore
                    </h3>

                    <ul className="flex flex-col gap-3">
                        {studioLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className={linkClass}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Services */}
                <div>
                    <h3 className={headingClass}>
                        What We Do
                    </h3>

                    <ul className="flex flex-col gap-3">
                        {capabilities.map((capability) => (
                            <li key={capability}>
                                <a
                                    href="/services"
                                    className={linkClass}
                                >
                                    {capability}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className={headingClass}>
                        Let's Connect
                    </h3>

                    <p className="mb-4 text-sm leading-relaxed text-emerald-100/70">
                        Have a project in mind? Tell us about it, and let's
                        explore how we can bring your idea to life.
                    </p>

                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#013E2C] transition-colors hover:bg-emerald-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                        Start a Project
                    </a>

                    {/* Add your verified business contact details here */}
                    {/*
                    <a href="mailto:YOUR_EMAIL" className={linkClass}>
                        YOUR_EMAIL
                    </a>

                    <a href="https://wa.me/YOUR_NUMBER" className={linkClass}>
                        WhatsApp
                    </a>
                    */}
                </div>
            </div>
        </footer>
    );
}
