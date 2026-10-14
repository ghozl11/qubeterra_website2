import { Link } from 'react-router-dom';

import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';

export function FellowshipPreview() {
  return (
    <section className="relative z-[1] py-20 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <ScrollReveal pattern="A"><div>
            <SectionLabel text="FEATURED PROGRAM" />
            <h2 className="font-heading font-medium text-[28px] md:text-[40px] lg:text-[48px] text-electric-white leading-[1.1] mt-4 mb-6">Build the next generation of intelligent agent systems.</h2>
            <p className="font-body text-base md:text-lg text-lunar-silver leading-[1.7] mb-8">The Qubeterra Agentic AI Fellowship is a three-month international experience for aspiring AI engineers and researchers working at the frontier of intelligent systems.</p>
            <div className="rounded-xl p-5 mb-8 bg-[rgba(217,221,226,0.05)] backdrop-blur-xl border border-quantum-blue/40">
              <div className="flex items-center justify-between gap-3 mb-2"><span className="font-mono text-[10px] uppercase tracking-[0.12em] px-2 py-1 rounded text-quantum-blue border border-quantum-blue">GLOBAL AI FELLOWSHIP</span><span className="font-mono text-[10px] uppercase text-muted-text">3 MONTHS</span></div>
              <h4 className="font-heading font-medium text-lg text-electric-white mb-1">Qubeterra Agentic AI Fellowship</h4>
              <p className="font-body text-sm text-lunar-silver">Expert mentorship, advanced AI engineering, and hands-on agent-system development.</p>
            </div>
            <Link to="/fellowships/ai-nextgen" className="inline-block px-8 py-3.5 bg-quantum-blue text-deep-space font-heading font-medium text-sm rounded-lg hover:bg-[#33C2FF] transition-all duration-300">Explore the Fellowship</Link>
          </div></ScrollReveal>
          <ScrollReveal pattern="C" delay={0.2}><Link to="/fellowships/ai-nextgen" className="group block rounded-xl overflow-hidden border border-[rgba(217,221,226,0.12)]"><picture><source media="(max-width: 720px)" srcSet="/images/new/newprogram-mobile-1080.png" /><img src="/images/new/newprogram-desktop-1920x800.png" alt="Qubeterra Agentic AI Fellowship hero" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]" /></picture></Link></ScrollReveal>
        </div>
      </div>
    </section>
  );
}
