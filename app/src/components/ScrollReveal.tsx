import { useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Pattern = 'A' | 'B' | 'C';

interface ScrollRevealProps {
  children: ReactNode;
  pattern?: Pattern;
  delay?: number;
  stagger?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  pattern = 'A',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animateChildren = el.querySelectorAll('.sr-item');
    const targets = animateChildren.length > 0 ? animateChildren : el;

    let anim: gsap.core.Tween;

    if (pattern === 'A') {
      gsap.set(targets, { opacity: 0, y: 30 });
      anim = gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    } else if (pattern === 'B') {
      gsap.set(targets, { opacity: 0, y: 30 });
      anim = gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    } else if (pattern === 'C') {
      gsap.set(targets, { opacity: 0, scale: 0.95 });
      anim = gsap.to(targets, {
        opacity: 1,
        scale: 1,
        duration: 1.0,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }

    return () => {
      if (anim) anim.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [pattern, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
