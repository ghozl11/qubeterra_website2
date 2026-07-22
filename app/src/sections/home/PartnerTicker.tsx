const partners = [
  'Nature Eye Labs',
  'ITU',
  'Huawei',
  'Ain Shams University',
  'Smart and Future Cities Laboratory',
];

export function PartnerTicker() {
  const tickerContent = partners
    .map((p) => `<span class="font-mono text-xs uppercase tracking-[0.1em] text-muted-text whitespace-nowrap">${p}</span>`)
    .join('<span class="text-[rgba(138,146,157,0.3)] mx-6">•</span>');

  return (
    <section className="relative z-[1] py-10 border-t border-[rgba(217,221,226,0.06)] overflow-hidden">
      <p className="text-center font-mono text-[11px] uppercase tracking-[0.1em] text-muted-text mb-6">
        Trusted by institutions worldwide
      </p>
      <div className="relative overflow-hidden hover:[&>div]:[animation-play-state:paused]">
        <div
          className="flex items-center animate-ticker whitespace-nowrap"
          dangerouslySetInnerHTML={{
            __html: tickerContent + '<span class="text-[rgba(138,146,157,0.3)] mx-6">•</span>' + tickerContent + '<span class="text-[rgba(138,146,157,0.3)] mx-6">•</span>',
          }}
        />
      </div>
    </section>
  );
}
