import { ScrollReveal } from '@/components/ScrollReveal';

export function BrandManifesto() {
  return (
    <section
      className="relative z-[1] py-32 md:py-40"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, transparent 0%, rgba(5,7,10,0.8) 20%, rgba(5,7,10,0.8) 80%, transparent 100%),
          repeating-linear-gradient(0deg, rgba(217,221,226,0.03) 0px, rgba(217,221,226,0.03) 1px, transparent 1px, transparent 60px),
          repeating-linear-gradient(90deg, rgba(217,221,226,0.03) 0px, rgba(217,221,226,0.03) 1px, transparent 1px, transparent 60px)
        `,
      }}
    >
      <div className="max-w-[700px] mx-auto px-5 text-center">
        <ScrollReveal pattern="A">
          <div className="sr-item">
            <div className="w-[60px] h-px bg-[rgba(0,174,239,0.3)] mx-auto mb-12" />
            <blockquote className="font-heading font-light text-xl md:text-2xl lg:text-[32px] text-electric-white leading-[1.4] tracking-[-0.02em] mb-8">
              "The future will not be built by technology alone. It will be built by
              people capable of imagining, designing, governing, and sustaining it."
            </blockquote>
            <cite className="font-mono text-[11px] text-muted-text not-italic tracking-[0.1em] uppercase">
              — THE QUBETERRA MANIFESTO
            </cite>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
