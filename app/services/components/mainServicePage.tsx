// // app/about/page.tsx
// "use client";


// import Footer2 from "@/components/Footer2";
// import { motion } from "framer-motion";
// import Image from "next/image";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { FaGem } from "react-icons/fa6";
// import { LuBadgeCheck } from "react-icons/lu";


// const services = [
//   {
//     id: "ui-ux-design",
//     img: "/image-7(traced).webp",
//     title: "UI/UX Design",
//     desc: "User-friendly interfaces are created by our UI/UX design services, which keep users happy and engaged.",
//     link: "/services/web-design-development/custom-web-design-and-development",
//   },
//   {
//     id: "website-development",
//     img: "/image-6(traced).webp",
//     title: "Website Development",
//     desc: "We create visually stunning and functional websites that not only attract visitors but also turn them into customers.",
//     link: "/services/web-design-development",
//   },
//   {
//     id: "software-development",
//     img: "/image-8(traced).webp",
//     title: "Software Development",
//     desc: "We develop tailor-made software that streamlines your operations, enhances efficiency, and drives growth.",
//     link: "/services/software-development",
//   },
//   {
//     id: "animation",
//     img: "/image-10(traced).webp",
//     title: "Animation",
//     desc: "Our animation service provides complete support and enhancements to keep your digital visuals engaging and dynamic.",
//     link: "/services/logo-design-branding/video-motion-graphics",
//   },
//   {
//     id: "mobile-app-development",
//     img: "/image-9(traced).webp",
//     title: "Mobile App Development",
//     desc: "We create scalable, robust mobile apps that perform well and offer a consistent user experience across devices.",
//     link: "/services/mobile-app-development",
//   },
//   {
//     id: "graphic-design",
//     img: "/image-15(traced).webp",
//     title: "Graphic Design",
//     desc: "Our creative graphic designers produce engaging and impactful designs that capture your brand's essence.",
//     link: "/services/logo-design-branding/logo-design-visual-systems",
//   },
//   {
//     id: "digital-marketing",
//     img: "/image-11(traced).webp",
//     title: "Digital Marketing",
//     desc: "Our expert team uses a data-driven approach, leveraging the latest techniques to boost your online presence.",
//     link: "/services/performance-marketing",
//   },
//   {
//     id: "social-media-management",
//     img: "/image-14(traced).webp",
//     title: "Social Media Management",
//     desc: "Our social media experts craft compelling content, engage with your audience, and manage your social presence.",
//     link: "/services/socialmediamarketing-management",
//   },
//   {
//     id: "content-writing",
//     img: "/image-13(traced).webp",
//     title: "Content Writing",
//     desc: "Our content writing experts create engaging and persuasive content, connect with your audience, and enhance your online presence.",
//     link: "/services/content-marketing",
//   },
//   {
//     id: "upwork-profile-management",
//     img: "/upwork.webp",
//     title: "Upwork Profile Management",
//     desc: "We manage your verified Upwork profile end-to-end—handling projects and clients—while you earn a fair share of the income stress-free.",
//     link: "",
//   },
//   {
//     id: "seo",
//     img: "/seo.webp",
//     title: "SEO",
//     desc: "Our SEO service boosts your website’s visibility with proven strategies that drive organic traffic, improve rankings, and attract the right audience.",
//     link: "/services/search-engine-optimization",
//   },
//   {
//     id: "logo-design",
//     img: "/logodesign.webp",
//     title: "Logo Design",
//     desc: "We design unique, memorable logos that capture your brand’s identity and leave a lasting impression.",
//     link: "/services/logo-design-branding/logo-design-visual-systems",
//   },
//   {
//     id: "branding",
//     img: "/branding.webp",
//     title: "Branding",
//     desc: "Our branding service builds a strong, consistent identity that connects with your audience and sets you apart from competitors",
//     link: "/services/logo-design-branding/personal-branding",
//   },
//   {
//     id: "maintenance",
//     img: "/maintenance.webp",
//     title: "Maintenance",
//     desc: "We keep your site secure, updated, and running smoothly, ensuring optimal performance and reliability",
//     link: "/services/software-development/maintenance",
//   },
// ];

// const MainServicePage = () => {
//   const router = useRouter();
//   const [clickedArrows, setClickedArrows] = useState<number[]>([]);

//   const handleArrowClick = (index: number) => {
//     if (!clickedArrows.includes(index)) {
//       setClickedArrows([...clickedArrows, index]);
//       setTimeout(() => {
//         setClickedArrows(clickedArrows.filter((i) => i !== index));
//       }, 2000);
//     }
//   };

//   return (
//     <main className="w-full overflow-hidden">

//       {/* Service main page Heaader */}
//       <section className="relative bg-[#0A0A11] text-white  overflow-hidden">
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
//           {/* 🔸 Left Side: Text */}
//           <div className="text-center lg:text-left z-10 px-6 lg:px-20 py-20 max-w-7xl mx-auto mt-6">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
//               <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
//                 Your
//               </span>{" "}
//               brand.
//               <br />
//               <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
//                 Your
//               </span>{" "}
//               success.
//             </h1>
//             <p className="text-white/70 text-sm sm:text-base md:text-lg mb-8">
//               Brand agency for strategy, design and interaction from Munich
//             </p>
//             <Link href="https://www.upwork.com/agencies/bembexlab/">
//               <button className="rounded-full px-6 py-3 text-white text-sm bg-[#1a1a1a]/60 border border-[#ff4d2d] backdrop-blur-md hover:brightness-110 transition shadow-[0_0_12px_#ff1e00aa]">
//                 Book a call →
//               </button>
//             </Link>
//           </div>

