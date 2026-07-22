import { ScrollReveal } from '@/components/ScrollReveal';

const domains = [
  {
    num: '01',
    name: 'Quantum Computing',
    desc: 'Building quantum-literate workforces for the industries of tomorrow. Our curriculum covers quantum algorithms, quantum cryptography, and hybrid classical-quantum systems — with a focus on applications in finance, logistics, and secure communications for emerging markets.',
    tags: ['Quantum Algorithms', 'Q Cryptography', 'Hybrid Systems'],
    image: '/images/domains-quantum.jpg',
  },
  {
    num: '02',
    name: 'Robotics & Autonomous Systems',
    desc: 'From industrial automation to autonomous exploration systems. We train engineers in robot design, SLAM navigation, sensor fusion, and autonomous decision-making — addressing manufacturing, agriculture, and infrastructure inspection challenges across the continent.',
    tags: ['SLAM', 'Sensor Fusion', 'Autonomous Nav', 'Industrial Automation'],
    image: '/images/domains-robotics.jpg',
  },
  {
    num: '03',
    name: 'AI & Intelligent Agents',
    desc: 'Enterprise-grade AI capability building for the Global South. Our programs cover large language models, multi-agent systems, RAG architectures, and responsible AI deployment — equipping teams to build and govern AI systems that serve their communities.',
    tags: ['LLMs', 'Multi-Agent', 'RAG', 'Responsible AI'],
    image: '/images/domains-ai.jpg',
  },
  {
    num: '04',
    name: 'Computer Vision',
    desc: 'Visual intelligence systems for agriculture, healthcare, and security. From object detection and semantic segmentation to 3D reconstruction and medical imaging analysis — building practical CV pipelines that work with regional data and constraints.',
    tags: ['Object Detection', 'Segmentation', 'Medical Imaging', '3D Reconstruction'],
    image: '/images/domains-cv.jpg',
  },
  {
    num: '05',
    name: 'Remote Sensing Applications',
    desc: 'Satellite-powered insights for climate, urban planning, and resource management. We train specialists in SAR processing, multispectral analysis, change detection, and GIS integration — turning orbital data into actionable intelligence for governments and enterprises.',
    tags: ['SAR', 'Multispectral', 'Change Detection', 'GIS Integration'],
    image: '/images/domains-remote.jpg',
  },
];

export function DomainCards() {
  return (
    <section className="relative z-[1] py-20 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 space-y-8">
        {domains.map((domain, i) => (
          <ScrollReveal key={domain.num} pattern="A" delay={i * 0.15}>
            <div
              className="sr-item rounded-xl p-8 md:p-12"
              style={{
                background: 'rgba(217, 221, 226, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(217, 221, 226, 0.1)',
              }}
            >
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  i % 2 === 1 ? 'md:direction-rtl' : ''
                }`}
              >
                {/* Text */}
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <span className="font-mono text-xs text-muted-text mb-2 block">
                    {domain.num}
                  </span>
                  <h3 className="font-heading font-medium text-[28px] md:text-[36px] text-electric-white leading-[1.1] mb-4">
                    {domain.name}
                  </h3>
                  <p className="font-body text-sm md:text-base text-lunar-silver leading-[1.7] mb-6">
                    {domain.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {domain.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase px-3 py-1.5 rounded"
                        style={{
                          border: '1px solid rgba(217, 221, 226, 0.15)',
                          color: '#8A929D',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="font-body font-medium text-sm text-quantum-blue cursor-pointer hover:underline">
                    Explore Curriculum →
                  </span>
                </div>

                {/* Image */}
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <img
                    src={domain.image}
                    alt={domain.name}
                    className="w-full aspect-[4/3] object-cover rounded-xl img-tech"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
