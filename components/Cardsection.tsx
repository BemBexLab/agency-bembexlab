"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";

// Note: `defaultServices` removed. This component must receive `services` via props.

const ServicesSection = ({
  services,
  heading = "Build Your Conversion-Driven Website",
}: {
  services: any[];
  heading?: React.ReactNode;
}) => {
  const [clickedArrows, setClickedArrows] = useState<number[]>([]);

  if (!services || services.length === 0) return null;

  const handleArrowClick = (index: number) => {
    if (!clickedArrows.includes(index)) {
      setClickedArrows([...clickedArrows, index]);
      setTimeout(() => {
        setClickedArrows(clickedArrows.filter((i) => i !== index));
      }, 2000);
    }
  };

  return (
    <section className="text-white px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            className="text-[#FF3C1B] font-semibold mb-2 md:mb-3  text-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Services
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
              {heading}
            </span>{" "}
          </motion.h2>
        </motion.div>

        {/* Services Grid */}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group relative rounded-[30px] p-4 md:p-6 flex flex-col justify-between border border-transparent transition-all duration-300 hover:border-[#DE2F04] cursor-pointer min-h-[220px]"
              style={{
                backgroundImage: "url('/service/Cards.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Link Overlay: navigate to the link provided on the service object */}
              <Link href={service.link || `/services/${service.id}`} className="absolute inset-0 z-50" />

              {/* Card Content */}
              <div className="relative z-20">
                {/* Icon */}
                <div
                  className="w-12 h-12 md:w-14 md:h-14 mb-3 md:mb-4 p-2 flex items-center justify-center transition-all duration-300 border border-transparent"
                  style={{
                    backgroundImage: "url('/service/icon_bg.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {service.svg ? (
                    <span className="w-5 h-5 md:w-7 md:h-7 flex items-center justify-center">
                      {service.svg}
                    </span>
                  ) : (
                    <img
                      src={service.svg}
                      alt={service.title}
                      className="w-5 h-5 md:w-7 md:h-7 object-contain"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
                  <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
                    {service.title.split(" ")[0]}
                  </span>{" "}
                  {service.title.split(" ").slice(1).join(" ")}
                </h3>

                {/* Description */}
                <p className="text-gray-200 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  {service.desc}
                </p>

                {/* Arrow */}
                <div
                  className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center overflow-hidden cursor-pointer"
                  style={{
                    backgroundImage: "url('/service/icon_bg.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  onClick={() => handleArrowClick(i)}
                >
                  <div
                    className="relative z-10 text-white text-base font-bold"
                    style={{
                      transform: clickedArrows.includes(i)
                        ? "rotate(360deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.8s ease-in-out",
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" fill="none" className="w-5 h-5 md:w-6 md:h-6">
                      <path d="M24.2667 15.1425C24.4901 14.919 24.6156 14.616 24.6156 14.3C24.6156 13.984 24.4901 13.6809 24.2667 13.4575L17.5255 6.71622C17.4155 6.6024 17.284 6.51162 17.1387 6.44917C16.9933 6.38671 16.8369 6.35384 16.6787 6.35246C16.5204 6.35109 16.3635 6.38124 16.2171 6.44116C16.0706 6.50108 15.9376 6.58956 15.8257 6.70145C15.7138 6.81334 15.6253 6.94639 15.5654 7.09284C15.5055 7.23929 15.4753 7.39621 15.4767 7.55444C15.4781 7.71267 15.5109 7.86904 15.5734 8.01443C15.6358 8.15981 15.7266 8.29131 15.8404 8.40124L20.5475 13.1083L4.76629 13.1083C4.45024 13.1083 4.14713 13.2339 3.92365 13.4574C3.70017 13.6808 3.57462 13.9839 3.57462 14.3C3.57462 14.616 3.70017 14.9191 3.92365 15.1426C4.14713 15.3661 4.45024 15.4917 4.76629 15.4917L20.5475 15.4917L15.8404 20.1987C15.6234 20.4235 15.5033 20.7245 15.506 21.037C15.5087 21.3494 15.634 21.6483 15.855 21.8692C16.0759 22.0902 16.3748 22.2155 16.6872 22.2182C16.9997 22.2209 17.3007 22.1008 17.5255 21.8838L24.2667 15.1425Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
