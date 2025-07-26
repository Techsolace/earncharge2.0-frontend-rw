import { AppleCardsCarouselDemo } from "@/components/custom/horizontal-scroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { WobbleCardDemo } from "@/components/Wobble";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Case } from "@/components/Carousel";
import {MarqueeDemo } from "@/components/Marquee";
import FaqAccordion from "@/components/Faq";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* Ensure HeroGeometric is visible with proper stacking */}
      <div className="fixed inset-0 z-[-1] w-full h-full">
        <HeroGeometric />
      </div>
      {/* Black background section with sufficient height */}
      <div className="absolute z-[2] min-h-screen w-full">
        <AppleCardsCarouselDemo />
        <WobbleCardDemo />
        <Case />
        <MarqueeDemo />
        <FaqAccordion />
        <Footer />
      </div>
    </>
  );
}