const ActiveFilters = () => {
  const activeFilters = ["Allnutrition", "Білий шоколад", "США"];
  return (
    <div className="flex flex-wrap gap-2">
      {activeFilters.map((item, index) => (
        <div
          key={index}
          className="bg-secondary w-fit px-2 py-1 h-7 flex items-center gap-2 rounded-sm cursor-pointer"
        >
          <p className="text-primary text-sm">{item}</p>
          <img className="size-3" src="/close-icon.svg" alt="close" />
        </div>
      ))}
      <div className="bg-secondary text-primary w-fit text-sm px-2 py-1 flex items-center rounded-sm cursor-pointer">
        Очистити все
      </div>
    </div>
  );
};

export default ActiveFilters;
