import AditionalInfo from "@/components/AditionalInfo";
import HomeCarousel from "@/components/HomeCarousel";
import PageWrapper from "@/components/PageWrapper";
import Purposes from "@/components/Purposes";

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
