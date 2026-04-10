import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/ServiceSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import DeferredSection from "@/components/DeferredSection";

const FAQs = dynamic(() => import("@/components/FAQs_New"));
const TheyTrustUs = dynamic(() => import("./trust-us/page"));
const OurProcess = dynamic(() => import("@/components/OurProcess"));
const Footer2 = dynamic(() => import("@/components/Footer2"));

const BehindTheScenes = dynamic(() => import("@/components/VideoSection copy"), {
  ssr: false,
});
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

const Home = () => {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <AboutSection />
      <ServiceSection />
      <WhyChooseSection />
      <DeferredSection minHeight={900}>
        <BehindTheScenes />
      </DeferredSection>
      <DeferredSection minHeight={900}>
        <PortfolioWall />
      </DeferredSection>
      <DeferredSection minHeight={700}>
        <OurProcess />
      </DeferredSection>
      {/* <DeferredSection minHeight={500}>
        <TheyTrustUs />
      </DeferredSection> */}
      <DeferredSection minHeight={900}>
        <TestimonialsCarousel />
      </DeferredSection>
      <DeferredSection minHeight={600}>
        <FAQs />
      </DeferredSection>
      <DeferredSection minHeight={800}>
        <BlogWall />
      </DeferredSection>
      <DeferredSection minHeight={900}>
        <ForumMap />
      </DeferredSection>
      <Footer2 />
    </main>
  );
};

export default Home;
