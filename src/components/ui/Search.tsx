import { Input } from "./input";

const Search = () => {
  return (
    <div className="relative">
      <img
        className="size-5 absolute top-1/2 left-1.5 -translate-y-1/2"
        src="/search-icon.svg"
        alt="search-icon"
      />
      <Input
        className="border-transparent border-b-text rounded-none focus:rounded-sm pl-8 h-10 pb-1.5 text-sm"
        placeholder="Пошук товару, бренду"
      />
    </div>
  );
};

export default Search;
