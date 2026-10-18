import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';

export function NextGenAchievementsBanner() {
  return (
    <section className="relative z-[1] py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-12">
        <ScrollReveal pattern="A">
          <article className="overflow-hidden rounded-2xl border border-quantum-blue/25 bg-[#06142d]/80">
            <div className="grid items-center gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-7 sm:p-10 lg:p-12">
                <SectionLabel text="AI NEXTGEN FELLOWSHIP · RESULTS" />
                <h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-electric-white sm:text-4xl">Learning, applied. A community formed.</h2>
                <p className="mt-5 text-base leading-7 text-lunar-silver">One hundred selected fellows collaborated across four applied AI tracks, completed team projects, and presented their work. Fellows represented Egypt, Morocco, Tunisia, Syria, and other countries across the region.</p>
                <p className="mt-4 text-sm leading-6 text-muted-text">The available materials do not yet establish the official track names or map every image to a specific project.</p>
                <Link to="/nextgen-ai-fellowship-2026-achievements" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-quantum-blue px-6 py-3 text-sm font-medium text-deep-space transition-colors hover:bg-[#33C2FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-quantum-blue">Explore the fellowship achievements <ArrowRight size={16} aria-hidden="true" /></Link>
              </div>
              <figure className="border-t border-white/10 bg-black/20 p-4 sm:p-6 lg:border-l lg:border-t-0">
                <img src="/images/new/group_photo.jpeg" alt="Fellows and contributors gathered at the Qubeterra AI NextGen Fellowship graduation" loading="lazy" className="mx-auto max-h-[540px] w-full rounded-xl object-contain" />
                <figcaption className="mt-3 text-center text-xs text-muted-text">Qubeterra AI NextGen Fellowship graduation community</figcaption>
              </figure>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
