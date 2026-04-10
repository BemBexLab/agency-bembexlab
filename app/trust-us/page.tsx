"use client";

import React from 'react'
import Image from "next/image";
// import { Link } from 'lucide-react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const TheyTrustUs = () => {
  const logos = [
    {
      id: 1,
      src: "/logos_clients/zoominfo.webp",
      alt: "ZoomInfo"
    },
    {
      id: 2,
      src: "/logos_clients/clutch.webp",
      alt: "Clutch"
    },
    {
      id: 3,
      src: "/logos_clients/s.webp",
      alt: "S Logo"
    },
    {
      id: 4,
      src: "/logos_clients/trustpilot.webp",
      alt: "Trustpilot"
    },
    {
      id: 5,
      src: "/logos_clients/designrush.webp",
      alt: "DesignRush"
    },
    {
      id: 6,
      src: "/logos_clients/clutch.webp",
      alt: "Clutch"
    },
    {
      id: 7,
      src: "/logos_clients/s.webp",
      alt: "S Logo"
    },
    {
      id: 8,
      src: "/logos_clients/trustpilot.webp",
      alt: "Trustpilot"
    },
    {
      id: 9,
      src: "/logos_clients/designrush.webp",
      alt: "DesignRush"
    },
  ];

  return (
    <section className='my-7 mx-4 sm:mx-6 md:mx-10 lg:mx-20'>
      <div className="relative flex flex-col justify-center lg:flex-row gap-20 lg:gap-0">
        {/* 💬 Left Side - Text */}
        <div className="relative z-20 w-full lg:w-1/3">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-white"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            They <br className="hidden md:block" />
            Trust Us
          </motion.h2>

          {/* Let's talk Button */}
          <Link href="/contact-us">
            <button className="relative px-6 py-2.5 rounded-full text-white text-base font-light flex items-center gap-3 bg-[#1a1a1a]/60 backdrop-blur-md border border-[#ff1e00]/20 transition-all duration-300 group overflow-hidden">
              <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">
                Let's Talk
              </span>
              <FaArrowRight className="relative z-10 text-white text-base transition-transform duration-300 group-hover:translate-x-1" />

              {/* 🔴 Top red shine */}
              <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-b from-[#ff1e00] to-transparent rounded-t-full pointer-events-none" />

              {/* 🔴 Bottom hover line glow */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff1e00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-full" />

              {/* 🧊 Inner glossy shadow */}
              <span className="absolute inset-0 rounded-full shadow-[inset_0_4px_6px_rgba(255,255,255,0.08)] pointer-events-none" />
            </button>
          </Link>
        </div>

        {/* 🌀 Right Side - Spiral Image */}
        <div className="relative w-full lg:w-1/2 h-auto overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 ml-0 sm:ml-4 md:ml-10 justify-center">
            {logos.map((logo) => (
              <div key={logo.id} className="w-full max-w-[220px] p-5 rounded-2xl bg-red-500/10 backdrop-blur-md border border-red-500/20 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={220}
                  height={120}
                  className="w-full h-auto object-contain brightness-150"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheyTrustUs