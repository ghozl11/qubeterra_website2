import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';

const domains = [
  {
    num: '01',
    name: 'Quantum Computing',
    desc: 'Building quantum-literate workforces for the industries of tomorrow.',
    image: '/images/domains-quantum.jpg',
  },
  {
    num: '02',
    name: 'Robotics & Autonomous Systems',
    desc: 'From industrial automation to autonomous exploration systems.',
    image: '/images/domains-robotics.jpg',
  },
  {
    num: '03',
    name: 'AI & Intelligent Agents',
    desc: 'Enterprise-grade AI capability building for the Global South.',
    image: '/images/domains-ai.jpg',
  },
  {
    num: '04',
    name: 'Computer Vision',
    desc: 'Visual intelligence systems for agriculture, healthcare, and security.',
    image: '/images/domains-cv.jpg',
  },
  {
    num: '05',
    name: 'Remote Sensing Applications',
    desc: 'Satellite-powered insights for climate, urban planning, and resource management.',
    image: '/images/domains-remote.jpg',
  },
];

export function DomainsOverview() {
  return (
    <section className="relative z-[1] py-20 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <ScrollReveal pattern="A">
          <div className="mb-12">
            <SectionLabel text="OUR DOMAINS" />
            <h2 className="font-heading font-medium text-[28px] md:text-[40px] lg:text-[48px] text-electric-white leading-[1.1] mt-4">
              Technologies that will define the next century.
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-0">
          {domains.map((domain, i) => (
            <ScrollReveal key={domain.num} pattern="A" delay={i * 0.1}>
              <Link
                to="/domains"
                className="sr-item group flex flex-col md:flex-row items-start md:items-center gap-6 py-8 md:py-10 border-b border-[rgba(217,221,226,0.06)] transition-all duration-300 hover:bg-[rgba(217,221,226,0.02)] px-4 -mx-4 rounded-lg"
              >
                <div className="flex-1 md:w-[60%]">
                  <span className="font-mono text-xs text-muted-text mb-2 block">
                    {domain.num}
                  </span>
                  <h3 className="font-heading font-medium text-2xl md:text-[32px] text-electric-white group-hover:text-quantum-blue transition-colors duration-300 mb-2">
                    {domain.name}
                  </h3>
                  <p className="font-body text-sm md:text-base text-lunar-silver">
                    {domain.desc}
                  </p>
                </div>
                <div className="md:w-[40%] w-full">
                  <img
                    src={domain.image}
                    alt={domain.name}
                    className="w-full aspect-video object-cover rounded-lg img-tech"
                  />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal pattern="A" delay={0.3}>
          <div className="mt-10">
            <Link
              to="/domains"
              className="inline-block px-8 py-3.5 border border-[rgba(217,221,226,0.3)] text-lunar-silver font-heading font-normal text-sm rounded-lg hover:border-[rgba(217,221,226,0.6)] hover:bg-[rgba(217,221,226,0.05)] transition-all duration-300"
            >
              View All Domains
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
