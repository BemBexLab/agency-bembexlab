"use client";

const AboutIntro = () => {
  return (
    <section className="bg-[#0A0A11] text-white px-4 sm:px-6 lg:px-20 py-16 sm:py-20 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-start">
        {/* 🔸 Left Content */}
        <div>
          <p className="text-[#FF3C1B] text-3xl font-semibold mb-3 sm:mb-4">
            About us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text block">
              Who we are
            </span>
            {/* <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text block">
              we are
            </span> */}
            {/* <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text block">
              we are
            </span> */}
          </h2>
        </div>

        {/* 🔹 Right Content */}
        <div className="text-gray-200 text-sm sm:text-base leading-relaxed space-y-5">
          <p>
            We are a team of experienced digital marketers, strategists, designers, and growth specialists passionate about building brands in the digital space. With a deep understanding of the USA market and consumer behavior, we help businesses stand out in competitive industries.<br></br><br></br>
            At BembexLab, we believe digital marketing is not about shortcuts or guesswork, it's about strategy, execution, and continuous optimization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
