"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Contact, Phone, Mail, MapPin } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const ContactCard = () => {
    return (
        <div className="w-full h-full flex items-stretch">
            <div className="relative w-full p-8 lg:p-10 shadow-2xl flex flex-col justify-between" style={{
                borderRadius: '25px',
                border: '1px solid #DE2F04',
                background: 'rgba(222, 47, 4, 0.10)',
                boxShadow: '9.138px -9.138px 9.138px 0 rgba(169, 36, 3, 0.10) inset, -9.138px 9.138px 9.138px 0 rgba(255, 255, 255, 0.10) inset',
                backdropFilter: 'blur(9.137930870056152px)',
            }}>
                <div>
                    {/* Icon */}
                    <div className="mb-6">
                        <div className="w-20 h-20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 110 110" fill="none">
                                <path d="M83.3251 36.8466L85.4492 34.7225C88.9686 31.2032 94.6745 31.2032 98.1938 34.7225C101.713 38.2418 101.713 43.9478 98.1938 47.4671L96.0697 49.5912M83.3251 36.8466C83.3251 36.8466 83.5907 41.3603 87.5733 45.343C91.556 49.3257 96.0697 49.5912 96.0697 49.5912M83.3251 36.8466L63.7973 56.3744C62.4746 57.6971 61.8133 58.3584 61.2446 59.0876C60.5736 59.9478 59.9984 60.8785 59.5291 61.8633C59.1313 62.6981 58.8355 63.5853 58.244 65.3599L56.3502 71.0413L55.7375 72.8794M96.0697 49.5912L76.5419 69.119C75.2192 70.4417 74.5579 71.103 73.8287 71.6718C72.9685 72.3427 72.0378 72.9179 71.0531 73.3872C70.2183 73.7851 69.331 74.0808 67.5565 74.6723L61.875 76.5662L60.0369 77.1789M60.0369 77.1789L58.1988 77.7916C57.3255 78.0826 56.3628 77.8554 55.7119 77.2045C55.061 76.5536 54.8337 75.5908 55.1248 74.7175L55.7375 72.8794M60.0369 77.1789L55.7375 72.8794" stroke="#DE2F04" strokeWidth="2.5" />
                                <path d="M36.666 59.583H48.1243" stroke="#DE2F04" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M36.666 41.251H66.4577" stroke="#DE2F04" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M36.666 77.917H43.541" stroke="#DE2F04" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M90.8803 14.5367C85.5106 9.16699 76.8682 9.16699 59.5833 9.16699H50.4167C33.1318 9.16699 24.4894 9.16699 19.1197 14.5367C13.75 19.9064 13.75 28.5488 13.75 45.8337V64.167C13.75 81.4518 13.75 90.0942 19.1197 95.4639C24.4894 100.834 33.1318 100.834 50.4167 100.834H59.5833C76.8682 100.834 85.5106 100.834 90.8803 95.4639C95.2028 91.1415 96.0458 84.6983 96.2102 73.3337" stroke="#DE2F04" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mb-3">
                        We'd love to hear<br />about your brand.
                    </h2>

                    {/* Subheading */}
                    <p className="text-lg text-gray-400 mb-2 font-light">
                        Tell us where you see yourself, and we'll map out the<br />
                        smartest strategies to take you there.
                    </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                    {/* Phone */}
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 flex items-center justify-center" style={{
                            borderRadius: "76.415px",
                            border: "1.141px solid #DE2F04",
                            background: "rgba(222, 47, 4, 0.20)"
                        }}>
                            {/* <Phone className="w-5 h-5 text-[#ff1e00]" /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none">
                                <path d="M22.7519 23.9484C20.3761 23.9484 18.0287 23.4306 15.7099 22.3952C13.391 21.3597 11.2812 19.8912 9.38055 17.9897C7.47986 16.0883 6.01176 13.9785 4.97626 11.6604C3.94076 9.34232 3.42264 6.99496 3.42188 4.61834C3.42188 4.27621 3.53592 3.99111 3.764 3.76302C3.99208 3.53494 4.27719 3.4209 4.61931 3.4209H9.238C9.5041 3.4209 9.74168 3.51137 9.95076 3.69232C10.1598 3.87326 10.2834 4.0869 10.3214 4.33323L11.0627 8.32469C11.1007 8.6288 11.0912 8.88539 11.0342 9.09447C10.9771 9.30355 10.8726 9.48411 10.7205 9.63617L7.95503 12.4302C8.33517 13.1334 8.78639 13.8128 9.30871 14.4681C9.83102 15.1235 10.4062 15.7556 11.0342 16.3646C11.6234 16.9538 12.2411 17.5005 12.8873 18.0045C13.5336 18.5086 14.2178 18.9693 14.9401 19.3867L17.6201 16.7068C17.7911 16.5357 18.0146 16.4076 18.2906 16.3224C18.5666 16.2373 18.8373 16.2133 19.1026 16.2506L23.037 17.0489C23.3031 17.1249 23.5217 17.2629 23.6928 17.4628C23.8638 17.6628 23.9494 17.8859 23.9494 18.1323V22.751C23.9494 23.0931 23.8353 23.3782 23.6073 23.6063C23.3792 23.8344 23.0941 23.9484 22.7519 23.9484Z" fill="white" />
                            </svg>
                        </div>
                        <span className="text-gray-300 text-md">
                            +1 470-206-5285
                        </span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 flex items-center justify-center" style={{
                            borderRadius: "76.415px",
                            border: "1.141px solid #DE2F04",
                            background: "rgba(222, 47, 4, 0.20)"
                        }}>
                            {/* <Mail className="w-5 h-5 text-[#ff1e00]" /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none">
                                <path d="M22.8088 4.56152H4.56208C3.30763 4.56152 2.29265 5.5879 2.29265 6.84236L2.28125 20.5274C2.28125 21.7818 3.30763 22.8082 4.56208 22.8082H22.8088C24.0632 22.8082 25.0896 21.7818 25.0896 20.5274V6.84236C25.0896 5.5879 24.0632 4.56152 22.8088 4.56152ZM22.8088 9.12319L13.6854 14.8253L4.56208 9.12319V6.84236L13.6854 12.5444L22.8088 6.84236V9.12319Z" fill="white" />
                            </svg>
                        </div>
                        <span className="text-gray-300 text-md group-hover:text-white transition-colors duration-300">
                            hello@bembexlab.com
                        </span>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 flex items-center justify-center" style={{
                            borderRadius: "76.415px",
                            border: "1.141px solid #DE2F04",
                            background: "rgba(222, 47, 4, 0.20)"
                        }}>
                            {/* <MapPin className="w-5 h-5 text-[#ff1e00]" /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none">
                                <path d="M13.6856 2.28125C16.4077 2.28125 19.0184 3.36261 20.9432 5.28743C22.868 7.21226 23.9494 9.82289 23.9494 12.545C23.9494 16.0506 22.038 18.9199 20.0241 20.9784C19.0178 21.9957 17.9199 22.918 16.7442 23.7336L16.2584 24.0644L16.0303 24.216L15.6004 24.4897L15.2172 24.7235L14.7428 24.9995C14.4208 25.1833 14.0564 25.28 13.6856 25.28C13.3148 25.28 12.9505 25.1833 12.6285 24.9995L12.154 24.7235L11.561 24.3586L11.3421 24.216L10.8745 23.9047C9.60616 23.0466 8.42477 22.0665 7.34719 20.9784C5.33321 18.9188 3.42188 16.0506 3.42188 12.545C3.42188 9.82289 4.50323 7.21226 6.42806 5.28743C8.35288 3.36261 10.9635 2.28125 13.6856 2.28125ZM13.6856 9.12375C13.2363 9.12375 12.7915 9.21224 12.3764 9.38418C11.9613 9.55611 11.5841 9.80812 11.2664 10.1258C10.9487 10.4435 10.6967 10.8207 10.5248 11.2357C10.3529 11.6508 10.2644 12.0957 10.2644 12.545C10.2644 12.9943 10.3529 13.4392 10.5248 13.8543C10.6967 14.2693 10.9487 14.6465 11.2664 14.9642C11.5841 15.2819 11.9613 15.5339 12.3764 15.7058C12.7915 15.8778 13.2363 15.9663 13.6856 15.9663C14.593 15.9663 15.4632 15.6058 16.1048 14.9642C16.7464 14.3226 17.1069 13.4524 17.1069 12.545C17.1069 11.6376 16.7464 10.7674 16.1048 10.1258C15.4632 9.4842 14.593 9.12375 13.6856 9.12375Z" fill="white" />
                            </svg>
                        </div>
                        <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                            Pakistan
                        </span>
                    </div>
                </div>

                {/* Decorative gradient blur */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff1e00]/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ff1e00]/5 rounded-full blur-2xl -z-10"></div>
            </div>
        </div>
    );
};

const ForumMap = () => {
    const router = useRouter();
    return (
        <>
            {/* Upper Contact Us part - Mobile first (stacked) */}

            {/* Upper Contact Us part - Desktop */}

            {/* Lower Body with Map background */}
            <div className="w-full mt-12 flex justify-center px-4 md:px-20 h-auto md:h-[427px] bg-center bg-no-repeat bg-contain"
                style={{
                    backgroundImage: 'url("/ForumMap/map_bg.webp")',
                }}
            >
                <div className="flex flex-col justify-center items-center">
                    <motion.h2
                        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white text-center mb-2"
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Growing Businesses Across<br></br>Pakistan
                    </motion.h2>
                    <motion.p
                        className="text-sm md:text-md lg:text-lg text-[#FFFFFF80] font-light text-center"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    >
                        We've been helping businesses turn challenges into opportunities and grow<br></br>secure, scalable brands.
                    </motion.p>
                </div>
            </div>
        </>
    );
};

export default ForumMap;
