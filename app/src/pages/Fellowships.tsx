import { FellowshipsHero } from '@/sections/fellowships/FellowshipsHero';
import { FellowshipOverview } from '@/sections/fellowships/FellowshipOverview';
import { ProgramDetails } from '@/sections/fellowships/ProgramDetails';
import { FellowshipCTA } from '@/sections/fellowships/FellowshipCTA';

export function Fellowships() {
  return (
    <>
      <FellowshipsHero />
      <FellowshipOverview />
      <ProgramDetails />
      <FellowshipCTA />
    </>
  );
}
