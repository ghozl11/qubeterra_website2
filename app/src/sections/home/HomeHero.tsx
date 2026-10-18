import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { SectionLabel } from '@/components/SectionLabel';

export function HomeHero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;
    const timeline = gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: 'power2.out' },
    );
    return () => { timeline.kill(); };
  }, []);

  return (
    <section className="relative isolate flex min-h-[min(760px,100svh)] items-center justify-center overflow-hidden pt-24 pb-24">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <img
          src="/images/hero-earth.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a]/55 via-[#05070a]/35 to-[#05070a]/95" />
      </div>
      <div ref={contentRef} className="mx-auto w-full max-w-5xl px-5 text-center md:px-12">
        <div><SectionLabel text="QUBETERRA INSTITUTE" /></div>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-quantum-blue sm:text-sm">
          Engineering Tomorrow. Empowering Humanity.
        </p>
        <h1 className="mx-auto mt-5 max-w-4xl text-balance font-heading text-4xl font-medium leading-[1.08] text-electric-white sm:text-5xl md:text-7xl">
          Building AI capability. Turning ideas into impact.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-lunar-silver sm:text-lg sm:leading-8">
          Qubeterra connects emerging talent with advanced technical learning, international expertise, and hands-on work on real-world AI challenges.
        </p>
        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link to="/fellowships" className="rounded-lg bg-quantum-blue px-7 py-3.5 text-center font-heading text-sm font-medium text-deep-space transition-colors hover:bg-[#33C2FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-quantum-blue">
            Explore Fellowships
          </Link>
          <Link to="/nextgen-ai-fellowship-2026-achievements" className="rounded-lg border border-white/30 px-7 py-3.5 text-center font-heading text-sm text-electric-white transition-colors hover:border-white/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-quantum-blue">
            Discover Our Achievements
          </Link>
          <Link to="/contact" className="rounded-lg px-5 py-3.5 text-center font-heading text-sm text-lunar-silver transition-colors hover:text-electric-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-quantum-blue">
            Contact the Team
          </Link>
        </div>
      </div>
    </section>
  );
}
