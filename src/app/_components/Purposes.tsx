import Link from "next/link";

import { getPurposes } from "@/actions/purposesAction";

const Purposes = async () => {
  const purposes = await getPurposes();

  return (
    <section>
      <h2 className="font-title text-primary text-2xl sm:text-3xl mb-5 sm:mb-10">
        Обери свою ціль
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,_1fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,_1fr))] justify-items-center gap-x-3 gap-y-7">
        {purposes.map((item, index) => (
          <div key={index} className="group cursor-pointer">
            <Link href={`/purposes/${item.slug}`}>
              <img
                src={item.imageUrl}
                alt={item.title}
                className="rounded-md shadow-sm object-contain"
              />
              <p className="font-title text-lg text-center mt-3 mx-4 group-hover:text-primary transition-all ">
                {item.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Purposes;
