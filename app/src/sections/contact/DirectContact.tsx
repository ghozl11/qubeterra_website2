import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CONTACT_EMAIL, ORGANIZATION_LOCATIONS, SOCIAL_LINKS } from '@/lib/site-info';

const socialIcons = { Instagram, Facebook, LinkedIn: Linkedin };

export function DirectContact() {
  return (
    <section className="relative z-[1] pb-20 md:pb-28" aria-labelledby="direct-contact-heading">
      <div className="mx-auto max-w-7xl px-5 md:px-12">
        <h2 id="direct-contact-heading" className="sr-only">Direct contact details</h2>
        <ScrollReveal pattern="B">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[.04] p-7 text-center">
              <Mail size={20} className="mx-auto mb-4 text-quantum-blue" aria-hidden="true" />
              <span className="mb-3 block font-mono text-[11px] uppercase tracking-[.1em] text-muted-text">Email</span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="break-words text-sm text-electric-white underline-offset-4 hover:text-quantum-blue hover:underline">{CONTACT_EMAIL}</a>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[.04] p-7 text-center">
              <span className="mb-4 block font-mono text-[11px] uppercase tracking-[.1em] text-muted-text">Locations</span>
              <p className="text-sm leading-6 text-electric-white">{ORGANIZATION_LOCATIONS[0]}<br />{ORGANIZATION_LOCATIONS[1]}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[.04] p-7 text-center">
              <span className="mb-4 block font-mono text-[11px] uppercase tracking-[.1em] text-muted-text">Follow Qubeterra</span>
              <div className="flex items-center justify-center gap-5">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = socialIcons[social.label as keyof typeof socialIcons];
                  return <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="rounded-md p-1 text-lunar-silver transition-colors hover:text-quantum-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-quantum-blue" aria-label={`${social.label} (opens in a new tab)`}><Icon size={22} strokeWidth={1.6} aria-hidden="true" /></a>;
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
