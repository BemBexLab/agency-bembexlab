import LogoSlider from '@/components/LogoSlider'
import ServicesHeader from '@/components/Servicesheader'
import React from 'react'
import dynamic from "next/dynamic";
import StrengthShowcase from '../../components/StrengthShowcase'
import WhyChooseUs from '../../components/WhyChooseUs'
import OurProcess from '../../components/OurProcess'
import PackagesSection from '../../components/PackagesSection'
import CustomPlan from '../../components/CustomPlan'
import EasyExperience from '../../components/EasyExperience'
import FAQs from '../../components/FAQs'
import { services } from '../data'
import ServicesHeaderMobile from '../../components/ServicesHeaderMobile'
import StrengthShowcaseMobile from '../../components/StrengthShowcaseMobile'
import WhyChooseUsMobile from '../../components/WhyChooseUsMobile'
import OurProcessMobile from '../../components/OurProcessMobile'
import PackagesSectionMobile from '../../components/PackagesSectionMobile'
import CustomPlanMobile from '../../components/CustomPlanMobile'
import EasyExperienceMobile from '../../components/EasyExperienceMobile'
import Footer2 from '@/components/Footer2'

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


export default function SubServicePage({ params }: { params: { slug: string; id: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) {
    return (
      <main className="w-full overflow-hidden">
        <div className="p-20 text-center">Service not found</div>
      </main>
    )
  }

  const sub = (service.subServices || []).find((ss: any) => ss.id === params.id)
  if (!sub) {
    return (
      <main className="w-full overflow-hidden">
        <div className="p-20 text-center">Sub-service not found</div>
      </main>
    )
  }
  const subIntroParagraph = 'introPara' in sub ? sub.introPara : undefined
  const subProgressBarTitle: React.ReactNode | undefined =
    'progressBarTitle' in sub
      ? (sub as { progressBarTitle?: React.ReactNode }).progressBarTitle
      : undefined
  const subCustomPlanData =
    'customPlanData' in sub
      ? (sub as { customPlanData?: any }).customPlanData
      : undefined
  const subFaqItems: { question: string; answer: React.ReactNode }[] | undefined = (
    ((sub as { faqData?: { question: string; answer: React.ReactNode }[] }).faqData) ??
    ((sub as { faqs?: { question: string; answer: React.ReactNode }[] }).faqs)
  )

  return (
    <main className="w-full overflow-hidden">
      {/* Header */}
      <div className="hidden lg:block">
        <ServicesHeader title={sub.title} bulletPoints={sub.bulletPoints} hideSubServiceExtras={true} showSubServiceText={false} introParagraph={subIntroParagraph} />
      </div>
      <div className="block lg:hidden">
        <ServicesHeaderMobile title={sub.title} bulletPoints={sub.bulletPoints} showSubServiceText={true} introParagraph={subIntroParagraph} />
      </div>
      <LogoSlider />

      {/* Strength Showcase */}
      <div className="hidden lg:block">
        <StrengthShowcase />
      </div>
      <div className="block lg:hidden">
        <StrengthShowcaseMobile />
      </div>

      {/* Why Choose Us */}
      <div className="hidden lg:block">
        <WhyChooseUs whyUs={sub.whyUs} />
      </div>
      <div className="block lg:hidden">
        <WhyChooseUsMobile whyUs={sub.whyUs} />
      </div>

      {/* Our Process */}
      <div className="hidden lg:block">
        <OurProcess steps={sub.progressBarSteps} progressBarTitle={subProgressBarTitle} />
      </div>
      <div className="block lg:hidden">
        <OurProcessMobile steps={sub.progressBarSteps} progressBarTitle={subProgressBarTitle} />
      </div>

      {/* Packages */}
      <div className="hidden lg:block">
        <PackagesSection pricingCardData={sub.pricingCardData} />
      </div>
      <div className="block lg:hidden">
        <PackagesSectionMobile pricingCardData={sub.pricingCardData} />
      </div>

      {/* Custom Plan */}
      <div className="hidden lg:block">
        <CustomPlan customPlanData={subCustomPlanData} />
      </div>
      <div className="block lg:hidden">
        <CustomPlanMobile customPlanData={subCustomPlanData} />
      </div>

      <br />

      {/* Easy Experience */}
      <div className="hidden lg:block">
        <EasyExperience easyExperience={sub.easyExperience} alwaysShowRedDivider={true} />
      </div>
      <div className="block lg:hidden">
        <EasyExperienceMobile easyExperience={sub.easyExperience} />
      </div>

      {/* Portfolio */}
      <div className="block md:mt-32">
        <PortfolioWall />
      </div>

      {/* Testimonials */}
      <TestimonialsCarousel />
      <FAQs items={subFaqItems} />
      <BlogWall />
      <ForumMap />
      <Footer2 />
    </main>
  )
}
