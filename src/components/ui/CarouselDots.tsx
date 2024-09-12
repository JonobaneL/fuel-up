import { cn } from "@/lib/utils";
import { CarouselThumbs } from "./carousel";

type CarouselDotsProps = {
  length: number;
  theme?: "default" | "primary";
  className?: string;
};

const CarouselDots = ({
  length,
  className,
  theme = "default",
}: CarouselDotsProps) => {
  return (
    <CarouselThumbs
      className={cn(
        "absolute justify-center gap-2 bottom-5 left-1/2 -translate-x-1/2",
        className
      )}
    >
      {Array(length)
        .fill(1)
        .map((_, index) => (
          <div
            key={index}
            className={`cursor-pointer size-2 rounded-full ${
              theme == "default"
                ? "group-data-[active=true]:bg-white bg-white/75"
                : "group-data-[active=true]:bg-primary bg-primary/75"
            }`}
          />
        ))}
    </CarouselThumbs>
  );
};

export default CarouselDots;
