import { ConsultancyHero } from '@/sections/consultancy/ConsultancyHero';
import { ConsultancyServices } from '@/sections/consultancy/ConsultancyServices';
import { ConsultancyApproach } from '@/sections/consultancy/ConsultancyApproach';
import { ConsultancyCTA } from '@/sections/consultancy/ConsultancyCTA';

export function Consultancy() {
  return (
    <>
      <ConsultancyHero />
      <ConsultancyServices />
      <ConsultancyApproach />
      <ConsultancyCTA />
    </>
  );
}
