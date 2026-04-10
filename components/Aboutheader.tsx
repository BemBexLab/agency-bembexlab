"use client";

import Image from "next/image";
import Link from "next/link";

const AboutHeader = () => {
  return (
    <section className="min-h-screen bg-[#0A0A11] text-white px-4 sm:px-6 lg:px-20 pt-20 lg:pt-24 pb-24 flex items-center">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* ✅ Left Side: Text Content */}
        <div className="text-left max-md:mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#ffb199] to-[#ff0844] text-transparent bg-clip-text">
              About Us -
            </span><br />
            <span className="text-white"> Bembex </span>
            <span className="bg-gradient-to-r from-[#b75c3c] to-white text-transparent bg-clip-text">
              L
            </span>
            <span className="text-white">ab</span>
          </h1>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl">
            BembexLab is a results driven digital marketing agency helping businesses across the United States grow their online presence, generate quality leads, and increase revenue through strategic digital solutions.<br /><br />
            We specialize in delivering end to end digital marketing services that are data-backed, transparent, and tailored to each client’s unique goals. Our focus is simple measurable growth, long term success, and real business impact.
          </p>

          <Link href="https://www.upwork.com/agencies/bembexlab/">
            <button className="rounded-full px-5 sm:px-6 py-3 text-white text-sm bg-[#1a1a1a]/60 border border-[#ff4d2d] backdrop-blur-md hover:brightness-110 transition shadow-[0_0_12px_#ff1e00aa]">
              Book a call →
            </button>
          </Link>
        </div>

        {/* ✅ Right Side: Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[400px] sm:max-w-[480px] md:max-w-[550px] xl:max-w-[650px]">
            <Image
              src="/image.webp"
              alt="Swirl Graphic"
              width={800}
              height={800}
              className="rounded-2xl object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
