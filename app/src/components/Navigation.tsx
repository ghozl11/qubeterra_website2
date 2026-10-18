import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Domains', path: '/domains' },
  { label: 'Fellowships', path: '/fellowships' },
  { label: 'Achievements', path: '/nextgen-ai-fellowship-2026-achievements' },
  { label: 'Think Tank', path: '/consultancy' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <nav aria-label="Main navigation" className={`fixed inset-x-0 top-0 z-[100] h-[72px] transition-colors duration-300 ${scrolled || mobileOpen ? 'border-b border-white/10 bg-[rgba(5,7,10,0.92)] backdrop-blur-xl' : 'border-b border-transparent bg-transparent'}`}>
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-5 md:px-12">
          <Link to="/" onClick={closeMenu} className="flex min-w-0 items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-quantum-blue" aria-label="Qubeterra home">
            <img src="/images/new/qubeterra_horizontal_hq.png" alt="Qubeterra Institute" className="h-10 w-[168px] object-cover" />
          </Link>
          <div className="hidden items-center gap-4 lg:flex xl:gap-6">
            {navLinks.map((link) => <Link key={link.path} to={link.path} onClick={closeMenu} aria-current={location.pathname === link.path ? 'page' : undefined} className={`whitespace-nowrap border-b-2 pb-1 font-mono text-[10px] uppercase tracking-[.07em] transition-colors xl:text-[11px] ${location.pathname === link.path ? 'border-quantum-blue text-quantum-blue' : 'border-transparent text-lunar-silver hover:text-electric-white'}`}>{link.label}</Link>)}
            <Link to="/contact" onClick={closeMenu} className="whitespace-nowrap rounded-lg bg-quantum-blue px-5 py-2.5 font-heading text-[13px] font-medium text-deep-space transition-colors hover:bg-[#33C2FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-quantum-blue">Join Us</Link>
          </div>
          <button type="button" onClick={() => setMobileOpen((open) => !open)} className="rounded-md p-2 text-electric-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-quantum-blue lg:hidden" aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileOpen} aria-controls="mobile-navigation">
            {mobileOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
          </button>
        </div>
      </nav>
      <div id="mobile-navigation" className={`fixed inset-0 z-[99] bg-[rgba(5,7,10,0.98)] backdrop-blur-2xl transition-opacity duration-300 lg:hidden ${mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`} aria-hidden={!mobileOpen}>
        <div className="mx-auto flex min-h-full max-w-md flex-col items-stretch justify-center gap-2 px-8 pt-16">
          {navLinks.map((link) => <Link key={link.path} to={link.path} onClick={closeMenu} tabIndex={mobileOpen ? 0 : -1} aria-current={location.pathname === link.path ? 'page' : undefined} className={`rounded-lg px-4 py-3 font-heading text-xl transition-colors ${location.pathname === link.path ? 'bg-white/[.05] text-quantum-blue' : 'text-electric-white hover:bg-white/[.05] hover:text-quantum-blue'}`}>{link.label}</Link>)}
          <Link to="/contact" onClick={closeMenu} tabIndex={mobileOpen ? 0 : -1} className="mt-4 rounded-lg bg-quantum-blue px-5 py-3 text-center font-heading text-sm font-medium text-deep-space">Join Us</Link>
        </div>
      </div>
    </>
  );
}
