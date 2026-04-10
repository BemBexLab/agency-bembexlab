"use client";

import Image from "next/image";

const OurVisionStatement = () => {
  return (
    <section className="relative bg-[#0A0A11] px-4 sm:px-6 lg:px-20 py-16 sm:py-20 overflow-hidden">
      {/* 🔴 Soft Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF3C1B11] via-transparent to-[#ffffff08] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* 🔸 Left Content */}
        <div className="text-white">
          <p className="text-[#FF3C1B] text-3xl font-semibold mb-3">
            Experience & Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
              Experience
            </span>{" "}
            & Expertise
            {/* <br /> */}
            {/* <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
              realized.
            </span> */}
          </h2>

          {/* <ul className="text-white/70 space-y-4 text-sm sm:text-base md:text-lg max-w-2xl list-disc list-inside">
            <li>
              <strong>400+ Five-Star Ratings:</strong> A testament to our
              commitment to excellence.
            </li>
            <li>
              <strong>98% Client Retention Rate:</strong> Your trust and
              satisfaction drive our success.
            </li>
            <li>
              <strong>Customized Strategies:</strong> Solutions crafted to meet
              your unique business needs.
            </li>
            <li>
              <strong>Ongoing Support:</strong> Comprehensive assistance even
              after project completion.
            </li>
          </ul> */}

          <p className="text-gray-200 text-base sm:text-[17px] leading-relaxed mt-6 max-w-xl">
            Our team brings years of combined experience working with startups, small businesses, and growing brands across multiple industries. We are skilled in industry-leading tools and platforms including Google Ads, Google Analytics, Meta Ads, and modern SEO frameworks.
            <br />
            This expertise allows us to adapt quickly, stay ahead of trends, and deliver consistent results for our clients.
          </p>
        </div>

        {/* 🟠 Right Image */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[380px] rounded-[32px] overflow-hidden">
            <Image
              src="/Rectangle30.webp"
              alt="Vision Art"
              width={500}
              height={500}
              className="object-cover w-full h-auto rounded-[32px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVisionStatement;
