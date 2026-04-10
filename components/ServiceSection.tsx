"use client"

import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    "Website Design & Development",
    "Search Engine Optimization",
    "Performance Marketing",
    "Logo Design & Branding",
    "Social Media Marketing & Management",
    "Content Marketing",
  ];

  // Popup text for each service (same order as `services`)
  const popupData = [
    "Modern, responsive websites built for\nperformance and conversions.",
    "Improve visibility with technical SEO,\ncontent, and local strategies.",
    "Performance-driven campaigns\nacross search, social and video.",
    "Brand identity, logos and visual\nsystems to scale your presence.",
    "End-to-end social strategy, content\nand community management.",
    "Content systems, email and CRO to\ncapture and convert traffic.",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full px-4 sm:px-6 max-w-7xl mx-auto z-30 overflow-visible"
    >
      {/* Rotating Star Background */}
      <motion.div
        className="hidden md:block absolute right-[-1%] -translate-y-1/2 z-0 opacity-70 scale-[0.9] pointer-events-none"
        animate={{
          rotate: [0, 360],
          transition: {
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="603"
          height="810"
          viewBox="0 0 603 810"
          fill="none"
        >
          <path
            stroke="#ff3c1b"
            strokeWidth="0.6"
            d="M708.818 123.244L708.534 122.739L708.076 123.094L462.151 313.585L509.2 1.07444L509.287 0.5H508.706H309.029H308.456L308.534 1.0678L351.31 313.605L101.07 120.944L100.611 120.591L100.329 121.096L1.56384 297.309L1.27537 297.823L1.83039 298.023L292.552 402.861L1.8243 511.979L1.27757 512.184L1.56453 512.693L104.623 695.352L104.914 695.866L105.373 695.495L349.166 498.579L308.534 808.935L308.46 809.5H309.029H506.559H507.136L507.054 808.928L462.145 498.575L705.925 691.201L706.385 691.564L706.672 691.053L805.436 514.84L805.721 514.331L805.174 514.127L512.285 405L805.174 295.873L805.722 295.669L805.436 295.159L708.818 123.244Z"
          />
        </svg>
      </motion.div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-12">
        {/* Left Column */}
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          <p className="text-[#ff4d2d] font-semibold mb-3 text-3xl font-medium">
            Our Services
          </p>
          <h2 className="text-white font-semibold text-2xl sm:text-3xl md:text-5xl leading-[1.35] mb-8">
            <div>
              <span className="text-white">E</span>
              <span className="bg-gradient-to-b from-white via-[#ffecd3] to-[#5a2e1b] text-transparent bg-clip-text">
                xp
              </span>{" "}
              Website
            </div>
            <div>
              <span className="bg-gradient-to-b from-white via-[#ffecd3] to-[#5a2e1b] text-transparent bg-clip-text">
                De
              </span>
              velopment &
            </div>
            <div>
              <span className="bg-gradient-to-b from-white via-[#ffecd3] to-[#5a2e1b] text-transparent bg-clip-text">
                D
              </span>
              esign Solutions
            </div>
          </h2>
          <Link href="services">
            <motion.button
              className="relative w-full sm:w-auto px-6 py-3 rounded-full text-white text-sm flex items-center justify-center sm:justify-start gap-2 bg-[#1a1a1a]/80 backdrop-blur-md border border-[#ff4d2d]/50 shadow-[0_0_12px_#ff4d2d66] group overflow-hidden transition hover:shadow-[0_0_25px_#ff4d2d99]"
              whileHover={{
                borderColor: "rgba(255, 60, 27, 0.3)",
                boxShadow: "0 0 15px rgba(255, 60, 27, 0.3)",
              }}
            >
              <span className="relative z-10 font-light">See All Services</span>
              <motion.span
                className="text-lg relative z-10"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                →
              </motion.span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff3c1b]/10 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <span className="absolute inset-0 rounded-full shadow-[inset_0_4px_6px_rgba(255,255,255,0.08)]" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Column */}
        <div className="grid gap-3 sm:gap-4 relative z-10">
          {services.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="relative w-full max-w-[580px] h-auto sm:h-[82px] flex items-center pl-4 sm:pl-6 py-4 sm:py-0">
                {/* Capsule */}
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      className="absolute left-0 top-0 w-full sm:w-full h-full -z-10"
                      initial={{ opacity: 0, x: -100, y: -90, rotate: -15 }}
                      animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                      exit={{ opacity: 0, x: -100, y: -90, rotate: -15 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <div className="w-full h-full rounded-[115px] border border-[#DE2F04] bg-[rgba(222,47,4,0.10)] backdrop-blur-[9.13px] shadow-[9.138px_-9.138px_9.138px_0px_rgba(169,36,3,0.10)_inset,_-9.138px_9.138px_9.138px_0px_rgba(255,255,255,0.10)_inset]" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Left-side popup on hover (lg+) */}
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      className="hidden lg:flex absolute left-[-250px] inset-y-0 items-center text-white px-3 py-2 rounded-md z-20 shadow-lg overflow-hidden"
                      style={{ backgroundImage: "url('/popup.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.18 }}
                    >
                      <div className="text-sm font-medium backdrop-brightness-75 whitespace-pre-line">{popupData[i]}</div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Right-side popup on hover for tablet screens (md only: 768px - 1023px). Hidden on smartphones (<md) and hidden on lg+. */}
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      className="hidden md:flex lg:hidden absolute right-[-250px] inset-y-0 items-center text-white px-3 py-2 rounded-md z-20 shadow-lg overflow-hidden"
                      style={{ backgroundImage: "url('/popup.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.18 }}
                    >
                      <div className="text-sm font-medium backdrop-brightness-75 whitespace-pre-line">{popupData[i]}</div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Text */}
                <div className="uppercase font-semibold text-base sm:text-lg md:text-[32px] text-white leading-none">
                  {item}
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
