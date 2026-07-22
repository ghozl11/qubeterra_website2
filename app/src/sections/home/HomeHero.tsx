import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { SectionLabel } from '@/components/SectionLabel';

export function HomeHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Label fade in
    tl.fromTo(
      labelRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      0.2
    );

    // Headline character reveal
    if (headlineRef.current) {
      const text = headlineRef.current.textContent || '';
      headlineRef.current.innerHTML = '';
      const chars = text.split('').map((char) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        headlineRef.current!.appendChild(span);
        return span;
      });

      tl.to(
        chars,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.02,
          ease: 'power3.out',
        },
        0.4
      );
      gsap.set(chars, { y: 60 });
    }

    // Subheadline
    tl.fromTo(
      subRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.8
    );

    // CTAs
    tl.fromTo(
      ctaRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      1.0
    );

    // Scroll indicator
    tl.fromTo(
      scrollIndicatorRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      1.5
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero-earth.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(5, 7, 10, 0.5) 0%, rgba(5, 7, 10, 0.3) 40%, rgba(5, 7, 10, 0.85) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-[1] max-w-[900px] mx-auto px-5 text-center pt-[72px]">
        <div ref={labelRef} className="opacity-0 mb-6">
          <SectionLabel text="QUBETERRA INSTITUTE" />
        </div>

        <h1
          ref={headlineRef}
          className="font-heading font-medium text-[36px] md:text-[64px] lg:text-[80px] text-electric-white leading-[1.05] mb-6"
        >
          Forging Deep Tech for a Resilient Earth
        </h1>

        <p
          ref={subRef}
          className="font-body text-base md:text-lg text-lunar-silver max-w-[600px] mx-auto mb-10 opacity-0"
        >
          Empowering the Global South to build, not just consume, the future of
          technology.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
          <Link
            to="/fellowships"
            className="px-8 py-3.5 bg-quantum-blue text-deep-space font-heading font-medium text-sm rounded-lg hover:bg-[#33C2FF] hover:shadow-[0_0_25px_rgba(0,174,239,0.25)] transition-all duration-300"
          >
            Explore Fellowships
          </Link>
          <Link
            to="/consultancy"
            className="px-8 py-3.5 border border-[rgba(217,221,226,0.3)] text-lunar-silver font-heading font-normal text-sm rounded-lg hover:border-[rgba(217,221,226,0.6)] hover:bg-[rgba(217,221,226,0.05)] transition-all duration-300"
          >
            Our Consultancy
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
          scrolled ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="relative w-[1px] h-10 bg-lunar-silver/40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-quantum-blue animate-scroll-bounce" />
        </div>
      </div>
    </section>
  );
}
