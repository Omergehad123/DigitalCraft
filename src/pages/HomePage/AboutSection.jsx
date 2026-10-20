import React from 'react'
import { CgWebsite } from "react-icons/cg";
import { MdOutlineSearch } from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";

const services = [
    {
        title: "Web & Mobile Engineering",
        description:
            "High-speed custom websites, responsive web apps, and native/cross-platform iOS & Android mobile applications engineered with clean code and seamless UX.",
        icon: <CgWebsite />
    },
    {
        title: "Search Engine Optimization (SEO)",
        description:
            "Comprehensive technical SEO, keyword strategy, and content architecture designed to dominate organic rankings and capture high-intent search traffic.",
        icon: <MdOutlineSearch />
    },
    {
        title: "Google Ads & Digital Marketing",
        description:
            "Precision-targeted PPC campaigns, conversion rate optimization (CRO), and measurable performance marketing built to maximize ROAS and acquire clients at scale.",
        icon: <SiGooglemarketingplatform />
    }
];

function AboutSection() {
    return (
        <section className="py-16 lg:py-24 px-5 lg:px-12 xl:px-16">
            <div className='flex lg:justify-between flex-wrap gap-5 w-full'>
                <div className=''>
                    <h6 className='text-(--second-color) uppercase'>#1 // who we are</h6>
                    <p className='text-[#777]'>Engineering Precision & Measurable Growth</p>
                </div>
                <div className=''>
                    <h1 className='text-2xl lg:text-4xl hidden lg:block'>We are a full-lifecycle software and growth agency. <br />
                        We bridge the gap between engineering high-performance <br />
                        websites and mobile applications and scaling them <br />
                        through deliberate SEO, high-intent Google Ads, and <br /> multi-channel digital marketing.
                    </h1>
                    <h1 className='text-xl lg:text-4xl lg:hidden block'>We are a full-lifecycle software and growth agency. We bridge the gap between engineering high-performance websites and mobile applications and scaling them through deliberate SEO, high-intent Google Ads, and multi-channel digital marketing.
                    </h1>
                    <div className="flex items-center justify-center flex-wrap gap-5 mt-8">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="bg-[rgba(22,137,113,0.05)] border border-[rgba(22,137,113,0.13)] rounded-xl p-6 w-80 min-h-[260px] flex flex-col shadow-sm"
                            >
                                <div className="mb-5">
                                    <div className="w-10 h-10 flex items-center justify-center bg-[rgba(22,137,113,0.10)] rounded-md text-2xl text-(--second-color)">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="mb-2 font-bold text-lg text-(--main-color)">
                                    {service.title}
                                </div>
                                <div className="text-(--main-color) text-[15px] leading-relaxed font-normal">
                                    {service.description}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutSection