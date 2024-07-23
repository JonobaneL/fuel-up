import { purposes } from "@/data/purposes";

const Purposes = () => {
  return (
    <section>
      <h2 className="font-title text-primary text-3xl mb-10">
        Обери свою ціль
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,_1fr))] justify-items-center gap-x-3 gap-y-7">
        {purposes.map((item, index) => (
          <div key={index} className="group cursor-pointer">
            <img
              src={item.img}
              alt="purpose"
              className="rounded-md shadow-sm"
            />
            <p className="font-title text-lg text-center mt-3 mx-4 group-hover:text-primary transition-all ">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Purposes;
