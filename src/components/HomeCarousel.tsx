"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
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
        className="w-[80%] max-w-[1000px] max-h-[38rem] mx-auto"
      >
        <CarouselContent>
          {carouselData.map((item, index) => (
            <CarouselItem key={index} className="p-1 relative">
              <img
                src={item.img}
                className="w-full h-full rounded-md object-cover shadow-md"
                alt="slide1"
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-16 w-2/5">
                <h3 className="font-title text-4xl text-back mb-10">
                  {item.describtion}
                </h3>
                <Button className="text-primary bg-back shadow-sm rounded-none font-title hover:bg-back">
                  {item.btn}
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="w-full mt-5">
        <ul className="mx-auto w-fit flex items-center gap-12 font-title">
          {carouselData.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer pb-4 transition-all border-b-2 ${
                current == index ? "border-primary" : "border-back"
              }`}
              onClick={() => api?.scrollTo(index)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeCarousel;
