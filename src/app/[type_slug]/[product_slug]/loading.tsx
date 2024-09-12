import PageWrapper from "@/components/PageWrapper";
import { Skeleton } from "@/components/ui/skeleton";

const ProductLoader = () => {
  return (
    <PageWrapper className="pt-12">
      <Skeleton className="w-1/3 h-5 rounded-sm bg-gray-200" />
      <div className="flex gap-12 mt-10 flex-col md:flex-row">
        <Skeleton className="w-full md:w-1/2 aspect-square rounded-sm bg-gray-200" />
        <div className="w-full md:w-1/2 ">
          <Skeleton className="w-full h-12 rounded-sm bg-gray-200 mb-2" />
          <Skeleton className="w-2/3 h-6 rounded-sm bg-gray-200 mb-6" />
          <Skeleton className="w-1/4 h-5 rounded-sm bg-gray-200 mb-2" />
          <div className="flex gap-2 mb-10">
            <Skeleton className="w-1/5 h-8 rounded-sm bg-gray-200" />
            <Skeleton className="w-1/5 h-8 rounded-sm bg-gray-200" />
            <Skeleton className="w-1/5 h-8 rounded-sm bg-gray-200" />
          </div>
          <div className="space-y-6">
            <Skeleton className="w-1/4 h-8 rounded-sm bg-gray-200" />
            <Skeleton className="w-1/4 h-10 rounded-sm bg-gray-200" />
            <Skeleton className="w-full h-14 rounded-sm bg-gray-200" />
          </div>
          <Skeleton className="w-full h-32 rounded-sm bg-gray-200 mt-6" />
        </div>
      </div>
      <div className="flex gap-12 mt-10">
        <Skeleton className="w-3/5 h-[15rem] rounded-sm bg-gray-200" />
        <Skeleton className="w-2/5 h-[15rem] rounded-sm bg-gray-200" />
      </div>
    </PageWrapper>
  );
};

export default ProductLoader;
