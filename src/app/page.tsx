import AditionalInfo from "@/components/AditionalInfo";
import HomeCarousel from "@/components/HomeCarousel";
import Purposes from "@/components/Purposes";

export default function Home() {
  return (
    <main className="w-full py-14 space-y-14">
      <HomeCarousel />
      <Purposes />
      <AditionalInfo />
    </main>
  );
}
