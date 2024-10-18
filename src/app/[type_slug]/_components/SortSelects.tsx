import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";

const SortSelect = () => {
  const options = [
    { value: "popular", title: "Популярні" },
    { value: "new", title: "Новинки" },
    { value: "cheap", title: "Від дешевих до дорогих" },
    { value: "expensive", title: "Від дорогих до дешевих" },
  ];

  return (
    <Select defaultValue="popular">
      <SelectTrigger className="w-56 rounded-sm flex-fix">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="rounded-sm">
        {options.map((item, index) => (
          <SelectItem
            className="rounded-sm data-[state=checked]:bg-primary data-[state=checked]:text-white"
            value={item.value}
            key={index}
            checkIcon={false}
          >
            {item.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SortSelect;
