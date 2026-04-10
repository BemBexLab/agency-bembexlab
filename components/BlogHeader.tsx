"use client";

import Image from "next/image";
import Link from "next/link";

const BlogHeader = () => {
    return (
        <section className="min-h-screen bg-[#0A0A11] text-white px-4 sm:px-6 lg:px-20 pt-20 lg:pt-24 pb-24 flex items-center">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* ✅ Left Side: Text Content */}
                <div className="text-left max-md:mt-8 relative z-20 lg:-mr-40 xl:-mr-56">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        <span className="bg-gradient-to-r from-[#ffb199] to-[#ff0844] text-transparent bg-clip-text">
                            Inspiring Ideas,
                        </span>
                        <span className="text-white"> Expert Insights, and </span>
                        <span className="bg-gradient-to-r from-[#b75c3c] to-white text-transparent bg-clip-text">
                            the Latest Trends
                        </span>
                        {/* <span className="text-white">ebsite Development.</span> */}
                    </h1>

                    <p className="text-white/70 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl">
                        Dive into our blog for actionable strategies, expert insights, and fresh perspectives that will help you stay ahead of the curve. Whether you're looking for ways to boost performance, optimize your digital presence.
                    </p>

                    {/* <Link href="/contact-us">
                        <button className="rounded-full px-5 sm:px-6 py-3 text-white text-sm bg-[#1a1a1a]/60 border border-[#ff4d2d] backdrop-blur-md hover:brightness-110 transition shadow-[0_0_12px_#ff1e00aa]">
                            Book a call →
                        </button>
                    </Link> */}
                </div>

                {/* ✅ Right Side: Image */}
                <div className="flex justify-center lg:justify-end overflow-hidden">
                    <div className="w-full relative z-0 flex justify-center lg:justify-end">
                        <Image
                            src="/image.webp"
                            alt="Swirl Graphic"
                            width={1200}
                            height={1200}
                            className="rounded-2xl object-cover w-full max-w-[650px] h-auto"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogHeader;
