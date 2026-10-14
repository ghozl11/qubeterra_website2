import { ScrollReveal } from '@/components/ScrollReveal';
import { FellowshipCTA } from '@/sections/fellowships/FellowshipCTA';

const curriculum = [
  { number: '01', title: 'Agentic Systems Foundations', desc: 'Understand intelligent agent architectures, tool use, planning, memory, and the design principles behind reliable autonomous systems.' },
  { number: '02', title: 'RAG & Knowledge Systems', desc: 'Build research-driven systems with retrieval-augmented generation, vector search, grounding, evaluation, and structured knowledge flows.' },
  { number: '03', title: 'Orchestration & Workflows', desc: 'Design multi-agent workflows, task decomposition, routing, coordination, and execution loops for complex real-world problems.' },
  { number: '04', title: 'AI Personas & Interfaces', desc: 'Explore specialized AI personas, interaction patterns, and system interfaces that make agentic products useful, clear, and dependable.' },
  { number: '05', title: 'Research to Production', desc: 'Move from experiments to production-minded systems through testing, observability, iteration, deployment, and responsible engineering.' },
  { number: '06', title: 'Applied Fellowship Project', desc: 'Work in an international cohort on a practical project contributing to the development and improvement of Qubeterra products and systems.' },
];

const experience = [
  { title: 'Expert-led masterclasses', desc: 'International perspectives from practitioners and researchers working at the frontier of intelligent systems.' },
  { title: 'Mentorship and lab sessions', desc: 'Structured feedback, technical reviews, and collaborative working sessions throughout the fellowship.' },
  { title: 'Project-based learning', desc: 'A practical development path that turns concepts into working agentic AI systems.' },
];

export default function AINextGen() {
  return (
    <div className="pt-20 md:pt-24">
      <section className="relative z-[1] px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto overflow-hidden rounded-2xl border border-[rgba(217,221,226,0.12)] shadow-[0_0_80px_rgba(0,174,239,0.08)]">
          <picture>
            <source media="(max-width: 720px)" srcSet="/images/new/newprogram-mobile-1080.png" />
            <img src="/images/new/newprogram-desktop-1920x800.png" alt="Qubeterra Agentic AI Fellowship — Build the Next Generation of Intelligent Agent Systems" className="block w-full h-auto" />
          </picture>
        </div>
      </section>

      <section className="relative z-[1] py-20 md:py-[120px] bg-[rgba(217,221,226,0.02)]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
            <ScrollReveal pattern="A">
              <div className="sr-item">
                <span className="section-label">THE FELLOWSHIP</span>
                <h2 className="font-heading font-medium text-[32px] md:text-[48px] text-electric-white leading-[1.05] mt-4 mb-6">Build the systems that will shape what comes next.</h2>
                <p className="font-body text-base md:text-lg text-lunar-silver leading-[1.75]">The Qubeterra Agentic AI Fellowship is a three-month, online, international program for aspiring AI engineers and researchers. Fellows learn to build intelligent agent systems through advanced technical sessions, mentorship, labs, and practical development.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal pattern="C" delay={0.15}>
              <div className="sr-item rounded-2xl p-7 md:p-9 border border-quantum-blue/20 bg-quantum-blue/5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-quantum-blue">PROGRAM FORMAT</span>
                <dl className="mt-6 space-y-5">
                  <div className="flex justify-between gap-6 border-b border-white/10 pb-4"><dt className="font-body text-sm text-muted-text">Duration</dt><dd className="font-heading text-sm text-electric-white text-right">Three months</dd></div>
                  <div className="flex justify-between gap-6 border-b border-white/10 pb-4"><dt className="font-body text-sm text-muted-text">Format</dt><dd className="font-heading text-sm text-electric-white text-right">Online · International</dd></div>
                  <div className="flex justify-between gap-6 border-b border-white/10 pb-4"><dt className="font-body text-sm text-muted-text">Focus</dt><dd className="font-heading text-sm text-electric-white text-right">Agentic AI systems</dd></div>
                  <div className="flex justify-between gap-6"><dt className="font-body text-sm text-muted-text">Status</dt><dd className="font-mono text-[11px] uppercase tracking-[0.08em] text-quantum-blue text-right">Applications opening soon</dd></div>
                </dl>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative z-[1] py-20 md:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12">
          <ScrollReveal pattern="A">
            <div className="max-w-2xl mb-12"><span className="section-label">WHAT YOU WILL BUILD</span><h2 className="font-heading font-medium text-[32px] md:text-[44px] text-electric-white leading-[1.1] mt-4 mb-5">From intelligent agents to coordinated systems.</h2><p className="font-body text-base text-lunar-silver leading-[1.7]">The fellowship connects research, engineering, and applied development across the full agentic AI workflow.</p></div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {curriculum.map((item, i) => (
              <ScrollReveal key={item.number} pattern="A" delay={i * 0.06}>
                <article className="sr-item h-full p-7 rounded-xl bg-[rgba(217,221,226,0.04)] border border-[rgba(217,221,226,0.1)] hover:border-quantum-blue/50 transition-all duration-300"><span className="font-mono text-quantum-blue text-sm">{item.number}</span><h3 className="font-heading font-medium text-xl text-electric-white mt-6 mb-3">{item.title}</h3><p className="font-body text-sm text-lunar-silver leading-[1.65]">{item.desc}</p></article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-[1] py-20 md:py-[120px] bg-[rgba(217,221,226,0.02)]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12"><ScrollReveal pattern="A"><div className="text-center max-w-2xl mx-auto mb-12"><span className="section-label">THE EXPERIENCE</span><h2 className="font-heading font-medium text-[32px] md:text-[44px] text-electric-white leading-[1.1] mt-4">Learn together. Build together. Improve what matters.</h2></div></ScrollReveal><div className="grid grid-cols-1 md:grid-cols-3 gap-5">{experience.map((item, i) => (<ScrollReveal key={item.title} pattern="A" delay={i * 0.1}><div className="sr-item text-center p-7"><div className="w-2 h-2 rounded-full bg-quantum-blue shadow-[0_0_18px_rgba(0,174,239,0.7)] mx-auto mb-6" /><h3 className="font-heading font-medium text-lg text-electric-white mb-3">{item.title}</h3><p className="font-body text-sm text-lunar-silver leading-[1.65]">{item.desc}</p></div></ScrollReveal>))}</div></div>
      </section>

      <FellowshipCTA />
    </div>
  );
}
