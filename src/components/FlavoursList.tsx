import { fakeProduct } from "@/data/fakeProduct";

const FlavoursList = () => {
  const currentFlavour = fakeProduct.flavours[0];

  return (
    <div className="mb-10">
      <p className="text-third text-lg font-semibold">Асортимент смаків</p>
      <div className="flex gap-2 mt-3 flex-wrap">
        {fakeProduct.flavours.map((item) => (
          <div
            key={item.id}
            className={`px-2.5 rounded-sm border cursor-pointer border-primary flex items-center h-8 ${
              currentFlavour.id == item.id ? "text-white bg-primary" : ""
            }
        ${
          item.amount == 0 ? "border-gray-600 text-gray-600 cursor-default" : ""
        }
        `}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavoursList;
