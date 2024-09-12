"use client";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { useMediaQuery } from "@/models/useMediaQuery";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

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
  const isDesktop = useMediaQuery("(min-width: 768px)");
  console.log(isDesktop);
  if (!isDesktop)
    return (
      <Drawer>
        <DrawerTrigger>{children[0]}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>

          {/* <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    );
  return (
    <Dialog open={open} onOpenChange={dialogChangeHandler}>
      <DialogTrigger>{children[0]}</DialogTrigger>
      <DialogContent className="w-full h-fit md:w-2/3 max-w-[60rem] p-7 md:p-10 lg:p-12 overflow-auto grid-flow-row auto-rows-min">
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
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
