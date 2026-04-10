"use client"

import { motion } from 'framer-motion'
import React, { useState } from 'react'

const servicesData = [
    {
        service: "Web Design & Development",
        data: [
            {
                title: "Startup Plan",
                price: "$199",
                discountedFrom: "$299",
                includes: [
                    "One-page or landing page design",
                    "Custom layout + brand styling",
                    "Mobile-responsive build",
                    "Basic contact form integration",
                    "Up to 1 monthly revision",
                    "Built on Webflow or WordPress",
                ],
            },
            {
                title: "Advanced Plan",
                price: "$499",
                discountedFrom: "$599",
                includes: [
                    "Up to 5 custom pages",
                    "CRO Focused UX strategy",
                    "Mobile optimization",
                    "Speed Tuning",
                    "CRM Integration",
                    "Monthly updates",
                ],
            },
            {
                title: "Premium Plan",
                price: "$999",
                discountedFrom: "$1999",
                includes: [
                    "Up to 10 custom pages",
                    "Full design responsive UI",
                    "Custom animations",
                    "Advanced integrations",
                    "Unlimited updates",
                    "Dedicated project manager",
                    "Monthly analytics",
                ],
            },
        ]
    },
    {
        service: "SEO",
        data: [
            {
                title: "Startup Plan",
                price: "$199",
                discountedFrom: "$299",
                includes: [
                    "Website Audit",
                    "Pages Optimized (10 pages)",
                    "15 Selected Keywords Targeting",
                    "Keyword Research",
                    "Keyword Grouping",
                    "On-Page Optimization",
                    "SEO Road Map",
                    "Blog Creation",
                    "Webpage Copywriting (3 pages, 350 words per page)",
                    "Title Tag Optimization (10 titles)",
                    "Meta Description Optimization (10 meta descriptions)",
                    "Meta Keyword Optimization (10 meta keywords)",
                    "Domain Redirect Optimization (10 domain redirects)",
                    "XML Sitemap Optimization",
                    "Robots.txt Check",
                    "URL Rewrites (10 URL rewrites)",
                    "Broken Link Report",
                    "Rich Snippet Recommendations",
                    "Initial Off - Page SEO",
                    "Quora & Reddit",
                    "Slide Share Marketing",
                    "Forums/FAQ’s",
                    "Link Building",
                    "Directory Submission",
                    "Local Business Listings"
                ],
            },
            {
                title: "Advanced Plan",
                price: "$499",
                discountedFrom: "$599",
                includes: [
                    "Prior Analysis",
                    "Business Analysis",
                    "Consumer Analysis",
                    "Competitor Analysis",
                    "35 Selected Keywords Targeting",
                    "15 Pages Keyword Targeted",
                    "Webpage Optimization",
                    "Meta Tags Creation",
                    "Keyword Optimization",
                    "Image Optimization",
                    "Inclusion of anchors",
                    "Tracking & Analysis",
                    "Google Analytics Installation",
                    "Google Webmaster Installation",
                    "Call To Action Plan",
                    "Creation of Sitemaps",
                    "Reporting",
                    "Monthly Reporting",
                    "Recommendation",
                    "Email Support",
                    "Phone Support",
                    "Off Page Optimization",
                    "Quora & Reddit",
                    "Infographic via Canva",
                    "Slide Share Marketing",
                    "Forums / FAQ’s",
                    "Link Building",
                    "Directory Submission",
                    "Local Business Listings",
                ],
            },
            {
                title: "Premium Plan",
                price: "$999",
                discountedFrom: "$499",
                includes: [
                    "Prior Analysis",
                    "Business Analysis",
                    "Consumer Analysis",
                    "Competitor Analysis",
                    "60 + Selected Keywords Targeting",
                    "30 Pages Keyword Targeted",
                    "Webpage Optimization",
                    "Meta Tags Creation",
                    "Keyword Optimization",
                    "Image Optimization",
                    "Inclusion of anchors Tags",
                    "Inclusion of anchors Indexing Modifications",
                    "Tracking & Analysis",
                    "Google Analytics Installation",
                    "Google Webmaster Installation",
                    "Call To Action Plan",
                    "Creation of Sitemaps",
                    "Reporting",
                    "Monthly Reporting",
                    "Recommendation",
                    "Email Support",
                    "Phone Support",
                    "Off Page Optimization",
                    "Quora & Reddit",
                    "Infographic via Canva",
                    "Content Syndication",
                    "Slide Share Marketing",
                    "Forums / FAQ’s",
                    "Directory Submission",
                    "Link Building",
                    "Local Business Listings"
                ],
            },
        ]
    },
    {
        service: "Performance Marketing",
        data: [
            {
                title: "Startup Plan",
                price: "$199",
                discountedFrom: "$299",
                includes: [
                    "1 platform",
                    "Campaign setup + Initial strategy",
                    "2 ad creatives per month",
                    "Weekly optimization",
                    "Monthly performance report",
                    "Audience targeting setup",
                ],
            },
            {
                title: "Advanced Plan",
                price: "$499",
                discountedFrom: "$599",
                includes: [
                    "Up to 2 platforms",
                    "Multi-campaign strategy",
                    "4 ad creatives per month",
                    "Bi-weekly optimization & A/B testing",
                    "Retargeting funnel setup",
                    "Full monthly report",
                ],
            },
            {
                title: "Premium Plan",
                price: "$999",
                discountedFrom: "$1199",
                includes: [
                    "Up to 4 platforms",
                    "Full-funnel strategy",
                    "Landing page consulting",
                    "Weekly optimization",
                    "Dedicated ad strategist",
                    "Weekly reporting",
                ],
            },
        ]
    },
    {
        service: "Logo Designing & Branding",
        data: [
            {
                title: "Startup Package",
                price: "$199",
                discountedFrom: "$299",
                includes: [
                    "2 Logo Concepts",
                    "Basic Brand Colors",
                    "Font Pairing Suggestions",
                    "PNG + JPG Files",
                    "2 Revisions",
                ],
            },
            {
                title: "Advance Package",
                price: "$449",
                discountedFrom: "$599",
                includes: [
                    "4 Logo Concepts",
                    "Brand Color Palette",
                    "Typography Selection",
                    "Social Media Logo Versions",
                    "4 Revisions",
                ],
            },
            {
                title: "Premium Package",
                price: "$899",
                discountedFrom: "$999",
                includes: [
                    "6 Logo Concepts",
                    "Full Visual Identity",
                    "Brand Style Direction",
                    "Social Media Brand Assets",
                    "Unlimited Revisions",
                ],
            },
        ]
    },
    {
        service: "Social Media Marketing",
        data: [
            {
                title: "Startup Plan",
                price: "$299",
                discountedFrom: "$399",
                includes: [
                    "3 Posts Per Week",
                    "Branded Designs & Captions",
                    "Profile Optimization",
                    "Basic Content Planning",
                    "Monthly Support",

                ],
            },
            {
                title: "Advanced Plan",
                price: "$599",
                discountedFrom: "$699",
                includes: [
                    "5 Posts Per Week",
                    "Premium Designs & Captions",
                    "Content Strategy Setup",
                    "Audience Targeting Support",
                    "Monthly Performance Review",
                ],
            },
            {
                title: "Premium Package",
                price: "$999",
                discountedFrom: "$1099",
                includes: [
                    "6 Posts Per Week",
                    "Reels / Video Content Support",
                    "Full Content Strategy",
                    "Weekly Optimization",
                    "Story Content Support",
                ],
            },
        ]
    },
    {
        service: "Content Marketing",
        data: [
            {
                title: "Startup Package",
                price: "$229",
                discountedFrom: "$399",
                includes: [
                    "2 SEO Blog Posts Per Month",
                    "Basic Keyword Research",
                    "Metadata + Internal Linking",
                    "3 Social Captions Per Blog",
                    "Monthly Content Support",
                ],
            },
            {
                title: "Advance Package",
                price: "$599",
                discountedFrom: "$699",
                includes: [
                    "4 SEO Blog Posts Per Month",
                    "Full Keyword Strategy",
                    "Topic Calendar Setup",
                    "6 Social Captions",
                    "Email Content Support",
                ],
            },
            {
                title: "Premium Package",
                price: "$999",
                discountedFrom: "$1099",
                includes: [
                    "8 Premium SEO Blog Posts",
                    "Advanced Keyword Research",
                    "Platform-Specific Social Content",
                    "Email Flow Content",
                    "Full Content Strategy Support",
                ],
            },
        ]
    },
    // {
    //     service: "Illustration",
    //     data: [
    //         {
    //             title: "Single Illustration",
    //             price: "$99",
    //             discountedFrom: "$199",
    //             includes: ["1 Custom Illustration", "2 Revision Rounds", "High Res File", "Commercial License"]
    //         },
    //         {
    //             title: "Series Package",
    //             price: "$399",
    //             discountedFrom: "$799",
    //             includes: ["5 Illustrations", "4 Revision Rounds", "All Formats", "Commercial License", "Custom Art Style"]
    //         },
    //         {
    //             title: "Full Collection",
    //             price: "$899",
    //             discountedFrom: "$1799",
    //             includes: ["15 Illustrations", "Unlimited Revisions", "All Formats", "Commercial License", "Custom Art Style", "Animation Frames", "Vector & Raster"]
    //         }
    //     ]
    // },
    // {
    //     service: "Print",
    //     data: [
    //         {
    //             title: "Basic Print",
    //             price: "$199",
    //             discountedFrom: "$399",
    //             includes: ["Business Cards Design", "Print Ready Files", "CMYK Color Space", "Bleed Setup", "500 Prints Included"]
    //         },
    //         {
    //             title: "Print Bundle",
    //             price: "$599",
    //             discountedFrom: "$1199",
    //             includes: ["Business Cards", "Letterhead", "Envelope Design", "Print Ready Files", "1000 Prints Per Item", "File Archive"]
    //         },
    //         {
    //             title: "Complete Print",
    //             price: "$1199",
    //             discountedFrom: "$2399",
    //             includes: ["All Stationary Items", "Packaging Design", "Print Ready Files", "2000 Prints Per Item", "Ink Recommendations", "Printer Consultation", "Quality Check"]
    //         }
    //     ]
    // }
]

