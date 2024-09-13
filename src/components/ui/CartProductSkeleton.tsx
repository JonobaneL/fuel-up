import { Skeleton } from "./skeleton";

const CartProductSkeleton = () => {
  return (
    <div className="@container grid gap-4 grid-cols-[5rem_2fr_20px] md:grid-cols-[5rem_2fr_0.7fr_1fr_15px] items-center pt-3">
      <Skeleton className="size-20 rounded bg-gray-200" />
      <div className="space-y-1">
        <Skeleton className="h-4 w-4/5 bg-gray-200" />
        <Skeleton className="h-4 w-2/5 bg-gray-200" />
        <div className="flex gap-1">
          <Skeleton className="h-5 w-1/2 bg-gray-200 block @md:hidden" />
          <Skeleton className="h-5 w-1/2 bg-gray-200 block @md:hidden" />
        </div>
      </div>
      <Skeleton className="h-5 w-4/5 bg-gray-200 hidden @md:block" />
      <Skeleton className="h-5 w-3/5 bg-gray-200 hidden @md:block" />
      <Skeleton className="size-4 bg-gray-200" />
    </div>
  );
};

export default CartProductSkeleton;
