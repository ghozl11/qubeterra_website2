import { HomeHero } from '@/sections/home/HomeHero';
import { PartnerTicker } from '@/sections/home/PartnerTicker';
import { Impact } from '@/sections/home/Impact';
import { ProjectsPreview } from '@/sections/home/ProjectsPreview';
import { NextGenAchievementsBanner } from '@/sections/home/NextGenAchievementsBanner';
import { InternationalExpertsPreview } from '@/sections/home/InternationalExpertsPreview';
import { FellowshipPreview } from '@/sections/home/FellowshipPreview';
import { AboutSnapshot } from '@/sections/home/AboutSnapshot';
import { ServicesGrid } from '@/sections/home/ServicesGrid';
import { DomainsOverview } from '@/sections/home/DomainsOverview';
import { ThinkTankPreview } from '@/sections/home/ThinkTankPreview';
import { CTABanner } from '@/sections/home/CTABanner';

export function Home() {
  return (
    <>
      <HomeHero />
      <PartnerTicker />
      <Impact />
      <ProjectsPreview />
      <NextGenAchievementsBanner />
      <InternationalExpertsPreview />
      <FellowshipPreview />
      <AboutSnapshot />
      <ServicesGrid />
      <DomainsOverview />
      <ThinkTankPreview />
      <CTABanner />
    </>
  );
}
