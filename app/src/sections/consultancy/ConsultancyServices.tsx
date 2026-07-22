import { ScrollReveal } from '@/components/ScrollReveal';
import { Server, Brain, Workflow, Wrench } from 'lucide-react';

const services = [
  {
    icon: Server,
    title: 'Digital Public Infrastructure',
    desc: 'Research and strategy for national digital identity, payment systems, data exchanges, and digital governance infrastructure. We help governments build the digital rails that enable innovation at scale.',
    accent: '#00AEEF',
  },
  {
    icon: Brain,
    title: 'AI Integration Strategy',
    desc: 'Enterprise AI readiness assessments, implementation roadmaps, and governance frameworks. We help institutions adopt AI responsibly — from policy to production deployment.',
    accent: '#0066FF',
  },
  {
    icon: Workflow,
    title: 'Lean Digital Operations',
    desc: 'Process optimization and digital transformation for government agencies and enterprises. We apply lean methodology to public-sector operations, reducing waste while improving citizen service delivery.',
    accent: '#00D0B8',
  },
  {
    icon: Wrench,
    title: 'Engineering Consulting',
    desc: 'Technical architecture reviews, system design, and engineering team structuring for large-scale digital projects. We bring deep technical expertise to policy-driven initiatives.',
    accent: '#D9DDE2',
  },
];

export function ConsultancyServices() {
  return (
    <section className="relative z-[1] py-20 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <ScrollReveal pattern="B">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="sr-item rounded-xl p-8"
                  style={{
                    background: 'rgba(217, 221, 226, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(217, 221, 226, 0.1)',
                    borderTop: `2px solid ${service.accent}`,
                    transition: 'all 0.4s ease',
                  }}
                >
                  <Icon size={36} strokeWidth={1} className="text-electric-white mb-5" />
                  <h3 className="font-heading font-medium text-xl md:text-[22px] text-electric-white mb-4">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-lunar-silver leading-[1.7]">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
