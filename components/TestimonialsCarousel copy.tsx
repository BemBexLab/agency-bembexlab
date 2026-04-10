"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa6';
import { motion, useAnimation } from 'framer-motion';

const ClientTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const router = useRouter();

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const cardVariants = {
    enter: { opacity: 0, scale: 0.9 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  };

  const testimonials = [
    {
      name: "Olivia James",
      avatar: "/Ellipse6.webp",
      review: "We now have a fantastic website that perfectly encapsulates the essence of our company thanks to them. Their service has exceeded all of our expectations.",
      rating: 5,
      socialLink: "https://facebook.com",
    },
    {
      name: "Daniel Lee",
      avatar: "/Ellipse7.webp",
      review: "They understood our brand perfectly. The design is stunning and the user experience is flawless. Highly recommended!",
      rating: 5,
      socialLink: "https://facebook.com",
    },
    {
      name: "Emily Tran",
      avatar: "/Ellipse8.webp",
      review: "We're incredibly impressed. Their team was professional, creative, and fast. They really care about delivering quality.",
      rating: 5,
      socialLink: "https://facebook.com",
    },
    {
      name: "Samantha Milner",
      avatar: "/Ellipse9.webp",
      review: "The final result was better than we imagined. They exceeded every expectation with their design and attention to detail.",
      rating: 5,
      socialLink: "https://facebook.com",
    },
  ];

  // removed expand state: 'See more' will route to '#'

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div ref={containerRef} className="mt-32 h-[790px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.p
            className="text-[#ff4d2d] font-medium mb-3 text-3xl"
            variants={itemVariants}
          >
            Our Testimonials
          </motion.p>
          <motion.h2
            className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl leading-[1.3] mb-6 space-y-2"
            variants={itemVariants}
          >
            <div>
              O
              <span className="bg-gradient-to-b from-white via-[#ffecd3] to-[#5a2e1b] text-transparent bg-clip-text">
                u
              </span>
              r success, echoed
            </div>
            <div>
              by
              <span className="bg-gradient-to-b from-white via-[#ffecd3] to-[#5a2e1b] text-transparent bg-clip-text mx-4">
                our
              </span>
              Clients
            </div>
          </motion.h2>
        </motion.div>

        {/* Rating Summary */}
        <div className="flex flex-col items-center mb-2">
          <div className="text-2xl font-semibold text-white">5.00</div>
          <div className="text-sm text-gray-500 mb-2">57 reviews</div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87-.69 6.9L12 18.5l-4.31 2.63-.69-6.9-5-4.87 6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons (desktop) */}
          <button
            onClick={goToPrevious}
            className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-24 rounded-full p-3 border-2 border-red-500 transition-colors z-10 hover:bg-red-500/10 max-[1132px]:left-4 max-[1132px]:-translate-x-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-24 rounded-full p-3 border-2 border-red-500 transition-colors z-10 hover:bg-red-500/10 max-[1132px]:right-4 max-[1132px]:translate-x-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Cards */}
          <div className="flex justify-center relative" style={{ transform: 'translateY(10%)' }}>
            {/* Previous testimonial - positioned behind and to the left */}
            <div className="hidden md:block w-80 h-80 bg-white/10 backdrop-blur-md rounded-xl p-6 absolute left-0 opacity-90 z-10 transform transition-transform duration-300 scale-90 translate-y-4 border border-white/20 shadow-2xl overflow-hidden">
              <div className="flex flex-col items-center mb-4">
                <img
                  src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].avatar}
                  alt={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].name}
                  className="w-12 h-12 rounded-full mb-2"
                />
                <div>
                  <h3 className="font-bold text-white font-medium text-center">
                    {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].name}
                  </h3>
                </div>
              </div>
              {
                (() => {
                  const idx = (currentIndex - 1 + testimonials.length) % testimonials.length;
                  const text = testimonials[idx].review;
                  const isLong = text.length > 200;
                  return (
                    <>
                      <p className="text-gray-300 font-light text-sm mb-4 max-h-28 overflow-hidden whitespace-pre-wrap">{isLong ? `${text.slice(0, 200)}...` : text}</p>
                      {isLong && (
                        <div className="mt-2 mb-3">
                          <a href="#" className="text-sm text-[#ff4d2d] no-underline">
                            See more
                          </a>
                        </div>
                      )}
                    </>
                  );
                })()
              }
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87-.69 6.9L12 18.5l-4.31 2.63-.69-6.9-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Current testimonial - front and center */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-[450px] h-80 bg-white/10 backdrop-blur-md rounded-xl p-6 relative z-30 transform transition-transform duration-300 scale-125 mt-4 border border-white/20 shadow-2xl overflow-hidden"
            >
              {/* Mobile in-card nav buttons (top corners) */}
              <button
                onClick={goToPrevious}
                className="md:hidden absolute top-3 left-3 z-40 p-2 rounded-full border border-red-500 bg-black/30 text-red-500 hover:bg-red-500/10"
                aria-label="Previous testimonial"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="md:hidden absolute top-3 right-3 z-40 p-2 rounded-full border border-red-500 bg-black/30 text-red-500 hover:bg-red-500/10"
                aria-label="Next testimonial"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute top-4 right-4">
                <a href={testimonials[currentIndex].socialLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-blue-500/20 hover:bg-blue-500/30 transition-colors">
                  <svg className="w-5 h-5 text-blue-500 hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .578 0 1.285v21.43C0 23.422.593 24 1.325 24H12.82v-9.265H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.115c.733 0 1.325-.578 1.325-1.285V1.285C24 .578 23.407 0 22.675 0z" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-col items-center mb-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full mb-2"
                />
                <div>
                  <h3 className="font-medium text-white text-center">{testimonials[currentIndex].name}</h3>
                </div>
              </div>
              {
                (() => {
                  const idx = currentIndex;
                  const text = testimonials[idx].review;
                  const isLong = text.length > 200;
                  return (
                    <>
                      <p className="text-gray-300 font-light text-sm text-center mb-4 max-h-28 overflow-hidden whitespace-pre-wrap">{isLong ? `${text.slice(0, 200)}...` : text}</p>
                      {isLong && (
                        <div className="mt-2 text-center mb-3">
                          <a href="#" className="text-sm text-[#ff4d2d] no-underline">
                            See more
                          </a>
                        </div>
                      )}
                    </>
                  );
                })()
              }
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87-.69 6.9L12 18.5l-4.31 2.63-.69-6.9-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            {/* Next testimonial - positioned behind and to the right */}
            <div className="hidden md:block w-80 h-80 bg-white/10 backdrop-blur-md rounded-xl p-6 absolute right-0 opacity-90 z-10 transform transition-transform duration-300 scale-90 translate-y-4 border border-white/20 shadow-2xl overflow-hidden">
              <div className="flex flex-col items-center mb-4">
                <img
                  src={testimonials[(currentIndex + 1) % testimonials.length].avatar}
                  alt={testimonials[(currentIndex + 1) % testimonials.length].name}
                  className="w-12 h-12 rounded-full mb-2"
                />
                <div>
                  <h3 className="font-medium text-white text-center">
                    {testimonials[(currentIndex + 1) % testimonials.length].name}
                  </h3>
                </div>
              </div>
              {
                (() => {
                  const idx = (currentIndex + 1) % testimonials.length;
                  const text = testimonials[idx].review;
                  const isLong = text.length > 200;
                  return (
                    <>
                      <p className="text-gray-300 font-light text-sm mb-4 max-h-28 overflow-hidden whitespace-pre-wrap">{isLong ? `${text.slice(0, 200)}...` : text}</p>
                      {isLong && (
                        <div className="mt-2 mb-3">
                          <a href="#" className="text-sm text-[#ff4d2d] no-underline">
                            See more
                          </a>
                        </div>
                      )}
                    </>
                  );
                })()
              }
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87-.69 6.9L12 18.5l-4.31 2.63-.69-6.9-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => router.push('#')}
            className="relative px-6 py-2.5 rounded-full text-white text-base font-light flex items-center gap-3 bg-[#1a1a1a]/60 backdrop-blur-md border border-[#ff1e00]/20 transition-all duration-300 group overflow-hidden">
            <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">
              See more testimonials
            </span>
            <FaArrowRight className="relative z-10 text-white text-base transition-transform duration-300 group-hover:translate-x-1" />

            {/* 🔴 Top red shine */}
            <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-b from-[#ff1e00] to-transparent rounded-t-full pointer-events-none" />

            {/* 🔴 Bottom hover line glow */}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff1e00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-full" />

            {/* 🧊 Inner glossy shadow */}
            <span className="absolute inset-0 rounded-full shadow-[inset_0_4px_6px_rgba(255,255,255,0.08)] pointer-events-none" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;