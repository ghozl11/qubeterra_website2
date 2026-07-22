import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';
import { Telescope, Cpu, Users, Leaf, Star, Network } from 'lucide-react';

const values = [
  { icon: Telescope, title: 'Bold Vision', desc: 'We dare to imagine a better future.' },
  { icon: Cpu, title: 'Tech Driven', desc: 'We embrace technology to solve real-world challenges.' },
  { icon: Users, title: 'Human Centered', desc: 'We empower people and communities.' },
  { icon: Leaf, title: 'Sustainable Future', desc: 'We build solutions that last.' },
  { icon: Star, title: 'Limitless Potential', desc: 'We believe in pushing boundaries.' },
  { icon: Network, title: 'Systems Thinking', desc: 'We connect capability to civilization-scale outcomes.' },
];

export function VisionMission() {
  return (
    <section className="relative z-[1] py-20 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Vision & Mission */}
          <ScrollReveal pattern="A">
            <div>
              <SectionLabel text="VISION & MISSION" />
              <h2 className="font-heading font-medium text-[28px] md:text-[40px] lg:text-[44px] text-electric-white leading-[1.1] mt-4 mb-8">
                The world's leading capability-building ecosystem.
              </h2>

              <div
                className="pl-6 py-4 mb-8"
                style={{ borderLeft: '3px solid #00D0B8' }}
              >
                <p className="font-body text-base md:text-lg text-lunar-silver leading-[1.7]">
                  To become the world's leading capability-building ecosystem for
                  emerging technologies, policy innovation, and sustainable development.
                </p>
              </div>

              <div
                className="pl-6 py-4"
                style={{ borderLeft: '3px solid #00AEEF' }}
              >
                <p className="font-body text-base md:text-lg text-lunar-silver leading-[1.7]">
                  Build the human capabilities required to solve humanity's greatest
                  challenges.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Values Grid */}
          <ScrollReveal pattern="B" delay={0.2}>
            <div>
              <h3 className="font-heading font-medium text-xl md:text-2xl text-electric-white mb-6">
                Our Core Principles
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={v.title}
                      className="sr-item rounded-xl p-5"
                      style={{
                        background: 'rgba(217, 221, 226, 0.05)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(217, 221, 226, 0.1)',
                      }}
                    >
                      <Icon size={32} strokeWidth={1} className="text-electric-white mb-3" />
                      <h4 className="font-heading font-medium text-base text-electric-white mb-1">
                        {v.title}
                      </h4>
                      <p className="font-body text-[13px] text-muted-text leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
