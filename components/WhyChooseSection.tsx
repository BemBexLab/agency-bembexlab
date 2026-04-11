import Image from "next/image";
import { FaGem } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";

const WhyChooseUs = () => {
  return (
    <section className="relative z-30 w-full px-4 sm:px-6 py-20 md:py-28 max-w-7xl mx-auto text-white">
      <div className="flex flex-col lg:flex-row items-center gap-14">
        {/* 📸 Image + Bottom Tags */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/Rectangle.webp"
              alt="Why Bembexlab"
              width={700}
              height={450}
              className="rounded-2xl object-cover w-full h-auto"
            />
          </div>

          {/* 🧩 Tags Below Image */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 px-2 gap-4 sm:gap-0">
            {/* Left Tag */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-red-700 text-[#ff4d2d]">
                <FaGem size={18} />
              </div>
              <span className="text-white font-semibold text-base sm:text-lg">
                Quality Assurance
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-white/10" />

            {/* Right Tag */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-red-700 text-[#ff4d2d]">
                <LuBadgeCheck size={18} />
              </div>
              <span className="text-white font-semibold text-base sm:text-lg">
                Professional Support
              </span>
            </div>
          </div>
        </div>

        {/* ✍️ Right Text Column */}
        <div className="w-full lg:w-1/2">
          <p className="text-[#ff4d2d] font-semibold mb-3 text-3xl">
            Why Choose Bembex lab?
          </p>
          <h2 className="text-white font-extrabold text-2xl sm:text-4xl md:text-5xl leading-[1.3] mb-6 space-y-2">
            <div>
              <span className="bg-gradient-to-b from-white via-[#ffecd3] to-[#5a2e1b] text-transparent bg-clip-text">
                Proven Success
              </span>
              <span> Over 5 Years</span>
            </div>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Our digital marketing agency helped companies & businesses such as yours reach better positions, increase online traffic, positive returns like (ROI) and brand building through our digital marketing services. Our digital marketing company is certified in areas like SEM, PPC, social media marketing (SMM), UX/UI Design, Video Animation, Video Editing & Logo Design. We bring 5 years of experience to the table and use creative strategies to help you business success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
