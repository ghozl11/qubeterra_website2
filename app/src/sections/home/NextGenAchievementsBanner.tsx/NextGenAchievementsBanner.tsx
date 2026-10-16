import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';

export function NextGenAchievementsBanner() {
  return (
    <section className="relative z-[1] py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <ScrollReveal pattern="A">
          <div className="overflow-hidden rounded-2xl border border-quantum-blue/30 bg-[#06142d]/80 shadow-[0_0_70px_rgba(0,174,239,0.08)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
              <div className="p-8 md:p-12 lg:p-14">
                <SectionLabel text="AI NEXTGEN FELLOWSHIP · RESULTS" />
                <h2 className="font-heading font-medium text-[30px] md:text-[44px] text-electric-white leading-[1.08] mt-4 mb-5">See what our fellowship made possible.</h2>
                <p className="font-body text-base md:text-lg text-lunar-silver leading-[1.75] mb-7">100 emerging AI talents completed an intensive journey of learning, teamwork, and applied project development across the region.</p>
                <Link to="/nextgen-ai-fellowship-2026-achievements" className="inline-flex items-center px-7 py-3.5 bg-quantum-blue text-deep-space font-heading font-medium text-sm rounded-lg hover:bg-[#33C2FF] transition-all duration-300">See our results</Link>
              </div>
              <img src="/images/new/group_photo.jpeg" alt="Qubeterra AI NextGen Fellowship community" className="min-h-[260px] w-full object-cover lg:min-h-full" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
