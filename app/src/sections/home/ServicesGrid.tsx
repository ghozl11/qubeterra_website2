import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';
import { Hexagon, Orbit, Globe } from 'lucide-react';

const services = [
  {
    icon: Hexagon,
    title: 'Deep Tech Domains',
    description:
      'Frontier research and curriculum across Quantum Computing, Robotics, AI, Computer Vision, and Remote Sensing — built for real-world application in Africa and the Middle East.',
    link: '/domains',
    linkText: 'Explore Domains',
    accent: '#0066FF',
  },
  {
    icon: Orbit,
    title: 'Advanced Fellowships',
    description:
      'Rigorous, corporate-ready capacity-building programs. From our 1-Month Pilot MVP to the 3-Month Main Fellowship — agile squads, cloud deployment, and real-world capstone projects.',
    link: '/fellowships',
    linkText: 'View Fellowships',
    accent: '#00AEEF',
  },
  {
    icon: Globe,
    title: 'Consultancy & Think Tank',
    description:
      'Strategic partners for governments and global entities. Digital Public Infrastructure policy research, AI integration strategies, lean operations, and engineering consulting.',
    link: '/consultancy',
    linkText: 'Our Consultancy',
    accent: '#00D0B8',
  },
];

export function ServicesGrid() {
  return (
    <section className="relative z-[1] py-20 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <ScrollReveal pattern="A">
          <div className="mb-12">
            <SectionLabel text="WHAT WE BUILD" />
            <h2 className="font-heading font-medium text-[28px] md:text-[40px] lg:text-[48px] text-electric-white leading-[1.1] mt-4 mb-4">
              Three pillars. One mission.
            </h2>
            <p className="font-body text-base md:text-lg text-lunar-silver max-w-[640px] leading-relaxed">
              We operate across three integrated domains — each designed to create a
              complete capability-building ecosystem for the Global South.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal pattern="B">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="sr-item rounded-xl p-8 group cursor-pointer"
                  style={{
                    background: 'rgba(217, 221, 226, 0.05)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(217, 221, 226, 0.1)',
                    borderTop: `2px solid ${service.accent}`,
                    transition: 'all 0.4s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(217, 221, 226, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(217, 221, 226, 0.2)';
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 174, 239, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(217, 221, 226, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(217, 221, 226, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon
                    size={40}
                    strokeWidth={1}
                    className="text-electric-white mb-6"
                  />
                  <h3 className="font-heading font-medium text-xl md:text-2xl text-electric-white mb-4">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-lunar-silver leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="font-body font-medium text-sm text-quantum-blue hover:underline transition-all"
                  >
                    {service.linkText} →
                  </Link>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
