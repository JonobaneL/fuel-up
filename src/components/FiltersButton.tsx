import Filters from "./Filters";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
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
          <SheetTitle className="font-title text-primary text-xl">
            Фільтри
          </SheetTitle>
        </SheetHeader>
        <Filters slug={type_slug} />
      </SheetContent>
    </Sheet>
  );
};

export default FiltersButton;
