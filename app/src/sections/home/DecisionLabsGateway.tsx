import { Link } from 'react-router-dom';
import { ArrowUpRight, Network, Sparkles } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

export function DecisionLabsGateway() {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/10 bg-[#07121f] py-20 md:py-28">
      <div className="absolute inset-0 -z-10 opacity-80" aria-hidden="true">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#00AEEF]/20 blur-[110px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#14B8A6]/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(46,230,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(46,230,255,.07)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />
      </div>
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 md:grid-cols-[1.1fr_.9fr] md:px-12">
        <ScrollReveal pattern="A">
          <div className="sr-item">
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.16em] text-quantum-blue">
              <Sparkles size={15} aria-hidden="true" />
              A Qubeterra Domain
            </div>
            <h2 className="max-w-3xl font-heading text-4xl font-medium leading-[1.04] text-electric-white sm:text-5xl md:text-7xl">
              Qubeterra Decision Labs
            </h2>
            <p className="mt-5 font-heading text-2xl text-[#7feaff] sm:text-3xl">Intelligence Before Decisions.</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-lunar-silver sm:text-lg">
              AI-powered research, stakeholder intelligence, and scenario exploration — helping organizations understand complexity and make better-informed decisions.
            </p>
            <Link to="/decision-labs" className="mt-9 inline-flex items-center gap-3 rounded-lg bg-quantum-blue px-6 py-3.5 font-heading text-sm font-medium text-deep-space transition-colors hover:bg-[#33C2FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-quantum-blue">
              Explore Decision Labs <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal pattern="B">
          <div className="sr-item relative min-h-[320px] overflow-hidden rounded-2xl border border-[#2EE6FF]/25 bg-[#04070D]/70 p-6 shadow-[0_0_80px_rgba(46,230,255,.08)] sm:min-h-[390px]">
            <div className="absolute inset-0 opacity-80" aria-hidden="true">
              <div className="absolute left-[18%] top-[22%] h-3 w-3 rounded-full bg-[#2EE6FF] shadow-[0_0_25px_#2EE6FF]" />
              <div className="absolute left-[63%] top-[33%] h-2.5 w-2.5 rounded-full bg-[#14B8A6] shadow-[0_0_24px_#14B8A6]" />
              <div className="absolute left-[42%] top-[68%] h-3 w-3 rounded-full bg-[#FFB454] shadow-[0_0_25px_#FFB454]" />
              <svg viewBox="0 0 500 380" className="h-full w-full" fill="none" role="img" aria-label="Connected intelligence network visualization">
                <path d="M90 90 L315 125 L210 260 L420 295 M315 125 L390 70 M210 260 L80 305 M90 90 L80 305" stroke="rgba(46,230,255,.4)" strokeWidth="1" />
                <path d="M55 185 C170 90 275 340 455 170" stroke="rgba(20,184,166,.35)" strokeWidth="1" strokeDasharray="5 8" />
                <circle cx="90" cy="90" r="38" stroke="rgba(46,230,255,.18)" />
                <circle cx="315" cy="125" r="62" stroke="rgba(46,230,255,.14)" />
                <circle cx="210" cy="260" r="48" stroke="rgba(20,184,166,.16)" />
              </svg>
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[.14em] text-[#2EE6FF]">Decision intelligence engine</div>
                <div className="mt-2 text-sm text-lunar-silver">Evidence · Stakeholders · Scenarios</div>
              </div>
              <Network className="text-[#2EE6FF]" size={28} aria-hidden="true" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
