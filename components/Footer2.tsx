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
                className="hidden lg:block absolute flex justify-center text-center w-full items-center h-[630px] text-white"
            >
                <motion.div
                    aria-hidden
                    initial={{ y: 0, rotate: 0 }}
                    animate={{ y: [0, 12, 0], rotate: [0, 6, 0] }}
                    transition={{ duration: 3.2, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' }}
                    className="absolute inset-x-0 bottom-[400px] py-10 lg:py-14 flex justify-center items-center z-30 pointer-events-none"
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

                    {/* Logos flex box REMOVED */}

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
