import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselThumbs,
} from "./ui/carousel";

const ProductCarousel = () => {
  const images = ["/product-img1.jpg", "/product-img2.jpg"];
  return (
    <div className="flex gap-2 w-full aspect-square">
      <Carousel className="flex gap-2">
        <CarouselThumbs>
          {images.map((item, index) => (
            <div
              key={index}
              className="p-1 group-data-[active=true]:outline outline-1 outline-primary rounded-sm"
            >
              <Image src={item} alt="product image" width={60} height={60} />
            </div>
          ))}
        </CarouselThumbs>
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={index} className=" h-full w-full">
              <img src={item} alt="product-image" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
