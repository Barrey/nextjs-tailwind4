import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import CTASection from '@/components/CTASection';
import { features } from '@/components/data/features';
import { navigation } from '@/components/data/navigation';

export default function Home() {
  return (
    <>
      <Header navigation={navigation} />
      <main className="min-h-screen bg-background-muted pt-16">
        <HeroSection />
        <FeatureSection features={features} />
        <CTASection />
      </main>
    </>
  );
}
