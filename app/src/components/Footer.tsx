import { Link } from 'react-router-dom';

const footerLinks = {
  Institute: [
    { label: 'About', path: '/about' },
    { label: 'Domains', path: '/domains' },
    { label: 'Fellowships', path: '/fellowships' },
    { label: 'Think Tank', path: '/consultancy' },
  ],
  Connect: [
    { label: 'Contact', path: '/contact' },
    { label: 'Partnerships', path: '/contact' },
    { label: 'Careers', path: '/contact' },
  ],
  Resources: [
    { label: 'Research', path: '/consultancy' },
    { label: 'Blog', path: '/about' },
    { label: 'FAQ', path: '/contact' },
  ],
};

const partners = [
  'Nature Eye Labs',
  'ITU',
  'Huawei',
  'Ain Shams University',
  'Smart and Future Cities Laboratory',
];

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-[rgba(217,221,226,0.06)]" style={{ background: 'rgba(217, 221, 226, 0.02)' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 pt-20 pb-10">
        {/* Row 1: Logo + Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          {/* Logo & Tagline */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#F5F7FA" strokeWidth="2" fill="none" />
                <path d="M18 18L26 26" stroke="#F5F7FA" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="12" cy="12" r="3" fill="#00AEEF" />
              </svg>
              <span className="font-heading font-medium text-sm text-electric-white tracking-[0.15em] uppercase">
                QUBETERRA
              </span>
            </Link>
            <p className="text-muted-text text-sm font-body leading-relaxed">
              Building Capabilities. Engineering Civilization.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-text mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-lunar-silver text-sm font-body hover:text-electric-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Row 2: Divider + Partner Logos */}
        <div className="border-t border-[rgba(217,221,226,0.06)] pt-8 mb-8">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.1em] text-muted-text mb-6">
            Trusted by institutions worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {partners.map((partner, i) => (
              <span key={partner} className="flex items-center gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-text">
                  {partner}
                </span>
                {i < partners.length - 1 && (
                  <span className="text-[rgba(138,146,157,0.3)] hidden md:inline">•</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Row 3: Copyright */}
        <div className="border-t border-[rgba(217,221,226,0.06)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-text text-xs font-body">
            &copy; {new Date().getFullYear()} Qubeterra Institute. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-muted-text text-xs font-body hover:text-lunar-silver cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-muted-text text-xs font-body hover:text-lunar-silver cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
