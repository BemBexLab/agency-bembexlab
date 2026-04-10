"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const CustomPlan = ({
  customPlanData = {
    title: "Custom Plan",
    description: "AussieDigitalStudios is a full-service digital studio built for modern, fast-growing brands. From strategy to standout design and digital execution, everything you need to build and grow your online presence lives here, powered by a creative, results-focused team.",
    ctaText: "Book a consultation call to create your perfect plan",
    ctaHref: "#",
    image: "/Home/performance_marketing.webp",
    tagText: "SMM Plans"
  }
}: { customPlanData?: any }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Initial theme detection
    const theme = localStorage.getItem("ads_theme");
    setIsDarkMode(theme !== "light");

    // Listen for theme changes via document class mutations
    const handleThemeChange = () => {
      const theme = localStorage.getItem("ads_theme");
      setIsDarkMode(theme !== "light");
    };

    // Watch for class changes on document element
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Also listen to storage changes (for cross-tab updates)
    window.addEventListener("storage", handleThemeChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  return (
    <>
      <section className="w-full mx-4 my-8 flex justify-center">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl px-4 sm:px-6">
          {/* Custom Plan Content */}
          <div className="relative w-full lg:w-[60%]">
            <div
              className={`relative rounded-xl h-[340px] overflow-hidden ${isDarkMode ? 'text-white' : 'text-black'}`}
              style={isDarkMode ? {
                backgroundImage: `url('/service/customplancard.webp')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              } : {
                backgroundColor: "#f9f1f1",
              }}
            >
              <div className="h-full px-6 lg:px-8 pt-8 lg:pt-10 pb-20">
                <div
                  className={`h-full overflow-y-auto pr-2
                    [scrollbar-width:thin]
                    [&::-webkit-scrollbar]:w-1.5
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-white/10
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-white/35
                    [&::-webkit-scrollbar-thumb:hover]:bg-white/50`}
                >
                  <h2 className={`font-semibold text-2xl lg:text-4xl ${isDarkMode ? 'text-white' : 'text-black'}`}>{customPlanData.title}</h2>
                  <div className={`w-full lg:w-[620px] mt-4 text-sm ${isDarkMode ? 'text-[#AAAAAA]' : 'text-gray-700'}`}>
                    {customPlanData.description}
                  </div>
                </div>
              </div>
            </div>
            <div className={`absolute inset-x-0 bottom-0 z-10 flex items-center justify-between px-6 lg:px-8 py-3 rounded-b-xl pointer-events-none ${isDarkMode ? 'bg-[#120806]' : 'bg-[#efe3e3]'}`}>
              <a
                href={customPlanData.ctaHref}
                className={`inline-flex font-light text-sm items-center justify-center gap-1 ${isDarkMode ? 'text-white' : 'text-black'} py-2 px-4 rounded-full transition-colors group whitespace-nowrap pointer-events-auto`}
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
                  width="28"
                  height="28"
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
              <div className="flex flex-row items-center pointer-events-none">
                <p className={`${isDarkMode ? 'text-[#AAAAAA]' : 'text-gray-700'}`}>{customPlanData.tagText}</p>
                <svg
                  className="m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="5.89511" cy="5.89511" r="5.89511" fill="#fc0000" />
                </svg>
              </div>
            </div>
          </div>

          {/* Image on right side */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-start items-center">
            <Image
              src={customPlanData.image}
              alt="Custom Plan Illustration"
              width={370}
              height={400}
              className="w-full h-full max-h-[440px] max-w-[440px] ml-5"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomPlan;
