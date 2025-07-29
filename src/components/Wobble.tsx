"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full ubuntu-regular">
      <WobbleCard
        containerClassName="bg-col-span-1 lg:col-span-2 h-full bg-gradient-to-r from-teal-900 to-teal-950 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            EarnCharge is dedicated to simplifying
          </h2>
          <p className="mt-4 text-left  text-base/6 text-white">
            is dedicated to simplifying the way you manage your mobile recharges
            and bill payments. As smartphones become increasingly vital in our
            daily lives, the need for efficient and reliable prepaid mobile
            recharge options has never been greater.
          </p>
        </div>
        <Image
          src="/mockup2.png"
          width={200}
          height={200}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[20%] lg:-right-[4%] -bottom-44 md:-bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-r from-zinc-900 to-black">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Our Promise to You
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          At EarnCharge, we are dedicated to giving you the best service
          possible. We constantly work to improve our platform and add new
          features to make your experience better. Our goal is to make mobile
          recharges and bill payments as simple and convenient as possible, so
          you can focus on what matters most to you.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-r from-black to-zinc-950 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            EarnCharge Referral Program
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Join our referral program and earn rewards for every friend you
            bring to EarnCharge. Its simple, rewarding, and a great way to share
            the benefits of our platform with your friends and family. Start
            referring today and watch your rewards grow!
          </p>
        </div>
        <Image
          src="/mockup3.png"
          width={200}
          height={200}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[20%] lg:-right-[2%] -bottom-44 md:-bottom-10 z-[-2] object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
