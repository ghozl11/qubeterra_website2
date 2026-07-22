import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';

export function CTABanner() {
  return (
    <section className="relative z-[1] py-20 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <ScrollReveal pattern="C">
          <div
            className="sr-item rounded-xl py-16 md:py-20 px-8 md:px-12 text-center"
            style={{
              background: 'rgba(217, 221, 226, 0.03)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(217, 221, 226, 0.1)',
            }}
          >
            <h2 className="font-heading font-medium text-[28px] md:text-[40px] lg:text-[44px] text-electric-white leading-[1.1] mb-4 max-w-[700px] mx-auto">
              The future will not be built by technology alone.
            </h2>
            <p className="font-body text-base md:text-lg text-lunar-silver mb-10 max-w-[600px] mx-auto">
              It will be built by people capable of imagining, designing, governing,
              and sustaining it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/fellowships"
                className="px-8 py-3.5 bg-quantum-blue text-deep-space font-heading font-medium text-sm rounded-lg hover:bg-[#33C2FF] hover:shadow-[0_0_25px_rgba(0,174,239,0.25)] transition-all duration-300"
              >
                Join a Fellowship
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 border border-[rgba(217,221,226,0.3)] text-lunar-silver font-heading font-normal text-sm rounded-lg hover:border-[rgba(217,221,226,0.6)] hover:bg-[rgba(217,221,226,0.05)] transition-all duration-300"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
