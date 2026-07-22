import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';

export function AboutSnapshot() {
  return (
    <section className="relative z-[1] py-20 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <ScrollReveal pattern="A">
            <div>
              <SectionLabel text="ABOUT THE INSTITUTE" />
              <h2 className="font-heading font-medium text-[28px] md:text-[40px] lg:text-[48px] text-electric-white leading-[1.1] mt-4 mb-6">
                Building the people who build the future.
              </h2>
              <p className="font-body text-base md:text-lg text-lunar-silver leading-[1.7] mb-8">
                Qubeterra Institute is a premier Deep Tech Think Tank and Capacity
                Building Hub focused on the Global South and Africa. We exist to build
                the human capabilities required to solve humanity's greatest
                challenges — through rigorous education, strategic policy consultancy,
                and frontier technology research.
              </p>
              {/* Mission quote card */}
              <div
                className="rounded-xl p-6 md:p-8 mb-8"
                style={{
                  background: 'rgba(217, 221, 226, 0.05)',
                  backdropFilter: 'blur(20px)',
                  borderLeft: '3px solid #00AEEF',
                }}
              >
                <p className="font-heading text-lg md:text-xl text-electric-white leading-relaxed">
                  "We don't train people. We build the people who build the future."
                </p>
              </div>
              <Link
                to="/about"
                className="inline-block px-8 py-3.5 border border-[rgba(217,221,226,0.3)] text-lunar-silver font-heading font-normal text-sm rounded-lg hover:border-[rgba(217,221,226,0.6)] hover:bg-[rgba(217,221,226,0.05)] transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </ScrollReveal>

          {/* Right: Image */}
          <ScrollReveal pattern="C" delay={0.2}>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="/images/about-command-center.jpg"
                alt="Futuristic command center"
                className="w-full h-auto object-cover img-tech"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, transparent 50%)',
                }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
