import { getMainTypes } from "@/requests/params";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "./ui/dropdown-menu";

const menu = [
  {
    name: "Протеїни",
  },
  {
    name: "Амінокислоти",
  },
  {
    name: "Гейнери",
  },
  {
    name: "Вітаміни та добавки",
  },
  {
    name: "Креатин",
  },
  {
    name: "Жироспалювачі",
  },
  {
    name: "Для звязок і суглобів",
  },
  {
    name: "Шейкери",
  },
];

const Catalog = async () => {
  const types = await getMainTypes();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-sm border bg-back hover:bg-inherit h-11 text-text font-medium flex items-center gap-2">
          <img src="/header/catalog.svg" className="size-5" alt="catalog" />
          <p className="text-sm">Каталог</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="py-2 rounded-none border-none"
        align="start"
        sideOffset={18}
      >
        <DropdownMenuItem className="px-5">Бренди</DropdownMenuItem>
        <DropdownMenuSeparator />
        {types.map((item) => {
          if (item.subTypes.length)
            return (
              <DropdownMenuSub>
                <DropdownMenuSubTrigger key={item.id} className="px-5">
                  {item.name}
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    {item.subTypes.map((sub_type) => (
                      <DropdownMenuItem key={sub_type.id} className="px-5">
                        {sub_type.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            );
          return (
            <DropdownMenuItem key={item.id} className="px-5">
              {item.name}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Catalog;
