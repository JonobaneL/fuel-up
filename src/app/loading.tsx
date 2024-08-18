import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-full w-full flex items-center justify-center py-24">
      <Image src="/bars.svg" width={60} height={60} alt="Loading..." />
    </div>
  );
};

export default Loader;
