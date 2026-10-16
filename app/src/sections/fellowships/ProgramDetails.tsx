import { ScrollReveal } from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';

const programs = [
  {
    badge: 'COMPLETED PROGRAM', badgeColor: '#00AEEF', title: 'AI NextGen Program',
    description: 'A completed intensive program that brought together 100 emerging AI talents for practical learning, teamwork, and applied AI project development.',
    meta: [{ label: 'Duration', value: '1 Month' }, { label: 'Format', value: 'Online · Applied Labs' }, { label: 'Status', value: 'Completed' }],
    curriculum: ['Knowledge Infrastructure — RAG & Vector DBs', 'Agentic Workflows — Multi-agent systems', 'Advanced Reasoning — Prompt Engineering & LLMs', 'Deployment & Production — Scaling AI applications'],
  },
  {
    badge: 'COMING SOON', badgeColor: '#00D0B8', title: 'Agentic AI Fellowship',
    description: 'Our upcoming three-month international fellowship for aspiring AI engineers and researchers building intelligent agent systems through technical sessions, mentorship, labs, and practical development.',
    meta: [{ label: 'Duration', value: '3 Months' }, { label: 'Format', value: 'Online · International' }, { label: 'Status', value: 'Applications opening soon' }],
    curriculum: ['Agentic Systems Foundations', 'RAG & Knowledge Systems', 'Orchestration & Workflows', 'Research to Production'],
    slug: 'ai-nextgen',
  },
];

export function ProgramDetails() {
  return <section className="relative z-[1] py-20 md:py-[120px]"><div className="max-w-[1280px] mx-auto px-5 md:px-12 space-y-8">{programs.map((program, i) => <ScrollReveal key={program.title} pattern="A" delay={i * 0.15}><div className="sr-item rounded-xl p-8 md:p-12" style={{ background: 'rgba(217, 221, 226, 0.05)', backdropFilter: 'blur(20px)', border: '1px solid rgba(217, 221, 226, 0.1)' }}><div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"><div className="md:col-span-2"><span className="inline-block font-mono text-[10px] uppercase px-2 py-1 rounded mb-4" style={{ color: program.badgeColor, border: `1px solid ${program.badgeColor}` }}>{program.badge}</span><h3 className="font-heading font-medium text-[24px] md:text-[32px] text-electric-white leading-[1.1] mb-4">{program.title}</h3><p className="font-body text-sm md:text-base text-lunar-silver leading-[1.7] mb-8">{program.description}</p>{program.slug && <Link to={`/fellowships/${program.slug}`} className="inline-flex px-6 py-3 bg-quantum-blue text-deep-space font-heading font-medium text-xs rounded hover:bg-[#33C2FF] transition-all duration-300 mb-8">Explore the Fellowship</Link>}<h4 className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-text mb-4">Program Focus</h4><ul className="space-y-3">{program.curriculum.map((item) => <li key={item} className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: program.badgeColor }} /><span className="font-body text-sm text-lunar-silver">{item}</span></li>)}</ul></div><div><h4 className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-text mb-6">Program Details</h4><div className="space-y-6">{program.meta.map((m) => <div key={m.label}><span className="font-mono text-[10px] uppercase text-muted-text block mb-1">{m.label}</span><span className="font-mono text-sm text-electric-white">{m.value}</span></div>)}</div></div></div></div></ScrollReveal>)}</div></section>;
}
