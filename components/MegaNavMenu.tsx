"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";

const serviceCategories = [
    {
        title: { label: "Web Design & Development", href: "/services/web-design-development/" },
        // items: [
        //     { label: "Custom Website Design", href: "/services/web-design-development/custom-web-design-and-development" },
        //     { label: "E-commerce Website\nDevelopment", href: "/services/web-design-development/ecommerce-website-development" },
        //     { label: "Magento Development", href: "/services/web-design-development/magento-development" },
        //     { label: "Shopify Development", href: "/services/web-design-development/shopify-development" },
        //     { label: "WooCommerce Development", href: "/services/web-design-development/woocommerce-development" },
        //     { label: "Wordpress Development", href: "/services/web-design-development/wordpress-development" },
        // ]
    },
    {
        title: { label: "Graphic Design", href: "/services/graphic-design" },
        // items: [
        //     { label: "SEO Strategy & Planning", href: "/services/search-engine-optimization/seo-strategy-planning" },
        //     { label: "Local SEO Service", href: "/services/search-engine-optimization/local-seo-service" },
        //     // { label: "Local Listing", href: "/services/search-engine-optimization/local-listing" },
        //     { label: "On-page & Off-page", href: "/services/search-engine-optimization/onpage-offpage-seo" },
        //     { label: "Link Building", href: "/services/search-engine-optimization/link-building" },
        //     { label: "Technical SEO Infrastructure", href: "/services/search-engine-optimization/technical-seo-infrastructure" },
        //     { label: "Google Profile Optimization", href: "/services/search-engine-optimization/google-profile-optimization" },
        // ]
    },
    {
        title: { label: "Video Editing", href: "/services/video-editing" },
        // items: [
        //     { label: "Google Ads", href: "/services/performance-marketing/google-ads" },
        //     { label: "Youtube Ads", href: "/services/performance-marketing/youtube-ads" },
        //     { label: "Meta Ads", href: "/services/performance-marketing/meta-ads" },
        //     { label: "Tiktok Shop Ads", href: "/services/performance-marketing/tiktok-shop-ads" },
        //     { label: "Linkedin Ads", href: "/services/performance-marketing/linkedin-ads" },
        //     { label: "Shopping Ads", href: "/services/performance-marketing/shopping-ads" },
        //     { label: "Affiliate Marketing", href: "/services/performance-marketing/affiliate-marketing" },
        //     { label: "Influencer Marketing", href: "/services/performance-marketing/influencer-marketing" },
        //     { label: "App Marketing", href: "/services/performance-marketing/app-marketing" },
        // ]
    },
    {
        title: { label: "Mobile Development", href: "/services/mobile-development" },
        // items: [
        //     { label: "Logo Design &\nVisual Systems", href: "/services/logo-design-branding/logo-design-visual-systems" },
        //     { label: "Brand Guide Book", href: "/services/logo-design-branding/brand-guide-book" },
        //     { label: "Personal Branding", href: "/services/logo-design-branding/personal-branding" },
        //     { label: "Video & Motion Graphics", href: "/services/logo-design-branding/video-motion-graphics" },
        //     { label: "Brand Development", href: "/services/logo-design-branding/brand-development" },
        // ]
    },
    {
        title: { label: "Web Development", href: "/services/web-development" },
        // items: [
        //     { label: "Profile Optimization", href: "/services/socialmediamarketing-management/profile-optimization" },
        //     { label: "High-Impact Content\nSystems", href: "/services/socialmediamarketing-management/high-impact-content-systems" },
        //     { label: "Conversion-Focused\nProfile Architecture", href: "/services/socialmediamarketing-management/conversion-focused-profile-architecture" },
        //     { label: "Trend Intelligence &\nReach Amplification", href: "/services/socialmediamarketing-management/trend-intelligence-reach-amplification" },
        // ]
    },
    {
        title: { label: "Digital Marketing", href: "/services/digital-design" },
        // items: [
        //     { label: "Email Marketing", href: "/services/content-marketing/email-marketing" },
        //     { label: "SEO Content Writing", href: "/services/content-marketing/seo-content-writing" },
        //     { label: "Copywriting", href: "/services/content-marketing/copywriting" },
        //     { label: "Conversion Rate\nOptimization (CRO)", href: "/services/content-marketing/conversion-rate-optimization-cro" },
        // ]
    },
    {
        title: { label: "Digital Marketing", href: "/services/digital-marketing" },
        // items: [
        //     { label: "Email Marketing", href: "/services/content-marketing/email-marketing" },
        //     { label: "SEO Content Writing", href: "/services/content-marketing/seo-content-writing" },
        //     { label: "Copywriting", href: "/services/content-marketing/copywriting" },
        //     { label: "Conversion Rate\nOptimization (CRO)", href: "/services/content-marketing/conversion-rate-optimization-cro" },
        // ]
    },
    {
        title: { label: "Content Writing", href: "/services/content-writing" },
        // items: [
        //     { label: "Email Marketing", href: "/services/content-marketing/email-marketing" },
        //     { label: "SEO Content Writing", href: "/services/content-marketing/seo-content-writing" },
        //     { label: "Copywriting", href: "/services/content-marketing/copywriting" },
        //     { label: "Conversion Rate\nOptimization (CRO)", href: "/services/content-marketing/conversion-rate-optimization-cro" },
        // ]
    },
    {
        title: { label: "Logo Design", href: "/services/logo-design" },
        // items: [
        //     { label: "Email Marketing", href: "/services/content-marketing/email-marketing" },
        //     { label: "SEO Content Writing", href: "/services/content-marketing/seo-content-writing" },
        //     { label: "Copywriting", href: "/services/content-marketing/copywriting" },
        //     { label: "Conversion Rate\nOptimization (CRO)", href: "/services/content-marketing/conversion-rate-optimization-cro" },
        // ]
    },
    {
        title: { label: "Branding", href: "/services/branding" },
        // items: [
        //     { label: "Email Marketing", href: "/services/content-marketing/email-marketing" },
        //     { label: "SEO Content Writing", href: "/services/content-marketing/seo-content-writing" },
        //     { label: "Copywriting", href: "/services/content-marketing/copywriting" },
        //     { label: "Conversion Rate\nOptimization (CRO)", href: "/services/content-marketing/conversion-rate-optimization-cro" },
        // ]
    },
    {
        title: { label: "SEO", href: "/services/seo" },
        // items: [
        //     { label: "Email Marketing", href: "/services/content-marketing/email-marketing" },
        //     { label: "SEO Content Writing", href: "/services/content-marketing/seo-content-writing" },
        //     { label: "Copywriting", href: "/services/content-marketing/copywriting" },
        //     { label: "Conversion Rate\nOptimization (CRO)", href: "/services/content-marketing/conversion-rate-optimization-cro" },
        // ]
    },
];

