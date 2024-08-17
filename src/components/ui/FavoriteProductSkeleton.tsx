import { Skeleton } from "./skeleton";

const FavoriteProductSkeleton = () => {
  return (
    <div className="grid gap-4 grid-cols-[5rem_2fr_1fr_20px] items-center">
      <Skeleton className="size-20 rounded bg-gray-200" />
      <div className="space-y-1">
        <Skeleton className="h-4 w-72 bg-gray-200" />
        <Skeleton className="h-4 w-60 bg-gray-200" />
      </div>
      <Skeleton className="h-5 w-40 bg-gray-200" />
    </div>
  );
};

export default FavoriteProductSkeleton;
