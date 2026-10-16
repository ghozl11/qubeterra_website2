import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';

export function FellowshipCTA() {
  return (
    <section className="relative z-[1] py-20 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 text-center">
        <ScrollReveal pattern="A"><div className="sr-item">
          <h2 className="font-heading font-medium text-[28px] md:text-[40px] lg:text-[44px] text-electric-white leading-[1.1] mb-6">Interested in the next cohort?</h2>
          <p className="font-body text-base text-lunar-silver max-w-2xl mx-auto mb-8">The three-month fellowship is coming soon. Contact us to hear when applications open and learn more about the programme.</p>
          <Link to="/contact" className="inline-flex px-8 py-3.5 bg-quantum-blue text-deep-space font-heading font-medium text-sm rounded-lg hover:bg-[#33C2FF] transition-all duration-300">Contact Qubeterra</Link>
        </div></ScrollReveal>
      </div>
    </section>
  );
}
