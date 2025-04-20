import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import CTASection from '@/components/CTASection';
import { features } from '@/components/data/features';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-muted">
      <HeroSection />
      <FeatureSection features={features} />
      <CTASection />
    </div>
  );
}
