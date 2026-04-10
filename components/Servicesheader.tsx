"use client";

import Image from "next/image";
import React from 'react'
import { motion } from "framer-motion";
import { BsCheck2Circle } from "react-icons/bs";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: 18, transition: { duration: 0.4, ease: "easeIn" } },
};

const ServicesHeader = ({ title = 'Website Design & Development Starting at Just $199/ Month', bulletPoints = ["Design Driven by Strategy, Focused on ROI", "Clear pricing, no hidden costs", "Ready to launch in weeks, not months"], hideSubServiceExtras = false, showSubServiceText = false, introParagraph }: { title?: string; bulletPoints?: React.ReactNode[]; hideSubServiceExtras?: boolean; showSubServiceText?: boolean; introParagraph?: React.ReactNode }) => {
  return (
    <motion.section
      className="relative h-auto text-white pt-[120px] overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* 🔸 Left Side: Text */}
        <motion.div
          variants={itemVariants}
          className="text-center lg:text-left w-full z-20 px-6 lg:px-20 py-20 mx-auto max-w-3xl lg:mx-0 space-y-6"
          style={{ position: "relative", top: "-30px" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-5xl w-full font-semibold leading-tight mb-6">
            {title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>
          <ul className="text-white/70 text-sm sm:text-base md:text-md mb-8 mt-6 space-y-3">
            {bulletPoints.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <BsCheck2Circle className="mt-1 h-5 w-5 shrink-0 text-[#FFFFFF]" />
                <span className="text-gray-200">{b}</span>
              </li>
            ))}
          </ul>
          {(showSubServiceText || introParagraph) && (
            introParagraph ?? (
              <p className="text-white/70 text-sm sm:text-base md:text-md">
                A fresh website built just for your business can spark real progress where it counts. Fast loading keeps visitors happy while bold visuals pull them in. Smooth navigation makes every click feel natural. High performance meets clean design when goals shift toward lasting results.<br /><br />Every design is made to attract visitors and convert them into customers. Get in touch with our Web design agency to take your online presence to new heights and drive measurable results.
              </p>
            )
          )}
          {!hideSubServiceExtras && (
            <div className="relative">
              <hr className="border-t border-white transform translate-y-8" />

              <div className="absolute transform translate-x-5 translate-y-14">
                <div className="flex items-center gap-4 bg-transparent">
                  <div className="flex -space-x-2 items-center">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-pink-500 to-yellow-400" />
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-indigo-500 to-pink-500" />
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-green-400 to-teal-400" />
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-purple-500 to-indigo-500" />
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-[#2b2b2b] text-xs text-white flex items-center justify-center">+100</div>
                  </div>

                  <div className="flex items-center gap-2 ml-2">
                    <div className="flex items-center text-yellow-400">
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.376 2.455c-.784.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.63 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z" />
                      </svg>
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.376 2.455c-.784.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.63 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z" />
                      </svg>
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.376 2.455c-.784.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.63 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z" />
                      </svg>
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.376 2.455c-.784.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.63 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z" />
                      </svg>
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.376 2.455c-.784.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.63 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z" />
                      </svg>
                    </div>
                    <span className="text-white text-sm ml-2">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* 🔹 Right Side: Gears Image */}
        <motion.div variants={itemVariants} className="flex justify-center lg:justify-end relative ">
          <div className="w-full max-w-[600px]">
            <Image
              src="/service/laptop.webp" // or your image path
              alt="laptop image"
              width={800}
              height={800}
              className="w-full h-auto object-cover ml-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesHeader;
