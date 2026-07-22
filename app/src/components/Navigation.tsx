import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Domains', path: '/domains' },
  { label: 'Fellowships', path: '/fellowships' },
  { label: 'Think Tank', path: '/consultancy' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center transition-all duration-400 ${
          scrolled
            ? 'bg-[rgba(5,7,10,0.85)] backdrop-blur-[20px] border-b border-[rgba(217,221,226,0.06)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="group-hover:opacity-90 transition-opacity">
              <circle cx="12" cy="12" r="10" stroke="#F5F7FA" strokeWidth="2" fill="none" />
              <path d="M18 18L26 26" stroke="#F5F7FA" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="12" cy="12" r="3" fill="#00AEEF" />
            </svg>
            <span className="font-heading font-medium text-sm text-electric-white tracking-[0.15em] uppercase">
              QUBETERRA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-mono text-[11px] uppercase tracking-[0.08em] transition-colors duration-300 pb-1 border-b-2 ${
                  location.pathname === link.path
                    ? 'text-quantum-blue border-quantum-blue'
                    : 'text-lunar-silver border-transparent hover:text-electric-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-quantum-blue text-deep-space font-heading font-medium text-[13px] rounded-lg hover:bg-[#33C2FF] hover:shadow-[0_0_20px_rgba(0,174,239,0.3)] transition-all duration-300"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-electric-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[99] md:hidden transition-all duration-400 ${
          mobileOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-[0.98] pointer-events-none'
        }`}
        style={{
          background: 'rgba(5, 7, 10, 0.97)',
          backdropFilter: 'blur(30px)',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-heading text-[28px] transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-quantum-blue'
                  : 'text-electric-white hover:text-quantum-blue'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 px-8 py-3 bg-quantum-blue text-deep-space font-heading font-medium text-base rounded-lg"
          >
            Join Us
          </Link>
        </div>
      </div>
    </>
  );
}
