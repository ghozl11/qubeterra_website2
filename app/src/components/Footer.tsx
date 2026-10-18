import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, ORGANIZATION_LOCATIONS, SOCIAL_LINKS } from '@/lib/site-info';

const footerLinks = {
  Explore: [
    { label: 'About Qubeterra', path: '/about' },
    { label: 'Deep Tech Domains', path: '/domains' },
    { label: 'Fellowships', path: '/fellowships' },
    { label: 'AI NextGen achievements', path: '/nextgen-ai-fellowship-2026-achievements' },
  ],
  Connect: [
    { label: 'Contact', path: '/contact' },
    { label: 'Partnerships', path: '/contact' },
    { label: 'Consultancy', path: '/consultancy' },
  ],
};

const socialIcons = { Instagram, Facebook, LinkedIn: Linkedin };

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-white/[.08] bg-white/[.02]">
      <div className="mx-auto max-w-7xl px-5 pt-14 pb-8 md:px-12 md:pt-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr] md:gap-8">
          <div>
            <Link to="/" className="inline-flex rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-quantum-blue" aria-label="Qubeterra home">
              <img src="/images/new/qubeterra_horizontal_hq.png" alt="Qubeterra Institute" className="h-10 w-[168px] object-cover" loading="lazy" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-lunar-silver">Engineering Tomorrow. Empowering Humanity.</p>
            <p className="mt-4 text-sm leading-6 text-muted-text">{ORGANIZATION_LOCATIONS.join(' | ')}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 inline-block break-words text-sm text-quantum-blue underline-offset-4 hover:underline">{CONTACT_EMAIL}</a>
            <div className="mt-5 flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`${social.label} (opens in a new tab)`} className="rounded-md p-1 text-muted-text transition-colors hover:text-quantum-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-quantum-blue"><Icon size={19} aria-hidden="true" /></a>;
              })}
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => <nav key={category} aria-label={`${category} footer links`}><h2 className="mb-4 font-mono text-[11px] uppercase tracking-[.12em] text-muted-text">{category}</h2><ul className="space-y-3">{links.map((link) => <li key={link.label}><Link to={link.path} className="text-sm text-lunar-silver transition-colors hover:text-electric-white">{link.label}</Link></li>)}</ul></nav>)}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/[.08] pt-6 text-xs text-muted-text sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Qubeterra Institute. All rights reserved.</p>
          <p>{ORGANIZATION_LOCATIONS.join(' | ')}</p>
        </div>
      </div>
    </footer>
  );
}
