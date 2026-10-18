import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/SectionLabel';

const materials = [
  { src: '/images/new/expert1.png', alt: 'Expert-session image supplied with the fellowship materials; participant details are being verified' },
  { src: '/images/new/expert2.png', alt: 'Expert-session image supplied with the fellowship materials; participant details are being verified' },
];

export function InternationalExpertsPreview() {
  return (
    <section className="relative z-[1] py-16 md:py-24" aria-labelledby="international-experts-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-[1fr_1fr] md:px-12 lg:gap-16">
        <div>
          <SectionLabel text="INTERNATIONAL KNOWLEDGE EXCHANGE" />
          <h2 id="international-experts-heading" className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-electric-white sm:text-4xl">Learning from international experts.</h2>
          <p className="mt-5 text-pretty text-base leading-7 text-lunar-silver">International experts, speakers, and practitioners contributed to the fellowship experience. We are matching the available session imagery to verified names, roles, affiliations, and topics before publishing individual profiles.</p>
          <Link to="/nextgen-ai-fellowship-2026-achievements" className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm text-lunar-silver transition-colors hover:border-white/40 hover:text-electric-white">See fellowship details <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {materials.map((image) => <figure key={image.src} className="overflow-hidden rounded-xl border border-white/10 bg-white/[.035]"><img src={image.src} alt={image.alt} className="aspect-[16/10] w-full object-contain" loading="lazy" /><figcaption className="px-4 py-3 text-xs leading-5 text-muted-text">Fellowship contributor material · profile details pending verification</figcaption></figure>)}
        </div>
      </div>
    </section>
  );
}
