"use client";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { useMediaQuery } from "@/types/useMediaQuery";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";
import { ScrollArea } from "./scroll-area";

type ModalProps = {
  open: boolean;
  openHandler: (value: boolean) => void;
  title: string;
  triger?: boolean;
  children: React.ReactNode[];
};

const Modal = ({
  open,
  openHandler,
  children,
  triger = true,
  title,
}: ModalProps) => {
  const dialogChangeHandler = (state: boolean) => {
    if (state && triger) openHandler(state);
    if (!state) openHandler(state);
  };
  const isDesktop = useMediaQuery("(min-width: 769px)");
  if (!isDesktop)
    return (
      <Drawer>
        <DrawerTrigger>{children[0]}</DrawerTrigger>
        <DrawerContent className="h-[90%] ">
          <DrawerHeader className="mt-2 flex justify-between px-6 sm:px-9">
            <DrawerTitle className="font-title font-normal text-primary text-xl sm:text-2xl">
              {title}
            </DrawerTitle>
            <DrawerClose>
              <Image
                className="cursor-pointer"
                src="/close-icon.svg"
                width={20}
                height={20}
                alt="close"
              />
            </DrawerClose>
          </DrawerHeader>
          <ScrollArea>
            <div className="px-6 sm:px-9">{children[1]}</div>
          </ScrollArea>
          <DrawerFooter className="mb-2 px-6 sm:px-9">
            {children[2]}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  return (
    <Dialog open={open} onOpenChange={dialogChangeHandler}>
      <DialogTrigger>{children[0]}</DialogTrigger>
      <DialogContent className="h-fit w-4/5 lg:w-2/3 max-w-[60rem] p-7 md:p-10 lg:p-12 overflow-auto grid-flow-row auto-rows-min">
        <DialogHeader className="mb-2 flex flex-row justify-between items-center space-y-0">
          <DialogTitle className="font-title font-normal text-primary text-xl sm:text-2xl lg:text-3xl">
            {title}
          </DialogTitle>
          <Image
            onClick={() => openHandler(false)}
            className="cursor-pointer"
            src="/close-icon.svg"
            width={25}
            height={25}
            alt="close"
          />
        </DialogHeader>
        {children[1]}
        {children[2]}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
