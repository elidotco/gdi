import FAQ from "@/components/UI/FAQ";
import Featured from "@/components/UI/Featured";
import FinancialFreedom from "@/components/UI/FinancialFreedom";
import FinancialFuture from "@/components/UI/FinancialFuture";
import HeroSection from "@/components/UI/HeroSection";

import OffersSection from "@/components/UI/OffersSection";
import ProjectsPage from "@/components/UI/Projects";

export default function Home() {
  return (
    <main>
      <ProjectsPage />
      <FAQ />
    </main>
  );
}
