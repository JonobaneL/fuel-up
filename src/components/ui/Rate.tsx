const Rate = () => {
  return (
    <div className="flex">
      {Array(5)
        .fill(1)
        .map((_, index) => (
          <img className="size-4" src="/star-full.svg" alt="star" />
        ))}
    </div>
  );
};

export default Rate;
