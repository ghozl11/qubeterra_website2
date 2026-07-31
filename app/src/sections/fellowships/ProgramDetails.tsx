import { ScrollReveal } from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';

const programs = [
  {
    badge: 'ACTIVE PROGRAM',
    badgeColor: '#00AEEF',
    title: 'AI NextGen Program',
    slug: 'ai-nextgen',
    description:
      'A specialized 5-week intensive journey designed to transform high-potential individuals into deep tech builders. This program focuses on Knowledge Infrastructure, Agentic Workflows, and Production Deployment.',
    meta: [
      { label: 'Duration', value: '5 Weeks' },
      { label: 'Format', value: 'Hybrid / Intensive' },
      { label: 'Focus', value: 'AI Agents & Infra' },
    ],
    curriculum: [
      'Week 1: Knowledge Infrastructure — RAG & Vector DBs',
      'Week 2: Agentic Workflows — Multi-agent systems',
      'Week 3: Advanced Reasoning — Prompt Engineering & LLMs',
      'Week 4: Deployment & Production — Scaling AI apps',
      'Week 5: Capstone Project — Real-world deployment',
    ],
  },
  {
    badge: 'COMING SOON (Q4 2026)',
    badgeColor: '#00D0B8',
    title: '3-Month Main Fellowship',
    description:
      'The Main Fellowship is where capability is forged. Fellows are organized into agile squads, assigned real-world projects from partner organizations, and guided through the full lifecycle — from requirements to cloud deployment.',
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

                  {program.slug && (
                    <Link 
                      to={`/fellowships/${program.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-quantum-blue text-deep-space font-heading font-medium text-xs rounded hover:bg-[#33C2FF] transition-all duration-300 mb-8"
                    >
                      Learn More & Apply
                    </Link>
                  )}

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
