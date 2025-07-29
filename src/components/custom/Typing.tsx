"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Instant",
    },
    {
      text: "Transactions ",
    },
    {
      text: "and ",
    },
    {
      text: "Secure ",
    },
    {
      text: "Payments",
      className: "text-[#009f85] dark:text-[#009f85]",
    },
  ];
  return (
    <div className="ubuntu-regular text-white my-3 mb-3">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
