import { ValidationError, useForm } from '@formspree/react';
import { Mail } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CONTACT_EMAIL } from '@/lib/site-info';

const formInputClass = 'w-full rounded-lg border border-white/15 bg-white/[.04] px-4 py-3.5 text-sm text-lunar-silver placeholder:text-muted-text focus:border-quantum-blue focus:outline-none focus:ring-2 focus:ring-quantum-blue/30';
const labelClass = 'mb-2 block font-mono text-[11px] uppercase tracking-[.05em] text-muted-text';
const FORMSPREE_FORM_ID = 'xqpejzbo';

type ContactFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForms() {
  const [state, handleSubmit] = useForm<ContactFields>(FORMSPREE_FORM_ID);

  return (
    <section className="relative z-[1] py-16 md:py-24" aria-labelledby="contact-form-title">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-12 lg:gap-14">
        <ScrollReveal pattern="A">
          <div className="pt-2">
            <span className="section-label">START A CONVERSATION</span>
            <h2 id="contact-form-title" className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-electric-white sm:text-4xl">Tell us what you’re working toward.</h2>
            <p className="mt-5 text-pretty text-base leading-7 text-lunar-silver">Send a partnership or general inquiry directly to the Qubeterra team. The team can follow up with you by email.</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-6 inline-flex items-center gap-2 text-sm text-quantum-blue underline-offset-4 hover:underline"><Mail size={16} aria-hidden="true" />{CONTACT_EMAIL}</a>
          </div>
        </ScrollReveal>
        <ScrollReveal pattern="C" delay={0.1}>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 border-t-2 border-t-quantum-blue bg-white/[.04] p-6 sm:p-8 md:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={labelClass}>Your name</label>
                <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={120} className={formInputClass} placeholder="Full name" />
                <ValidationError field="name" errors={state.errors} className="mt-2 text-xs leading-5 text-rose-300" />
              </div>
              <div>
                <label htmlFor="contact-email" className={labelClass}>Email address</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className={formInputClass} placeholder="you@example.com" />
                <ValidationError field="email" errors={state.errors} className="mt-2 text-xs leading-5 text-rose-300" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-subject" className={labelClass}>Subject</label>
                <input id="contact-subject" name="subject" type="text" required maxLength={180} className={formInputClass} placeholder="Partnership inquiry, fellowship question, or another topic" />
                <ValidationError field="subject" errors={state.errors} className="mt-2 text-xs leading-5 text-rose-300" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-message" className={labelClass}>Message</label>
                <textarea id="contact-message" name="message" required minLength={10} maxLength={5000} rows={6} className={`${formInputClass} resize-y`} placeholder="Share a little about your inquiry…" />
                <ValidationError field="message" errors={state.errors} className="mt-2 text-xs leading-5 text-rose-300" />
              </div>
            </div>
            <button type="submit" disabled={state.submitting} className="mt-6 w-full rounded-lg bg-quantum-blue px-7 py-3.5 font-heading text-sm font-medium text-deep-space transition-colors hover:bg-[#33C2FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-quantum-blue disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">{state.submitting ? 'Sending…' : 'Send inquiry'}</button>
            {state.succeeded ? (
              <p role="status" aria-live="polite" className="mt-4 text-sm leading-6 text-lunar-silver">Thanks—your inquiry has been submitted. The Qubeterra team can follow up by email.</p>
            ) : state.errors ? (
              <p role="alert" aria-live="assertive" className="mt-4 text-sm leading-6 text-rose-300">We couldn’t submit your inquiry. Please review any field feedback and try again, or email us directly.</p>
            ) : null}
            <p className="mt-4 text-xs leading-5 text-muted-text">This form is processed by Formspree to deliver your message to Qubeterra. Please do not include sensitive personal information.</p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
