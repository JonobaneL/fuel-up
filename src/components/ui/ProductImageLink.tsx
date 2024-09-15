import Image from "next/image";
import Link from "next/link";

type ProductImageLinkProps = {
  link: string;
  closeCallback?: () => void;
  src: string | undefined;
  alt: string | undefined;
};

const ProductImageLink = ({
  link,
  src,
  alt,
  closeCallback = () => {},
}: ProductImageLinkProps) => {
  return (
    <Link href={link} className="w-fit flex-cover" onClick={closeCallback}>
      <Image
        src={src || ""}
        width={80}
        height={80}
        className="size-20 object-contain"
        alt={alt || ""}
      />
    </Link>
  );
};

export default ProductImageLink;
