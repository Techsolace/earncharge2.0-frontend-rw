"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/custom/carousel";
import Image from "next/image";

function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col  gap-10">
          <h2 className="text-5xl ubuntu-bold text-white tracking-tighter lg:max-w-xl font-regular text-left">
            Bharat Bill Payment System
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              <CarouselItem className="basis-1/4 lg:basis-1/6">
                <div className="flex rounded-md text-white aspect-square items-center justify-center p-6">
                  <div className="flex flex-col gap-2 items-center justify-center ubuntu-regular">
                    <Image
                      src="/1icon.png"
                      width={100}
                      height={100}
                      alt="mockup"
                      className="rounded-md"
                    />
                    <p>Landline Bills</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/4 lg:basis-1/6">
                <div className="flex rounded-md text-white aspect-square items-center justify-center p-6">
                  <div className="flex flex-col gap-2 items-center justify-center ubuntu-regular">
                    <Image
                      src="/2icon.png"
                      width={100}
                      height={100}
                      alt="mockup"
                      className="rounded-md"
                    />
                    <p>Electricity Bills</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/4 lg:basis-1/6">
                <div className="flex rounded-md text-white aspect-square items-center justify-center p-6">
                  <div className="flex flex-col gap-2 items-center justify-center ubuntu-regular">
                    <Image
                      src="/3icon.png"
                      width={100}
                      height={100}
                      alt="mockup"
                      className="rounded-md"
                    />
                    <p>Gas Bills</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/4 lg:basis-1/6">
                <div className="flex rounded-md text-white aspect-square items-center justify-center p-6">
                  <div className="flex flex-col gap-2 items-center justify-center ubuntu-regular">
                    <Image
                      src="/4icon.png"
                      width={100}
                      height={100}
                      alt="mockup"
                      className="rounded-md"
                    />
                    <p>Water Bills</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/4 lg:basis-1/6">
                <div className="flex rounded-md text-white aspect-square items-center justify-center p-6">
                  <div className="flex flex-col gap-2 items-center justify-center ubuntu-regular">
                    <Image
                      src="/5icon.png"
                      width={100}
                      height={100}
                      alt="mockup"
                      className="rounded-md"
                    />
                    <p>Mobile Postpaid</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/4 lg:basis-1/6">
                <div className="flex rounded-md text-white aspect-square items-center justify-center p-6">
                  <div className="flex flex-col gap-2 items-center justify-center ubuntu-regular">
                    <Image
                      src="/6icon.png"
                      width={100}
                      height={100}
                      alt="mockup"
                      className="rounded-md"
                    />
                    <p>Data Card</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/4 lg:basis-1/6">
                <div className="flex rounded-md text-white aspect-square items-center justify-center p-6">
                  <div className="flex flex-col gap-2 items-center justify-center ubuntu-regular">
                    <Image
                      src="/1icon.png"
                      width={100}
                      height={100}
                      alt="mockup"
                      className="rounded-md"
                    />
                    <p>Landline Bills</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/4 lg:basis-1/6">
                <div className="flex rounded-md text-white aspect-square items-center justify-center p-6">
                  <div className="flex flex-col gap-2 items-center justify-center ubuntu-regular">
                    <Image
                      src="/2icon.png"
                      width={100}
                      height={100}
                      alt="mockup"
                      className="rounded-md"
                    />
                    <p>Electricity Bills</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/4 lg:basis-1/6">
                <div className="flex rounded-md text-white aspect-square items-center justify-center p-6">
                  <div className="flex flex-col gap-2 items-center justify-center ubuntu-regular">
                    <Image
                      src="/3icon.png"
                      width={100}
                      height={100}
                      alt="mockup"
                      className="rounded-md"
                    />
                    <p>Gas Bills</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/4 lg:basis-1/6">
                <div className="flex rounded-md text-white aspect-square items-center justify-center p-6">
                  <div className="flex flex-col gap-2 items-center justify-center ubuntu-regular">
                    <Image
                      src="/4icon.png"
                      width={100}
                      height={100}
                      alt="mockup"
                      className="rounded-md"
                    />
                    <p>Water Bills</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/4 lg:basis-1/6">
                <div className="flex rounded-md text-white aspect-square items-center justify-center p-6">
                  <div className="flex flex-col gap-2 items-center justify-center ubuntu-regular">
                    <Image
                      src="/5icon.png"
                      width={100}
                      height={100}
                      alt="mockup"
                      className="rounded-md"
                    />
                    <p>Mobile Postpaid</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/4 lg:basis-1/6">
                <div className="flex rounded-md text-white aspect-square items-center justify-center p-6">
                  <div className="flex flex-col gap-2 items-center justify-center ubuntu-regular">
                    <Image
                      src="/6icon.png"
                      width={100}
                      height={100}
                      alt="mockup"
                      className="rounded-md"
                    />
                    <p>Data Card</p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Case };
