import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

const staticServices = [
    {
        id: "01",
        num: "01",
        category: "Web Development",
        title: "Website & Web Application Development",
        description:
            "We design and develop high-performance business websites, custom web apps, and digital experiences tailored to scale your brand and convert visitors.",
        suitedFor:
            "Enterprises, growing startups, and businesses looking for modern, secure, and conversion-focused web platforms.",
        builtToAchieve: [
            "Ultra-fast loading speed and seamless responsive design across all screen sizes",
            "Tailored digital architecture engineered for maximum user engagement and conversion",
            "Scalable front-end & back-end code structure built with modern frameworks",
            "Solid SEO foundation and web vitals optimization for high search engine visibility",
        ],
        canInclude: [
            "Custom Web Applications (React, Next.js)",
            "High-Converting Landing Pages & Portals",
            "E-Commerce & Secure Payment Gateways",
            "RESTful API & Cloud Database Integrations",
            "Interactive UI/UX with Fluid Motion",
            "Technical SEO & Speed Optimization",
        ],
    },
    {
        id: "02",
        num: "02",
        category: "Mobile Apps",
        title: "Cross-Platform Mobile Application Development",
        description:
            "Intuitive, feature-rich mobile applications built to deliver smooth native performance and engaging user journeys across iOS and Android.",
        suitedFor:
            "Businesses and founders seeking to engage customers on mobile with dependable, responsive, and connected native-feel apps.",
        builtToAchieve: [
            "Native feel, high frame-rate performance, and responsive touch gestures",
            "Unified single codebase for simultaneous iOS and Android market release",
            "Secure user authentication, push notifications, and offline data caching",
            "Robust backend connectivity and real-time cloud data synchronization",
        ],
        canInclude: [
            "Cross-Platform Apps (Flutter / React Native)",
            "Interactive UI/UX Design & Prototypes",
            "Push Notifications & Cloud Messaging",
            "Biometric & Social Authentication",
            "In-App Purchases & Payment Gateways",
            "App Store & Google Play Launch Support",
        ],
    },
];

