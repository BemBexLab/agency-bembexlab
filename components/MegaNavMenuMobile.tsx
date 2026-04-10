"use client";

import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";

const serviceCategories = [
    {
        title: { label: "Web Design & Development", href: "/services/web-design-development/" },
        items: [
            { label: "Custom Website Design", href: "/services/web-design-development/custom-web-design-and-development" },
            { label: "E-commerce Website\nDevelopment", href: "/services/web-design-development/ecommerce-website-development" },
            { label: "Magento Development", href: "/services/web-design-development/magento-development" },
            { label: "Shopify Development", href: "/services/web-design-development/shopify-development" },
            { label: "WooCommerce Development", href: "/services/web-design-development/woocommerce-development" },
            { label: "Wordpress Development", href: "/services/web-design-development/wordpress-development" },
        ]
    },
    {
        title: { label: "Search Engine Optimization", href: "/services/search-engine-optimization" },
        items: [
            { label: "SEO Strategy & Planning", href: "/services/search-engine-optimization/seo-strategy-planning" },
            { label: "Local SEO Service", href: "/services/search-engine-optimization/local-search-dominance" },
            // { label: "Local Listing", href: "/services/search-engine-optimization/local-listing" },
            { label: "On-page & Off-page", href: "/services/search-engine-optimization/onpage-offpage-seo" },
            { label: "Link Building", href: "/services/search-engine-optimization/link-building" },
            { label: "Technical SEO Infrastructure", href: "/services/search-engine-optimization/technical-seo-infrastructure" },
            { label: "Google Profile Optimization", href: "/services/search-engine-optimization/google-profile-optimization" },
        ]
    },
    {
        title: { label: "Performance Marketing", href: "/services/performance-marketing" },
        items: [
            { label: "Google Ads", href: "/services/performance-marketing/google-ads" },
            { label: "Youtube Ads", href: "/services/performance-marketing/youtube-ads" },
            { label: "Meta Ads", href: "/services/performance-marketing/meta-ads" },
            { label: "Tiktok Shop Ads", href: "/services/performance-marketing/tiktok-shop-ads" },
            { label: "Linkedin Ads", href: "/services/performance-marketing/linkedin-ads" },
            { label: "Shopping Ads", href: "/services/performance-marketing/shopping-ads" },
            { label: "Affiliate Marketing", href: "/services/performance-marketing/affiliate-marketing" },
            { label: "Influencer Marketing", href: "/services/performance-marketing/influencer-marketing" },
            { label: "App Marketing", href: "/services/performance-marketing/app-marketing" },
        ]
    },
    {
        title: { label: "Logo Design & Branding", href: "/services/logo-design-branding" },
        items: [
            { label: "Logo Design &\nVisual Systems", href: "/services/logo-design-branding/logo-design-visual-systems" },
            { label: "Brand Guide Book", href: "/services/logo-design-branding/brand-guide-book" },
            { label: "Personal Branding", href: "/services/logo-design-branding/personal-branding" },
            { label: "Video & Motion Graphics", href: "/services/logo-design-branding/video-motion-graphics" },
            { label: "Brand Development", href: "/services/logo-design-branding/brand-development" },
        ]
    },
    {
        title: { label: "Social Media Marketing &\nManagement", href: "/services/socialmediamarketing-management" },
        items: [
            { label: "Profile Optimization", href: "/services/socialmediamarketing-management/profile-optimization" },
            { label: "High-Impact Content\nSystems", href: "/services/socialmediamarketing-management/high-impact-content-systems" },
            { label: "Conversion-Focused\nProfile Architecture", href: "/services/socialmediamarketing-management/conversion-focused-profile-architecture" },
            { label: "Trend Intelligence &\nReach Amplification", href: "/services/socialmediamarketing-management/trend-intelligence-reach-amplification" },
        ]
    },
    {
        title: { label: "Content Marketing", href: "/services/content-marketing" },
        items: [
            { label: "Email Marketing", href: "/services/content-marketing/email-marketing" },
            { label: "SEO Content Writing", href: "/services/content-marketing/seo-content-writing" },
            { label: "Copywriting", href: "/services/content-marketing/copywriting" },
            { label: "Conversion Rate\nOptimization (CRO)", href: "/services/content-marketing/conversion-rate-optimization-cro" },
        ]
    },
];

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function MegaNavMenuMobile({ isOpen, onClose }: Props) {
    if (!isOpen) return null;

    return (
        <div className="w-full bg-[#0a0a0a]/95 p-4 rounded-lg border border-[#ff1e00]/20">
            <div className="max-h-[55vh] overflow-y-auto pr-2">
                {serviceCategories.map((category) => (
                    <div key={category.title.label} className="mb-4">
                        <h4 className="text-white font-semibold mb-2 whitespace-pre-line">
                            <Link href={category.title.href} onClick={onClose} className="inline-block">
                                {category.title.label}
                            </Link>
                        </h4>
                        <ul className="space-y-2">
                            {category.items.map((s, i) => (
                                <li key={`${category.title.label}-${i}`}>
                                    <Link href={s.href} onClick={onClose} className="flex items-start gap-2 text-white/90 hover:text-red-400 transition">
                                        <IoIosArrowDropright className="mt-1 text-white/60 w-4 h-4 flex-shrink-0" />
                                        <span className="whitespace-pre-line text-[15px] leading-tight">{s.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
