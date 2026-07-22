import { ScrollReveal } from '@/components/ScrollReveal';
import { Linkedin, Twitter } from 'lucide-react';

const contacts = [
  {
    label: 'EMAIL US',
    value: 'hello@qubeterra.org',
    type: 'text' as const,
  },
  {
    label: 'HEADQUARTERS',
    value: 'Cairo, Egypt | Dubai, UAE',
    type: 'text' as const,
  },
  {
    label: 'SOCIAL',
    value: '',
    type: 'social' as const,
  },
];

export function DirectContact() {
  return (
    <section className="relative z-[1] pb-20 md:pb-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <ScrollReveal pattern="B">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map((contact) => (
              <div
                key={contact.label}
                className="sr-item rounded-xl p-8 text-center"
                style={{
                  background: 'rgba(217, 221, 226, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(217, 221, 226, 0.1)',
                }}
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-text mb-4 block">
                  {contact.label}
                </span>
                {contact.type === 'text' ? (
                  <span className="font-heading text-base text-electric-white">
                    {contact.value}
                  </span>
                ) : (
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href="#"
                      className="text-lunar-silver hover:text-electric-white transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={24} strokeWidth={1.5} />
                    </a>
                    <a
                      href="#"
                      className="text-lunar-silver hover:text-electric-white transition-colors duration-300"
                      aria-label="Twitter / X"
                    >
                      <Twitter size={24} strokeWidth={1.5} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
