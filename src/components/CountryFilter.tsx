import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

const CountryFilter = () => {
  const countries = [
    "Ірландія",
    "Англія",
    "Бельгія",
    "Канада",
    "Німеччина",
    "Польща",
    "США",
    "Угорщина",
    "Україна",
    "Чехія",
  ];
  return (
    <div className="space-y-3">
      {countries.map((item, index) => (
        <Label key={index} className="flex items-center gap-2 w-fit">
          <Checkbox className=" size-5" />
          {item}
        </Label>
      ))}
    </div>
  );
};

export default CountryFilter;
