import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';

export function FellowshipCTA() {
  return (
    <section className="relative z-[1] py-20 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 text-center">
        <ScrollReveal pattern="A"><div className="sr-item">
          <h2 className="font-heading font-medium text-[28px] md:text-[40px] lg:text-[44px] text-electric-white leading-[1.1] mb-8">Ready to build the future?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="px-8 py-3.5 bg-quantum-blue text-deep-space font-heading font-medium text-sm rounded-lg hover:bg-[#33C2FF] transition-all duration-300">Apply Now</Link>
            <Link to="/contact" className="px-8 py-3.5 border border-[rgba(217,221,226,0.3)] text-lunar-silver font-heading font-normal text-sm rounded-lg hover:border-[rgba(217,221,226,0.6)] hover:bg-[rgba(217,221,226,0.05)] transition-all duration-300">Request Program Guide</Link>
          </div>
        </div></ScrollReveal>
      </div>
    </section>
  );
}
