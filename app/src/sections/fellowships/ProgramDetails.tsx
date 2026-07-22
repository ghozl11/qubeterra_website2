import { ScrollReveal } from '@/components/ScrollReveal';

const programs = [
  {
    badge: 'INTENSIVE',
    badgeColor: '#00AEEF',
    title: '1-Month Pilot MVP',
    description:
      'The Pilot MVP is an intensive bootcamp and filtering phase designed to identify and fast-track high-potential builders. Over four weeks, participants undergo rigorous technical training in their chosen domain, work on mini-projects, and are evaluated for advancement to the Main Fellowship.',
    meta: [
      { label: 'Duration', value: '4 Weeks' },
      { label: 'Format', value: 'Full-time, On-site' },
      { label: 'Domains', value: 'All 5 Deep Tech Domains' },
    ],
    curriculum: [
      'Week 1: Foundation Sprint — Core concepts and tools',
      'Week 2: Build Phase — Hands-on mini-projects',
      'Week 3: Integration — Cross-domain collaboration',
      'Week 4: Demo & Evaluation — Capstone presentation',
    ],
  },
  {
    badge: 'ADVANCED',
    badgeColor: '#00D0B8',
    title: '3-Month Main Fellowship',
    description:
      'The Main Fellowship is where capability is forged. Fellows are organized into agile squads, assigned real-world projects from partner organizations, and guided through the full lifecycle — from requirements to cloud deployment. This is not simulated work. These are real deliverables for real clients.',
    meta: [
      { label: 'Duration', value: '12 Weeks' },
      { label: 'Format', value: 'Agile Squads, Hybrid' },
      { label: 'Output', value: 'Production-Ready Systems' },
    ],
    curriculum: [
      'Phase 1: Squad Formation & Project Scoping',
      'Phase 2: Sprint Cycles (2-week sprints)',
      'Phase 3: Cloud Deployment & DevOps',
      'Phase 4: Client Handoff & Evaluation',
    ],
  },
];

export function ProgramDetails() {
  return (
    <section className="relative z-[1] py-20 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 space-y-8">
        {programs.map((program, i) => (
          <ScrollReveal key={program.title} pattern="A" delay={i * 0.15}>
            <div
              className="sr-item rounded-xl p-8 md:p-12"
              style={{
                background: 'rgba(217, 221, 226, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(217, 221, 226, 0.1)',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* Main text */}
                <div className="md:col-span-2">
                  <span
                    className="inline-block font-mono text-[10px] uppercase px-2 py-1 rounded mb-4"
                    style={{
                      color: program.badgeColor,
                      border: `1px solid ${program.badgeColor}`,
                    }}
                  >
                    {program.badge}
                  </span>
                  <h3 className="font-heading font-medium text-[24px] md:text-[32px] text-electric-white leading-[1.1] mb-4">
                    {program.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-lunar-silver leading-[1.7] mb-8">
                    {program.description}
                  </p>

                  <h4 className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-text mb-4">
                    Curriculum
                  </h4>
                  <ul className="space-y-3">
                    {program.curriculum.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ background: program.badgeColor }}
                        />
                        <span className="font-body text-sm text-lunar-silver">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metadata */}
                <div>
                  <h4 className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-text mb-6">
                    Program Details
                  </h4>
                  <div className="space-y-6">
                    {program.meta.map((m) => (
                      <div key={m.label}>
                        <span className="font-mono text-[10px] uppercase text-muted-text block mb-1">
                          {m.label}
                        </span>
                        <span className="font-mono text-sm text-electric-white">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
