import { cn } from "@/lib/utils";

type PageWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return (
    <div className="h-full px-6 sm:px-8 md:px-12 lg:px-20 flex-1">
      <main className={cn("max-w-[1440px] w-full mx-auto", className)}>
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;
