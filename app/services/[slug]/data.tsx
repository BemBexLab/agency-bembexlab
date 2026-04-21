import { title } from "process";
import React from "react";

import { MdAlternateEmail, MdAttachMoney, MdBrandingWatermark, MdBrowserUpdated, MdCampaign, MdCenterFocusStrong, MdDashboardCustomize, MdDesignServices, MdLoop, MdLowPriority, MdOutlineBrandingWatermark, MdOutlineDesignServices, MdOutlinePayment, MdOutlineStyle, MdOutlineSupportAgent, MdOutlineTopic, MdSupportAgent, MdViewQuilt, MdWeb } from "react-icons/md";
import { FaAd, FaAffiliatetheme, FaEye, FaIndustry, FaLinkedin, FaList, FaNetworkWired, FaStore, FaTools } from "react-icons/fa";
import { BsFileEarmarkPost, BsGraphUpArrow } from "react-icons/bs";
import { LiaSignalSolid } from "react-icons/lia";
import { CgPerformance, CgSmartphoneChip, CgWebsite } from "react-icons/cg";
import { MdArchitecture } from "react-icons/md";
import { SiCcleaner, SiGoogleads, SiGooglemarketingplatform, SiMicrostrategy } from "react-icons/si";
import { FaAppStoreIos, FaCartShopping, FaCode, FaMeta, FaSquareUpwork, FaYoutube } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { PiFlagBanner, PiStrategy, PiUserFocus } from "react-icons/pi";
import { GiFlatPlatform, GiTalk } from "react-icons/gi";
import { MdFrontHand } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { GoGoal } from "react-icons/go";
import { MdCenterFocusWeak } from "react-icons/md";
import { CiEdit, CiLink, CiMobile1, CiShoppingCart, CiVideoOn } from "react-icons/ci";
import { LuBrainCircuit } from "react-icons/lu";
import { VscServerProcess, VscSymbolKeyword } from "react-icons/vsc"
import { IoShareSocial, IoText } from "react-icons/io5";
import { BiRevision } from "react-icons/bi";
import { TbReport, TbSeo, TbTransitionBottom, TbWriting } from "react-icons/tb";
import { GrMultiple, GrTestDesktop } from "react-icons/gr";
import { IoIosDocument } from "react-icons/io";


