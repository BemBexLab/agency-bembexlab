import AboutHeader from "@/components/Aboutheader";
import AboutIntro from "@/components/AboutIntro";
import AboutMission from "@/components/AboutMission";
import Aboutlet from "@/components/Aboutlet";
import AboutVision from "@/components/AboutVision";
import AboutStatement from "@/components/AboutStatement";
import Aboutlast from "@/components/Aboutlast";
import Footer2 from "@/components/Footer2";

const AboutPage = () => {
  return (
    <main className="w-full overflow-hidden">
      <AboutHeader />
      <AboutIntro />
      <AboutMission />
      <Aboutlet />
      <AboutVision />
      <AboutStatement />
      <Aboutlast />
      <Footer2 />
    </main>
  );
};

export default AboutPage;