function ServicesSection() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...Array.from(new Set(staticServices.map(s => s.category).filter(Boolean)))];

    const filteredServices = selectedCategory === 'All'
        ? staticServices
        : staticServices.filter(s => s.category === selectedCategory);

    return (
        <section className="w-full font-sans overflow-x-hidden">
            {/* ── Filters (before services) ── */}
            <div className="w-full flex justify-center py-8">
                <div className="bg-(--bg-color) border border-(--main-color) rounded-md flex flex-wrap justify-center gap-2 shadow-sm">
                    {categories.map((category) => {
                        const isActive = selectedCategory === category;
                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setSelectedCategory(category)}
                                className={`
                  px-5 py-2 rounded-md text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer
                  ${isActive
                                        ? 'bg-(--main-color) text-white'
                                        : 'bg-transparent text-(--main-color) hover:bg-(--main-color)/10'}
                `}
                                style={isActive ? { boxShadow: '0 2px 8px rgba(31, 106, 80, 0.09)' } : {}}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>
            </div>


            {/* ── Services Content ── */}
            <div>
                {filteredServices.length === 0 ? (
                    <div className="py-20 px-6 max-w-7xl mx-auto">
                        <div className="bg-white border border-[#cde4d8] rounded-3xl p-12 text-center text-[#386650]">
                            <h3 className="font-serif text-2xl font-bold text-(--main-color) mb-2">No services found</h3>
                            <p>Services will appear here once added.</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        {filteredServices.map((service, index) => {
                            const num = service.num || String(index + 1).padStart(2, '0');
                            const isEven = (index + 1) % 2 === 0;

                            return (
                                <div
                                    key={service.id || index}
                                    className={`w-full transition-colors ${isEven ? 'bg-(--main-color) text-white' : 'bg-(--bg-color) text-(--main-color)'
                                        }`}
                                >
                                    <div className="max-w-7xl mx-auto p-8 sm:p-10 md:p-14 py-16 md:py-24 ">
                                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

                                            {/* Left Column */}
                                            <div className="lg:col-span-5 space-y-6">
                                                <div className="flex items-center gap-3">
                                                    <span
                                                        className={`font-serif text-3xl font-black ${isEven ? 'text-white' : 'text-(--main-color)'
                                                            }`}
                                                    >
                                                        {num}
                                                    </span>
                                                    <span
                                                        className={`text-md font-bold uppercase tracking-[2px] ${isEven ? 'text-emerald-400' : 'text-(--second-color)'
                                                            }`}
                                                    >
                                                        {service.category}
                                                    </span>
                                                </div>

                                                <h2
                                                    className={`font-serif text-4xl sm:text-5xl md:text-6xl font-black leading-tight ${isEven ? 'text-white' : 'text-(--main-color)'
                                                        }`}
                                                >
                                                    {service.title}
                                                </h2>

                                                <p
                                                    className={`text-md leading-relaxed ${isEven ? 'text-white/70' : 'text-[#386650]'
                                                        }`}
                                                >
                                                    {service.description}
                                                </p>

                                                <div className={`h-[1px] ${isEven ? 'bg-white/10' : 'bg-[#cde4d8]'}`} />

                                                <div className="space-y-2">
                                                    <span
                                                        className={`text-md font-bold uppercase tracking-[2px] ${isEven ? 'text-emerald-400' : 'text-(--second-color)'
                                                            }`}
                                                    >
                                                        BEST SUITED FOR
                                                    </span>
                                                    <p
                                                        className={`text-md leading-relaxed ${isEven ? 'text-white/70' : 'text-[#386650]'
                                                            }`}
                                                    >
                                                        {service.suitedFor}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Right Column */}
                                            <div
                                                className={`lg:col-span-7 space-y-8 lg:border-l lg:pl-12 rtl:lg:border-l-0 rtl:lg:border-r rtl:lg:pl-0 rtl:lg:pr-12 ${isEven ? 'lg:border-white/10' : 'lg:border-[#cde4d8]'
                                                    }`}
                                            >

                                                {/* Built to Achieve */}
                                                {service.builtToAchieve && service.builtToAchieve.length > 0 && (
                                                    <div className="space-y-3">
                                                        <span
                                                            className={`text-md font-bold uppercase tracking-[2px] ${isEven ? 'text-emerald-400' : 'text-(--second-color)'
                                                                }`}
                                                        >
                                                            BUILT TO ACHIEVE
                                                        </span>
                                                        <ul className="space-y-2.5">
                                                            {service.builtToAchieve.map((item, idx) => (
                                                                <li
                                                                    key={idx}
                                                                    className={`flex items-start gap-3 text-sm leading-relaxed ${isEven ? 'text-white/90' : 'text-[#386650]'
                                                                        }`}
                                                                >
                                                                    <span
                                                                        className={`w-1.5 h-1.5 rounded-[1px] mt-2 shrink-0 ${isEven ? 'bg-emerald-400' : 'bg-(--second-color)'
                                                                            }`}
                                                                    />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                <div className={`h-[1px] ${isEven ? 'bg-white/10' : 'bg-[#cde4d8]'}`} />

                                                {/* Can Include */}
                                                {service.canInclude && service.canInclude.length > 0 && (
                                                    <div className="space-y-3">
                                                        <span
                                                            className={`text-md font-bold uppercase tracking-[2px] ${isEven ? 'text-emerald-400' : 'text-(--second-color)'
                                                                }`}
                                                        >
                                                            CAN INCLUDE
                                                        </span>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                                                            {service.canInclude.map((item, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    className={`flex items-start gap-3 text-sm leading-relaxed ${isEven ? 'text-white/70' : 'text-[#386650]'
                                                                        }`}
                                                                >
                                                                    <span
                                                                        className={`w-1.5 h-1.5 rounded-[1px] mt-2 shrink-0 ${isEven ? 'bg-emerald-400' : 'bg-(--second-color)'
                                                                            }`}
                                                                    />
                                                                    <span>{item}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Scope Note & Action */}
                                                <div className="space-y-4 pt-2">
                                                    <p
                                                        className={`text-xs italic pl-3 border-l-2 rtl:pl-0 rtl:pr-3 rtl:border-l-0 rtl:border-r-2 ${isEven
                                                            ? 'text-white/50 border-emerald-400'
                                                            : 'text-[#386650] border-(--second-color)'
                                                            }`}
                                                    >
                                                        Final store features depend on the agreed project scope.
                                                    </p>

                                                    <Link
                                                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                                                        className={`inline-flex items-center gap-1.5 text-sm font-bold hover:underline ${isEven
                                                            ? 'text-white hover:text-emerald-300'
                                                            : 'text-(--main-color) hover:text-(--second-color)'
                                                            }`}
                                                    >
                                                        <span>Explore {service.title}</span>
                                                        <FiArrowUpRight
                                                            className={`text-base ${isEven ? 'text-emerald-400' : 'text-(--second-color)'
                                                                }`}
                                                        />
                                                    </Link>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}

export default ServicesSection;