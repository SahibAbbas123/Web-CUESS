import HomeSection from "../components/sections/HomeSection";
import AboutSection from "../components/sections/AboutSection";
import WhatWeDoSection from "../components/sections/WhatWeDoSection";
import EventsSection from "../components/sections/EventsSection";
import TeamSection from "../components/sections/TeamSection";
import MembershipSection from "../components/sections/MembershipSection";
import VideoSplash from "@/VideoModal";
import JourneySection from "@/components/sections/JourneySection";
import VideoIntroSection from "@/components/sections/VideoIntroSection";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <HomeSection />
      {/* <HeroSection /> */}
      <VideoIntroSection />
      <AboutSection />
      <WhatWeDoSection />
      <JourneySection />
      <EventsSection />
      <TeamSection />
      <MembershipSection />
      <Footer />
    </main>
  );
}