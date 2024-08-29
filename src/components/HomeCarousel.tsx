"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselThumbs,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { carouselData } from "@/data/carousel";

const HomeCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <div>
      <Carousel
        setApi={setApi}
        className="w-full lg:w-[80%] max-w-[1000px] max-h-[38rem] mx-auto"
      >
        <CarouselContent>
          {carouselData.map((item, index) => (
            <CarouselItem key={index} className="p-1 relative ">
              <img
                src={item.img}
                className="w-full h-full rounded-md object-cover  shadow-md"
                alt="slide1"
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-8 sm:left-16 w-3/5 sm:w-1/2 md:w-2/5">
                <h3 className="font-title text-lg sm:text-2xl md:text-4xl text-back mb-5 md:mb-10">
                  {item.describtion}
                </h3>
                <Button className="text-primary bg-back shadow-sm rounded-none font-title text-xs sm:text-base hover:bg-back py-0 px-2 sm:py-2 sm:px-4">
                  {item.btn}
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselThumbs className="justify-center gap-8 sm:gap-12 pt-5 hidden sm:flex">
          {carouselData.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer pb-4 transition-all font-title border-b-2 ${
                current == index ? "border-primary" : "border-back"
              }`}
            >
              {item.name}
            </div>
          ))}
        </CarouselThumbs>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
