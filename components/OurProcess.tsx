"use client";

import React, { useState, useEffect, useRef } from 'react'
import { FiMessageSquare, FiCheckSquare, FiEdit3, FiUsers, FiTrendingUp } from 'react-icons/fi'
import { motion, useAnimation } from "framer-motion";

const OurProcess = () => {

    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
    const controls = useAnimation();

    const steps = [
        {
            id: 1,
            title: "Free Consultation",
            description: "Free 1:1 consultation to discuss your goals, challenges, and business needs.",
            Icon: FiMessageSquare,
            showSpan: false,
            spanColor: "bg-white/20"
        },
        {
            id: 2,
            title: "Business Audit",
            description: "Business audit of your website, social media, and ads to identify what needs improvement.",
            Icon: FiCheckSquare,
            showSpan: false,
            spanColor: "bg-white/20"
        },
        {
            id: 3,
            title: "Custom Working Plan",
            description: "Custom digital marketing strategy tailored to your business needs.",
            Icon: FiEdit3,
            showSpan: false,
            spanColor: "bg-white/20"
        },
        {
            id: 4,
            title: "Onboarding Process",
            description: "Onboarding to kick off collaboration, timelines, and team access.",
            Icon: FiUsers,
            showSpan: false,
            spanColor: "bg-white/20"
        },
        {
            id: 5,
            title: "Execution & Results",
            description: "We manage your ads, SEO, content, and website, with monthly reports and updates.",
            Icon: FiTrendingUp,
            showSpan: false,
            spanColor: null
        }
    ]

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

    return (
        <section ref={containerRef} className="py-12 sm:py-16 lg:py-20 xl:py-24 flex justify-center">
            <div className="max-w-full px-2">
                <div className="text-center">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-10"
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.p
                            className="text-[#ff4d2d] font-medium mb-3  text-3xl"
                            variants={itemVariants}
                        >
                            Our Working Criteria
                        </motion.p>
                        <motion.h2
                            className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl leading-[1.35] mb-6"
                            variants={itemVariants}
                        >
                            <div>
                                <span className="bg-gradient-to-b from-white via-[#ffecd3] to-[#5a2e1b] text-transparent bg-clip-text">
                                    We make the process of working
                                </span>
                            </div>
                            <div>
                                <span className="text-white">too easy and simpler</span>
                            </div>
                        </motion.h2>
                        <motion.p
                            className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light"
                            variants={itemVariants}
                        >
                            Here&apos;s how we do it:
                        </motion.p>
                    </motion.div>
                    {/* <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-white lg:text-xl lg:leading-8">
                        Create your own blog with us and launch it with just 4 easy steps
                    </p> */}
                </div>
                <div className="flex justify-center">
                    <ul className="flex flex-wrap gap-4 sm:gap-10 justify-center">
                        {steps.slice(0, 3).map((step) => (
                            <li key={step.id} className="w-[92%] sm:w-[300px] flex-start group relative flex lg:flex-col bg-white/10 backdrop-blur-xs border border-white/5 rounded-xl p-4 sm:p-6 transition-all duration-200 hover:bg-white/5 hover:border-white/10">
                                {step.showSpan && (
                                    <span
                                        className={`absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px ${step.spanColor} lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]`}
                                        aria-hidden="true"></span>
                                )}
                                <div
                                    className="group/icon inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:border-white/30">
                                    <step.Icon className="h-5 w-5 text-red-800 group-hover/icon:text-red-500" />
                                </div>
                                <div className="ml-4 lg:ml-0 lg:mt-10">
                                    <h3
                                        className="text-xl font-bold text-white before:mb-2 before:block before:font-mono before:text-sm before:text-white/50">
                                        {step.title}
                                    </h3>
                                    <h4 className="mt-2 text-base text-[#FFFFFF80]">{step.description}</h4>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center">
                    <ul className="mt-10 flex flex-wrap gap-4 sm:gap-10 justify-center">
                        {steps.slice(3).map((step) => (
                            <li key={step.id} className="w-[92%] sm:w-[300px] flex-start group relative flex lg:flex-col bg-white/10 backdrop-blur-xs border border-white/5 rounded-xl p-4 sm:p-6 transition-all duration-200 hover:bg-white/5 hover:border-white/10">
                                {step.showSpan && (
                                    <span
                                        className={`absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px ${step.spanColor} lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]`}
                                        aria-hidden="true"></span>
                                )}
                                <div
                                    className="group/icon inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:border-white/30">
                                    <step.Icon className="h-5 w-5 text-red-800 group-hover/icon:text-red-500" />
                                </div>
                                <div className="ml-4 lg:ml-0 lg:mt-10">
                                    <h3
                                        className="text-xl font-bold text-white before:mb-2 before:block before:font-mono before:text-sm before:text-white/50">
                                        {step.title}
                                    </h3>
                                    <h4 className="mt-2 text-base text-[#FFFFFF80]">{step.description}</h4>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default OurProcess