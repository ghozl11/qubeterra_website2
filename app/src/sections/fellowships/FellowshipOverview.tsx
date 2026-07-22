import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';

const steps = [
  { num: '1', title: 'Bootcamp', desc: 'Intensive skills immersion' },
  { num: '2', title: 'Squad Formation', desc: 'Cross-functional teams' },
  { num: '3', title: 'Project Build', desc: 'Real client deliverables' },
  { num: '4', title: 'Deployment', desc: 'Live systems, real impact' },
];

export function FellowshipOverview() {
  return (
    <section className="relative z-[1] py-20 md:py-[120px]">
      <div className="max-w-[900px] mx-auto px-5 md:px-12">
        <ScrollReveal pattern="A">
          <div className="text-center mb-16">
            <SectionLabel text="THE QUBETERRA APPROACH" />
            <h2 className="font-heading font-medium text-[28px] md:text-[40px] lg:text-[44px] text-electric-white leading-[1.1] mt-4 mb-6">
              Built like a startup. Measured by capability.
            </h2>
            <p className="font-body text-base md:text-lg text-lunar-silver leading-[1.7] max-w-[700px] mx-auto">
              Every fellowship follows a structured pipeline: intensive bootcamp →
              agile squad formation → real project deployment → partner evaluation.
              No lectures without labs. No theory without practice.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal pattern="B">
          <div className="relative">
            {/* Desktop: horizontal line */}
            <div className="hidden md:block absolute top-[20px] left-[12.5%] right-[12.5%] h-px bg-[rgba(0,174,239,0.2)]" />
            {/* Mobile: vertical line */}
            <div className="md:hidden absolute top-0 bottom-0 left-[20px] w-px bg-[rgba(0,174,239,0.2)]" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
              {steps.map((step) => (
                <div key={step.num} className="sr-item relative flex md:flex-col items-start md:items-center gap-4 md:gap-4">
                  <div
                    className="relative z-[1] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      border: '1px solid #00AEEF',
                      background: '#05070A',
                    }}
                  >
                    <span className="font-mono text-sm text-quantum-blue">{step.num}</span>
                  </div>
                  <div className="md:text-center">
                    <h4 className="font-heading font-medium text-base text-electric-white mb-1">
                      {step.title}
                    </h4>
                    <p className="font-body text-[13px] text-muted-text">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