const PricingCardsV2 = () => {
    const [selectedService, setSelectedService] = useState("Web Development")
    const selectedData = servicesData.find(item => item.service === selectedService) || servicesData[0]
    return (
        <section>
            <div className="w-full h-[100px]" />
            {/* Header */}
            <motion.div
                className="text-center mb-5 md:mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.p
                    className="text-[#FF3C1B] font-semibold mb-2 md:mb-3 text-3xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Pricing
                </motion.p>
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
                        The Perfect plans for Your Needs
                    </span>{" "}
                </motion.h2>
            </motion.div>

            <div className="text-white">
                <div className="max-w-7xl mx-auto px-4 justify-center">

                    {/* Buttons */}
                    <div className="flex flex-row gap-4 justify-center flex-wrap">
                        {servicesData.map((service) => (
                            <button
                                key={service.service}
                                onClick={() => setSelectedService(service.service)}
                                className={`px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-150 focus:outline-none whitespace-nowrap ${selectedService === service.service
                                    ? 'text-[#DE2F04] border border-[#DE2F04]' : 'bg-transparent text-gray-300 border border-[#DE2F04]/50'
                                    }`}
                            >
                                {service.service}
                            </button>
                        ))}
                    </div>

                    {/* Cards here */}
                    <div className="flex flex-col md:flex-row gap-6 justify-center my-7 px-4">
                        <div className="flex flex-wrap gap-6 justify-center">
                            {/* Mapped Pricing Plan cards */}
                            {selectedData.data.map((card: any, index: number) => (
                                <div
                                    key={index}
                                    className="bg-cover h-[500px] bg-center rounded-xl p-6 w-[370px] max-w-md md:max-w-2xl shadow-lg flex flex-col"
                                    data-pricing-bg
                                    style={{
                                        backgroundImage: "url('/service/pricingcard.webp')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="flex-1">
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

                                        <p className="font-semibold text-md mt-10">Includes:</p>
                                        <ul
                                            role="list"
                                            className={`includes-list space-y-1 mt-1 mb-6 text-white overflow-y-auto pr-2 max-h-[120px] ${card.includes.length > 5 ? 'thin-red-scroll' : ''}`}
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
                                        <style jsx global>{`
                                            .thin-red-scroll {
                                                scrollbar-width: thin;
                                                scrollbar-color: #FF3C1B transparent;
                                            }
                                            .thin-red-scroll::-webkit-scrollbar {
                                                width: 4px;
                                            }
                                            .thin-red-scroll::-webkit-scrollbar-track {
                                                background: transparent;
                                            }
                                            .thin-red-scroll::-webkit-scrollbar-thumb {
                                                background-color: #FF3C1B;
                                                border-radius: 999px;
                                            }
                                        `}</style>
                                    </div>
                                    <a
                                        href="/contact-us"
                                        className="flex font-light text-sm items-center justify-center gap-1 text-white py-2 px-3 rounded-full transition-colors group w-full"
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
        </section>
    )
}

export default PricingCardsV2