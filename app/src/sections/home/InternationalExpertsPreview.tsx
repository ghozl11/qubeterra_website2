import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/SectionLabel';

const materials = [
  {
    name: 'Dr. Ian Chew',
    role: 'Founder of Greenie Web · ClimateTech entrepreneur',
    description: 'Brings experience in technology, entrepreneurship, and climate innovation. Participated as an international expert in the fellowship’s closing activities.',
    src: '/images/new/expert2.png',
    alt: 'Dr. Ian Chew joining a Qubeterra AI NextGen Fellowship session',
  },
  {
    name: 'Shergaun Roserie',
    role: 'Technology entrepreneur · Engineer',
    description: 'Brings experience in technology development, innovation, and entrepreneurship. Participated as an international expert in the fellowship’s closing activities.',
    src: '/images/new/expert1.png',
    alt: 'Shergaun Roserie joining a Qubeterra AI NextGen Fellowship session',
  },
];

export function InternationalExpertsPreview() {
  return (
    <section className="relative z-[1] py-16 md:py-24" aria-labelledby="international-experts-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-[1fr_1fr] md:px-12 lg:gap-16">
        <div>
          <SectionLabel text="INTERNATIONAL KNOWLEDGE EXCHANGE" />
          <h2 id="international-experts-heading" className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-electric-white sm:text-4xl">Learning from international experts.</h2>
          <p className="mt-5 text-pretty text-base leading-7 text-lunar-silver">The fellowship welcomed international expertise from climate innovation and technology entrepreneurship. Meet two contributors who took part in its closing activities.</p>
          <Link to="/nextgen-ai-fellowship-2026-achievements" className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm text-lunar-silver transition-colors hover:border-white/40 hover:text-electric-white">See fellowship details <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {materials.map((expert) => (
            <article key={expert.name} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.035]">
              <img src={expert.src} alt={expert.alt} className="aspect-[16/9] w-full bg-[#080e17] object-contain" loading="lazy" />
              <div className="p-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-quantum-blue">International expert · closing activities</p>
                <h3 className="mt-2 font-heading text-lg font-medium text-electric-white">{expert.name}</h3>
                <p className="mt-1 text-xs leading-5 text-lunar-silver/80">{expert.role}</p>
                <p className="mt-3 text-xs leading-5 text-muted-text">{expert.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
