"use client";

import Image from "next/image";

const MissionSection = () => {
  return (
    <section className="bg-[#0A0A11] text-white px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* 🧡 Left Side – Text */}
        <div>
          <p className="text-[#FF3C1B] text-3xl font-semibold mb-3 sm:mb-4">
            Our Mission
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            <span className="text-white">Wh</span>
            <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
              at
            </span>{" "}
            <span className="text-white">We do</span>
            {/* <br />
            <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
              Ac
            </span> */}
            {/* <span className="text-white">complish.</span> */}
          </h2>

          <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-2xl">
            We offer complete digital marketing solutions designed to help businesses scale effectively, including:
          </p>
          <ul className="text-gray-200 mt-2 ml-4 space-y-1">
            <li className="list-disc text-sm sm:text-base leading-relaxed max-w-2xl">
              Search Engine Optimization (SEO)
            </li>
            <li className="list-disc text-sm sm:text-base leading-relaxed max-w-2xl">
              Google Ads & Pay-Per-Click (PPC) Campaigns
            </li>
            <li className="list-disc text-sm sm:text-base leading-relaxed max-w-2xl">
              Social Media Marketing & Advertising
            </li>
            <li className="list-disc text-sm sm:text-base leading-relaxed max-w-2xl">
              Website Design & Conversion Rate Optimization (CRO)
            </li>
            <li className="list-disc text-sm sm:text-base leading-relaxed max-w-2xl">
              Content Marketing & Brand Messaging
            </li>
            <li className="list-disc text-sm sm:text-base leading-relaxed max-w-2xl">
              Performance Tracking & Analytics
            </li>
            <li className="list-disc text-sm sm:text-base leading-relaxed max-w-2xl">
              12+ Years of Industry Experience
            </li>
          </ul>
          <p className="mt-3 text-gray-200 text-sm sm:text-base leading-relaxed max-w-2xl">
            Each strategy is customized to match your business objectives, audience, and competitive landscape in the United States.
          </p>
        </div>

        {/* 🖼️ Right Side – Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px]">
            <Image
              src="/Rectangle-20.webp"
              alt="Mission Illustration"
              width={600}
              height={600}
              className="rounded-2xl object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
