import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SectionLabel } from '@/components/SectionLabel';

export function FellowshipsHero() {
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(labelRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.2);
    if (headingRef.current) {
      const text = headingRef.current.textContent || '';
      headingRef.current.innerHTML = '';
      const chars = text.split('').map((char) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        headingRef.current!.appendChild(span);
        return span;
      });
      gsap.set(chars, { y: 60 });
      tl.to(chars, { opacity: 1, y: 0, duration: 0.6, stagger: 0.02 }, 0.4);
    }
    tl.fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.8);
    return () => { tl.kill(); };
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/fellowship-lab.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[rgba(5,7,10,0.7)]" />
      </div>
      <div className="relative z-[1] max-w-[800px] mx-auto px-5 text-center pt-[72px]">
        <div ref={labelRef} className="opacity-0 mb-6">
          <SectionLabel text="ADVANCED FELLOWSHIPS" />
        </div>
        <h1 ref={headingRef} className="font-heading font-medium text-[32px] md:text-[52px] lg:text-[64px] text-electric-white leading-[1.05] mb-6">
          Rigorous programs. Real outcomes.
        </h1>
        <p ref={subRef} className="font-body text-base md:text-lg text-lunar-silver max-w-[700px] mx-auto opacity-0">
          Our fellowships are not courses. They are intensive, hands-on immersions
          designed to transform participants into production-ready builders.
        </p>
      </div>
    </section>
  );
}
