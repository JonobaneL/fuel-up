import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselThumbs,
} from "./ui/carousel";
import { ProductImageParams } from "@/models/paramsTypes";

type CarouselProps = {
  images: ProductImageParams[] | undefined;
};

const ProductCarousel = ({ images }: CarouselProps) => {
  return (
    <div className="flex gap-2 w-full aspect-square">
      <Carousel className="flex gap-2">
        <CarouselThumbs orientation="vertical">
          {images ? (
            images?.map((item, index) => (
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
            ))
          ) : (
            <></>
          )}
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
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
