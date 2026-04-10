"use client";

import React from "react";

// Note: default data removed — component must receive `cardData` via props

const PricingPlan = ({ cardData }: { cardData: any[] }) => {
    if (!cardData || cardData.length === 0) return null;
    const [selectedService, setSelectedService] = React.useState(cardData[0].service);
    const selectedData = cardData.find(item => item.service === selectedService) || cardData[0];

    return (
        <>
            <div className="hidden sm:block text-white mt-20 py-0">
                <div className="max-w-7xl mx-auto px-4 justify-center">

                    {/* Buttons */}
                    {/* <div className="flex flex-row gap-4 justify-center flex-wrap">
                        {cardData.map((service) => (
                            <button
                                key={service.service}
                                onClick={() => setSelectedService(service.service)}
                                className={`px-4 py-2 rounded-[8px] border cursor-pointer text-sm transition ${selectedService === service.service
                                    ? "border-yellow-400 text-yellow-400 bg-yellow-400/10"
                                    : "text-gray-400 border-gray-600 hover:border-yellow-400 hover:text-yellow-400"
                                    }`}
                            >
                                {service.service}
                            </button>
                        ))}
                    </div> */}

                    {/* Cards here */}
                    <div className="flex justify-center my-7 px-4">
                        <div className="flex flex-wrap gap-6 justify-center">
                            {/* Mapped Pricing Plan cards */}
                            {selectedData?.data.map((card: any, index: number) => (
                                <div
                                    key={index}
                                    className="bg-cover h-[500px] bg-center rounded-xl p-4 sm:p-6 w-[92%] sm:w-[320px] md:w-[330px] lg:w-[350px] xl:w-[370px] shadow-lg flex flex-col overflow-hidden"
                                    data-pricing-bg
                                    style={{
                                        backgroundImage: "url('/service/pricingcard.webp')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <h2 className="text-base text-red-600 mb-4 pricing-package-title font-bold">
                                        {card.title}
                                    </h2>
                                    <p className="text-5xl text-white font-semibold mb-4">
                                        {card.price}
                                        <span className="line-through font-normal text-base mx-[5px] text-red-600">
                                            {card.discountedFrom}
                                        </span>
                                    </p>
                                    <p className="text-base text-[#4C8C74]">
                                        Up to{" "}
                                        <span className="font-bold pricing-discount-percent text-red-600">
                                            $50%
                                        </span>{" "}
                                        referral AAR
                                    </p>

                                    <div className="mt-10 flex-1 min-h-0 overflow-hidden">
                                        <p className="font-semibold text-md">Includes:</p>
                                        <ul
                                            role="list"
                                            className="includes-list my-scroll space-y-1 mt-1 text-white overflow-y-auto pr-1 h-full"
                                        >
                                            {card.includes.map((item: any, i: number) => (
                                                <li key={i} className="flex items-center">
                                                    <svg
                                                        className="w-5 h-5 shrink-0 text-fg-brand me-1.5"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                        />
                                                    </svg>
                                                    <span className="text-sm font-normal">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <style jsx global>{`
                                            .my-scroll {
                                                scrollbar-width: thin;
                                                scrollbar-color: #DE2F04 transparent;
                                            }
                                            .my-scroll::-webkit-scrollbar {
                                                width: 8px;
                                                height: 8px;
                                            }
                                            .my-scroll::-webkit-scrollbar-track {
                                                background: transparent;
                                            }
                                            .my-scroll::-webkit-scrollbar-thumb {
                                                background-color: #DE2F04;
                                                border-radius: 999px;
                                                border: 2px solid transparent;
                                                background-clip: content-box;
                                            }
                                        `}</style>
                                    <a
                                        href="/contact-us"
                                        className="mt-6 flex shrink-0 font-light text-sm items-center justify-center gap-1 text-white py-2 px-3 rounded-full transition-colors group w-full mr-auto"
                                        style={{
                                            backgroundImage: "url('/service/Button.webp')",
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        Buy Now
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="transition-transform duration-300 group-hover:rotate-[45deg]"
                                        >
                                            <circle cx="12" cy="12" r="10" fill="black" />
                                            <path
                                                d="M9 12H15M15 12L12 9M15 12L12 15"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                transform="rotate(-45 12 12)"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile: show stacked pricing cards */}
            <div className="block sm:hidden text-white mt-8 py-0 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-col gap-6">
                        {selectedData?.data.map((card: any, index: number) => (
                            <div
                                key={index}
                                className="bg-cover bg-center rounded-xl p-4 shadow-lg min-h-[420px] flex flex-col overflow-hidden"
                                style={{
                                    backgroundImage: "url('/service/pricingcard.webp')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <h3 className="text-base text-red-600 mb-2 font-bold">{card.title}</h3>
                                <p className="text-3xl text-white font-semibold mb-2">
                                    {card.price}
                                    <span className="line-through font-normal text-sm mx-2 text-red-600">{card.discountedFrom}</span>
                                </p>

                                <div className="mt-3 flex-1 min-h-0 overflow-hidden">
                                    <p className="font-semibold text-sm">Includes:</p>
                                    <ul className="my-scroll space-y-1 mt-2 text-white overflow-y-auto pr-1 h-full">
                                        {card.includes.map((item: any, i: number) => (
                                            <li key={i} className="flex items-center text-sm">
                                                <svg
                                                    className="w-4 h-4 shrink-0 me-1.5 mr-2"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                    />
                                                </svg>
                                                <span className="text-sm font-normal">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <a
                                    href="/contact-us"
                                    className="mt-4 flex shrink-0 font-light text-sm items-center justify-center gap-1 text-white py-2 px-3 rounded-full transition-colors group w-full"
                                    style={{
                                        backgroundImage: "url('/service/Button.webp')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    Buy Now
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingPlan;
