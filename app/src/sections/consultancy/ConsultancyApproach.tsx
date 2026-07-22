import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';

const steps = [
  {
    num: '01',
    title: 'Research',
    desc: 'Primary data collection and frontier technology analysis',
  },
  {
    num: '02',
    title: 'Framework',
    desc: 'Policy models and implementation roadmaps',
  },
  {
    num: '03',
    title: 'Advisory',
    desc: 'Hands-on guidance through deployment and evaluation',
  },
];

export function ConsultancyApproach() {
  return (
    <section className="relative z-[1] py-20 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <ScrollReveal pattern="A">
            <div>
              <SectionLabel text="OUR APPROACH" />
              <h2 className="font-heading font-medium text-[28px] md:text-[40px] lg:text-[44px] text-electric-white leading-[1.1] mt-4 mb-6">
                Research that drives decisions.
              </h2>
              <p className="font-body text-base md:text-lg text-lunar-silver leading-[1.7] mb-10">
                Our think tank produces policy research, white papers, and strategic
                frameworks at the intersection of technology and governance. Every
                recommendation is grounded in primary research, tested against real
                constraints, and designed for implementation — not shelf life.
              </p>

              {/* Process steps */}
              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <span className="font-mono text-sm text-quantum-blue mt-0.5">
                      {step.num}
                    </span>
                    <div>
                      <h4 className="font-heading font-medium text-base text-electric-white mb-1">
                        {step.title}
                      </h4>
                      <p className="font-body text-sm text-lunar-silver">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Image */}
          <ScrollReveal pattern="C" delay={0.2}>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="images/research-docs.jpg"
                alt="Research workspace"
                className="w-full h-auto object-cover img-tech"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
