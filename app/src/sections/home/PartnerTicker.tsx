import { PARTNER_LINKS } from '@/lib/site-info';

const supportingOrganizations = [
  { name: 'International Telecommunication Union', shortName: 'ITU', image: '/images/new/itu_logo.png', href: PARTNER_LINKS.itu },
  { name: 'Huawei', shortName: 'Huawei', image: '/images/new/Huawei_Standard_logo.png', href: PARTNER_LINKS.huawei },
];

export function PartnerTicker() {
  return (
    <section aria-labelledby="supporting-organizations" className="relative z-[1] border-y border-white/10 bg-[#07111d] py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-12">
        <p id="supporting-organizations" className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text sm:text-xs">
          Fully funded fellowship places supported by
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          {supportingOrganizations.map((partner) => (
            <a
              key={partner.shortName}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${partner.name} (opens in a new tab)`}
              className="flex min-h-20 min-w-[190px] items-center justify-center rounded-xl border border-white/10 bg-white/[.04] px-7 py-4 transition-colors hover:border-quantum-blue/40 hover:bg-white/[.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-quantum-blue"
            >
              <img src={partner.image} alt={partner.name} className="max-h-12 max-w-[150px] object-contain" />
            </a>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-lunar-silver/80">
          Their support made advanced learning, international expertise, mentorship, and practical AI project development accessible to selected fellows. Nature Eye Labs is credited separately as a program collaborator.
        </p>
        <div className="mt-5 flex items-center justify-center gap-3" aria-label="Program collaborator">
          <img src="/images/new/nature_eye_logo.png" alt="Nature Eye Labs" className="h-9 w-9 object-contain" />
          <span className="text-sm text-lunar-silver">Program collaborator: Nature Eye Labs</span>
        </div>
      </div>
    </section>
  );
}
