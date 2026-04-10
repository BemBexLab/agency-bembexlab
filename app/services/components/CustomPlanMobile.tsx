"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const CustomPlanMobile = ({
    customPlanData = {
        title: "Custom Plan",
        description: "AussieDigitalStudios is a full-service digital studio built for modern, fast-growing brands. From strategy to standout design and digital execution, everything you need to build and grow your online presence lives here.",
        ctaText: "Book a consultation",
        ctaHref: "#",
        image: "/Home/performance_marketing.webp",
        tagText: "SMM Plans"
    }
}: { customPlanData?: any }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("ads_theme");
        setIsDarkMode(theme !== "light");

        const handleThemeChange = () => {
            const theme = localStorage.getItem("ads_theme");
            setIsDarkMode(theme !== "light");
        };

        const observer = new MutationObserver(handleThemeChange);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        window.addEventListener("storage", handleThemeChange);

        return () => {
            observer.disconnect();
            window.removeEventListener("storage", handleThemeChange);
        };
    }, []);

    return (
        <section className="block lg:hidden w-full mx-auto my-6 px-4 flex justify-center">
            <div className="flex flex-col gap-6 w-full max-w-3xl">
                {/* Custom Plan Content - Stacked on mobile */}
                <div
                    className={`flex flex-col rounded-xl px-4 sm:px-6 py-6 w-full ${isDarkMode ? 'text-white' : 'text-black'}`}
                    style={isDarkMode ? {
                        backgroundImage: `url('/service/customplancard.webp')`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    } : {
                        backgroundColor: "#f9f1f1",
                    }}
                >
                    <h2 className={`font-semibold text-xl sm:text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {customPlanData.title}
                    </h2>
                    <div className={`w-full mt-3 text-xs sm:text-sm leading-relaxed ${isDarkMode ? 'text-[#AAAAAA]' : 'text-gray-700'}`}>
                        {customPlanData.description}
                    </div>
                    <div className="mt-4 flex flex-col gap-3">
                        <a
                            href={customPlanData.ctaHref}
                            className={`flex font-light text-xs sm:text-sm items-center justify-center gap-2 ${isDarkMode ? 'text-white' : 'text-black'} py-2 px-3 rounded-full transition-colors group w-full`}
                            style={{
                                backgroundImage: 'url("/service/Button.webp")',
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                        >
                            {customPlanData.ctaText}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="transition-transform duration-300 group-hover:rotate-[45deg]"
                            >
                                <circle cx="12" cy="12" r="10" fill="black" />
                                <path
                                    d="M9 12H15M15 12L12 9M15 12L12 15"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    transform="rotate(-45 12 12)"
                                />
                            </svg>
                        </a>
                        <div className="flex flex-row justify-center">
                            <p className={`text-xs ${isDarkMode ? 'text-[#4C8C74]' : 'text-gray-700'}`}>{customPlanData.tagText}</p>
                            <svg
                                className="m-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 12 12"
                                fill="none"
                            >
                                <circle cx="5.89511" cy="5.89511" r="5.89511" fill="#fc0000" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Image on mobile - full width below text */}
                <div className="w-full flex justify-center">
                    <Image
                        src={customPlanData.image}
                        alt="Custom Plan Illustration"
                        width={370}
                        height={400}
                        className="w-full h-auto max-w-[300px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default CustomPlanMobile;