interface MegaNavMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export default function MegaNavMenu({ isOpen, onClose, onMouseEnter, onMouseLeave }: MegaNavMenuProps) {
    if (!isOpen) return null;
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let touchStartY = 0;

        const node = menuRef.current;

        function handleWheel(e: WheelEvent) {
            // Only close on wheel if the event is NOT from inside the menu
            if (node && !node.contains(e.target as Node)) {
                if (e.deltaY > 0) {
                    onClose();
                }
            }
        }

        function handleTouchStart(e: TouchEvent) {
            // Only track touch if it's NOT from inside the menu
            if (!node || !node.contains(e.target as Node)) {
                touchStartY = e.touches?.[0]?.clientY ?? 0;
            }
        }

        function handleTouchMove(e: TouchEvent) {
            // Only close on touch if it's NOT from inside the menu
            if (!node || !node.contains(e.target as Node)) {
                const currentY = e.touches?.[0]?.clientY ?? 0;
                // positive delta (start - current) means user swiped up (scrolling down)
                if (touchStartY - currentY > 10) {
                    onClose();
                }
            }
        }

        // Add event listener on the menu to prevent wheel/touch propagation
        if (node) {
            const handleMenuWheel = (e: WheelEvent) => {
                e.stopPropagation();
            };
            const handleMenuTouchMove = (e: TouchEvent) => {
                e.stopPropagation();
            };
            const handleMenuPointerDown = (e: PointerEvent) => {
                e.stopPropagation();
            };

            const handlePointerDown = (e: PointerEvent) => {
                if (node && !node.contains(e.target as Node)) {
                    onClose();
                }
            };

            node.addEventListener("wheel", handleMenuWheel, { passive: true });
            node.addEventListener("touchmove", handleMenuTouchMove, { passive: true });
            node.addEventListener("pointerdown", handleMenuPointerDown);

            window.addEventListener("wheel", handleWheel, { passive: true });
            window.addEventListener("touchstart", handleTouchStart, { passive: true });
            window.addEventListener("touchmove", handleTouchMove, { passive: true });
            window.addEventListener("pointerdown", handlePointerDown, { passive: true });

            return () => {
                node.removeEventListener("wheel", handleMenuWheel);
                node.removeEventListener("touchmove", handleMenuTouchMove);
                node.removeEventListener("pointerdown", handleMenuPointerDown);
                window.removeEventListener("wheel", handleWheel);
                window.removeEventListener("touchstart", handleTouchStart);
                window.removeEventListener("touchmove", handleTouchMove);
                window.removeEventListener("pointerdown", handlePointerDown);
            };
        }

