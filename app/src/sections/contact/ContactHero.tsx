import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SectionLabel } from '@/components/SectionLabel';

export function ContactHero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const animation = gsap.fromTo(contentRef.current.children, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: 'power2.out' });
    return () => { animation.kill(); };
  }, []);

  return (
    <section className="relative z-[1] flex min-h-[46vh] items-center justify-center overflow-hidden bg-gradient-to-b from-white/[.025] to-transparent pt-24 pb-12">
      <div ref={contentRef} className="mx-auto max-w-3xl px-5 text-center md:px-12">
        <SectionLabel text="CONTACT" />
        <h1 className="mt-5 text-balance font-heading text-4xl font-medium leading-tight text-electric-white sm:text-5xl md:text-6xl">Let’s build what’s next.</h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-lunar-silver sm:text-lg sm:leading-8">Whether you are exploring a fellowship, partnership, or a new idea, we would like to hear from you.</p>
      </div>
    </section>
  );
}
