import { useState, type FormEvent } from 'react';
import { Mail } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CONTACT_EMAIL } from '@/lib/site-info';

const formInputClass = 'w-full rounded-lg border border-white/15 bg-white/[.04] px-4 py-3.5 text-sm text-lunar-silver placeholder:text-muted-text focus:border-quantum-blue focus:outline-none focus:ring-2 focus:ring-quantum-blue/30';
const labelClass = 'mb-2 block font-mono text-[11px] uppercase tracking-[.05em] text-muted-text';

export function ContactForms() {
  const [notice, setNotice] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const subject = String(data.get('subject') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    if (!name || !email || !subject || !message) {
      setNotice('Please complete all fields before preparing your email.');
      return;
    }
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const draftUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNotice('Your email app should open with a draft. The inquiry has not been sent unless you complete sending it in that app.');
    window.location.href = draftUrl;
  };

  return (
    <section className="relative z-[1] py-16 md:py-24" aria-labelledby="contact-form-title">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-12 lg:gap-14">
        <ScrollReveal pattern="A">
          <div className="pt-2">
            <span className="section-label">START A CONVERSATION</span>
            <h2 id="contact-form-title" className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-electric-white sm:text-4xl">Tell us what you’re working toward.</h2>
            <p className="mt-5 text-pretty text-base leading-7 text-lunar-silver">Use this form to prepare a partnership or general inquiry for the Qubeterra team. Your email application will handle the final send.</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-6 inline-flex items-center gap-2 text-sm text-quantum-blue underline-offset-4 hover:underline"><Mail size={16} aria-hidden="true" />{CONTACT_EMAIL}</a>
          </div>
        </ScrollReveal>
        <ScrollReveal pattern="C" delay={0.1}>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 border-t-2 border-t-quantum-blue bg-white/[.04] p-6 sm:p-8 md:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={labelClass}>Your name</label>
                <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={120} className={formInputClass} placeholder="Full name" />
              </div>
              <div>
                <label htmlFor="contact-email" className={labelClass}>Email address</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className={formInputClass} placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-subject" className={labelClass}>Subject</label>
                <input id="contact-subject" name="subject" type="text" required maxLength={180} className={formInputClass} placeholder="Partnership inquiry, fellowship question, or another topic" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-message" className={labelClass}>Message</label>
                <textarea id="contact-message" name="message" required minLength={10} maxLength={5000} rows={6} className={`${formInputClass} resize-y`} placeholder="Share a little about your inquiry…" />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full rounded-lg bg-quantum-blue px-7 py-3.5 font-heading text-sm font-medium text-deep-space transition-colors hover:bg-[#33C2FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-quantum-blue sm:w-auto">Prepare email</button>
            <p role="status" aria-live="polite" className="mt-4 min-h-6 text-sm leading-6 text-lunar-silver">{notice}</p>
            <p className="mt-2 text-xs leading-5 text-muted-text">Direct server-side delivery and spam protection are not configured yet. This form prepares an email draft; it does not confirm that a message was delivered.</p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
