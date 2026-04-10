"use client";

import Image from "next/image";

const OurVision = () => {
  return (
    <section className="relative bg-[#0A0A11] px-4 sm:px-6 lg:px-20 py-16 sm:py-20 overflow-hidden">
      {/* 🔴 Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF3C1B11] via-transparent to-[#ffffff08] z-0" />

      {/* 🟠 Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* 📸 Left Image */}
        <div className="w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px] mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/Rectangle-0.webp"
            alt="Vision Graphic"
            width={600}
            height={600}
            className="object-cover w-full h-auto rounded-2xl"
            priority
          />
        </div>

        {/* 📝 Right Content */}
        <div className="text-white">
          <p className="text-[#FF3C1B] text-3xl font-semibold mb-3">
            Our Vision
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
              Why
            </span>{" "}
            choose<br />Bembex Lab
            {/* <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
              Lab
            </span> */}
          </h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
            What sets us apart is our commitment to clarity, performance, and partnership.
          </p>
          <ul className="text-gray-200 list-disc space-y-1 mt-3 ml-4">
            <li className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">Customized Strategies - No one-size fits all solutions</li>
            <li className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">Data-Driven Decisions - Every move backed by analytics</li>
            <li className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">Transparent Reporting - Clear insights, real numbers</li>
            <li className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">Ethical Practices -  White-hat, sustainable growth methods</li>
            <li className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">Client-First Approach - Your success is our priority</li>
            <li className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">We don’t just run campaigns - we build digital growth systems.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
