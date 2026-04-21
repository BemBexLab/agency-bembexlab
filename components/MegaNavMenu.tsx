"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";

const serviceLinks = [
    { label: "Web Design & Development", href: "/services/web-design-development/" },
    { label: "Graphic Design", href: "/services/graphic-design" },
    { label: "Video Editing", href: "/services/video-editing" },
    { label: "Web Development", href: "/services/web-development" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "E-Commerce Development", href: "/services/ecommerce-development" },
    { label: "Content Writing", href: "/services/content-writing" },
    { label: "logo Design", href: "/services/logo-design" },
    { label: "Branding", href: "/services/branding" },
    { label: "SEO", href: "/services/seo" },
];

interface MegaNavMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export default function MegaNavMenu({ isOpen, onClose, onMouseEnter, onMouseLeave }: MegaNavMenuProps) {
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;

        let touchStartY = 0;
        const node = menuRef.current;

        function handleWheel(e: WheelEvent) {
            if (node && !node.contains(e.target as Node) && e.deltaY > 0) {
                onClose();
            }
        }

        function handleTouchStart(e: TouchEvent) {
            if (!node || !node.contains(e.target as Node)) {
                touchStartY = e.touches?.[0]?.clientY ?? 0;
            }
        }

        function handleTouchMove(e: TouchEvent) {
            if (!node || !node.contains(e.target as Node)) {
                const currentY = e.touches?.[0]?.clientY ?? 0;

                if (touchStartY - currentY > 10) {
                    onClose();
                }
            }
        }

        function handlePointerDown(e: PointerEvent) {
            if (!menuRef.current || !menuRef.current.contains(e.target as Node)) {
                onClose();
            }
        }

        function stopPropagation(e: Event) {
            e.stopPropagation();
        }

        if (node) {
            node.addEventListener("wheel", stopPropagation, { passive: true });
            node.addEventListener("touchmove", stopPropagation, { passive: true });
            node.addEventListener("pointerdown", stopPropagation);
        }

        window.addEventListener("wheel", handleWheel, { passive: true });
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchmove", handleTouchMove, { passive: true });
        window.addEventListener("pointerdown", handlePointerDown, { passive: true });

        return () => {
            if (node) {
                node.removeEventListener("wheel", stopPropagation);
                node.removeEventListener("touchmove", stopPropagation);
                node.removeEventListener("pointerdown", stopPropagation);
            }

            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("pointerdown", handlePointerDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

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
                className="absolute left-1/2 top-full z-[60] mt-5 w-[310px] -translate-x-1/2 overflow-hidden rounded-lg border border-[#ff1e00]/30 bg-[#0a0a0a]/95 p-3 shadow-2xl backdrop-blur-md"
                role="menu"
                aria-label="Services"
            >
                <ul className="mega-nav-scroll m-0 max-h-[70vh] list-none overflow-y-auto p-0 pr-1">
                    {serviceLinks.map((service) => (
                        <li key={service.href} className="m-0 p-0">
                            <Link
                                href={service.href}
                                onClick={onClose}
                                className="flex items-center gap-2 rounded-md px-3 py-2.5 text-[15px] font-light leading-tight text-white transition hover:bg-[#ff1e00]/10 hover:text-red-400"
                                role="menuitem"
                            >
                                <IoIosArrowDropright className="h-4 w-4 flex-shrink-0 text-white/70" />
                                <span>{service.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* <div className="mt-2 border-t border-white/10 pt-2">
                    <Link
                        href="/services"
                        onClick={onClose}
                        className="block rounded-md px-3 py-2 text-center text-[14px] font-light text-white/80 transition hover:bg-[#ff1e00]/10 hover:text-red-400"
                        role="menuitem"
                    >
                        All Services
                    </Link>
                </div> */}
            </div>
        </>
    );
}
