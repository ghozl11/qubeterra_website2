import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';

export function OurStory() {
  return (
    <section className="relative z-[1] py-20 md:py-[120px]">
      <div className="max-w-[800px] mx-auto px-5 md:px-12">
        <ScrollReveal pattern="A">
          <div>
            <SectionLabel text="OUR STORY" />
            <h2 className="font-heading font-medium text-[28px] md:text-[40px] lg:text-[44px] text-electric-white leading-[1.1] mt-4 mb-10">
              From summits to systems.
            </h2>

            <div className="space-y-6 mb-10">
              <p className="font-body text-base md:text-lg text-lunar-silver leading-[1.7]">
                Qubeterra began with a recognition: the Global South was consuming
                technology built elsewhere, while the capabilities to create, govern,
                and sustain that technology remained concentrated in a handful of
                regions.
              </p>
              <p className="font-body text-base md:text-lg text-lunar-silver leading-[1.7]">
                We set out to change that — not with conferences or certificates, but
                with rigorous, hands-on education that mirrors the standards of the
                world's most advanced technology institutions.
              </p>
              <p className="font-body text-base md:text-lg text-lunar-silver leading-[1.7]">
                Today, Qubeterra operates as a Deep Tech Think Tank and Capacity
                Building Hub. We design curricula, run intensive fellowships, and
                advise governments on digital transformation — all with a single focus:
                building human capability at civilization scale.
              </p>
            </div>

            <Link
              to="/fellowships"
              className="inline-block px-8 py-3.5 border border-[rgba(217,221,226,0.3)] text-lunar-silver font-heading font-normal text-sm rounded-lg hover:border-[rgba(217,221,226,0.6)] hover:bg-[rgba(217,221,226,0.05)] transition-all duration-300"
            >
              Explore Our Programs
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
