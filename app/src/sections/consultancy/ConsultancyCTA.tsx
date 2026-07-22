import { ScrollReveal } from '@/components/ScrollReveal';

export function ConsultancyCTA() {
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
            <h2 className="font-heading font-medium text-[24px] md:text-[36px] lg:text-[40px] text-electric-white leading-[1.1] mb-4 max-w-[600px] mx-auto">
              Partner with us to build the digital future.
            </h2>
            <p className="font-body text-sm md:text-base text-lunar-silver mb-10 max-w-[500px] mx-auto">
              We work with governments, international organizations, and enterprises
              ready to lead.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3.5 bg-quantum-blue text-deep-space font-heading font-medium text-sm rounded-lg hover:bg-[#33C2FF] hover:shadow-[0_0_25px_rgba(0,174,239,0.25)] transition-all duration-300">
                Request a Consultation
              </button>
              <button className="px-8 py-3.5 border border-[rgba(217,221,226,0.3)] text-lunar-silver font-heading font-normal text-sm rounded-lg hover:border-[rgba(217,221,226,0.6)] hover:bg-[rgba(217,221,226,0.05)] transition-all duration-300">
                View Our Research
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
