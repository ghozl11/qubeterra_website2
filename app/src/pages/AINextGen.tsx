import { ScrollReveal } from '@/components/ScrollReveal';
import { FellowshipCTA } from '@/sections/fellowships/FellowshipCTA';

export default function AINextGen() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12">
          <ScrollReveal pattern="A">
            <div className="sr-item max-w-3xl">
              <span className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-quantum-blue mb-4 px-2 py-1 border border-quantum-blue rounded">
                Specialized Track
              </span>
              <h1 className="font-heading font-medium text-[40px] md:text-[64px] text-electric-white leading-[1.1] mb-6">
                AI NextGen <br />
                <span className="text-quantum-blue">Program</span>
              </h1>
              <p className="font-body text-base md:text-lg text-lunar-silver leading-[1.7] mb-8">
                A specialized 5-week intensive journey designed to transform high-potential individuals into deep tech builders. Master the architecture of the future through hands-on development.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section className="py-20 bg-[rgba(217,221,226,0.02)]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12">
          <ScrollReveal pattern="A">
            <h2 className="font-heading font-medium text-[32px] text-electric-white mb-12 text-center">
              5-Week Curriculum
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { week: '01', title: 'Knowledge Infrastructure', desc: 'Deep dive into RAG, Vector Databases, and data orchestration for AI systems.' },
              { week: '02', title: 'Agentic Workflows', desc: 'Building multi-agent systems, task decomposition, and autonomous execution loops.' },
              { week: '03', title: 'Advanced Reasoning', desc: 'Prompt engineering at scale, chain-of-thought, and fine-tuning strategies.' },
              { week: '04', title: 'Deployment & Production', desc: 'Scaling AI applications, monitoring, and production-grade DevOps for LLMs.' },
              { week: '05', title: 'Capstone Project', desc: 'End-to-end development and deployment of a real-world AI solution.' },
            ].map((item, i) => (
              <ScrollReveal key={item.week} pattern="A" delay={i * 0.1}>
                <div className="sr-item p-8 rounded-xl bg-[rgba(217,221,226,0.05)] border border-[rgba(217,221,226,0.1)] hover:border-quantum-blue/50 transition-all duration-300">
                  <span className="font-mono text-quantum-blue text-sm mb-4 block">WEEK {item.week}</span>
                  <h3 className="font-heading font-medium text-xl text-electric-white mb-4">{item.title}</h3>
                  <p className="font-body text-sm text-lunar-silver leading-[1.6]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Support System */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal pattern="A">
              <div className="sr-item">
                <h2 className="font-heading font-medium text-[32px] text-electric-white mb-6">
                  Expert-Led Support
                </h2>
                <div className="space-y-6">
                  {[
                    { role: 'TPM (Technical Program Manager)', desc: 'Daily guidance on project management and technical milestones.' },
                    { role: 'Technical Mentor', desc: 'One-on-one code reviews and architectural deep dives.' },
                    { role: 'Global Experts', desc: 'Weekly masterclasses from industry leaders at the forefront of AI.' },
                  ].map((support) => (
                    <div key={support.role}>
                      <h4 className="font-heading text-electric-white text-base mb-1">{support.role}</h4>
                      <p className="font-body text-sm text-lunar-silver">{support.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal pattern="A" delay={0.2}>
              <div className="sr-item p-8 rounded-2xl bg-quantum-blue/5 border border-quantum-blue/20">
                <h3 className="font-heading font-medium text-xl text-electric-white mb-4">Program Outcome</h3>
                <ul className="space-y-4">
                  {[
                    'Production-ready AI portfolio project',
                    'Direct path to the 3-Month Main Fellowship',
                    'Certification of Advanced AI Development',
                    'Access to Qubeterra Talent Network',
                  ].map((outcome) => (
                    <li key={outcome} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-quantum-blue" />
                      <span className="font-body text-sm text-lunar-silver">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FellowshipCTA />
    </div>
  );
}
