import { PARTNER_LINKS } from '@/lib/site-info';

const supportingOrganizations = [
  { name: 'International Telecommunication Union (ITU)', image: '/images/new/itu_logo.png', href: PARTNER_LINKS.itu, detail: 'Supported fully funded AI NextGen Fellowship places.', imageClass: 'h-[4.25rem] w-[4.25rem]' },
  { name: 'Huawei', image: '/images/new/Huawei_Standard_logo.png', href: PARTNER_LINKS.huawei, detail: 'Supported fully funded AI NextGen Fellowship places.', imageClass: 'h-14 w-36' },
  { name: 'Faculty of Engineering, Ain Shams University', image: '/images/new/ainshams_engineering_logo.png', href: PARTNER_LINKS.ainShamsEngineering, detail: 'An academic partner of Qubeterra.', imageClass: 'h-14 w-full max-w-[16rem]' },
  { name: 'Nature Eye Labs', image: '/images/new/nature_eye_logo_trim.png', detail: 'Collaborates with Qubeterra on program activities.', imageClass: 'h-16 w-24' },
];

export function PartnerTicker() {
  return (
    <section aria-labelledby="supporting-organizations" className="relative z-[1] border-y border-white/10 bg-[#07111d] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-12">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-quantum-blue sm:text-xs">Working together</p>
            <h2 id="supporting-organizations" className="mt-2 font-heading text-2xl font-medium text-electric-white sm:text-3xl">Our partners</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-muted-text">Organizations connected with Qubeterra’s work across our programs and initiatives.</p>
        </div>
        <div role="list" aria-label="Qubeterra partners and collaborators" tabIndex={0} className="-mx-5 mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-quantum-blue [scrollbar-color:rgba(255,255,255,.2)_transparent] [scrollbar-width:thin] md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {supportingOrganizations.map((partner) => (
            <article key={partner.name} role="listitem" className="w-[min(78vw,17rem)] shrink-0 snap-start rounded-2xl border border-white/10 bg-white/[.035] p-4 transition-colors hover:border-quantum-blue/40 md:w-auto">
              <div className="flex h-24 w-full items-center justify-center rounded-xl bg-white p-3 sm:h-28">
                {partner.href ? (
                  <a href={partner.href} target="_blank" rel="noopener noreferrer" aria-label={`${partner.name} official website, opens in a new tab`} className="flex h-full w-full items-center justify-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-quantum-blue">
                    <img src={partner.image} alt={partner.name} className={`${partner.imageClass} object-contain`} loading="lazy" />
                  </a>
                ) : (
                  <img src={partner.image} alt={partner.name} className={`${partner.imageClass} object-contain`} loading="lazy" />
                )}
              </div>
              <h3 className="mt-4 font-heading text-sm font-medium leading-5 text-electric-white">{partner.name}</h3>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-quantum-blue">Qubeterra partner</p>
              <p className="mt-2 text-xs leading-5 text-muted-text">{partner.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
