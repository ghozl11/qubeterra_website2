import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';

const achievements = [
  { value: '~300', label: 'applications received' },
  { value: '100', label: 'fellows selected' },
  { value: '4', label: 'applied AI tracks' },
  { value: 'Completed', label: 'team projects presented' },
];

export function Impact() {
  return (
    <section className="relative z-[1] py-20 md:py-28" aria-labelledby="fellowship-impact-heading">
      <div className="mx-auto max-w-7xl px-5 md:px-12">
        <ScrollReveal pattern="A">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <SectionLabel text="QUBETERRA AI NEXTGEN FELLOWSHIP" />
            <h2 id="fellowship-impact-heading" className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-electric-white sm:text-4xl md:text-5xl">
              A regional cohort. Four applied tracks. Work brought to completion.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-lunar-silver sm:text-lg sm:leading-8">
              The completed fellowship selected emerging AI talent from approximately 300 applications across the Middle East and the wider region.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal pattern="B">
          <dl className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {achievements.map((achievement) => (
              <div key={achievement.label} className="rounded-xl border border-white/10 bg-white/[.035] px-4 py-7 text-center sm:px-6 sm:py-9">
                <dt className="font-mono text-[10px] uppercase tracking-[.12em] text-muted-text sm:text-xs">{achievement.label}</dt>
                <dd className={`mt-3 font-heading font-medium text-electric-white ${achievement.value === 'Completed' ? 'whitespace-nowrap text-xl sm:text-2xl md:text-3xl' : 'text-3xl sm:text-4xl md:text-5xl'}`}>{achievement.value}</dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
        <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-6 text-muted-text">
          Fellows represented Egypt, Morocco, Tunisia, Syria, and other countries. Outstanding teams were recognized across the four tracks.
        </p>
      </div>
    </section>
  );
}
