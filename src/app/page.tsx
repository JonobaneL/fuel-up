import AditionalInfo from "./_components/AditionalInfo";
import HomeCarousel from "./_components/HomeCarousel";
import Purposes from "./_components/Purposes";

import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <main className="w-full pb-10 lg:py-14 ">
      <HomeCarousel />
      <PageWrapper className="space-y-14">
        <Purposes />
        <AditionalInfo />
      </PageWrapper>
    </main>
  );
}
