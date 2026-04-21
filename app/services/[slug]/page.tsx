import React from 'react'
import dynamic from "next/dynamic";
import ServicesHeader from "@/components/Servicesheader";
import Cardsection from "@/components/Cardsection";

import LogoSlider from "@/components/LogoSlider";
import PackagesSection from "../components/PackagesSection";
import CustomPlan from "../components/CustomPlan";
import OurProcess from "../components/OurProcess";
import WhyChooseUs from "../components/WhyChooseUs";
import EasyExperience from "../components/EasyExperience";
import FAQs from "../components/FAQs";
import { services } from './data'

// Mobile versions (desktop components shown at >=1250px via CSS)
import ServicesHeaderMobile from "../components/ServicesHeaderMobile"
import CardsectionMobile from "../components/CardsectionMobile"
import PackagesSectionMobile from "../components/PackagesSectionMobile"
import CustomPlanMobile from "../components/CustomPlanMobile"
import OurProcessMobile from "../components/OurProcessMobile"
import WhyChooseUsMobile from "../components/WhyChooseUsMobile"
import EasyExperienceMobile from "../components/EasyExperienceMobile"
import Footer2 from '@/components/Footer2';

const PortfolioWall = dynamic(() => import("@/components/PortfolioWall"), {
  ssr: false,
});
const TestimonialsCarousel = dynamic(
  () => import("@/components/TestimonialsCarousel copy"),
  { ssr: false }
);
const BlogWall = dynamic(() => import("@/components/BlogWall"), {
  ssr: false,
});
const ForumMap = dynamic(() => import("@/components/ForumMap"), {
  ssr: false,
});

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) {
    return (
      <main className="w-full overflow-hidden">
        <div className="p-20 text-center">Service not found</div>
      </main>
    )
  }
  const serviceProgressBarTitle: React.ReactNode | undefined =
    'progressBarTitle' in service
      ? (service as { progressBarTitle?: React.ReactNode }).progressBarTitle
      : undefined

  const serviceIntroParagraph =
    'introPara' in service
      ? (service as { introPara?: React.ReactNode }).introPara
      : undefined
  const hasServiceIntroParagraph = Boolean(serviceIntroParagraph)
  const serviceCardSectionHeading: React.ReactNode | undefined =
    'heading' in service
      ? (service as { heading?: React.ReactNode }).heading
      : 'cardSectionHeading' in service
        ? (service as { cardSectionHeading?: React.ReactNode }).cardSectionHeading
        : undefined

  return (
    <main className="w-full overflow-hidden">
      
      {/* Header */}
      <div className="hidden lg:block">
        <ServicesHeader
          title={service.title}
          bulletPoints={service.bulletPoints}
          showSubServiceText={hasServiceIntroParagraph}
          introParagraph={serviceIntroParagraph}
        />
      </div>
      <div className="block lg:hidden">
        <ServicesHeaderMobile
          title={service.title}
          bulletPoints={service.bulletPoints}
          showSubServiceText={hasServiceIntroParagraph}
          introParagraph={serviceIntroParagraph}
        />
      </div>

      <LogoSlider />

      {/* Cardsection */}
      <div className="hidden lg:block">
        <Cardsection
          services={service.services}
          heading={serviceCardSectionHeading}
        />
      </div>
      <div className="block lg:hidden">
        <CardsectionMobile
          services={service.services}
          heading={serviceCardSectionHeading}
        />
      </div>

      {/* Packages */}
      {/* <div className="hidden lg:block">
        <PackagesSection pricingCardData={service.pricingCardData} />
      </div>
      <div className="block lg:hidden">
        <PackagesSectionMobile pricingCardData={service.pricingCardData} />
      </div> */}

      {/* Custom Plan */}
      {/* <div className="hidden lg:block">
        <CustomPlan customPlanData={service.customPlanData} />
      </div>
      <div className="block lg:hidden">
        <CustomPlanMobile customPlanData={service.customPlanData} />
      </div> */}

      {/* Our Process */}
      <div className="hidden lg:block">
        <OurProcess steps={service.progressBarSteps} progressBarTitle={serviceProgressBarTitle} />
      </div>
      <div className="block lg:hidden">
        <OurProcessMobile steps={service.progressBarSteps} progressBarTitle={serviceProgressBarTitle} />
      </div>

      {/* Why Choose Us */}
      <div className="hidden lg:block">
        <WhyChooseUs whyUs={service.whyUs} />
      </div>
      <div className="block lg:hidden">
        <WhyChooseUsMobile whyUs={service.whyUs} />
      </div>

      {/* Easy Experience */}
      <div className="hidden lg:block">
        <EasyExperience easyExperience={service.easyExperience} />
      </div>
      <div className="block lg:hidden">
        <EasyExperienceMobile easyExperience={service.easyExperience} />
      </div>

      {/* Portfolio */}
      <div className="block md:mt-32">
        <PortfolioWall />
      </div>
      
      <TestimonialsCarousel />
      <FAQs items={service.faqs} />
      <BlogWall />
      <ForumMap />
      <Footer2 />
    </main>
  )
} 
