import { PARTNER_LINKS } from '@/lib/site-info';

const supportingOrganizations = [
  { name: 'International Telecommunication Union (ITU)', image: '/images/new/itu_logo.png', href: PARTNER_LINKS.itu, imageClass: 'h-[4.25rem] w-[4.25rem]' },
  { name: 'Huawei', image: '/images/new/Huawei_Standard_logo.png', href: PARTNER_LINKS.huawei, imageClass: 'h-14 w-36' },
  { name: 'University of Chemistry and Technology, Prague', image: '/images/logos/logo-uct-center-basic-inv-1.png', href: PARTNER_LINKS.uctPrague, imageClass: 'h-16 w-36' },
  { name: 'University of Cambridge', image: '/images/logos/university-of-cambridge-tight.png', href: PARTNER_LINKS.cambridge, imageClass: 'h-16 w-36' },
  { name: 'Massachusetts Institute of Technology (MIT)', image: '/images/logos/mit-tight.png', href: PARTNER_LINKS.mit, imageClass: 'h-16 w-36' },
  { name: 'Stanford University', image: '/images/logos/stanford-tight.png', href: PARTNER_LINKS.stanford, imageClass: 'h-14 w-40' },
  { name: 'Esri', image: '/images/logos/logo_esri_white-removebg-preview.png', href: PARTNER_LINKS.esri, imageClass: 'h-14 w-36' },
  { name: 'Nature Eye Labs', image: '/images/new/nature_eye_logo_trim.png', imageClass: 'h-16 w-24' },
];

function OrganizationLogo({ name, image, href, imageClass, isDuplicate = false }: (typeof supportingOrganizations)[number] & { isDuplicate?: boolean }) {
  const logo = (
    <img
      src={image}
      alt={isDuplicate ? '' : name}
      className={`${imageClass} partner-logo object-contain opacity-85 transition-opacity duration-300 group-hover:opacity-100`}
      loading="eager"
      decoding="async"
    />
  );

  return (
    <li aria-hidden={isDuplicate || undefined} className="group flex h-28 w-48 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] px-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors duration-300 hover:border-quantum-blue/35 hover:bg-white/[0.07] sm:w-52">
      {href ? (
        <a href={href} tabIndex={isDuplicate ? -1 : undefined} target="_blank" rel="noopener noreferrer" aria-label={`${name} official website, opens in a new tab`} className="flex h-full w-full items-center justify-center rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-quantum-blue">
          {logo}
        </a>
      ) : logo}
    </li>
  );
}

export function PartnerTicker() {
  return (
    <section aria-labelledby="supporting-organizations" className="relative z-[1] border-y border-white/10 bg-[#07111d] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-12">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-quantum-blue sm:text-xs">Working together</p>
            <h2 id="supporting-organizations" className="mt-2 font-heading text-2xl font-medium text-electric-white sm:text-3xl">Organizations we work with</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-muted-text">Organizations and institutions that work with Qubeterra and trust our work.</p>
        </div>

        <div
          className="partner-marquee mt-8 rounded-3xl border border-white/[0.07] bg-[#050c14]/70 py-4"
          role="region"
          aria-label="Organizations we work with"
          tabIndex={0}
        >
          <div className="partner-marquee-track">
            <ul className="partner-marquee-group" aria-label="Organizations featured in the logo strip">
              {supportingOrganizations.map((organization) => (
                <OrganizationLogo key={organization.name} {...organization} />
              ))}
            </ul>
            <ul className="partner-marquee-group" aria-hidden="true">
              {supportingOrganizations.map((organization) => (
                <OrganizationLogo key={organization.name} {...organization} isDuplicate />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
