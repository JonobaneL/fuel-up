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
        <CarouselThumbs>
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
        <CarouselContent>
          {images?.map((item, index) => (
            <CarouselItem key={index} className=" h-full w-full">
              <img src={item.url} alt="product-image" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
