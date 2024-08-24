"use client";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

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
  return (
    <Dialog open={open} onOpenChange={dialogChangeHandler}>
      <DialogTrigger>{children[0]}</DialogTrigger>
      <DialogContent className="w-2/3 max-w-[60rem] py-12 px-12">
        <DialogHeader className="mb-2 flex flex-row justify-between items-center">
          <DialogTitle className="font-title font-normal text-primary text-3xl">
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
