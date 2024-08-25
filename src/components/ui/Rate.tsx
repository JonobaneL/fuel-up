type RateProps = {
  rate: number;
};
const Rate = ({ rate = 5 }: RateProps) => {
  return (
    <div className="flex">
      {Array(5)
        .fill(1)
        .map((_, index) => (
          <img
            key={index}
            className="size-4"
            src={index < Math.round(rate) ? "/star-full.svg" : "/star.svg"}
            alt="star"
          />
        ))}
    </div>
  );
};

export default Rate;
