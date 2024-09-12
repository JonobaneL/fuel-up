import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselThumbs,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { carouselData } from "@/data/carousel";
import CarouselDots from "./ui/CarouselDots";

const HomeCarousel = () => {
  return (
    <div>
      <Carousel className="w-full lg:w-[80%] lg:max-w-[1000px] max-h-[38rem] lg:mx-auto mb-10 sm:mb-14 relative">
        <CarouselContent>
          {carouselData.map((item, index) => (
            <CarouselItem key={index} className=" lg:p-1 relative ">
              <img
                src={item.img}
                className="w-full h-[20rem] sm:h-full lg:rounded-md object-cover shadow-md"
                alt="slide1"
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-8 md:left-14 w-3/5 sm:w-1/2">
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
              className="cursor-pointer pb-4 transition-all font-title border-b-2 group-data-[active=true]:border-primary border-white"
            >
              {item.name}
            </div>
          ))}
        </CarouselThumbs>
        <CarouselDots length={carouselData.length} className="sm:hidden" />
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
