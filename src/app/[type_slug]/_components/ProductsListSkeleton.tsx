import { Skeleton } from "@/components/ui/skeleton";

const ProductsListSkeleton = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] gap-3 justify-items-center">
      {Array(5)
        .fill(0)
        .map((item, index) => (
          <Skeleton key={index} className="w-full aspect-square bg-gray-200" />
        ))}
    </div>
  );
};

export default ProductsListSkeleton;
