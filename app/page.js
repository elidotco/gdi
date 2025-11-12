import FAQ from "@/components/UI/FAQ";
import Featured from "@/components/UI/Featured";
import FinancialFreedom from "@/components/UI/FinancialFreedom";
import FinancialFuture from "@/components/UI/FinancialFuture";
import HeroSection from "@/components/UI/HeroSection";
import IntroSection from "@/components/UI/IntroSection";
import JoinSection from "@/components/UI/JoinSection";
import OffersSection from "@/components/UI/OffersSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <Featured />
      <OffersSection />
      <FinancialFreedom />
      <FinancialFuture />
      <IntroSection />
      <JoinSection />
      <FAQ />
    </main>
  );
}
