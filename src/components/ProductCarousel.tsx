import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselThumbs,
} from "./ui/carousel";
import { ProductImageParams } from "@/models/paramsTypes";
import CarouselDots from "./ui/CarouselDots";

type CarouselProps = {
  images: ProductImageParams[] | undefined;
};

const ProductCarousel = ({ images }: CarouselProps) => {
  if (!images) return null;
  return (
    <div className="w-full aspect-square">
      <Carousel className="flex md:gap-2">
        <CarouselThumbs className="hidden sm:flex" orientation="vertical">
          {images?.map((item, index) => (
            <div
              key={index}
              className="p-1 group-data-[active=true]:outline outline-1 outline-primary rounded-sm"
            >
              <Image
                src={item.url}
                alt="product image"
                width={60}
                height={60}
              />
            </div>
          ))}
        </CarouselThumbs>

        <CarouselContent className="w-full h-full">
          {images?.map((item, index) => (
            <CarouselItem key={index} className="w-full h-full p-4">
              <img
                src={item.url}
                alt="product-image"
                className="object-contain w-full h-full "
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots
          theme="primary"
          length={images.length}
          className="sm:hidden -bottom-2"
        />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
