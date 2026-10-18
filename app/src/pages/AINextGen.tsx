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
      <section className="relative z-[1] px-4 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-[1440px] overflow-hidden rounded-2xl border border-white/10">
          <picture>
            <source media="(max-width: 720px)" srcSet="/images/new/newprogram-mobile-1080.png" />
            <img src="/images/new/newprogram-desktop-1920x800.png" alt="Qubeterra Agentic AI Fellowship — Build the Next Generation of Intelligent Agent Systems" className="block h-auto w-full" />
          </picture>
        </div>
      </section>
      <section className="relative z-[1] bg-[rgba(217,221,226,0.02)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <ScrollReveal pattern="A"><div><span className="section-label">THE FELLOWSHIP</span><h1 className="mt-4 mb-6 text-balance font-heading text-3xl font-medium leading-tight text-electric-white sm:text-4xl md:text-5xl">Build the systems that will shape what comes next.</h1><p className="text-pretty text-base leading-7 text-lunar-silver sm:text-lg sm:leading-8">The Qubeterra Agentic AI Fellowship is a three-month, online, international program for aspiring AI engineers and researchers. Fellows learn to build intelligent agent systems through advanced technical sessions, mentorship, labs, and practical development.</p></div></ScrollReveal>
            <ScrollReveal pattern="C" delay={0.15}><div className="rounded-2xl border border-quantum-blue/20 bg-quantum-blue/5 p-7 md:p-9"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-quantum-blue">PROGRAM FORMAT</span><dl className="mt-6 space-y-5"><div className="flex justify-between gap-6 border-b border-white/10 pb-4"><dt className="text-sm text-muted-text">Duration</dt><dd className="text-right font-heading text-sm text-electric-white">Three months</dd></div><div className="flex justify-between gap-6 border-b border-white/10 pb-4"><dt className="text-sm text-muted-text">Format</dt><dd className="text-right font-heading text-sm text-electric-white">Online · International</dd></div><div className="flex justify-between gap-6 border-b border-white/10 pb-4"><dt className="text-sm text-muted-text">Focus</dt><dd className="text-right font-heading text-sm text-electric-white">Agentic AI systems</dd></div><div className="flex justify-between gap-6"><dt className="text-sm text-muted-text">Status</dt><dd className="text-right font-mono text-[11px] uppercase tracking-[.08em] text-quantum-blue">Applications opening soon</dd></div></dl></div></ScrollReveal>
          </div>
        </div>
      </section>
      <section className="relative z-[1] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-12"><ScrollReveal pattern="A"><div className="mb-12 max-w-2xl"><span className="section-label">WHAT YOU WILL BUILD</span><h2 className="mt-4 mb-5 text-balance font-heading text-3xl font-medium text-electric-white sm:text-4xl">From intelligent agents to coordinated systems.</h2><p className="text-base leading-7 text-lunar-silver">The fellowship connects research, engineering, and applied development across the full agentic AI workflow.</p></div></ScrollReveal><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{curriculum.map((item, i) => <ScrollReveal key={item.number} pattern="A" delay={i * 0.06}><article className="h-full rounded-xl border border-white/10 bg-white/[.04] p-7 transition-colors hover:border-quantum-blue/50"><span className="font-mono text-sm text-quantum-blue">{item.number}</span><h3 className="mt-6 mb-3 text-balance font-heading text-xl font-medium text-electric-white">{item.title}</h3><p className="text-sm leading-7 text-lunar-silver">{item.desc}</p></article></ScrollReveal>)}</div></div>
      </section>
      <section className="relative z-[1] bg-[rgba(217,221,226,0.02)] py-20 md:py-28"><div className="mx-auto max-w-7xl px-5 md:px-12"><ScrollReveal pattern="A"><div className="mx-auto mb-12 max-w-2xl text-center"><span className="section-label">THE EXPERIENCE</span><h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-electric-white sm:text-4xl">Learn together. Build together. Improve what matters.</h2></div></ScrollReveal><div className="grid gap-5 md:grid-cols-3">{experience.map((item, i) => <ScrollReveal key={item.title} pattern="A" delay={i * 0.1}><div className="p-7 text-center"><div className="mx-auto mb-6 h-2 w-2 rounded-full bg-quantum-blue" /><h3 className="mb-3 font-heading text-lg font-medium text-electric-white">{item.title}</h3><p className="text-sm leading-7 text-lunar-silver">{item.desc}</p></div></ScrollReveal>)}</div></div></section>
      <FellowshipCTA />
    </div>
  );
}
