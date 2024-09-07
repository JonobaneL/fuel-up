import Filters from "./Filters";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

type FiltersButtonProps = {
  type_slug: string;
};

const FiltersButton = ({ type_slug }: FiltersButtonProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-white font-title rounded-none xl:hidden">
          Фільтри
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-auto w-full">
        <SheetHeader>
          <SheetTitle>Фільтри</SheetTitle>
        </SheetHeader>
        <Filters slug={type_slug} />
      </SheetContent>
    </Sheet>
  );
};

export default FiltersButton;
