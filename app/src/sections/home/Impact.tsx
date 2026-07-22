import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';
import { StatCounter } from '@/components/StatCounter';

const stats = [
  { target: 120, suffix: '+', label: 'Projects Delivered' },
  { target: 45, suffix: '+', label: 'Countries Reached' },
  { target: 1, suffix: 'M+', label: 'Lives Impacted' },
  { target: 250, suffix: '+', label: 'Strategic Partners' },
];

const cityDots = [
  { name: 'Cairo', x: 54, y: 38 },
  { name: 'Dubai', x: 58, y: 40 },
  { name: 'Lagos', x: 46, y: 48 },
  { name: 'Nairobi', x: 57, y: 54 },
];

export function Impact() {
  return (
    <section
      className="relative z-[1] py-20 md:py-[120px]"
      style={{
        background:
          'radial-gradient(ellipse at center, rgba(0, 174, 239, 0.03) 0%, transparent 70%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <ScrollReveal pattern="A">
          <div className="text-center mb-16">
            <SectionLabel text="GLOBAL IMPACT" />
            <h2 className="font-heading font-medium text-[28px] md:text-[40px] lg:text-[48px] text-electric-white leading-[1.1] mt-4">
              Capability is our metric. Civilization is our scope.
            </h2>
          </div>
        </ScrollReveal>

        {/* Stats Row */}
        <ScrollReveal pattern="B">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-16">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`sr-item relative ${
                  i < stats.length - 1
                    ? 'md:after:content-[""] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:w-px md:after:h-16 md:after:bg-[rgba(217,221,226,0.1)]'
                    : ''
                }`}
              >
                <StatCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* World Map */}
        <ScrollReveal pattern="C">
          <div className="relative w-full">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Simplified world map outline - continents */}
              <g stroke="rgba(217, 221, 226, 0.15)" strokeWidth="1" fill="none">
                {/* North America */}
                <path d="M150 120 Q180 80 250 90 Q320 100 340 140 Q360 180 320 220 Q280 250 240 240 Q200 230 180 200 Q160 170 150 140 Z" />
                {/* South America */}
                <path d="M260 260 Q300 250 320 280 Q340 320 320 380 Q300 420 280 440 Q260 450 250 420 Q240 380 250 320 Z" />
                {/* Europe */}
                <path d="M460 100 Q500 80 540 90 Q560 100 570 130 Q560 160 530 170 Q500 180 480 160 Q460 140 460 120 Z" />
                {/* Africa */}
                <path d="M460 200 Q520 190 560 220 Q580 260 570 320 Q550 380 520 400 Q480 410 460 380 Q440 340 450 280 Z" />
                {/* Asia */}
                <path d="M580 80 Q680 60 780 90 Q860 120 880 180 Q890 240 840 280 Q780 310 700 300 Q640 290 600 260 Q560 220 570 160 Q580 120 580 80 Z" />
                {/* Australia */}
                <path d="M780 360 Q840 350 880 370 Q900 400 880 430 Q840 450 800 440 Q770 420 780 390 Z" />
              </g>

              {/* Grid lines */}
              <g stroke="rgba(217, 221, 226, 0.04)" strokeWidth="0.5">
                {[...Array(9)].map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 62.5} x2="1000" y2={i * 62.5} />
                ))}
                {[...Array(15)].map((_, i) => (
                  <line key={`v${i}`} x1={i * 71.4} y1="0" x2={i * 71.4} y2="500" />
                ))}
              </g>

              {/* City dots */}
              {cityDots.map((city) => (
                <g key={city.name}>
                  <circle
                    cx={(city.x / 100) * 1000}
                    cy={(city.y / 100) * 500}
                    r="4"
                    fill="#00AEEF"
                    className="animate-pulse-dot"
                  />
                  <text
                    x={(city.x / 100) * 1000}
                    y={(city.y / 100) * 500 + 18}
                    textAnchor="middle"
                    fill="#8A929D"
                    fontSize="10"
                    fontFamily="IBM Plex Mono, monospace"
                  >
                    {city.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
