import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';

export function FellowshipPreview() {
  return (
    <section className="relative z-[1] py-20 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <ScrollReveal pattern="A">
            <div>
              <SectionLabel text="ADVANCED FELLOWSHIPS" />
              <h2 className="font-heading font-medium text-[28px] md:text-[40px] lg:text-[48px] text-electric-white leading-[1.1] mt-4 mb-6">
                We don't issue certificates. We build capabilities.
              </h2>
              <p className="font-body text-base md:text-lg text-lunar-silver leading-[1.7] mb-8">
                Our fellowship programs are designed as rigorous, hands-on immersion
                experiences. Fellows work in agile squads, deploy to cloud
                infrastructure, and solve real problems for real partners.
              </p>

              {/* Program cards */}
              <div className="space-y-4 mb-8">
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: 'rgba(217, 221, 226, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(217, 221, 226, 0.1)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="font-mono text-[10px] uppercase px-2 py-1 rounded"
                      style={{
                        color: '#00AEEF',
                        border: '1px solid #00AEEF',
                      }}
                    >
                      INTENSIVE
                    </span>
                  </div>
                  <h4 className="font-heading font-medium text-lg text-electric-white mb-1">
                    1-Month Pilot MVP
                  </h4>
                  <p className="font-body text-sm text-lunar-silver">
                    Intensive bootcamp and filtering phase.
                  </p>
                </div>

                <div
                  className="rounded-xl p-5"
                  style={{
                    background: 'rgba(217, 221, 226, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(217, 221, 226, 0.1)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="font-mono text-[10px] uppercase px-2 py-1 rounded"
                      style={{
                        color: '#00D0B8',
                        border: '1px solid #00D0B8',
                      }}
                    >
                      ADVANCED
                    </span>
                  </div>
                  <h4 className="font-heading font-medium text-lg text-electric-white mb-1">
                    3-Month Main Fellowship
                  </h4>
                  <p className="font-body text-sm text-lunar-silver">
                    Agile squads, cloud deployment, and real-world capstone projects.
                  </p>
                </div>
              </div>

              <Link
                to="/fellowships"
                className="inline-block px-8 py-3.5 bg-quantum-blue text-deep-space font-heading font-medium text-sm rounded-lg hover:bg-[#33C2FF] hover:shadow-[0_0_25px_rgba(0,174,239,0.25)] transition-all duration-300"
              >
                Apply for Fellowship
              </Link>
            </div>
          </ScrollReveal>

          {/* Right: Image */}
          <ScrollReveal pattern="C" delay={0.2}>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="/images/fellowship-lab.jpg"
                alt="Tech learning environment"
                className="w-full h-auto object-cover img-tech"
              />
              <div
                className="absolute inset-0"
                style={{
                  boxShadow: 'inset 0 0 100px rgba(0, 174, 239, 0.08)',
                }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
