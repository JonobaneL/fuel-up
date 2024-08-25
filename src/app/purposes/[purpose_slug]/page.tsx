import { getPurpose } from "@/actions/purposesAction";
import ProductCart from "@/components/ProductCart";
import Image from "next/image";
import Link from "next/link";

type PurposePageProps = {
  params: {
    purpose_slug: string;
  };
};
const PurposePage = async ({ params }: PurposePageProps) => {
  const purpose = await getPurpose(params.purpose_slug);
  return (
    <div className="py-10">
      <div className="flex gap-4 items-start mb-10">
        <div className="relative w-full max-w-[300px] aspect-video">
          <Image
            src={purpose?.imageUrl || ""}
            alt={purpose?.title || ""}
            className="object-fit absolute w-full"
            fill={true}
          />
        </div>
        <div>
          <h1 className="font-title text-3xl text-primary mb-2">
            {purpose?.title}
          </h1>
          <p className="text-third text-sm leading-5">{purpose?.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] gap-3 justify-items-center">
        {purpose?.products.map((item) => (
          <Link
            key={item.id}
            className="w-full"
            href={`/${item.type.slug}/${item.slug}?flavour=${item.flavours[0].flavour.slug}`}
          >
            <ProductCart product={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PurposePage;
