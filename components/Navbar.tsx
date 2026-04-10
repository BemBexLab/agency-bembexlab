"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const MegaNavMenu = dynamic(() => import("./MegaNavMenu"));
const MegaNavMenuMobile = dynamic(() => import("./MegaNavMenuMobile"));

const navItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Services", href: "/services", isMega: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Packages", href: "/packages" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact us", href: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  // Scroll detection
  useEffect(() => {
    const updateHeaderVisibility = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown =
        currentScrollY > lastScrollYRef.current && currentScrollY > 50;

      setShowHeader((prev) => (prev === !isScrollingDown ? prev : !isScrollingDown));
      lastScrollYRef.current = currentScrollY;
      tickingRef.current = false;
    };

    const handleScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        window.requestAnimationFrame(updateHeaderVisibility);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (servicesCloseTimerRef.current) {
        clearTimeout(servicesCloseTimerRef.current);
      }
    };
  }, []);

  const openServicesDropdown = () => {
    if (servicesCloseTimerRef.current) {
      clearTimeout(servicesCloseTimerRef.current);
      servicesCloseTimerRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const closeServicesDropdownWithDelay = () => {
    if (servicesCloseTimerRef.current) {
      clearTimeout(servicesCloseTimerRef.current);
    }
    servicesCloseTimerRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/20 backdrop-blur-md border-b border-white/10 ${showHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
    >
      <div className="bg-transparent px-4 md:px-10 py-4 flex justify-between items-center">
        {/* 🔰 Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 ml-2 md:ml-6">
            <Image
              src="/Bembex-logo.webp"
              alt="Bembex Logo"
              width={130}
              height={50}
              priority
              className="w-[130px] h-[50px]"
            />
          </div>
        </Link>

        {/* 🌐 Desktop Nav Links */}
        <div className="hidden min-[1060px]:block">
          <nav className="relative rounded-full px-6 md:px-10 py-3 flex gap-4 md:gap-8 items-center backdrop-blur-md bg-[#1a1a1a]/60 text-white border-b-2 border-[#ff1e00] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_2px_6px_rgba(255,30,0,0.15)] z-50">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative justify-center"
                onMouseEnter={item.isMega ? openServicesDropdown : undefined}
                onMouseLeave={item.isMega ? closeServicesDropdownWithDelay : undefined}
              >
                {item.isMega ? (
                  <button
                    type="button"
                    className={`text-sm whitespace-nowrap font-light ${pathname === item.href
                      ? "text-red-500 font-light underline underline-offset-[10px]"
                      : "text-white"
                      } hover:text-red-400 transition flex items-center gap-1`}
                  >
                    {item.label}
                    {/* <span className={`transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}>▼</span> */}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    prefetch={false}
                    className={`text-sm whitespace-nowrap font-light ${pathname === item.href
                      ? "text-red-500 font-light underline underline-offset-[10px]"
                      : "text-white"
                      } hover:text-red-400 transition`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mega Dropdown Menu */}
                {item.isMega && (
                  <MegaNavMenu
                    isOpen={servicesDropdownOpen}
                    onClose={() => setServicesDropdownOpen(false)}
                    onMouseEnter={openServicesDropdown}
                    onMouseLeave={closeServicesDropdownWithDelay}
                  />
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* 🚀 CTA Button (hidden on xs) */}
        <Link href="/contact-us">
          <div className="hidden lg:flex">
            <button className="rounded-full px-6 py-2 border-b-2 border-[#ff1e00] text-white bg-[#1a1a1a]/60 backdrop-blur-md flex items-center gap-2 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_2px_6px_rgba(255,30,0,0.15)] hover:brightness-110 transition  font-light">
              Book a call <span className="text-xl">→</span>
            </button>
          </div>
        </Link>

        {/* 📱 Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white font-light border border-[#ff1e00] rounded-full px-4 py-2 text-sm"
          >
            {menuOpen ? "✕ Close" : "☰ Menu"}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-md px-4 py-6 flex flex-col gap-4 z-40 lg:hidden shadow-lg border-t border-[#ff1e00]">
          {navItems.map((item) => (
            item.isMega ? (
              <div key={item.href}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full text-left text-base font-light text-white hover:text-red-400 transition mt-1"
                  aria-expanded={mobileServicesOpen}
                >
                  {item.label}
                </button>

                {mobileServicesOpen && (
                  <div className="mt-3">
                    <MegaNavMenuMobile isOpen={mobileServicesOpen} onClose={() => { setMobileServicesOpen(false); setMenuOpen(false); }} />
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-light ${pathname === item.href
                  ? "text-red-500 font-light underline underline-offset-4"
                  : "text-white"
                  } hover:text-red-400 transition`}
              >
                {item.label}
              </Link>
            )
          ))}

          {/* Mobile CTA */}
          <button className="mt-4 rounded-full px-6 py-3 border border-[#ff1e00] text-white bg-[#1a1a1a]/60 backdrop-blur-md shadow-md hover:brightness-110 transition font-light">
            Book a call →
          </button>
        </div>
      )}
    </header>
  );
}
