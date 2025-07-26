import { AppleCardsCarouselDemo } from "@/components/custom/horizontal-scroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { WobbleCardDemo } from "@/components/Wobble";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Case } from "@/components/Carousel";
import {MarqueeDemo } from "@/components/Marquee";
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
      <div className="absolute z-[2] min-h-screen w-full pb-20">
        <AppleCardsCarouselDemo />
        <WobbleCardDemo />
        <Case />
        <MarqueeDemo />
      </div>
    </>
  );
}