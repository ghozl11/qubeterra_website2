import { HomeHero } from '@/sections/home/HomeHero';
import { AboutSnapshot } from '@/sections/home/AboutSnapshot';
import { ServicesGrid } from '@/sections/home/ServicesGrid';
import { DomainsOverview } from '@/sections/home/DomainsOverview';
import { FellowshipPreview } from '@/sections/home/FellowshipPreview';
import { Impact } from '@/sections/home/Impact';
import { ThinkTankPreview } from '@/sections/home/ThinkTankPreview';
import { PartnerTicker } from '@/sections/home/PartnerTicker';
import { CTABanner } from '@/sections/home/CTABanner';

export function Home() {
  return (
    <>
      <HomeHero />
      <AboutSnapshot />
      <ServicesGrid />
      <DomainsOverview />
      <FellowshipPreview />
      <Impact />
      <ThinkTankPreview />
      <PartnerTicker />
      <CTABanner />
    </>
  );
}