        window.addEventListener("wheel", handleWheel, { passive: true });
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchmove", handleTouchMove, { passive: true });
        // Fallback pointerdown handler when menu ref isn't set yet
        const handlePointerDown = (e: PointerEvent) => {
            if (!menuRef.current || !menuRef.current.contains(e.target as Node)) {
                onClose();
            }
        };
        window.addEventListener("pointerdown", handlePointerDown, { passive: true });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("pointerdown", handlePointerDown);
        };
    }, [onClose]);

    return (
        <>
            <style>{`
                .mega-nav-scroll::-webkit-scrollbar {
                    width: 6px;
                }
                .mega-nav-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .mega-nav-scroll::-webkit-scrollbar-thumb {
                    background: #ff1e00;
                    border-radius: 3px;
                }
                .mega-nav-scroll::-webkit-scrollbar-thumb:hover {
                    background: #ff4d2d;
                }
                .mega-nav-scroll {
                    scrollbar-color: #ff1e00 transparent;
                    scrollbar-width: thin;
                }
            `}</style>
            <div
                ref={menuRef}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="fixed left-1/2 top-16 -translate-x-1/2 mt-2 w-[1050px] md:w-[1020px] max-h-[400px] overflow-y-auto mega-nav-scroll bg-[#0a0a0a]/95 backdrop-blur-md rounded-2xl border border-[#ff1e00]/30 p-8 flex flex-wrap gap-[50px] justify-left -start shadow-2xl z-[60]"
            >
                {serviceCategories.map((category) => (
                    <div key={category.title.label} className="text-left">
                        <Link
                            href={category.title.href}
                            onClick={onClose}
                        >
                            <h3 className="text-white font-semibold mb-2 text-[16px] hover:text-red-400 transition cursor-pointer whitespace-pre-line ">{category.title.label}</h3>
                        </Link>
                        <ul className="m-0 p-0 list-none">
                            {category.items.map((service, index) => (
                                <li key={`${category.title.label}-${index}`} className="m-0 p-0 flex items-center">
                                    <IoIosArrowDropright className="text-white/70 flex-shrink-0 mr-1 w-4 h-4" />
                                    <Link
                                        href={service.href}
                                        onClick={onClose}
                                        className="text-white hover:text-red-400 transition text-[15px] font-light my-1.5 whitespace-pre-line leading-none"
                                    >
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}
