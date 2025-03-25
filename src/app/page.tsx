import FeatureSection from "@/components/feature-section";
import HeroCarousel from "@/components/hero-carousel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <FeatureSection />
    </div>
  );
}