export const services = [
    // Web Design and Development
    {
        slug: 'web-design-development',
        title: 'Web & Mobile Design Services',
        bulletPoints: [
            "Create stunning, user-friendly websites and mobile apps that reflect your brand and attract your audience.",
            "Develop custom designs for web and mobile that enhance user experience and engagement.",
            "Build responsive, mobile-first websites that look great on any device, improving accessibility and performance.",
            "Provide affordable web and mobile design services that help startups and small businesses stand out."
        ],
        heading: <>How Our Web & Mobile Design Services Help Your Business Grow</>,
        services: [
            {
                id: "Web Design",
                svg: (<CgWebsite color="#DE2F04" size={40} />),
                title: "Web Design",
                desc: (
                    <>
                        We specialize in designing professional websites tailored to your business needs. Our designs are responsive, meaning they adjust perfectly to any screen size, whether it’s a desktop, tablet, or smartphone. This ensures a seamless experience for your users.
                    </>
                ),
                link: "/services/web-design-development/custom-web-design-and-development"
            },
            {
                id: "Mobile App Design",
                svg: (<CiMobile1 color="#DE2F04" size={40} />),
                title: "Mobile App Design",
                desc: (
                    <>
                        We create mobile app designs that are user-friendly, intuitive, and visually appealing. Our goal is to provide your users with a smooth, enjoyable experience, ensuring they keep coming back.

                    </>
                ),
                link: "/services/web-design-development/ecommerce-website-development"
            },
            {
                id: "UI/UX Design",
                svg: (<MdViewQuilt color="#DE2F04" size={40} />),
                title: "UI/UX Design",
                desc: (
                    <>Our designs focus on improving the user experience (UX) and user interface (UI). We make sure that your website or app is easy to navigate and engaging, leading to higher user satisfaction and retention.</>
                ),
                link: "/services/web-design-development/magento-development"
            },
            {
                id: "Branding and Design Consistency",
                svg: (<MdBrandingWatermark color="#DE2F04" size={40} />),
                title: "Branding and Design Consistency",
                desc: (
                    <>We ensure that your web and mobile designs are in line with your brand identity. From fonts and colors to overall look and feel, your design will be consistent and professional across all platforms.</>
                ),
                link: "/services/web-design-development/wordpress-development"
            },
            {
                id: "Custom Design",
                svg: (<MdDashboardCustomize color="#DE2F04" size={40} />),
                title: "Custom Design",
                desc: (
                    <>Our team creates custom designs that match your business vision. Whether you need a modern, minimalistic design or a bold, creative one, we ensure the design stands out and makes a statement.</>
                ),
                link: "/services/web-design-development/opencart-development"
            },
            {
                id: "Responsive Design",
                svg: (<MdDesignServices color="#DE2F04" size={40} />),
                title: "Responsive Design",
                desc: (
                    <>We create designs that are mobile-first, ensuring your website or app looks great on all devices. This improves the overall user experience and ensures your business reaches more people.</>
                ),
                link: "/services/web-design-development/shopify-development"
            },
        ],
        progressBarTitle: <>Build a Beautiful, Functional Web & Mobile Experience</>,
        progressBarSteps: [
            { id: 1, title: 'Web Design', subtitle: 'Web Design', desc: 'We design clean, professional websites that are both functional and visually appealing. From landing pages to full-scale e-commerce sites, we create designs that convert visitors into customers.' },
            { id: 2, title: 'Mobile App Design', subtitle: 'Mobile App Design', desc: <>We provide custom mobile app designs, focusing on simplicity, functionality, and a seamless user experience. Whether you're building a new app or redesigning an existing one, our team ensures it's easy to use and stands out.</> },
            { id: 3, title: 'UI/UX Design', subtitle: 'UI/UX Design', desc: 'Our UI/UX design services ensure your website or app is intuitive and easy to use. We optimize design features to keep users engaged and make navigation as simple as possible.' },
            { id: 4, title: 'Branding Integration', subtitle: 'Branding Integration', desc: 'We integrate your brand’s identity into the design process. Your website and mobile apps will have a cohesive look, helping reinforce your brand image and build recognition.' },
            { id: 5, title: 'Design for Growth', subtitle: 'Design for Growth', desc: 'Our designs are made to scale with your business. Whether you’re a startup or an established business, we create designs that support your growth and adapt as your business evolves.' },
        ],
        whyUs: {
            semiTitle: "Why Us?",
            title: "What Are Web & Mobile Design Services and Why Do They Matter?",
            description: (<>Web and mobile design services focus on creating visually appealing and functional websites and mobile applications. A strong design helps build trust, encourages users to stay longer, and boosts business growth. <br /><br />
                In today's world, your website and mobile app are often the first impression customers have of your business. It’s crucial to have a well-designed, easy-to-navigate site and app. With Upwork’s web and mobile design services, you can get designs that are not only beautiful but also help you connect with your audience effectively.</>),
            imageURL: '/service/whychooseus.webp',

        },
        easyExperience: [
            {
                title: "Why Choose Bembex Lab for Web & Mobile Design Services?",
                cardData: [
                    {
                        title: "Custom Design Approach",
                        description:
                            (<>We create unique designs tailored to your business. With Upwork’s web and mobile design services, you’ll stand out with designs that reflect your brand.</>),
                        svg: (<MdOutlineDesignServices size={40} color="#DE2F04" />),
                    },
                    {
                        title: "Clear Communication",
                        description:
                            (<>We walk you through the design process step-by-step. No jargon, just simple, clear communication that keeps you informed and confident in the process.</>),
                        svg: (<GiTalk size={40} color="#DE2F04" />),
                    },
                    {
                        title: "Collaborative Process",
                        description:
                            (<>We work closely with you to ensure your vision is realized. Our team listens to your ideas, offering expert advice to enhance your project.</>),
                        svg: (<VscServerProcess size={40} color="#DE2F04" />),
                    },
                    {
                        title: "Smart Design Decisions",
                        description:
                            (<>Every design choice is backed by research and strategy. We ensure that your website and app not only look great but also work to meet your business goals.</>),
                        svg: (<LuBrainCircuit size={40} color="#DE2F04" />),
                    },
                    {
                        title: "Future-Proof Designs",
                        description:
                            (<>We build designs that can grow with your business. As technology evolves, your website and app design will remain modern and functional.</>),
                        svg: (<MdOutlineDesignServices size={40} color="#DE2F04" />),
                    },
                    {
                        title: "Long-Term Growth",
                        description:
                            (<>Our designs aren’t just for today, they’re made for the future. We focus on designs that help you build a lasting online presence.</>),
                        svg: (<BsGraphUpArrow size={40} color="#DE2F04" />),
                    },
                ],
            }
        ],
        faqs: [
            {
                question: "What is web design?",
                answer: (<>Web design is the process of creating and structuring websites, focusing on user experience and visual appeal.</>)
            },
            {
                question: "What is mobile design?",
                answer: (<>Mobile design refers to the creation of mobile apps with an emphasis on usability, functionality, and visual design.</>)
            },
            {
                question: "How much does web design cost?",
                answer: (<>Web design costs depend on the complexity and features you need. We offer affordable solutions based on your requirements.</>)
            },
            {
                question: "Why is mobile app design important?",
                answer: (<>Good mobile app design enhances user experience, boosts engagement, and helps your app stand out in a competitive market.</>)
            }
        ],
        imageData: [
            {
                src: '/portfolio/web_01.svg',
                cardData: 'Prodmost',
                link: '/case-studies/prodmost',
            },
            {
                src: '/portfolio/web_02.svg',
                cardData: 'Ink Founders',
                link: 'https://inkfounders.com',
            },
            {
                src: '/portfolio/web_03.svg',
                cardData: 'Car Deal Marketplace',
                link: '/case-studies/car-deal-marketplace',
            },
            {
                src: '/portfolio/web_04.svg',
                cardData: 'Web Founders Pakistan',
                link: '/case-studies/web-founders-usa',
            },
            {
                src: '/portfolio/web_05.svg',
                cardData: 'Titan Tax',
                link: 'https://titantax.com',
            },
            {
                src: '/portfolio/web_06.svg',
                cardData: 'Shock It Up',
                link: 'https://shockitup.com',
            },
            {
                src: '/portfolio/web_07.svg',
                cardData: 'Dr. Butts',
                link: '/case-studies/dr-butts',
            },
        ],
    },

    // Graphic Design
    {
        slug: 'graphic-design',
        title: 'Graphic Design Services',
        bulletPoints: [
            <>Create eye-catching designs that grab attention and build trust</>,
            <>Turn your ideas into clear and simple visuals</>,
            <>Build a strong and consistent brand look</>,
            <>Get designs that help your business grow faster</>
        ],
        heading: (<>How Our Graphic Design Services Help Your Business Grow</>),
        services: [
            {
                id: "Logo Design",
                svg: (<MdOutlineDesignServices color="#ff0000" size={40} />),
                title: "Logo Design",
                desc: (
                    <>
                        We create simple and clear logos that people remember easily. A strong logo builds identity and trust. It helps your brand stand out from others.
                    </>
                ),
                link: "/services/search-engine-optimization"
            },
            {
                id: "Social Media Design",
                svg: (<IoShareSocial color="#ff0000" size={40} />),
                title: "Social Media Design",
                desc: (
                    <>
                        We design posts that grab attention quickly. Clean visuals help people stop and look. This increases your reach and engagement.
                    </>
                ),
                link: "/services/search-engine-optimization"
            },
            {
                id: "Banner Design",
                svg: (<PiFlagBanner color="#ff0000" size={40} />),
                title: "Banner Design",
                desc: (
                    <>We create banners that are bold and easy to read. They are designed to get clicks and results. This helps improve your marketing performance.</>
                ),
                link: "/services/search-engine-optimization"
            },
            {
                id: "Brand Design",
                svg: (<MdOutlineDesignServices color="#ff0000" size={40} />),
                title: "Brand Design",
                desc: (
                    <>We use the same colors and style everywhere. This makes your brand look strong and consistent. People trust brands that look organized.</>
                ),
                link: "/services/search-engine-optimization"
            },
            {
                id: "Custom Design",
                svg: (<MdOutlineDesignServices color="#ff0000" size={40} />),
                title: "Custom Design",
                desc: (
                    <>We do not use ready templates. Every design is made for your business. This helps you look unique and different.</>
                ),
                link: "/services/search-engine-optimization"
            },
            {
                id: "Content Planning & Topic Clustering",
                svg: (<MdOutlineTopic color="#ff0000" size={40} />),
                title: "Content Planning & Topic Clustering",
                desc: (
                    <>Structured topic clusters optimize your content, increasing authority and supporting growth across industries like <b>B2B SEO services, dental SEO services</b>, and <b>healthcare SEO services</b>.</>
                ),
                link: "/services/search-engine-optimization"
            },
        ],
        customPlanData: {
            title: "Get a Data-Driven SEO Strategy Built for Your Business",
            description: (<>Our SEO strategies are based on exploration, analytics, and real performance data. We use SEO consulting services to study your request, competitors, and client gestures to produce strategies that deliver measurable results. <br /><br />
                With clear planning and proven styles, we help your website ameliorate rankings, attract targeted callers,  induce good leads, and achieve long- term profit growth via SEO. Whether you need small business SEO services, B2B SEO services, or scalable results, we’ve got you covered.</>),
            ctaText: "Book a consultation",
            ctaHref: "#contact",
            image: "/Home/performance_marketing.webp",
            tagText: "All Services"
        },
        progressBarTitle: (<>Build a Strong Visual Identity</>),
        progressBarSteps: [
            { id: 1, title: 'Creative Design', subtitle: 'Creative Design', desc: <>We create modern and fresh designs that match your business style. Everything looks clean and simple. This helps your brand look professional.</> },
            { id: 2, title: 'Consistent Look', subtitle: 'Consistent Look', desc: <>We keep your design style the same on all platforms. This builds a strong and clear brand image. It also increases trust.</> },
            { id: 3, title: 'Clear Message Design', subtitle: 'Clear Message Design', desc: <>We keep designs easy to understand. People can quickly see your message. This improves communication and results.</> },
            { id: 4, title: 'Design That Works', subtitle: 'Design That Works', desc: <>Our designs are made for results, not just looks. They help you get more clicks and leads. This supports your business growth.</> },
        ],
        whyUs: {
            semiTitle: "Why Us?",
            title: "What Are Graphic Design Services and Why Do They Matter?",
            description: (<>Graphic design helps your business look clean and professional. It is the first thing people notice. Good design builds trust fast and makes your brand easy to remember. On platforms like Upwork, strong design helps you stand out and win more clients.
            </>),
            imageURL: '/service/whychooseus.webp',

        },
        easyExperience: [
            {
                title: "Why Choose Bembex Lab for Graphic Design Services?",
                cardData: [
                    {
                        title: "Simple and Clean Work",
                        description:
                            (<>We focus on clean and clear design. No extra noise or confusion. This makes your brand look professional.</>),
                        svg: (<SiCcleaner color="#ff0000" size={40} />)
                    },
                    {
                        title: "Clear Communication",
                        description:
                            (<>We keep everything simple and direct. You always know what is happening. No confusion at any step.</>),
                        svg: (<GiTalk color="#ff0000" size={40} />)
                    },
                    {
                        title: "Client-Focused Work",
                        description:
                            (<>We listen to your ideas carefully. Then we design based on your goals. This gives better results.</>),
                        svg: (<MdCenterFocusStrong color="#ff0000" size={40} />)
                    },
                    {
                        title: "Smart Design Decisions",
                        description:
                            (<>Every design choice has a purpose. We follow strategy, not guesswork. This improves your brand image.</>),
                        svg: (<LuBrainCircuit color="#ff0000" size={40} />)
                    },
                    {
                        title: "Designed for Upwork Success",
                        description:
                            (<>We understand what works on Upwork. We design to impress clients. This helps you win more projects.</>),
                        svg: (<FaSquareUpwork color="#ff0000" size={40} />)
                    },
                    {
                        title: "Flexible Revisions",
                        description:
                            (<>We improve designs based on your feedback. We refine until you are satisfied. This ensures better output.</>),
                        svg: (<BiRevision color="#ff0000" size={40} />)
                    },
                    {
                        title: "Long-Term Support",
                        description:
                            (<>We focus on long-term growth. Not just one design. We help you improve over time.</>),
                        svg: (<MdOutlineSupportAgent color="#ff0000" size={40} />)
                    },
                ],
            }
        ],
        faqs: [
            {
                question: "What is graphic design?",
                answer: (<>It is the process of creating visuals like logos, posts, and banners for your business.</>)
            },
            {
                question: "Why is graphic design important?",
                answer: (<>It builds trust and makes your brand look professional and clear.</>)
            },
            {
                question: "Do you create custom designs?",
                answer: (<>Yes. Every design is made from scratch based on your needs.</>)
            },
            {
                question: "Can you design for social media?",
                answer: (<>Yes. We create posts, ads, and banners for all platforms.</>)
            },
            {
                question: "Do you work with Upwork clients?",
                answer: (<>Yes. We design in a way that helps you attract clients on Upwork.</>)
            }
        ],
        imageData: [
            {
                src: '/portfolio/web_01.svg',
                cardData: 'Prodmost',
                link: '/case-studies/prodmost',
            },
            {
                src: '/portfolio/web_02.svg',
                cardData: 'Ink Founders',
                link: 'https://inkfounders.com',
            },
            {
                src: '/portfolio/web_03.svg',
                cardData: 'Car Deal Marketplace',
                link: '/case-studies/car-deal-marketplace',
            },
            {
                src: '/portfolio/web_04.svg',
                cardData: 'Web Founders Pakistan',
                link: '/case-studies/web-founders-usa',
            },
            {
                src: '/portfolio/web_05.svg',
                cardData: 'Titan Tax',
                link: 'https://titantax.com',
            },
            {
                src: '/portfolio/web_06.svg',
                cardData: 'Shock It Up',
                link: 'https://shockitup.com',
            },
            {
                src: '/portfolio/web_07.svg',
                cardData: 'Dr. Butts',
                link: '/case-studies/dr-butts',
            },
        ],
    },

    // Video Editing
    {
        slug: 'video-editing',
        title: 'Video Editing Services',
        bulletPoints: [
            "Turn raw clips into clean and engaging videos",
            "Create videos that hold attention and tell your story",
            "Build a strong visual style for your brand",
            "Get videos that help you grow faster online",
        ],
        heading: (<>How Our Video Editing Services Help Your Business Grow</>),
        services: [
            {
                id: "Basic Video Editing",
                svg: (<CiVideoOn size={40} color="#FF3C1B" />),
                title: "Basic Video Editing",
                desc: "We cut and clean your clips to make them smooth and clear. We remove extra parts and fix the flow. This makes your video easy to watch.",
            },
            {
                id: "Social Media Videos",
                svg: (<CiVideoOn size={40} color="#FF3C1B" />),
                title: "Social Media Videos",
                desc: "We create short videos for platforms like Instagram and TikTok. These videos are fast, engaging, and attention-grabbing. This helps you get more views and reach.",
            },
            {
                id: "YouTube Video Editing",
                svg: (<FaYoutube size={40} color="#FF3C1B" />),
                title: "YouTube Video Editing",
                desc: "We edit long videos with proper cuts, music, and pacing. We keep the content engaging from start to end. This helps improve watch time.",
            },
            {
                id: "Text and Subtitles",
                svg: (<IoText size={40} color="#FF3C1B" />),
                title: "Text and Subtitles",
                desc: "We use simple and clean transitions. Effects are added where needed, not everywhere. This keeps your video professional.",
            },
            {
                id: "Transitions and Effects",
                svg: (<TbTransitionBottom size={40} color="#FF3C1B" />),
                title: "Transitions and Effects",
                desc: "We use simple and clean transitions. Effects are added where needed, not everywhere. This keeps your video professional.",
            },
        ],
        customPlanData: {
            title: "A Performance Marketing Strategy Built Around Real Growth",
            description: (<>We don't utilize a one-size-fits-all approach because every business is different. Some firms need to get leads, while others want to make purchases or get people to install their apps. That's why we make plans depending on your goals, audience, and competition.
                <br /><br />
                We use several different channels to make a full growing system. Everything, from ads to collaborations, works together. This helps you achieve greater outcomes and grow faster.</>),
            ctaText: "Better Strategy. Better Traffic. Better Results",
            ctaHref: "#contact",
            image: "/Home/performance_marketing.webp",
            tagText: "All Services"
        },
        progressBarTitle: (<>Build a Strong Video Presence</>),
        progressBarSteps: [
            { id: 1, title: 'Clean Editing Style', subtitle: 'Clean Editing Style', desc: 'We keep videos simple and smooth. No messy cuts or random effects. This makes your content look professional.' },
            { id: 2, title: 'Consistent Look', subtitle: 'Consistent Look', desc: 'We follow one style in all your videos. This builds your brand identity. People start to recognize your content.' },
            { id: 3, title: 'Clear Story Flow', subtitle: 'Clear Story Flow', desc: 'We arrange clips in the right order. Your message stays clear from start to end. This keeps viewers interested.' },
            { id: 4, title: 'Editing That Works', subtitle: 'Editing That Works', desc: 'We focus on results, not just looks. Videos are made to get views, clicks, and engagement. This helps your business grow.' },
        ],
        whyUs: {
            semiTitle: "",
            title: "What Are Video Editing Services and Why Do They Matter?",
            description: <>Video editing is the process of turning raw footage into a final video. It includes cutting, adding music, text, and effects. A good video looks clean and keeps people watching. On platforms like Upwork, strong videos help you stand out and get more clients.</>,
            imageURL: '/service/whychooseus.webp',

        },
        easyExperience: [
            {
                title: "Why Choose Bembex Lab for Video Editing Services?",
                cardData: [
                    {
                        title: "Simple and Clean Editing",
                        description:
                            "We focus on clean and smooth edits. No over-editing. This keeps your video professional.",
                        svg: (<CiEdit size={40} color="#FF3C1B" />),
                    },
                    {
                        title: "Clear Communication",
                        description:
                            "We keep everything simple and direct. You always know the progress. No confusion.",
                        svg: (<GiTalk size={40} color="#FF3C1B" />),
                    },
                    {
                        title: "Client-Focused Work",
                        description:
                            "We understand your goal first. Then we edit based on your needs. This gives better results.",
                        svg: (<MdCenterFocusStrong size={40} color="#FF3C1B" />),
                    },
                    {
                        title: "Smart Editing Decisions",
                        description:
                            "Every cut and effect has a purpose. We do not edit randomly. This improves quality.",
                        svg: (<LuBrainCircuit size={40} color="#FF3C1B" />),
                    },
                    {
                        title: "Made for Upwork Clients",
                        description:
                            "We know what works on Upwork. We edit videos that impress clients. This helps you win more work.",
                        svg: (<FaSquareUpwork size={40} color="#FF3C1B" />),
                    },
                    {
                        title: "Flexible Revisions",
                        description:
                            "We update videos based on your feedback. We refine until you are satisfied. This ensures strong output.",
                        svg: (<BiRevision size={40} color="#FF3C1B" />),
                    },
                    {
                        title: "Long-Term Support",
                        description:
                            "We help you improve your video content over time. Not just one project. We focus on growth.",
                        svg: (<MdOutlineSupportAgent size={40} color="#FF3C1B" />),
                    },
                ],
            }
        ],
        imageData: [
            {
                src: '/portfolio/web_01.svg',
                cardData: 'Prodmost',
                link: '/case-studies/prodmost',
            },
            {
                src: '/portfolio/web_02.svg',
                cardData: 'Ink Founders',
                link: 'https://inkfounders.com',
            },
            {
                src: '/portfolio/web_03.svg',
                cardData: 'Car Deal Marketplace',
                link: '/case-studies/car-deal-marketplace',
            },
            {
                src: '/portfolio/web_04.svg',
                cardData: 'Web Founders Pakistan',
                link: '/case-studies/web-founders-usa',
            },
            {
                src: '/portfolio/web_05.svg',
                cardData: 'Titan Tax',
                link: 'https://titantax.com',
            },
            {
                src: '/portfolio/web_06.svg',
                cardData: 'Shock It Up',
                link: 'https://shockitup.com',
            },
            {
                src: '/portfolio/web_07.svg',
                cardData: 'Dr. Butts',
                link: '/case-studies/dr-butts',
            },
        ],
        faqs: [
            {
                question: "What is video editing?",
                answer: (<>It is the process of cutting and improving video clips to create a final video.</>)
            },
            {
                question: "Why is video editing important?",
                answer: (<>It makes your video clean, engaging, and easy to watch.</>)
            },
            {
                question: "Do you edit social media videos?",
                answer: (<>Yes. We create short videos for all platforms.</>)
            },
            {
                question: "Can you edit YouTube videos?",
                answer: (<>Yes. We edit long videos with proper flow and engagement.</>)
            },
            {
                question: "Do you work with Upwork clients?",
                answer: (<>Yes. We edit videos to help you attract clients on Upwork.</>)
            }
        ],
    },

    // Web Development
    {
        slug: 'web-development',
        title: 'Web Development Services',
        bulletPoints: [
            <>Build fast and secure websites for your business</>,
            <>Turn your ideas into fully working websites</>,
            <>Create websites that are easy to use and look clean</>,
            <>Get web solutions that help your business grow</>,
        ],
        heading: (<>How Our Web Development Services Help Your Business Grow</>),
        services: [
            {
                id: "Website Development",
                svg: (<MdWeb color="#DE2F04" size={40} />),
                title: "Website Development",
                desc: "We build full websites from start to finish. Everything works smoothly and quickly. This gives users a better experience.",
            },
            {
                id: "Frontend Development",
                svg: (<MdWeb color="#DE2F04" size={40} />),
                title: "Frontend Development",
                desc: "We design the front part of your website. It looks clean and easy to use. This improves user interaction.",
            },
            {
                id: "Backend Development",
                svg: (<FaCode color="#DE2F04" size={40} />),
                title: "Backend Development",
                desc: "We build the system behind your website. It keeps everything working properly. This makes your site stable and secure.",
            },
            {
                id: "E-commerce Development",
                svg: (<CiShoppingCart color="#DE2F04" size={40} />),
                title: "E-commerce Development",
                desc: "We create online stores for your business. Customers can easily browse and buy products. This helps increase your sales.",
            },
            {
                id: "Website Testing",
                svg: (<GrTestDesktop color="#DE2F04" size={40} />),
                title: "Website Testing",
                desc: "We test your website before launch. We fix errors and bugs. This ensures your website works perfectly.",
            },
        ],
        progressBarTitle: <>Build a Strong Website</>,
        progressBarSteps: [
            { id: 1, title: 'Clean Website Design', subtitle: 'Clean Website Design', desc: 'We keep the layout simple and clear. Users can easily understand your website. This improves the experience.' },
            { id: 2, title: 'Fast Loading Speed', subtitle: 'Fast Loading Speed', desc: 'We build websites that load quickly. No delays or slow pages. This keeps users on your site.' },
            { id: 3, title: 'User-Friendly Navigation', subtitle: 'User-Friendly Navigation', desc: 'We design simple menus and structures. Users can find things easily. This keeps them engaged.' },
            { id: 4, title: 'Websites That Work', subtitle: 'Websites That Work', desc: 'Our websites are built for results. They help you get leads and customers. This supports your growth.' },
        ],
        whyUs: {
            semiTitle: "",
            title: "What Are Web Development Services and Why Do They Matter?",
            description: <>Web development is the process of building websites that work online. It includes design, coding, and performance. A good website is fast, simple, and easy to use. On platforms like Upwork, a strong website helps you build trust and get more clients.</>,
            imageURL: '/service/whychooseus.webp',

        },
        easyExperience: [
            {
                title: "Why Choose Bembex Lab for Web Development Services?",
                cardData: [
                    {
                        title: "Simple and Clean Development",
                        description:
                            "We build websites that are easy to use. No extra complexity. This improves performance.",
                        svg: <FaCode color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Clear Communication",
                        description:
                            "We keep everything simple and clear. You stay updated at every step. No confusion.",
                        svg: <GiTalk color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Client-Focused Work",
                        description:
                            "We understand your needs first. Then we build based on your goals. This gives better results.",
                        svg: <MdCenterFocusStrong color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Smart Development Proces",
                        description:
                            "We follow a clear plan for development. Every step has a purpose. This improves quality.",
                        svg: <CgSmartphoneChip color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Built for Upwork Clients",
                        description:
                            "We know what works on Upwork. We build websites that impress clients. This helps you win more work.",
                        svg: <FaSquareUpwork color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Flexible Updates",
                        description:
                            "We improve the website based on your feedback. We refine until you are satisfied. This ensures quality.",
                        svg: <MdBrowserUpdated color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Long-Term Support",
                        description:
                            "We support you after launch. We help your website grow over time. Not just one-time work.",
                        svg: <MdOutlineSupportAgent color="#DE2F04" size={40} />,
                    },
                ],
            }
        ],
        imageData: [
            {
                src: '/portfolio/web_01.svg',
                cardData: 'Prodmost',
                link: '/case-studies/prodmost',
            },
            {
                src: '/portfolio/web_02.svg',
                cardData: 'Ink Founders',
                link: 'https://inkfounders.com',
            },
            {
                src: '/portfolio/web_03.svg',
                cardData: 'Car Deal Marketplace',
                link: '/case-studies/car-deal-marketplace',
            },
            {
                src: '/portfolio/web_04.svg',
                cardData: 'Web Founders Pakistan',
                link: '/case-studies/web-founders-usa',
            },
            {
                src: '/portfolio/web_05.svg',
                cardData: 'Titan Tax',
                link: 'https://titantax.com',
            },
            {
                src: '/portfolio/web_06.svg',
                cardData: 'Shock It Up',
                link: 'https://shockitup.com',
            },
            {
                src: '/portfolio/web_07.svg',
                cardData: 'Dr. Butts',
                link: '/case-studies/dr-butts',
            },
        ],
        faqs: [
            {
                question: "What is web development?",
                answer: (<>It is the process of building and managing websites.</>)
            },
            {
                question: "Why is a website important?",
                answer: (<>It helps your business grow and build trust online.</>)
            },
            {
                question: "Do you build e-commerce websites?",
                answer: (<>Yes. We create online stores for businesses.</>)
            },
            {
                question: "Will my website be mobile-friendly?",
                answer: (<>Yes. Your website will work on all devices.</>)
            },
            {
                question: "Do you work with Upwork clients?",
                answer: (<>Yes. We build websites that help you attract clients on Upwork.</>)
            }
        ],
    },

    // Digital Marketing
    {
        slug: 'digital-marketing',
        title: 'Digital Marketing Services',
        bulletPoints: [
            "Promote your business online and reach more people",
            "Turn visitors into real customers",
            "Build a strong online presence for your brand",
            "Get marketing that helps your business grow faster"
        ],
        heading: <>How Our Digital Marketing Services Help Your Business Grow</>,
        services: [
            {
                id: "Social Media Marketing",
                svg: (<IoShareSocial color="#DE2F04" size={40} />),
                title: "Social Media Marketing",
                desc: "We promote your business on social platforms. We create content that people like and share. This helps you reach more audiences.",
            },
            {
                id: "Search Engine Marketing (SEM)",
                svg: (<SiGooglemarketingplatform color="#DE2F04" size={40} />),
                title: "Search Engine Marketing (SEM)",
                desc: "We run paid ads on search engines. Your business shows up when people search. This brings quick traffic.",
            },
            {
                id: "Search Engine Optimization (SEO)",
                svg: (<TbSeo color="#DE2F04" size={40} />),
                title: "Search Engine Optimization (SEO)",
                desc: "We improve your website ranking on search engines. This helps people find you easily. It brings long-term traffic.",
            },
            {
                id: "Content Marketing",
                svg: (<IoIosDocument color="#DE2F04" size={40} />),
                title: "Content Marketing",
                desc: "We create simple and useful content for your audience. This builds trust and authority. It also improves engagement.",
            },
            {
                id: "Email Marketing",
                svg: (<MdAlternateEmail color="#DE2F04" size={40} />),
                title: "Email Marketing",
                desc: "We send emails to your audience with offers and updates. This keeps them connected with your business. It increases conversions.",
            },
        ],
        progressBarTitle: <>Build a Strong Online Presence</>,
        progressBarSteps: [
            { id: 1, title: 'Clear Marketing Strategy', subtitle: 'Clear Marketing Strategy', desc: 'We plan everything step by step. Each action has a goal. This gives better results.' },
            { id: 2, title: 'Consistent Brand Message', subtitle: 'Consistent Brand Message', desc: 'We keep your message the same everywhere. This builds a strong identity. People trust consistent brands.' },
            { id: 3, title: 'Target Audience Focus', subtitle: 'Target Audience Focus', desc: 'We focus on the right people. Your message reaches those who need it. This improves results.' },
            { id: 4, title: 'Marketing That Works', subtitle: 'Marketing That Works', desc: 'Our marketing is result-focused. We aim for leads, sales, and growth. Not just likes.' },
        ],
        whyUs: {
            semiTitle: "",
            title: "What Are Digital Marketing Services and Why Do They Matter?",
            description: "Digital marketing is promoting your business online. It includes ads, content, and social media. A strong online presence helps people find and trust you. On platforms like Upwork, good marketing helps you get more clients and grow faster.",
            imageURL: '/service/whychooseus.webp',

        },
        easyExperience: [
            {
                title: "Why Choose Bembex Lab for Digital Marketing Services?",
                cardData: [
                    {
                        title: "Simple and Clear Strategy",
                        description:
                            "We keep marketing easy to understand. No complex plans. Just clear steps.",
                        svg: <PiStrategy color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Clear Communication",
                        description:
                            "We explain everything in simple words. You always know what is happening. No confusion.",
                        svg: <GiTalk color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Client-Focused Work",
                        description:
                            "We understand your business first. Then we create marketing based on your goals. This gives better results.",
                        svg: <MdCenterFocusStrong color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Smart Marketing Decisions",
                        description:
                            "We use data and research. Every step has a reason. This improves performance.",
                        svg: <LuBrainCircuit color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Built for Upwork Clients",
                        description:
                            "We know what works on Upwork. We market your services to attract clients. This helps you win more work.",
                        svg: <FaSquareUpwork color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Flexible Strategy",
                        description:
                            "We adjust campaigns based on results. We improve continuously. This gives better output.",
                        svg: <PiStrategy color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Long-Term Growth",
                        description:
                            "We focus on long-term success. Not just quick results. This helps your business grow over time.",
                        svg: <BsGraphUpArrow color="#DE2F04" size={40} />,
                    },
                ],
            }
        ],
        imageData: [
            {
                src: '/portfolio/web_01.svg',
                cardData: 'Prodmost',
                link: '/case-studies/prodmost',
            },
            {
                src: '/portfolio/web_02.svg',
                cardData: 'Ink Founders',
                link: 'https://inkfounders.com',
            },
            {
                src: '/portfolio/web_03.svg',
                cardData: 'Car Deal Marketplace',
                link: '/case-studies/car-deal-marketplace',
            },
            {
                src: '/portfolio/web_04.svg',
                cardData: 'Web Founders Pakistan',
                link: '/case-studies/web-founders-usa',
            },
            {
                src: '/portfolio/web_05.svg',
                cardData: 'Titan Tax',
                link: 'https://titantax.com',
            },
            {
                src: '/portfolio/web_06.svg',
                cardData: 'Shock It Up',
                link: 'https://shockitup.com',
            },
            {
                src: '/portfolio/web_07.svg',
                cardData: 'Dr. Butts',
                link: '/case-studies/dr-butts',
            },
        ],
        faqs: [
            {
                question: "What is digital marketing?",
                answer: (<>It is promoting your business online using different methods.</>)
            },
            {
                question: "Why is digital marketing important?",
                answer: (<>It helps you reach more people and grow your business.</>)
            },
            {
                question: "Do you run ads?",
                answer: (<>Yes. We run paid ads for fast results.</>)
            },
            {
                question: "Do you provide SEO services?",
                answer: (<>Yes. We improve your website ranking.</>)
            },
        ],
    },

    // ecommerce development
    {
        slug: 'ecommerce-development',
        title: 'E-commerce Development Services',
        bulletPoints: [
            "Build online stores that are simple and easy to use",
            "Turn visitors into real buyers",
            "Create fast and secure shopping websites",
            "Get ecommerce solutions that help you grow sales"
        ],
        heading: <>How Our E-Commerce Development Services Help Your Business Grow</>,
        services: [
            {
                id: "Online Store Development",
                svg: (<FaStore color="#DE2F04" size={40} />),
                title: "Online Store Development",
                desc: "We build complete e-commerce websites from start to finish. Everything works smoothly and quickly. This gives customers a better shopping experience.",
            },
            {
                id: "Product Page Setup",
                svg: (<CgWebsite color="#DE2F04" size={40} />),
                title: "Product Page Setup",
                desc: "We create clean and simple product pages. Customers can easily see details and images. This helps them make quick decisions.",
            },
            {
                id: "Shopping Cart & Checkout",
                svg: (<CiShoppingCart color="#DE2F04" size={40} />),
                title: "Shopping Cart & Checkout",
                desc: "We built an easy checkout process. Customers can buy without confusion. This reduces cart drop.",
            }, {
                id: "Payment Integration",
                svg: (<MdOutlinePayment color="#DE2F04" size={40} />),
                title: "Payment Integration",
                desc: "We add secure payment methods to your store. Customers can pay safely and easily. This builds trust.",
            },
            {
                id: "Store Testing",
                svg: (<FaStore color="#DE2F04" size={40} />),
                title: "Store Testing",
                desc: "We test your store before launch. We fix bugs and errors. This ensures everything works properly.",
            },
        ],
        progressBarTitle: <>Build a High-Converting Online Store</>,
        progressBarSteps: [
            { id: 1, title: 'Clean Store Design', subtitle: 'Clean Store Design', desc: 'We keep the design simple and clear. Customers can browse easily. This improves user experience.' },
            { id: 2, title: 'Fast Loading Speed', subtitle: 'Fast Loading Speed', desc: 'We build stores that load quickly. No delays while shopping. This keeps customers on your site.' },
            { id: 3, title: 'Easy Navigation', subtitle: 'Easy Navigation', desc: 'We design simple menus and structures. Customers find products fast. This improves sales.' },
            { id: 4, title: 'Store That Sells', subtitle: 'Store That Sells', desc: 'Our stores are built to convert visitors into buyers. We focus on results. This helps your business grow.' },
        ],
        whyUs: {
            semiTitle: "",
            title: "What Are E-Commerce Development Services and Why Do They Matter?",
            description: "E-commerce development means building an online store where people can buy products. It includes design, payment setup, and product pages. A good store is easy to use and loads fast. On platforms like Upwork, a strong store helps you build trust and increase sales.",
            imageURL: '/service/whychooseus.webp',

        },
        easyExperience: [
            {
                title: "Why Choose Bembex Lab for E-commerce Development Services?",
                cardData: [
                    {
                        title: "Simple and Clean Development",
                        description:
                            "We build stores that are easy to use. No extra complexity. This improves performance.",
                        svg: <FaCode color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Clear Communication",
                        description:
                            "We keep everything simple and clear. You stay updated at every step. No confusion.",
                        svg: <GiTalk color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Client-Focused Work",
                        description:
                            "We understand your business first. Then we build based on your goals. This gives better results.",
                        svg: <MdCenterFocusStrong color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Smart Development Process",
                        description:
                            "We follow a clear plan. Every step has a purpose. This improves quality.",
                        svg: <CgSmartphoneChip color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Built for Upwork Clients",
                        description:
                            "We know what works on Upwork. We build stores that attract clients. This helps you win more work.",
                        svg: <FaSquareUpwork color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Flexible Updates",
                        description:
                            "We improve your store based on feedback. We refine until you are satisfied. This ensures better output.",
                        svg: <MdBrowserUpdated color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Long-Term Support",
                        description:
                            "We support you after launch. We help your store grow over time. Not just one-time work.",
                        svg: <MdOutlineSupportAgent color="#DE2F04" size={40} />,
                    },
                ],
            }
        ],
        imageData: [
            {
                src: '/portfolio/web_01.svg',
                cardData: 'Prodmost',
                link: '/case-studies/prodmost',
            },
            {
                src: '/portfolio/web_02.svg',
                cardData: 'Ink Founders',
                link: 'https://inkfounders.com',
            },
            {
                src: '/portfolio/web_03.svg',
                cardData: 'Car Deal Marketplace',
                link: '/case-studies/car-deal-marketplace',
            },
            {
                src: '/portfolio/web_04.svg',
                cardData: 'Web Founders Pakistan',
                link: '/case-studies/web-founders-usa',
            },
            {
                src: '/portfolio/web_05.svg',
                cardData: 'Titan Tax',
                link: 'https://titantax.com',
            },
            {
                src: '/portfolio/web_06.svg',
                cardData: 'Shock It Up',
                link: 'https://shockitup.com',
            },
            {
                src: '/portfolio/web_07.svg',
                cardData: 'Dr. Butts',
                link: '/case-studies/dr-butts',
            },
        ],
        faqs: [
            {
                question: "What is e-commerce development?",
                answer: (<>It is the process of building online stores for selling products.</>)
            },
            {
                question: "Why is e-commerce important?",
                answer: (<>It helps you sell products online and reach more customers.</>)
            },
            {
                question: "Do you build full online stores?",
                answer: (<>Yes. We create complete e-commerce websites.</>)
            },
            {
                question: "Will my store be mobile-friendly?",
                answer: (<>Yes. Your store will work on all devices.</>)
            },
            {
                question: "Do you work with Upwork clients?",
                answer: (<>Yes. We build stores that help you attract clients on Upwork.</>)
            },
        ],
    },
    
    // Content Writing
    {
        slug: 'content-writing',
        title: 'Content Writing Services',
        bulletPoints: [
            "Write clear and simple content that people understand",
            "Turn your ideas into strong and engaging words",
            "Create content that builds trust and authority",
            "Get writing that helps your business grow faster",
        ],
        heading: <>How Our Content Writing Services Help Your Business Grow</>,
        services: [
            {
                id: "Website Content",
                svg: (<CgWebsite color="#DE2F04" size={40} />),
                title: "Website Content",
                desc: "We write clear content for your website pages. It explains your services in simple words. This helps visitors understand and trust you.",
            },
            {
                id: "Blog Writing",
                svg: (<TbWriting color="#DE2F04" size={40} />),
                title: "Blog Writing",
                desc: "We create blog posts that are easy to read and useful. This brings more visitors to your website. It also builds authority.",
            },
            {
                id: "SEO Content Writing",
                svg: (<TbSeo color="#DE2F04" size={40} />),
                title: "SEO Content Writing",
                desc: "We write content that ranks on search engines. It helps people find your business online. This brings long-term traffic.",
            },
            {
                id: "Product Descriptions",
                svg: (<IoIosDocument color="#DE2F04" size={40} />),
                title: "Product Descriptions",
                desc: "We write simple and clear product details. Customers understand benefits quickly. This helps increase sales.",
            },
            {
                id: "Marketing Content",
                svg: (<IoIosDocument color="#DE2F04" size={40} />),
                title: "Marketing Content",
                desc: "We create content for ads and promotions. It is short, clear, and engaging. This improves conversions.",
            },
        ],
        progressBarTitle: <>Build Strong and Clear Content</>,
        progressBarSteps: [
            { id: 1, title: 'Simple Writing Style', subtitle: 'Simple Writing Style', desc: 'We use very easy English. Anyone can understand your content. This improves readability.' },
            { id: 2, title: 'Clear Message', subtitle: 'Clear Message', desc: 'We keep your message direct and simple. No confusion for readers. This builds trust.' },
            { id: 3, title: 'Consistent Tone', subtitle: 'Consistent Tone', desc: 'We keep the same tone across all content. This builds a strong brand voice. People recognize your style.' },
            { id: 4, title: 'Content That Works', subtitle: 'Content That Works', desc: 'Our content is made for results. It helps you get traffic, leads, and sales. This supports growth.' },
        ],
        whyUs: {
            semiTitle: "",
            title: "What Are Content Writing Services and Why Do They Matter?",
            description: "Content writing means creating written content for websites, blogs, and marketing. Good content is clear, simple, and easy to read. It helps people understand your business and trust you. On platforms like Upwork, strong content helps you attract more clients and stand out.",
            imageURL: '/service/whychooseus.webp',

        },
        easyExperience: [
            {
                title: "Why Choose Bembex Lab for Content Writing Services?",
                cardData: [
                    {
                        title: "Simple and Clear Writing",
                        description:
                            "We write in easy English. No complex words. This makes your content strong and clear.",
                        svg: <TbWriting color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Clear Communication",
                        description:
                            "We understand your needs first. Then we write based on your goals. No confusion.",
                        svg: <GiTalk color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Client-Focused Content",
                        description:
                            "We write for your audience. Not just for search engines. This improves engagement.",
                        svg: <MdCenterFocusStrong color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Smart Writing Strategy",
                        description:
                            "We plan content before writing. Every word has a purpose. This improves quality.",
                        svg: <TbWriting color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Built for Upwork Clients",
                        description:
                            "We know what works on Upwork. We write content that attracts clients. This helps you win more work.",
                        svg: <FaSquareUpwork color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Flexible Revisions",
                        description:
                            "We improve content based on your feedback. We refine until you are satisfied. This ensures better output.",
                        svg: <BiRevision color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Long-Term Support",
                        description:
                            "We help you grow with better content over time. Not just one-time work.",
                        svg: <BsGraphUpArrow color="#DE2F04" size={40} />,
                    },
                ],
            }
        ],
        imageData: [
            {
                src: '/portfolio/web_01.svg',
                cardData: 'Prodmost',
                link: '/case-studies/prodmost',
            },
            {
                src: '/portfolio/web_02.svg',
                cardData: 'Ink Founders',
                link: 'https://inkfounders.com',
            },
            {
                src: '/portfolio/web_03.svg',
                cardData: 'Car Deal Marketplace',
                link: '/case-studies/car-deal-marketplace',
            },
            {
                src: '/portfolio/web_04.svg',
                cardData: 'Web Founders Pakistan',
                link: '/case-studies/web-founders-usa',
            },
            {
                src: '/portfolio/web_05.svg',
                cardData: 'Titan Tax',
                link: 'https://titantax.com',
            },
            {
                src: '/portfolio/web_06.svg',
                cardData: 'Shock It Up',
                link: 'https://shockitup.com',
            },
            {
                src: '/portfolio/web_07.svg',
                cardData: 'Dr. Butts',
                link: '/case-studies/dr-butts',
            },
        ],
        faqs: [
            {
                question: "What is content writing?",
                answer: (<>It is the process of writing content for websites, blogs, and marketing.</>)
            },
            {
                question: "Why is content important?",
                answer: (<>It helps people understand your business and builds trust.</>)
            },
            {
                question: "Do you write SEO content?",
                answer: (<>Yes. We create content that ranks on search engines.</>)
            },
            {
                question: "Can you write website content?",
                answer: (<>Yes. We write content for all types of websites.</>)
            },
            {
                question: "Do you work with Upwork clients?",
                answer: (<>Yes. We write content that helps you attract clients on Upwork.</>)
            },
        ],
    },

    // Logo Design
    {
        slug: 'logo-design',
        title: 'Logo Design Services',
        bulletPoints: [
            "Create simple and memorable logos for your brand",
            "Turn your idea into a clear visual identity",
            "Build a strong first impression with a clean design",
            "Get logos that help your business stand out",
        ],
        heading: <>How Our Logo Design Services Help Your Business Grow</>,
        services: [
            {
                id: "Custom Logo Design",
                svg: (<MdOutlineDesignServices color="#DE2F04" size={40} />),
                title: "Custom Logo Design",
                desc: "We create logos from scratch based on your idea. No templates are used. This makes your brand unique.",
            },
            {
                id: "Minimal Logo Style",
                svg: (<MdOutlineStyle color="#DE2F04" size={40} />),
                title: "Minimal Logo Style",
                desc: "We design clean and simple logos. No extra elements. This improves clarity and recognition.",
            },
            {
                id: "Modern Logo Design",
                svg: (<MdOutlineDesignServices color="#DE2F04" size={40} />),
                title: "Modern Logo Design",
                desc: "We follow modern design trends. Your logo looks fresh and professional. This helps you stay competitive.",
            },
            {
                id: "Brand-Focused Design",
                svg: (<MdBrandingWatermark color="#DE2F04" size={40} />),
                title: "Brand-Focused Design",
                desc: "We design based on your business and audience. The logo matches your brand identity. This builds trust.",
            },
            {
                id: "Multiple Concepts",
                svg: (<GrMultiple color="#DE2F04" size={40} />),
                title: "Multiple Concepts",
                desc: "We provide different logo ideas. You can choose what fits best. This gives you better control.",
            },
        ],
        progressBarTitle: <>Build a Strong Brand Identity</>,
        progressBarSteps: [
            { id: 1, title: 'Clean Visual Style', subtitle: 'Clean Visual Style', desc: 'We keep the logo simple and balanced. It looks good on all platforms. This improves usability.' },
            { id: 2, title: 'Easy to Remember Design', subtitle: 'Easy to Remember Design', desc: 'We focus on shapes and ideas that stick in the mind. People can recall your logo easily. This builds recognition.' },
            { id: 3, title: 'Scalable Design', subtitle: 'Scalable Design', desc: 'Your logo works in all sizes, from small icons to big banners. This keeps your brand consistent.' },
            { id: 4, title: 'Logo That Works', subtitle: 'Logo That Works', desc: 'Our logos are made for real use. They help you build trust and grow your business. This supports success.' },
        ],
        whyUs: {
            semiTitle: "",
            title: "What Are Logo Design Services and Why Do They Matter?",
            description: "Logo design is the process of creating a visual symbol for your business. It is the face of your brand. A good logo is simple, clear, and easy to remember. On platforms like Upwork, a strong logo helps you look professional and win more clients.",
            imageURL: '/service/whychooseus.webp',

        },
        easyExperience: [
            {
                title: "Why Choose Bembex Lab for Logo Design Services?",
                cardData: [
                    {
                        title: "Simple and Clean Design",
                        description:
                            "We focus on clarity, not complexity. No messy design. This makes your logo strong.",
                        svg: <MdOutlineDesignServices color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Clear Communication",
                        description:
                            "We understand your idea first. Then we design step by step. No confusion.",
                        svg: <GiTalk color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Client-Focused Work",
                        description:
                            "We design based on your goals. Not just our style. This gives better results.",
                        svg: <MdCenterFocusStrong color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Smart Design Process",
                        description:
                            "Every design choice has a reason. We follow a clear method. This improves quality.",
                        svg: <CgSmartphoneChip color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Built for Upwork Clients",
                        description:
                            "We know what works on Upwork. We create logos that impress clients. This helps you win more work.",
                        svg: <FaSquareUpwork color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Flexible Revisions",
                        description:
                            "We improve designs based on your feedback. We refine until you are satisfied. This ensures strong output.",
                        svg: <BiRevision color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Long-Term Support",
                        description:
                            "We help you improve your brand over time. Not just one logo. We focus on growth.",
                        svg: <MdOutlineSupportAgent color="#DE2F04" size={40} />,
                    },
                ],
            }
        ],
        imageData: [
            {
                src: '/portfolio/web_01.svg',
                cardData: 'Prodmost',
                link: '/case-studies/prodmost',
            },
            {
                src: '/portfolio/web_02.svg',
                cardData: 'Ink Founders',
                link: 'https://inkfounders.com',
            },
            {
                src: '/portfolio/web_03.svg',
                cardData: 'Car Deal Marketplace',
                link: '/case-studies/car-deal-marketplace',
            },
            {
                src: '/portfolio/web_04.svg',
                cardData: 'Web Founders Pakistan',
                link: '/case-studies/web-founders-usa',
            },
            {
                src: '/portfolio/web_05.svg',
                cardData: 'Titan Tax',
                link: 'https://titantax.com',
            },
            {
                src: '/portfolio/web_06.svg',
                cardData: 'Shock It Up',
                link: 'https://shockitup.com',
            },
            {
                src: '/portfolio/web_07.svg',
                cardData: 'Dr. Butts',
                link: '/case-studies/dr-butts',
            },
        ],
        faqs: [
            {
                question: "What is logo design?",
                answer: (<>It is the process of creating a visual symbol for your business.</>)
            },
            {
                question: "Why is a logo important?",
                answer: (<>It builds your brand identity and creates a strong first impression.</>)
            },
            {
                question: "Do you create custom logos?",
                answer: (<>Yes. Every logo is made from scratch.</>)
            },
            {
                question: "Will I get multiple concepts?",
                answer: (<>Yes. We provide different ideas to choose from.</>)
            },
            {
                question: "Do you work with Upwork clients?",
                answer: (<>Yes. We design logos that help you attract clients on Upwork.</>)
            },
        ],
    },

    // Branding Service
    {
        slug: 'branding',
        title: 'Branding Services',
        bulletPoints: [
            "Build a strong and clear identity for your business",
            "Create a consistent look and message across all platforms",
            "Make your brand easy to recognize and trust",
            "Get branding that helps your business grow faster",
        ],
        heading: <>How Our Branding Services Help Your Business Grow</>,
        services: [
            {
                id: "Brand Identity Design",
                svg: (<MdBrandingWatermark color="#DE2F04" size={40} />),
                title: "Brand Identity Design",
                desc: "We create your full brand look, including logo, colors, and fonts. Everything matches your business style. This builds a strong identity.",
            },
            {
                id: "Visual Branding",
                svg: (<FaEye color="#DE2F04" size={40} />),
                title: "Visual Branding",
                desc: "We design how your brand looks on all platforms. From social media to the website, everything stays consistent. This improves trust.",
            },
            {
                id: "Brand Strategy",
                svg: (<PiStrategy color="#DE2F04" size={40} />),
                title: "Brand Strategy",
                desc: "We plan how your brand should look and speak. We focus on your target audience. This helps you grow faster.",
            },
            {
                id: "Rebranding Services",
                svg: (<MdOutlineBrandingWatermark color="#DE2F04" size={40} />),
                title: "Rebranding Services",
                desc: "We improve your old brand design. We give it a fresh and modern look. This keeps your business relevant.",
            },
            {
                id: "Brand Assets Design",
                svg: (<MdOutlineDesignServices color="#DE2F04" size={40} />),
                title: "Brand Assets Design",
                desc: "We create all design elements for your brand. This includes icons, templates, and visuals. This keeps your branding organized.",
            },
        ],
        progressBarTitle: <>Build a Strong Brand System</>,
        progressBarSteps: [
            { id: 1, title: 'Consistent Brand Style', subtitle: 'Consistent Brand Style', desc: 'We keep your colors, fonts, and design the same everywhere. This builds a strong image. People trust consistent brands.' },
            { id: 2, title: 'Clear Brand Message', subtitle: 'Clear Brand Message', desc: 'We help you share a simple and clear message. People understand your business easily. This improves the connection.' },
            { id: 3, title: 'Professional Look', subtitle: 'Professional Look', desc: 'We design your brand to look clean and modern. No messy visuals. This builds trust.' },
            { id: 4, title: 'Brand That Works', subtitle: 'Brand That Works', desc: 'Our branding is made for results. It helps you attract clients and grow. This supports long-term success.' },
        ],
        whyUs: {
            semiTitle: "",
            title: "What Are Branding Services and Why Do They Matter?",
            description: "Branding is how people see and feel about your business. It includes your logo, colors, style, and message. A strong brand looks clear and consistent everywhere. On platforms like Upwork, good branding helps you stand out and look professional.",
            imageURL: '/service/whychooseus.webp',

        },
        easyExperience: [
            {
                title: "Why Choose Bembex Lab for Branding Services?",
                cardData: [
                    {
                        title: "Simple and Clear Branding",
                        description:
                            "We keep branding clean and easy to understand. No over-design. This improves clarity.",
                        svg: <MdOutlineBrandingWatermark color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Clear Communication",
                        description:
                            "We explain everything in simple words. You stay involved in the process. No confusion.",
                        svg: <GiTalk color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Client-Focused Work",
                        description:
                            "We understand your business first. Then we build your brand. This gives better results.",
                        svg: <MdCenterFocusStrong color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Smart Branding Strategy",
                        description:
                            "We follow a clear plan. Every decision has a reason. This improves quality.",
                        svg: <CgSmartphoneChip color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Built for Upwork Clients",
                        description:
                            "We know what works on Upwork. We create branding that attracts clients. This helps you win more work.",
                        svg: <FaSquareUpwork color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Flexible Revisions",
                        description:
                            "We refine your brand based on feedback. We improve until you are satisfied. This ensures strong output.",
                        svg: <BiRevision color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Long-Term Support",
                        description:
                            "We help your brand grow over time. Not just one project. We focus on long-term success.",
                        svg: <MdOutlineSupportAgent color="#DE2F04" size={40} />,
                    },
                ],
            }
        ],
        imageData: [
            {
                src: '/portfolio/web_01.svg',
                cardData: 'Prodmost',
                link: '/case-studies/prodmost',
            },
            {
                src: '/portfolio/web_02.svg',
                cardData: 'Ink Founders',
                link: 'https://inkfounders.com',
            },
            {
                src: '/portfolio/web_03.svg',
                cardData: 'Car Deal Marketplace',
                link: '/case-studies/car-deal-marketplace',
            },
            {
                src: '/portfolio/web_04.svg',
                cardData: 'Web Founders Pakistan',
                link: '/case-studies/web-founders-usa',
            },
            {
                src: '/portfolio/web_05.svg',
                cardData: 'Titan Tax',
                link: 'https://titantax.com',
            },
            {
                src: '/portfolio/web_06.svg',
                cardData: 'Shock It Up',
                link: 'https://shockitup.com',
            },
            {
                src: '/portfolio/web_07.svg',
                cardData: 'Dr. Butts',
                link: '/case-studies/dr-butts',
            },
        ],
        faqs: [
            {
                question: "What is branding?",
                answer: (<>Branding is the full identity of your business, including design and message.</>)
            },
            {
                question: "Why is branding important?",
                answer: (<>It builds trust and helps people recognize your business.</>)
            },
            {
                question: "Do you offer full branding?",
                answer: (<>Yes. We create complete brand identity systems.</>)
            },
            {
                question: "Can you redesign my old brand?",
                answer: (<>Yes. We provide rebranding services.</>)
            },
            {
                question: "Do you work with Upwork clients?",
                answer: (<>Yes. We create branding that helps you attract clients on Upwork.</>)
            },
        ],
    },

    // SEO Service
    {
        slug: 'seo',
        title: 'SEO Services',
        bulletPoints: [
            "Improve your website ranking on search engines",
            "Bring more traffic to your website",
            "Turn visitors into real customers",
            "Get SEO that helps your business grow long-term",
        ],
        heading: <>How Our SEO Services Help Your Business Grow</>,
        services: [
            {
                id: "Keyword Research",
                svg: (<VscSymbolKeyword color="#DE2F04" size={40} />),
                title: "Keyword Research",
                desc: "We find the right keywords for your business. These are words people search online. This helps you target the right audience.",
            },
            {
                id: "On-Page SEO",
                svg: (<TbSeo color="#DE2F04" size={40} />),
                title: "On-Page SEO",
                desc: "We improve your website content and structure. Titles, headings, and text are optimized. This helps your site rank better.",
            },
            {
                id: "Technical SEO",
                svg: (<TbSeo color="#DE2F04" size={40} />),
                title: "Technical SEO",
                desc: "We fix technical issues on your website. This includes speed and performance. This improves search engine ranking.",
            },
            {
                id: "Content Optimization",
                svg: (<CgPerformance color="#DE2F04" size={40} />),
                title: "Content Optimization",
                desc: "We improve your existing content. It becomes clear, useful, and SEO-friendly. This increases visibility.",
            },
            {
                id: "Link Building",
                svg: (<CiLink color="#DE2F04" size={40} />),
                title: "Link Building",
                desc: "We build quality backlinks for your website. This increases your site authority. This helps improve ranking.",
            },
        ],
        progressBarTitle: <>Build a Strong Online Presence</>,
        progressBarSteps: [
            { id: 1, title: 'Clear SEO Strategy', subtitle: 'We create a step-by-step SEO plan. Each step has a goal. This gives better results' },
            { id: 2, title: 'Consistent Growth', subtitle: 'Consistent Growth', desc: 'We improve your website over time. SEO is not instant. It builds long-term success.' },
            { id: 3, title: 'Targeted Traffic', subtitle: 'Targeted Traffic', desc: 'We focus on the right audience. People who need your service find you. This improves conversion.' },
            { id: 4, title: 'SEO That Works', subtitle: 'SEO That Works', desc: 'Our SEO is result-focused. It brings traffic, leads, and growth. Not just rankings.' },
        ],
        whyUs: {
            semiTitle: "",
            title: "What Are SEO Services and Why Do They Matter?",
            description: "SEO means improving your website so people can find it on search engines. It helps your site show up when users search for your service. A strong SEO strategy brings free and long-term traffic. On platforms like Upwork, good SEO helps you attract more clients and build trust.",
            imageURL: '/service/whychooseus.webp',

        },
        easyExperience: [
            {
                title: "Why Choose Bembex Lab for SEO Services?",
                cardData: [
                    {
                        title: "Simple and Clear Process",
                        description:
                            "We keep SEO easy to understand. No complex terms. Just clear steps.",
                        svg: <MdLoop color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Clear Communication",
                        description:
                            "We update you regularly. You know what is happening. No confusion.",
                        svg: <GiTalk color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Client-Focused Work",
                        description:
                            "We understand your goals first. Then we apply the SEO strategy. This gives better results.",
                        svg: <MdCenterFocusStrong color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Smart SEO Decisions",
                        description:
                            "We use data and research. Every step has a purpose. This improves performance.",
                        svg: <CgSmartphoneChip color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Built for Upwork Clients",
                        description:
                            "We know how to rank profiles and websites on Upwork. This helps you attract more clients.",
                        svg: <FaSquareUpwork color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Flexible Strategy",
                        description:
                            "We adjust SEO based on results. We keep improving. This gives better output.",
                        svg: <PiStrategy color="#DE2F04" size={40} />,
                    },
                    {
                        title: "Long-Term Growth",
                        description:
                            "We focus on long-term success. Not quick tricks. This builds strong results.",
                        svg: <BsGraphUpArrow color="#DE2F04" size={40} />,
                    },
                ],
            }
        ],
        imageData: [
            {
                src: '/portfolio/web_01.svg',
                cardData: 'Prodmost',
                link: '/case-studies/prodmost',
            },
            {
                src: '/portfolio/web_02.svg',
                cardData: 'Ink Founders',
                link: 'https://inkfounders.com',
            },
            {
                src: '/portfolio/web_03.svg',
                cardData: 'Car Deal Marketplace',
                link: '/case-studies/car-deal-marketplace',
            },
            {
                src: '/portfolio/web_04.svg',
                cardData: 'Web Founders Pakistan',
                link: '/case-studies/web-founders-usa',
            },
            {
                src: '/portfolio/web_05.svg',
                cardData: 'Titan Tax',
                link: 'https://titantax.com',
            },
            {
                src: '/portfolio/web_06.svg',
                cardData: 'Shock It Up',
                link: 'https://shockitup.com',
            },
            {
                src: '/portfolio/web_07.svg',
                cardData: 'Dr. Butts',
                link: '/case-studies/dr-butts',
            },
        ],
        faqs: [
            {
                question: "What is SEO?",
                answer: (<>SEO is the process of improving your website ranking on search engines.</>)
            },
            {
                question: "Why is SEO important?",
                answer: (<>It helps people find your business online.</>)
            },
            {
                question: "How long does SEO take?",
                answer: (<>SEO takes time but gives long-term results.</>)
            },
            {
                question: "Do you provide full SEO services?",
                answer: (<>Yes. We cover all parts of SEO.</>)
            },
            {
                question: "Do you work with Upwork clients?",
                answer: (<>Yes. We use SEO to help you attract clients on Upwork.</>)
            },
        ],
    },
];

