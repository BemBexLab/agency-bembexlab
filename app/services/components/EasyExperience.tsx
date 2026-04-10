"use client";
import { motion } from "framer-motion";
import React from "react";

const cardData = [
  {
    title: "Website Audit & Discovery",
    description:
      "We begin with a full analysis of your current site, audience behavior, and competitors. This helps us identify growth gaps and define the roadmap for better performance.",
    svg: {
      width: 50,
      height: 50,
      viewBox: "0 0 50 50",
      paths: [
        {
          d: "M33.333 22.9165L36.8673 26.0974C40.081 28.9897 41.6878 30.4358 41.6878 32.2915C41.6878 34.1472 40.081 35.5933 36.8673 38.4856L33.333 41.6665",
          stroke: "#DE2F04",
          strokeWidth: 2,
          strokeLinecap: "round",
        },
        {
          d: "M29.1396 10.4165L24.9867 26.0415L20.8338 41.6665",
          stroke: "#DE2F04",
          strokeWidth: 2,
          strokeLinecap: "round",
        },
        {
          d: "M16.6663 10.0615L13.132 13.2424C9.91835 16.1347 8.31152 17.5808 8.31152 19.4365C8.31152 21.2922 9.91835 22.7383 13.132 25.6306L16.6663 28.8115",
          stroke: "#DE2F04",
          strokeWidth: 2,
          strokeLinecap: "round",
        },
      ],
    },
  },
  {
    title: "Strategy & Site Architecture",
    description:
      "Our team creates a clear sitemap and structure built around your key conversions. Every page has a purpose to guide visitors toward meaningful actions.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
        <path d="M33.3333 8.33691C37.8646 8.36214 40.3186 8.56308 41.9194 10.1639C43.75 11.9945 43.75 14.9407 43.75 20.8333V33.3333C43.75 39.2258 43.75 42.1721 41.9194 44.0027C40.0888 45.8333 37.1426 45.8333 31.25 45.8333H18.75C12.8574 45.8333 9.91116 45.8333 8.08058 44.0027C6.25 42.1721 6.25 39.2258 6.25 33.3333V20.8333C6.25 14.9407 6.25 11.9945 8.08058 10.1639C9.68138 8.56308 12.1354 8.36214 16.6667 8.33691" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
        <path d="M16.668 29.167H33.3346" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
        <path d="M14.582 21.875H35.4154" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
        <path d="M18.75 36.4585H31.25" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
        <path d="M16.668 7.29199C16.668 5.5661 18.0671 4.16699 19.793 4.16699H30.2096C31.9355 4.16699 33.3346 5.5661 33.3346 7.29199V9.37533C33.3346 11.1012 31.9355 12.5003 30.2096 12.5003H19.793C18.0671 12.5003 16.668 11.1012 16.668 9.37533V7.29199Z" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Custom UI/UX Design",
    description:
      "We craft modern, mobile-responsive designs that reflect your brand identity. Each layout is tailored to drive engagement, clarity, and conversion.",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
      <path d="M4.16797 25.0547C4.16797 35.776 12.2245 44.6107 22.5988 45.8051C24.1296 45.9813 25.6134 45.3287 26.703 44.2363C28.0644 42.8714 28.0644 40.6584 26.703 39.2935C25.6134 38.2011 24.7252 36.5715 25.5469 35.2646C28.8316 30.0403 45.8346 42.0379 45.8346 25.0547C45.8346 13.5187 36.5072 4.16699 25.0013 4.16699C13.4954 4.16699 4.16797 13.5187 4.16797 25.0547Z" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <circle cx="36.457" cy="23.958" r="3.125" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <circle cx="13.543" cy="23.958" r="3.125" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <path d="M23.0937 14.583C23.0937 16.3089 21.6946 17.708 19.9687 17.708C18.2429 17.708 16.8438 16.3089 16.8438 14.583C16.8438 12.8571 18.2429 11.458 19.9687 11.458C21.6946 11.458 23.0937 12.8571 23.0937 14.583Z" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <path d="M33.332 14.583C33.332 16.3089 31.9329 17.708 30.207 17.708C28.4811 17.708 27.082 16.3089 27.082 14.583C27.082 12.8571 28.4811 11.458 30.207 11.458C31.9329 11.458 33.332 12.8571 33.332 14.583Z" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
    </svg>),
  },
  {
    title: "Copywriting & Content Structuring",
    description:
      "From headlines to CTAs, we write and position every message strategically. The goal: communicate your story clearly and persuade your audience to act.",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
      <path d="M37.8751 16.7488L38.8406 15.7833C40.4403 14.1836 43.0339 14.1836 44.6336 15.7833C46.2333 17.383 46.2333 19.9766 44.6336 21.5763L43.6681 22.5418M37.8751 16.7488C37.8751 16.7488 37.9958 18.8005 39.8061 20.6108C41.6164 22.4211 43.6681 22.5418 43.6681 22.5418M37.8751 16.7488L28.9988 25.6251C28.3976 26.2263 28.097 26.5269 27.8384 26.8583C27.5335 27.2493 27.272 27.6724 27.0587 28.12C26.8778 28.4994 26.7434 28.9027 26.4745 29.7094L25.6137 32.2918L25.3352 33.1273M43.6681 22.5418L34.7918 31.4181C34.1906 32.0193 33.89 32.3199 33.5585 32.5784C33.1675 32.8834 32.7445 33.1448 32.2969 33.3581C31.9174 33.539 31.5141 33.6734 30.7075 33.9423L28.125 34.8031L27.2895 35.0816M27.2895 35.0816L26.454 35.3601C26.0571 35.4924 25.6194 35.3891 25.3236 35.0933C25.0277 34.7974 24.9244 34.3598 25.0567 33.9628L25.3352 33.1273M27.2895 35.0816L25.3352 33.1273" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <path d="M16.667 27.0835H21.8753" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <path d="M16.667 18.75H30.2087" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <path d="M16.667 35.4165H19.792" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <path d="M41.3092 6.60728C38.8684 4.1665 34.9401 4.1665 27.0833 4.1665H22.9167C15.0599 4.1665 11.1316 4.1665 8.69078 6.60728C6.25 9.04806 6.25 12.9764 6.25 20.8332V29.1665C6.25 37.0232 6.25 40.9516 8.69078 43.3924C11.1316 45.8332 15.0599 45.8332 22.9167 45.8332H27.0833C34.9401 45.8332 38.8684 45.8332 41.3092 43.3924C43.274 41.4276 43.6572 38.4989 43.7319 33.3332" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
    </svg>),
  },
  {
    title: "Front-End Development",
    description:
      "Clean, fast, and functional code built for performance. We ensure smooth animations, intuitive navigation, and compatibility across all devices.",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
      <path d="M4.16699 22.9167C4.16699 15.0599 4.16699 11.1316 6.60777 8.69078C9.04855 6.25 12.9769 6.25 20.8337 6.25H29.167C37.0237 6.25 40.9521 6.25 43.3929 8.69078C45.8337 11.1316 45.8337 15.0599 45.8337 22.9167V27.0833C45.8337 34.9401 45.8337 38.8684 43.3929 41.3092C40.9521 43.75 37.0237 43.75 29.167 43.75H20.8337C12.9769 43.75 9.04855 43.75 6.60777 41.3092C4.16699 38.8684 4.16699 34.9401 4.16699 27.0833V22.9167Z" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <path d="M31.25 43.75L31.25 6.25" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <path d="M12.5003 29.1665L11.1241 30.5427C10.7336 30.9333 10.7336 31.5664 11.1241 31.9569L12.5003 33.3332M21.8753 33.3332L23.2516 34.7094C23.6421 35.0999 23.6421 35.7331 23.2516 36.1236L21.8753 37.4998M18.7503 29.1665L15.6253 37.4998" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
    </svg>),
  },
  {
    title: "Platform Setup & CMS Integration",
    description:
      "Whether it’s Webflow, WordPress, or Shopify, we build on platforms you can easily manage. You stay in control without touching a line of code.",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
      <path d="M4.16699 22.9167C4.16699 15.0599 4.16699 11.1316 6.60777 8.69078C9.04855 6.25 12.9769 6.25 20.8337 6.25H29.167C37.0237 6.25 40.9521 6.25 43.3929 8.69078C45.8337 11.1316 45.8337 15.0599 45.8337 22.9167V27.0833C45.8337 34.9401 45.8337 38.8684 43.3929 41.3092C40.9521 43.75 37.0237 43.75 29.167 43.75H20.8337C12.9769 43.75 9.04855 43.75 6.60777 41.3092C4.16699 38.8684 4.16699 34.9401 4.16699 27.0833V22.9167Z" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <path d="M31.25 43.75L31.25 6.25" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
    </svg>),
  },
  {
    title: "SEO & Speed Optimization",
    description:
      "We optimize every page for Google and user experience from metadata to load speed to mobile responsiveness for peak performance in search results.",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
      <circle cx="23.9587" cy="23.9582" r="19.7917" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <path d="M38.542 38.5415L45.8337 45.8332" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
    </svg>),
  },
  {
    title: "Conversion Tools & Integrations",
    description:
      "We connect your site with analytics, CRM, and automation tools. From lead forms to Pixel tracking, everything is built to drive measurable growth.",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
      <path d="M45.8337 21.8748V24.9998C45.8337 34.8208 45.8337 39.7312 42.7827 42.7822C39.7317 45.8332 34.8213 45.8332 25.0003 45.8332C15.1794 45.8332 10.2689 45.8332 7.21796 42.7822C4.16699 39.7312 4.16699 34.8208 4.16699 24.9998C4.16699 15.1789 4.16699 10.2684 7.21796 7.21748C10.2689 4.1665 15.1794 4.1665 25.0003 4.1665H28.1253" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <circle cx="39.583" cy="10.4165" r="6.25" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <path d="M14.583 29.1668L19.3599 24.39C20.1735 23.5764 21.4926 23.5764 22.3061 24.39L25.6099 27.6937C26.4235 28.5073 27.7426 28.5073 28.5561 27.6937L35.4163 20.8335M35.4163 20.8335V26.0418M35.4163 20.8335H30.208" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
    </svg>),
  },
  {
    title: "Testing, Launch & Reporting",
    description:
      "Before going live, we test everything — speed, links, devices, and functionality. Post-launch, we share performance insights and ensure everything runs smoothly.",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
      <path d="M33.3333 8.33691C37.8646 8.36214 40.3186 8.56308 41.9194 10.1639C43.75 11.9945 43.75 14.9407 43.75 20.8333V33.3333C43.75 39.2258 43.75 42.1721 41.9194 44.0027C40.0888 45.8333 37.1426 45.8333 31.25 45.8333H18.75C12.8574 45.8333 9.91116 45.8333 8.08058 44.0027C6.25 42.1721 6.25 39.2258 6.25 33.3333V20.8333C6.25 14.9407 6.25 11.9945 8.08058 10.1639C9.68138 8.56308 12.1354 8.36214 16.6667 8.33691" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <path d="M21.875 29.1665H35.4167" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <path d="M14.583 29.1665H15.6247" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <path d="M14.583 21.875H15.6247" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <path d="M14.583 36.4585H15.6247" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <path d="M21.875 21.875H35.4167" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <path d="M21.875 36.4585H35.4167" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
      <path d="M16.667 7.2915C16.667 5.56561 18.0661 4.1665 19.792 4.1665H30.2087C31.9345 4.1665 33.3337 5.56561 33.3337 7.2915V9.37484C33.3337 11.1007 31.9345 12.4998 30.2087 12.4998H19.792C18.0661 12.4998 16.667 11.1007 16.667 9.37484V7.2915Z" stroke="#DE2F04" strokeWidth="2" strokeLinecap="round" />
    </svg>),
  },
];

