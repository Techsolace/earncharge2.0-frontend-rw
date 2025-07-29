import { AppleCardsCarouselDemo } from "@/components/custom/horizontal-scroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { WobbleCardDemo } from "@/components/Wobble";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import {MarqueeDemo } from "@/components/Marquee";
import FaqAccordion from "@/components/Faq";
import Footer from "@/components/Footer";
import Case from "@/components/Carousel";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="fixed inset-0 z-[-2] w-full h-full overflow-hidden">
        <HeroGeometric />
      </div>
      <div className="absolute z-[2] min-h-screen w-full">
        <div className="p-5 lg:p-0">
        <div id="features">
        <AppleCardsCarouselDemo />
        </div>
        <div id="about">
        <WobbleCardDemo />
        </div>
        <Case />
        <MarqueeDemo />
        <FaqAccordion />
        </div>
        <Footer />
      </div>
    </>
  );
}