import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionLabel } from '@/components/SectionLabel';

const tags = [
  'DPI Policy Research',
  'AI Strategy',
  'Lean Operations',
  'Engineering Consulting',
];

export function ThinkTankPreview() {
  return (
    <section className="relative z-[1] py-20 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Image */}
          <ScrollReveal pattern="C">
            <div className="relative rounded-xl overflow-hidden order-2 md:order-1">
              <img
                src="/images/consultancy-strategy.jpg"
                alt="Strategic policy meeting"
                className="w-full h-auto object-cover img-tech"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(0, 208, 184, 0.06) 0%, transparent 60%)',
                }}
              />
            </div>
          </ScrollReveal>

          {/* Right: Text */}
          <ScrollReveal pattern="A" delay={0.2}>
            <div className="order-1 md:order-2">
              <SectionLabel text="CONSULTANCY & THINK TANK" />
              <h2 className="font-heading font-medium text-[28px] md:text-[40px] lg:text-[48px] text-electric-white leading-[1.1] mt-4 mb-6">
                Strategic partners for governments building the digital future.
              </h2>
              <p className="font-body text-base md:text-lg text-lunar-silver leading-[1.7] mb-8">
                We advise governments and global institutions on Digital Public
                Infrastructure, AI integration strategies, lean digital operations,
                and engineering policy. Our research informs decisions that affect
                millions.
              </p>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-lunar-silver px-4 py-2 rounded"
                    style={{
                      border: '1px solid rgba(217, 221, 226, 0.15)',
                      background: 'rgba(217, 221, 226, 0.05)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to="/consultancy"
                className="inline-block px-8 py-3.5 border border-[rgba(217,221,226,0.3)] text-lunar-silver font-heading font-normal text-sm rounded-lg hover:border-[rgba(217,221,226,0.6)] hover:bg-[rgba(217,221,226,0.05)] transition-all duration-300"
              >
                Explore Our Consultancy
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
