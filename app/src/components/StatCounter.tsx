import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StatCounterProps {
  target: number;
  suffix?: string;
  label: string;
}

export function StatCounter({ target, suffix = '', label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { value: 0 };

    const anim = gsap.to(obj, {
      value: target,
      duration: 2.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
      onUpdate: () => {
        setDisplayValue(Math.round(obj.value));
      },
    });

    return () => {
      anim.kill();
    };
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <span
        ref={numberRef}
        className="font-mono text-[32px] md:text-[48px] lg:text-[56px] font-medium text-electric-white leading-none"
      >
        {displayValue.toLocaleString()}{suffix}
      </span>
      <p className="mt-3 text-muted-text text-sm uppercase tracking-wider font-body">
        {label}
      </p>
    </div>
  );
}
