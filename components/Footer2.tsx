"use client";

import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Footer2() {
    const ref = useRef<HTMLElement | null>(null);

    // Only initialize mouse effects on desktop (improves mobile performance)
    useEffect(() => {
        if (typeof window === 'undefined' || window.innerWidth < 1024) return;

        const el = ref.current;
        if (!el) return;
        let raf = 0;

        const onMove = (e: MouseEvent | TouchEvent) => {
            const rect = el.getBoundingClientRect();
            let clientX = 0;
            let clientY = 0;
            if (e instanceof TouchEvent) {
                if (e.touches.length === 0) return;
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                clientX = (e as MouseEvent).clientX;
                clientY = (e as MouseEvent).clientY;
            }

            const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));

            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                el.style.setProperty('--mx', `${x * 100}%`);
                el.style.setProperty('--my', `${y * 100}%`);
            });
        };

        const onLeave = () => {
            if (!el) return;
            el.style.setProperty('--mx', `50%`);
            el.style.setProperty('--my', `50%`);
        };

        el.addEventListener('mousemove', onMove);
        el.addEventListener('touchmove', onMove, { passive: true });
        el.addEventListener('mouseleave', onLeave);
        el.addEventListener('touchend', onLeave);

        el.style.setProperty('--mx', `50%`);
        el.style.setProperty('--my', `50%`);

        return () => {
            el.removeEventListener('mousemove', onMove);
            el.removeEventListener('touchmove', onMove as EventListener);
            el.removeEventListener('mouseleave', onLeave);
            el.removeEventListener('touchend', onLeave);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            {/* DESKTOP FOOTER - Hidden on mobile/tablet | Fully responsive for 1490px+ screens */}
            <footer
                ref={ref}
                className="hidden lg:block absolute flex justify-center text-center w-full items-center h-[730px] text-white"
            >
                <motion.div
                    aria-hidden
                    initial={{ y: 0, rotate: 0 }}
                    animate={{ y: [0, 12, 0], rotate: [0, 6, 0] }}
                    transition={{ duration: 3.2, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' }}
                    className="absolute inset-x-0 bottom-[510px] py-10 lg:py-14 flex justify-center items-center z-30 pointer-events-none"
                >
                    <Image
                        src="/Footer/bembexFooterLogo3D.webp"
                        alt="Footer Logo"
                        width={100}
                        height={100}
                        className="block w-auto h-auto brightness"
                    />
                </motion.div>

                {/* RESPONSIVE CONTAINER SYSTEM FOR LARGE SCREENS */}
                <div className="container mb-2 absolute inset-x-0 bottom-0 py-0 text-center z-30">
                    <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-4xl mx-auto">
                        Your Performance
                        <br />
                        Partner
                    </h1>

                    {/* Logos flex box */}
                    <div className="mt-4 flex items-center justify-center w-full">

                        {/* Privacy Policy */}
                        <div className="border solid border-1 border-white/20 w-[260px] flex justify-center items-center h-[100px]">
                            <a className="text-lg text-white opacity-90" href='/privacy-policy'>Privacy Policy</a>
                        </div>

                        {/* Tripple Social Logos (Facebook, instagram, Tiktok) */}

                        <div className="border solid border-1 border-white/20 w-[130px] flex justify-center items-center h-[100px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48" fill="none">
                                <g clipPath="url(#clip0_1577_990)">
                                    <path d="M24 0C10.7453 0 0 10.7453 0 24C0 35.255 7.74912 44.6995 18.2026 47.2934V31.3344H13.2538V24H18.2026V20.8397C18.2026 12.671 21.8995 8.8848 29.9194 8.8848C31.44 8.8848 34.0637 9.18336 35.137 9.48096V16.129C34.5706 16.0694 33.5866 16.0397 32.3645 16.0397C28.4294 16.0397 26.9088 17.5306 26.9088 21.4061V24H34.7482L33.4013 31.3344H26.9088V47.8243C38.7926 46.3891 48.001 36.2707 48.001 24C48 10.7453 37.2547 0 24 0Z" fill="white" fillOpacity="0.3" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1577_990">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <div className="border solid border-1 border-white/20 w-[130px] flex justify-center items-center h-[100px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48" fill="none">
                                <g clipPath="url(#clip0_1577_992)">
                                    <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="white" fillOpacity="0.3" />
                                    <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="white" fillOpacity="0.3" />
                                    <path d="M39.6937 11.1848C39.6937 12.7785 38.4 14.0629 36.8156 14.0629C35.2219 14.0629 33.9375 12.7691 33.9375 11.1848C33.9375 9.59102 35.2313 8.30664 36.8156 8.30664C38.4 8.30664 39.6937 9.60039 39.6937 11.1848Z" fill="white" fillOpacity="0.3" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1577_992">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <div className="border solid border-1 border-white/20 w-[130px] flex justify-center items-center h-[100px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48" fill="none">
                                <path d="M34.1451 0H26.0556V32.6956C26.0556 36.5913 22.9444 39.7913 19.0725 39.7913C15.2007 39.7913 12.0894 36.5913 12.0894 32.6956C12.0894 28.8696 15.1315 25.7391 18.8651 25.6V17.3913C10.6374 17.5304 4 24.2783 4 32.6956C4 41.1827 10.7757 48 19.1417 48C27.5075 48 34.2833 41.1131 34.2833 32.6956V15.9304C37.3255 18.1565 41.059 19.4783 45 19.5479V11.3391C38.9157 11.1304 34.1451 6.12173 34.1451 0Z" fill="white" fillOpacity="0.3" />
                            </svg>
                        </div>

                        {/* Bark Logo */}
                        <div className="border solid border-1 border-white/20 w-[260px] flex justify-center items-center h-[100px]">
                            <Image
                                src="/Footer/review.webp"
                                alt="review Logo"
                                width={120}
                                height={40}
                                className="object-contain"
                            />
                        </div>

                        {/* Trustpilot Logo */}
                        <div className="border solid border-1 border-white/20 w-[260px] flex justify-center items-center h-[100px]">
                            <Image
                                src="/Footer/TrustPilot.webp"
                                alt="TrustPilot Logo"
                                width={120}
                                height={40}
                                className="object-contain"
                            />
                        </div>

                        {/* More tripple socials logos (Linkedin, Youtube, X) */}
                        <div className="border solid border-1 border-white/20 w-[130px] flex justify-center items-center h-[100px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48" fill="none">
                                <g clipPath="url(#clip0_1577_993)">
                                    <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="white" fillOpacity="0.3" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1577_993">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <div className="border solid border-1 border-white/20 w-[130px] flex justify-center items-center h-[100px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48" fill="none">
                                <path d="M47.5219 14.3996C47.5219 14.3996 47.0531 11.0902 45.6094 9.63711C43.7812 7.72461 41.7375 7.71523 40.8 7.60273C34.0875 7.11523 24.0094 7.11523 24.0094 7.11523H23.9906C23.9906 7.11523 13.9125 7.11523 7.2 7.60273C6.2625 7.71523 4.21875 7.72461 2.39062 9.63711C0.946875 11.0902 0.4875 14.3996 0.4875 14.3996C0.4875 14.3996 0 18.2902 0 22.1715V25.809C0 29.6902 0.478125 33.5809 0.478125 33.5809C0.478125 33.5809 0.946875 36.8902 2.38125 38.3434C4.20937 40.2559 6.60938 40.1902 7.67813 40.3965C11.5219 40.7621 24 40.8746 24 40.8746C24 40.8746 34.0875 40.8559 40.8 40.3777C41.7375 40.2652 43.7812 40.2559 45.6094 38.3434C47.0531 36.8902 47.5219 33.5809 47.5219 33.5809C47.5219 33.5809 48 29.6996 48 25.809V22.1715C48 18.2902 47.5219 14.3996 47.5219 14.3996ZM19.0406 30.2246V16.734L32.0062 23.5027L19.0406 30.2246Z" fill="white" fillOpacity="0.3" />
                            </svg>
                        </div>

                        <div className="border solid border-1 border-white/20 w-[130px] flex justify-center items-center h-[100px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48" fill="none">
                                <path d="M36.6526 3.80762H43.3995L28.6594 20.6546L46 43.5796H32.4225L21.7881 29.6757L9.61989 43.5796H2.86886L18.6349 25.5598L2 3.80762H15.9222L25.5348 16.5163L36.6526 3.80762ZM34.2846 39.5412H38.0232L13.8908 7.63388H9.87892L34.2846 39.5412Z" fill="white" fillOpacity="0.3" />
                            </svg>
                        </div>

                        {/* Terms & Conditions */}
                        <div className="border solid border-1 border-white/20 w-[260px] flex justify-center items-center h-[100px]">
                            <a className="text-lg text-white opacity-90" href='/terms'>Terms &amp; Conditions</a>
                        </div>
                    </div>

                    {/* CONSTRAINED DISCLAIMER TEXT */}
                    <p className="mt-4 text-xs text-gray-200 max-w-4xl mx-auto px-2">
                        Disclaimer: Logo, portfolio, images, and content are the sole property of Bembex Lab. All third-party company names, brand names, and trademarks displayed on this website are their respective owners' property. Furthermore, Bembex Lab, as a digital solutions marketing company, does not influence the third party material that is being displayed on the website. Therefore, we are also not responsible for any resemblance with any other material on the web. These portfolios and case studies are actual but exemplary (For better understanding); the actual names, designs, functionality, content, and stats/facts may differ from the actual projects. This is due to the strict NDA policy that Bembex Lab follows.
                    </p>

                    {/* Bembex Lab Footer Title Image */}
                    <Image
                        src="/Footer/BEMBEXLAB.webp"
                        alt="Bembex Lab"
                        width={600}
                        height={100}
                        className="w-full h-auto mt-8 brightness-[200]"
                    />

                    <div className="text-center text-sm text-white/95 leading-none mt-2 max-w-4xl mx-auto">
                        Copyright © 2026 Bembex Lab. All rights reserved.
                    </div>
                </div>

                {/* RADIAL GRADIENT - FULL BLEED */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
                    <div
                        aria-hidden
                        className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                            left: 'var(--mx, 50%)',
                            top: 'var(--my, 50%)',
                            width: '1300px',
                            height: '1300px',
                            background: 'radial-gradient(circle, rgba(139,16,16,0.85) 0%, rgba(139,16,16,0.45) 30%, rgba(139,16,16,0.2) 55%, transparent 85%)',
                            filter: 'blur(12px)',
                            opacity: 1,
                            transition: 'left 120ms linear, top 120ms linear',
                            mixBlendMode: 'screen'
                        }}
                    />
                </div>
            </footer>

            {/* MOBILE/TABLET FOOTER - Only visible below lg breakpoint | With animated logo */}
            <footer className="lg:hidden text-white py-8 px-4 relative">
                <div className="max-w-4xl mx-auto">
                    {/* Animated logo - IDENTICAL animation to desktop */}
                    <motion.div
                        aria-hidden
                        initial={{ y: 0, rotate: 0 }}
                        animate={{
                            y: [0, 10, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{
                            duration: 3.2,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'loop'
                        }}
                        className="flex justify-center mb-6 pointer-events-none"
                    >
                        <Image
                            src="/Footer/bembexFooterLogo3D.webp"
                            alt="Bembex Lab Footer Logo"
                            width={70}
                            height={70}
                            className="block w-auto h-auto"
                            priority
                        />
                    </motion.div>

                    <h1 className="text-white font-extrabold text-3xl text-center mb-8">
                        Your Performance
                        <br />
                        Partner
                    </h1>

                    {/* Responsive grid for links/logos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="border border-white/20 rounded-xl flex justify-center items-center p-4">
                            <a className="text-sm font-medium" href='/privacy-policy'>Privacy Policy</a>
                        </div>
                        <div className="border border-white/20 rounded-xl flex justify-center items-center p-4">
                            <a className="text-sm font-medium" href='/terms'>Terms & Conditions</a>
                        </div>

                        {/* Social Icons Row - wraps on smallest screens */}
                        <div className="border border-white/20 rounded-xl col-span-1 sm:col-span-2 flex flex-wrap justify-center items-center p-3 gap-4">
                            {['facebook', 'instagram', 'tiktok', 'linkedin', 'youtube', 'x'].map((platform) => (
                                <div key={platform} className="w-10 h-10 flex items-center justify-center">
                                    {platform === 'facebook' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill="none">
                                            <path d="M24 0C10.7453 0 0 10.7453 0 24C0 35.255 7.74912 44.6995 18.2026 47.2934V31.3344H13.2538V24H18.2026V20.8397C18.2026 12.671 21.8995 8.8848 29.9194 8.8848C31.44 8.8848 34.0637 9.18336 35.137 9.48096V16.129C34.5706 16.0694 33.5866 16.0397 32.3645 16.0397C28.4294 16.0397 26.9088 17.5306 26.9088 21.4061V24H34.7482L33.4013 31.3344H26.9088V47.8243C38.7926 46.3891 48.001 36.2707 48.001 24C48 10.7453 37.2547 0 24 0Z" fill="white" fillOpacity="0.3" />
                                        </svg>
                                    )}
                                    {platform === 'instagram' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill="none">
                                            <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="white" fillOpacity="0.3" />
                                            <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="white" fillOpacity="0.3" />
                                            <path d="M39.6937 11.1848C39.6937 12.7785 38.4 14.0629 36.8156 14.0629C35.2219 14.0629 33.9375 12.7691 33.9375 11.1848C33.9375 9.59102 35.2313 8.30664 36.8156 8.30664C38.4 8.30664 39.6937 9.60039 39.6937 11.1848Z" fill="white" fillOpacity="0.3" />
                                        </svg>
                                    )}
                                    {platform === 'tiktok' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill="none">
                                            <path d="M34.1451 0H26.0556V32.6956C26.0556 36.5913 22.9444 39.7913 19.0725 39.7913C15.2007 39.7913 12.0894 36.5913 12.0894 32.6956C12.0894 28.8696 15.1315 25.7391 18.8651 25.6V17.3913C10.6374 17.5304 4 24.2783 4 32.6956C4 41.1827 10.7757 48 19.1417 48C27.5075 48 34.2833 41.1131 34.2833 32.6956V15.9304C37.3255 18.1565 41.0590 19.4783 45 19.5479V11.3391C38.9157 11.1304 34.1451 6.12173 34.1451 0Z" fill="white" fillOpacity="0.3" />
                                        </svg>
                                    )}
                                    {platform === 'linkedin' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill="none">
                                            <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="white" fillOpacity="0.3" />
                                        </svg>
                                    )}
                                    {platform === 'youtube' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill="none">
                                            <path d="M47.5219 14.3996C47.5219 14.3996 47.0531 11.0902 45.6094 9.63711C43.7812 7.72461 41.7375 7.71523 40.8 7.60273C34.0875 7.11523 24.0094 7.11523 24.0094 7.11523H23.9906C23.9906 7.11523 13.9125 7.11523 7.2 7.60273C6.2625 7.71523 4.21875 7.72461 2.39062 9.63711C0.946875 11.0902 0.4875 14.3996 0.4875 14.3996C0.4875 14.3996 0 18.2902 0 22.1715V25.8090C0 29.6902 0.478125 33.5809 0.478125 33.5809C0.478125 33.5809 0.946875 36.8902 2.38125 38.3434C4.20937 40.2559 6.60938 40.1902 7.67813 40.3965C11.5219 40.7621 24 40.8746 24 40.8746C24 40.8746 34.0875 40.8559 40.8 40.3777C41.7375 40.2652 43.7812 40.2559 45.6094 38.3434C47.0531 36.8902 47.5219 33.5809 47.5219 33.5809C47.5219 33.5809 48 29.6996 48 25.8090V22.1715C48 18.2902 47.5219 14.3996 47.5219 14.3996ZM19.0406 30.2246V16.7340L32.0062 23.5027L19.0406 30.2246Z" fill="white" fillOpacity="0.3" />
                                        </svg>
                                    )}
                                    {platform === 'x' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill="none">
                                            <path d="M36.6526 3.80762H43.3995L28.6594 20.6546L46 43.5796H32.4225L21.7881 29.6757L9.61989 43.5796H2.86886L18.6349 25.5598L2 3.80762H15.9222L25.5348 16.5163L36.6526 3.80762ZM34.2846 39.5412H38.0232L13.8908 7.63388H9.87892L34.2846 39.5412Z" fill="white" fillOpacity="0.3" />
                                        </svg>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Review Logos */}
                        <div className="border border-white/20 rounded-xl flex justify-center items-center p-4">
                            <Image
                                src="/Footer/review.webp"
                                alt="Bark Reviews"
                                width={100}
                                height={35}
                                className="object-contain max-w-[100px]"
                            />
                        </div>
                        <div className="border border-white/20 rounded-xl flex justify-center items-center p-4">
                            <Image
                                src="/Footer/TrustPilot.webp"
                                alt="Trustpilot Rating"
                                width={100}
                                height={35}
                                className="object-contain max-w-[100px]"
                            />
                        </div>
                    </div>

                    {/* Disclaimer - truncated on mobile with option to expand */}
                    <details className="mb-6 bg-black/30 border border-white/10 rounded-xl p-4">
                        <summary className="text-xs font-medium text-white/90 cursor-pointer">Disclaimer</summary>
                        <p className="text-xs text-white/70 mt-2 leading-relaxed">
                            Logo, portfolio, images, and content are the sole property of Bembex Lab. All third-party company names, brand names, and trademarks displayed on this website are their respective owners' property. Bembex Lab does not influence third-party material displayed on this website and is not responsible for any resemblance with other material. Portfolios and case studies are actual but exemplary; actual names, designs, functionality, content, and stats may differ due to strict NDA policies.
                        </p>
                    </details>

                    <div className="flex justify-center mb-4">
                        <Image
                            src="/Footer/BEMBEXLAB.webp"
                            alt="Bembex Lab"
                            width={280}
                            height={45}
                            className="w-full h-auto max-w-xs"
                        />
                    </div>

                    <div className="text-center text-xs text-white/95 pt-4 border-t border-white/10">
                        Copyright © {new Date().getFullYear()} Bembex Lab. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}
