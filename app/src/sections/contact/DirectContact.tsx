import { ScrollReveal } from '@/components/ScrollReveal';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const contacts = [
  { label: 'EMAIL US', value: 'hello@qubeterra.org', type: 'text' as const },
  { label: 'OFFICES', value: 'Cairo, Egypt · Prague, Czech Republic', type: 'text' as const },
  { label: 'SOCIAL', value: '', type: 'social' as const },
];

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/qubeterra/', icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/qubeterra', icon: Linkedin },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61592424611888', icon: Facebook },
];

export function DirectContact() {
  return (
    <section className="relative z-[1] pb-20 md:pb-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <ScrollReveal pattern="B">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map((contact) => (
              <div key={contact.label} className="sr-item rounded-xl p-8 text-center" style={{ background: 'rgba(217, 221, 226, 0.05)', backdropFilter: 'blur(20px)', border: '1px solid rgba(217, 221, 226, 0.1)' }}>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-text mb-4 block">{contact.label}</span>
                {contact.type === 'text' ? <span className="font-heading text-base text-electric-white">{contact.value}</span> : <div className="flex items-center justify-center gap-5">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" className="text-lunar-silver hover:text-quantum-blue transition-colors duration-300" aria-label={label}><Icon size={22} strokeWidth={1.5} /></a>)}</div>}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
