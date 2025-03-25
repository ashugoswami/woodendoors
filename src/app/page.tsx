import BestSellersSection from "@/components/best-sellers-section";
import CatalogueSection from "@/components/catalogue-section";
import FeatureSection from "@/components/feature-section";
import HeroCarousel from "@/components/hero-carousel";
import LegacySection from "@/components/legacy-section";
import ProjectsSection from "@/components/our-project-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <FeatureSection />
      <LegacySection />
      <CatalogueSection />
      <ProjectsSection />
      <BestSellersSection />
    </div>
  );
}
