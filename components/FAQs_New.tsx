"use client"

import React from 'react'

const FAQs = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    const faqs = [
        {
            id: 1,
            question: "What makes Bembex Lab the best digital marketing agency in USA?",
            answer: "We stand out as a top rated digital marketing agency in USA because we combine full service marketing strategies, creative web designs, plans and advanced SEO, PPC, and social media marketing to help your business growth and achieve measurable ROI/ROAS."
        },
        {
            id: 2,
            question: "Do you provide full service online marketing solutions?",
            answer: "Yes. Based in USA, we are a digital marketing agency that provides 360 like services SEO, Google Ads (PPC), social media marketing, content marketing, web design, application development, Graphic Designing & branding."
        },
        {
            id: 3,
            question: "How can SEO services help my USA based business grow?",
            answer: "We offer Google local search engine optimization services in USA to enhance the presence of your website on Google, generate specific traffic, and improve the number of leads and conversions. We achieve maximum reach through on-page and off-page as well as technical SEO of your site."
        },
        {
            id: 4,
            question: "How long does SEO take to show results?",
            answer: "Typically, you start seeing noticeable SEO improvements within 3-6 months, depending on your website's current performance, niche competition, and content quality."
        },
        {
            id: 5,
            question: "Do you offer local SEO for small businesses in USA?",
            answer: "Yes. Our local SEO experts help small businesses rank on Google Maps and local search results across USA cities."
        },
        {
            id: 6,
            question: "What are the benefits of PPC advertising for your business?",
            answer: "PPC (Pay-Per-Click) advertising gives instant visibility on Google and Bing. With our certified PPC specialists, you can generate high quality leads, increase conversions, and achieve up to 5x ROI."
        },
        {
            id: 7,
            question: "How do you manage Google Ads campaigns?",
            answer: "Our PPC agency sets up, monitors, and optimizes your Google Ads campaigns for keywords, bidding, and ad copy. We provide detailed reports to ensure your ad spend generates maximum return."
        },
        {
            id: 8,
            question: "Which social media platforms do you manage?",
            answer: "We handle Facebook, Instagram, TikTok, LinkedIn, YouTube and Snapchat Ads that help your brand reach your target audience with interesting content."
        },
        {
            id: 9,
            question: "What is the best social media strategy for businesses in USA?",
            answer: "The best strategy combines consistent posting, audience engagement, paid social campaigns, and performance tracking to grow your brand presence and sales in the USA, US market."
        },
        {
            id: 10,
            question: "Do you create SEO friendly and mobile responsive websites?",
            answer: "Absolutely. Our web development team designs SEO optimized, mobile friendly, and fast loading websites using WordPress, Shopify, Wix, Webflow, Joomla, & Figma to boost performance and conversions."
        },
        {
            id: 11,
            question: "Can you build eCommerce websites and mobile apps?",
            answer: "Yes, we focus on the development of eCommerce and mobile apps (Android and iOS), provide the functionality of a secure and fast operation, an attractive interface and design, and safe transactions."
        },
        {
            id: 12,
            question: "How much do your digital marketing services cost?",
            answer: "Our pricing depends on your business size, goals, and services required. We provide flexible, ROI focused plans and request a free quote today for a detailed proposal."
        },
        {
            id: 13,
            question: "What's included in your digital marketing audit?",
            answer: "Our business audit analyzes your website, SEO performance, paid ads, and social media presence to identify growth opportunities and create the best affordable marketing plans."
        }
    ];

    return (
        <>
            <section className='w-full mt-8 flex flex-col items-center justify-center px-4'>
                <div className='w-full max-w-5xl'>
                    <div className='mb-10'>
                        <h2 className='text-3xl font-semibold text-white text-center md:text-start mb-4'>Most asked FAQ's</h2>
                        <p className='text-red-500 max-w-[416px] text-sm text-center md:text-start mx-auto md:mx-0'>We're here to help you and solve doubts. Find answers to the most common questions below.</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4'>
                        {faqs.map((faq, index) => (
                            <div key={index} onClick={() => toggleFAQ(index)} className={`bg-white/10 backdrop-blur-md p-3.5 rounded-lg cursor-pointer transition-all duration-300 border border-white/20 hover:bg-white/20 ${openIndex === index ? 'row-span-2' : ''}`}>
                                <div className='flex items-center justify-between'>
                                    <span className='text-sm font-medium text-white'>{faq.question}</span>
                                    <div className={`text-slate-400 p-1 rounded transition-colors ${openIndex === index ? 'bg-slate-200 text-slate-500' : 'hover:bg-slate-300 hover:text-slate-500'}`}>
                                        {openIndex === index ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus"><path d="M5 12h14" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                        )}
                                    </div>
                                </div>
                                <div className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className='overflow-hidden'>
                                        <p className='text-sm text-[#FFFFFF80] leading-relaxed'>
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FAQs