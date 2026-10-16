const partners = [
  { name: 'Nature Eye Labs', image: '/images/new/nature_eye_logo.png' },
  { name: 'ITU', image: '/images/new/itu_logo.png' },
  { name: 'Huawei', image: '/images/new/Huawei_Standard_logo.png' },
];

export function PartnerTicker() {
  const ticker = [...partners, ...partners];
  return (
    <section className="relative z-[1] py-12 md:py-16 border-y border-[rgba(217,221,226,0.08)] overflow-hidden bg-[rgba(217,221,226,0.025)]">
      <p className="text-center font-mono text-[11px] uppercase tracking-[0.14em] text-muted-text mb-8">In collaboration with</p>
      <div className="relative overflow-hidden hover:[&>div]:[animation-play-state:paused]">
        <div className="flex w-max items-center gap-5 animate-ticker">
          {ticker.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="flex h-20 min-w-[180px] items-center justify-center rounded-xl border border-white/10 bg-white/[.04] px-6">
              <img src={partner.image} alt={partner.name} className="max-h-10 max-w-[140px] object-contain" />
              <span className="sr-only">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
