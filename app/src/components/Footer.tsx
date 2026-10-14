import { Link } from 'react-router-dom';

const footerLinks = {
  Institute: [{ label: 'About', path: '/about' }, { label: 'Domains', path: '/domains' }, { label: 'Fellowships', path: '/fellowships' }, { label: 'Think Tank', path: '/consultancy' }],
  Connect: [{ label: 'Contact', path: '/contact' }, { label: 'Partnerships', path: '/contact' }, { label: 'Careers', path: '/contact' }],
  Resources: [{ label: 'Research', path: '/consultancy' }, { label: 'Blog', path: '/about' }, { label: 'FAQ', path: '/contact' }],
};
const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/qubeterra/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/qubeterra' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61592424611888' },
];
const partners = ['Nature Eye Labs', 'ITU', 'Huawei', 'Ain Shams University', 'Smart and Future Cities Laboratory'];

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-[rgba(217,221,226,0.06)]" style={{ background: 'rgba(217, 221, 226, 0.02)' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4"><span className="font-heading font-medium text-sm text-electric-white tracking-[0.15em] uppercase">QUBETERRA</span></Link>
            <p className="text-muted-text text-sm font-body leading-relaxed mb-5">Building Capabilities. Engineering Civilization.</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="text-muted-text text-[11px] font-mono uppercase tracking-[0.08em] hover:text-quantum-blue transition-colors">{social.label}</a>)}</div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => <div key={category}><h4 className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-text mb-4">{category}</h4><ul className="space-y-3">{links.map((link) => <li key={link.label}><Link to={link.path} className="text-lunar-silver text-sm font-body hover:text-electric-white transition-colors">{link.label}</Link></li>)}</ul></div>)}
        </div>
        <div className="border-t border-[rgba(217,221,226,0.06)] pt-8 mb-8"><p className="text-center font-mono text-[11px] uppercase tracking-[0.1em] text-muted-text mb-6">Trusted by institutions worldwide</p><div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">{partners.map((partner, i) => <span key={partner} className="flex items-center gap-4"><span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-text">{partner}</span>{i < partners.length - 1 && <span className="text-[rgba(138,146,157,0.3)] hidden md:inline">•</span>}</span>)}</div></div>
        <div className="border-t border-[rgba(217,221,226,0.06)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4"><p className="text-muted-text text-xs font-body">&copy; {new Date().getFullYear()} Qubeterra Institute. All rights reserved.</p><div className="flex gap-6"><span className="text-muted-text text-xs font-body">Privacy Policy</span><span className="text-muted-text text-xs font-body">Terms of Service</span></div></div>
      </div>
    </footer>
  );
}