//           {/* 🔹 Right Side: Gears Image */}
//           <div className="flex justify-center lg:justify-end relative ">
//             <div className="w-full max-w-[600px]">
//               <Image
//                 src="/Group 21.webp" // or your image path
//                 alt="Service Gears"
//                 width={800}
//                 height={800}
//                 className="w-full h-auto object-cover ml-auto"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Cards Section */}
//       <section className="bg-[#0A0A11] text-white px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <motion.div
//             className="text-center mb-12 md:mb-20"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <motion.p
//               className="text-[#FF3C1B] font-semibold mb-2 md:mb-3 text-sm md:text-base"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//             >
//               Services
//             </motion.p>
//             <motion.h2
//               className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//             >
//               <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
//                 Digital Services
//               </span>{" "}
//               That <br className="hidden md:block" />
//               Deliver Results
//             </motion.h2>
//           </motion.div>

//           {/* Services Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {services.map((service, i) => (
//               <motion.div
//                 key={i}
//                 onClick={() => router.push(service.link || `/services/${service.id}`)}
//                 role="button"
//                 tabIndex={0}
//                 className="group relative rounded-[30px] bg-[rgba(222,47,4,0.10)] backdrop-blur-[33px] p-6 md:p-8 flex flex-col justify-between border border-transparent transition-all duration-300 hover:border-[#DE2F04] cursor-pointer"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1, duration: 0.6 }}
//                 viewport={{ once: true, margin: "-50px" }}
//               >
//                 <div className="relative z-20">
//                   {/* Icon */}
//                   <div className="w-14 h-14 md:w-16 md:h-16 mb-4 md:mb-6 p-2 flex items-center justify-center rounded-[20px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[33.15px] transition-all duration-300 border border-transparent group-hover:border-[#DE2F04]">
//                     <img
//                       src={service.img}
//                       alt={service.title}
//                       className="w-6 h-6 md:w-8 md:h-8 object-contain"
//                     />
//                   </div>

//                   {/* Title */}
//                   {/* <Link href={service.link || `/services/${service.id}`}>
//                     <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
//                       <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
//                         {service.title.split(" ")[0]}
//                       </span>{" "}
//                       {service.title.split(" ").slice(1).join(" ")}
//                     </h3>
//                   </Link> */}
//                   <a href={service.link || `/services/${service.id}`} className="hover:underline" rel="noopener noreferrer">
//                     <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
//                       <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
//                         {service.title.split(" ")[0]}
//                       </span>{" "}
//                       {service.title.split(" ").slice(1).join(" ")}
//                     </h3>
//                   </a>

//                   {/* Description */}
//                   <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
//                     {service.desc}
//                   </p>

//                   {/* Arrow */}

//                   <div
//                     className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-[20px] bg-[rgba(222,47,4,0.10)] backdrop-blur-[33.15px] overflow-hidden cursor-pointer"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleArrowClick(i);
//                     }}
//                   >
//                     <div
//                       className="relative z-10 text-white text-lg font-bold"
//                       style={{
//                         transform: clickedArrows.includes(i)
//                           ? "rotate(360deg)"
//                           : "rotate(0deg)",
//                         transition: "transform 0.8s ease-in-out",
//                       }}
//                     >
//                       →
//                     </div>
//                   </div>

//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="relative z-30 w-full px-4 sm:px-6 py-20 md:py-28 max-w-7xl mx-auto text-white">
//         <div className="flex flex-col lg:flex-row items-center gap-14">
//           {/* 📸 Image + Bottom Tags */}
//           <div className="w-full lg:w-1/2">
//             <div className="rounded-2xl overflow-hidden">
//               <Image
//                 src="/Rectangle.webp"
//                 alt="Why Bembexlab"
//                 width={700}
//                 height={450}
//                 className="rounded-2xl object-cover w-full h-auto"
//               />
//             </div>

//             {/* 🧩 Tags Below Image */}
//             <div className="mt-6 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 px-2 gap-4 sm:gap-0">
//               {/* Left Tag */}
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-red-700 text-[#ff4d2d]">
//                   <FaGem size={18} />
//                 </div>
//                 <span className="text-white font-medium text-base sm:text-lg">
//                   Quality Assurance
//                 </span>
//               </div>

//               {/* Divider */}
//               <div className="hidden sm:block w-px h-10 bg-white/10" />

//               {/* Right Tag */}
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-red-700 text-[#ff4d2d]">
//                   <LuBadgeCheck size={18} />
//                 </div>
//                 <span className="text-white font-medium text-base sm:text-lg">
//                   Professional Support
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* ✍️ Right Text Column */}
//           <div className="w-full lg:w-1/2">
//             <p className="text-[#ff4d2d] font-medium mb-3 text-sm sm:text-base">
//               Why Choose Bembex lab?
//             </p>
//             <h2 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl leading-[1.3] mb-6 space-y-2">
//               <div>
//                 Pr
//                 <span className="bg-gradient-to-b from-white via-[#ffecd3] to-[#5a2e1b] text-transparent bg-clip-text">
//                   ov
//                 </span>
//                 en Success
//               </div>
//               <div>
//                 Over
//                 <span className="bg-gradient-to-b from-white via-[#ffecd3] to-[#5a2e1b] text-transparent bg-clip-text mx-4">
//                   15+
//                 </span>
//                 Years
//               </div>
//             </h2>

//             <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
//               Our digital marketing agency helped companies & businesses such as yours reach better positions, increase online traffic, positive returns like (ROI) and brand building through our digital marketing services. Our digital marketing company is certified in areas like SEM, PPC, social media marketing (SMM), UX/UI Design, Video Animation, Video Editing & Logo Design. We bring 20+ years of experience to the table and use creative strategies to help you business success.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer2 />
//     </main>
//   );
// };

// export default MainServicePage;