const EasyExperience = ({
  easyExperience = cardData,
  alwaysShowRedDivider = false,
}: {
  easyExperience?: any[]
  alwaysShowRedDivider?: boolean
}) => {
  const experienceData = Array.isArray(easyExperience) && easyExperience.length > 0 ? easyExperience[0] : { title: "Easy Experience", cardData }
  const cards = experienceData.cardData || cardData
  return (
    <section className="mt-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            className="text-[#FF3C1B] font-semibold mb-2 md:mb-3  text-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Easy Experience
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
              {experienceData.title}
            </span>{" "}
          </motion.h2>
          <br />
          <motion.p
            className="font-semibold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text font-medium">
              {experienceData.description}
            </span>{" "}
          </motion.p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex flex-wrap">
            {cards.map((card: any, idx: number) => (
              <div
                key={idx}
                className={`relative w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-start p-6 md:p-8 ${
                  alwaysShowRedDivider
                    ? idx < cards.length - 1 && (idx + 1) % 4 !== 0
                      ? "md:border-r md:border-l-0 border-[#DE2F04]"
                      : "md:border-r-0 md:border-l-0"
                  : idx % 4 !== 3 && "md:border-r border-[#DE2F04]"
                }`}
              >
                <div className="border rounded-full border-[#DE2F04] w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  {React.isValidElement(card.svg) ? (
                    React.cloneElement(card.svg as React.ReactElement, {
                      className: ((card.svg as any).props?.className || "") + " w-10 h-10 md:w-12 md:h-12 block",
                    })
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={(card.svg as any).width}
                      height={(card.svg as any).height}
                      viewBox={(card.svg as any).viewBox}
                      fill="none"
                      className="w-10 h-10 md:w-12 md:h-12 block"
                    >
                      {(card.svg as any).paths?.map((p: any, i: number) => (
                        <path
                          key={i}
                          d={p.d}
                          stroke={p.stroke}
                          strokeWidth={p.strokeWidth}
                          strokeLinecap={p.strokeLinecap}
                        />
                      ))}
                    </svg>
                  )}
                </div>
                <h3 className="text-lg md:text-xl text-white text-center font-semibold mt-2">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-[#AAAAAA] text-center mt-2">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyExperience;
