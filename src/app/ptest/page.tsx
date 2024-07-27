import prisma from "@/lib/db";

const PTest = async () => {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,

      images: {
        select: {
          url: true,
        },
      },
    },
  });

  return (
    <div>
      <h1>Prisma test</h1>

      <ul className="m-4 divide-y-2 space-y-4">
        {products.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{JSON.stringify(item)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PTest;
