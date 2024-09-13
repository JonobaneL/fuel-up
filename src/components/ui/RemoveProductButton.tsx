import Image from "next/image";

type RemoveProductButtonProps = {
  removeCallback: () => void;
};

const RemoveProductButton = ({ removeCallback }: RemoveProductButtonProps) => {
  return (
    <Image
      className="cursor-pointer flex-1"
      src="/close-icon-dark.svg"
      onClick={removeCallback}
      width={15}
      height={15}
      alt="remove"
    />
  );
};

export default RemoveProductButton;
