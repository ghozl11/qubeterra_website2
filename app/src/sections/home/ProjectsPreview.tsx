import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';

const showcases = [
  { src: '/images/new/showcase1.jpeg', alt: 'Presentation slide from a completed Qubeterra AI NextGen team project' },
  { src: '/images/new/showcase2.jpeg', alt: 'Presentation slide from a completed Qubeterra AI NextGen team project' },
  { src: '/images/new/showcase3.png', alt: 'Technical presentation slide from a completed Qubeterra AI NextGen team project' },
];

export function ProjectsPreview() {
  return (
    <section className="relative z-[1] py-16 md:py-24" aria-labelledby="projects-preview-heading">
      <div className="mx-auto max-w-7xl px-5 md:px-12">
        <ScrollReveal pattern="A">
          <div className="mb-10 max-w-3xl">
            <SectionLabel text="COMPLETED FELLOWSHIP PROJECTS" />
            <h2 id="projects-preview-heading" className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-electric-white sm:text-4xl">What our fellows built.</h2>
            <p className="mt-5 text-pretty text-base leading-7 text-lunar-silver">Fellows completed team projects across four applied AI tracks. Browse a selection of authentic presentation materials from the cohort.</p>
          </div>
        </ScrollReveal>
        <div className="grid gap-5 md:grid-cols-3">
          {showcases.map((image, index) => <ScrollReveal key={image.src} pattern="A" delay={index * 0.08}><figure className="h-full overflow-hidden rounded-xl border border-white/10 bg-white/[.035]"><img src={image.src} alt={image.alt} className="aspect-video w-full object-contain" loading="lazy" /><figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-5 text-muted-text">Projects showcase</figcaption></figure></ScrollReveal>)}
        </div>
        <div className="mt-8"><Link to="/nextgen-ai-fellowship-2026-achievements" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm text-lunar-silver transition-colors hover:border-white/40 hover:text-electric-white">Explore fellowship achievements <ArrowRight size={16} aria-hidden="true" /></Link></div>
      </div>
    </section>
  );
}
