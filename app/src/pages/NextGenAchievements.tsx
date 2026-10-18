import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, CircleHelp } from 'lucide-react';
import { SectionLabel } from '@/components/SectionLabel';
import { CONTACT_EMAIL, PARTNER_LINKS } from '@/lib/site-info';

const verifiedResults = [
  { value: '100', label: 'fellows selected' },
  { value: '4', label: 'applied AI project tracks' },
  { value: 'Completed', label: 'team projects presented' },
];

const showcaseImages = [
  { src: '/images/new/showcase1.jpeg', alt: 'Project presentation material from the AI NextGen fellowship showcase' },
  { src: '/images/new/showcase2.jpeg', alt: 'Fellowship project presentation material showing a multi-agent opinion simulation platform' },
  { src: '/images/new/showcase3.png', alt: 'Technical concepts displayed in a fellowship project presentation' },
];

const tracks = [
  {
    number: '01',
    title: 'AI in Climate — Debating AI',
    description: 'Developing an AI-powered debate platform that simulates discussions around climate change and climate finance. The system uses multiple AI agents, retrieval-augmented generation (RAG), trusted sources, and interactive analytics to explore different perspectives, arguments, and areas of consensus.',
  },
  {
    number: '02',
    title: 'AI Regulation & Governance',
    description: 'Building AI-powered simulations to explore different perspectives on artificial intelligence regulation and governance. Projects draw on frameworks such as the EU AI Act and NIST AI Risk Management Framework to analyze regulatory approaches, stakeholder positions, and competing arguments.',
  },
  {
    number: '03',
    title: 'Transformers in AI',
    description: 'Exploring Transformer architectures and their underlying mechanisms through multi-agent simulations. The projects aim to make complex AI concepts more understandable through interactive representations of system components and their interactions.',
  },
  {
    number: '04',
    title: 'AI-Powered Opinion Simulation',
    description: 'Developing multi-agent systems that simulate diverse opinions and interactions around real-world topics. Agents can represent different personas, use tools and memory, exchange arguments, and model how opinions and collective perspectives evolve over time.',
  },
];

const internationalExperts = [
  {
    name: 'Dr. Ian Chew',
    role: 'Founder of Greenie Web · ClimateTech entrepreneur',
    description: 'Brings experience in technology, entrepreneurship, and climate innovation. Participated as an international expert in the fellowship’s closing activities.',
    image: '/images/new/expert2.png',
    alt: 'Dr. Ian Chew speaking during a Qubeterra AI NextGen Fellowship session',
  },
  {
    name: 'Shergaun Roserie',
    role: 'Technology entrepreneur · Engineer',
    description: 'Brings experience in technology development, innovation, and entrepreneurship. Participated as an international expert in the fellowship’s closing activities.',
    image: '/images/new/expert1.png',
    alt: 'Shergaun Roserie speaking during a Qubeterra AI NextGen Fellowship session',
  },
];

export default function NextGenAchievements() {
  return (
    <div className="relative z-[1]">
      <section className="py-24 sm:py-28 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-[1fr_0.92fr] md:px-12 lg:gap-16">
          <div>
            <SectionLabel text="AI NEXTGEN FELLOWSHIP · COMPLETED PROGRAM" />
            <h1 className="mt-5 text-balance font-heading text-4xl font-medium leading-tight text-electric-white sm:text-5xl md:text-6xl">
              Qubeterra AI NextGen Fellowship — From Learning to Real-World AI Innovation
            </h1>
            <p className="mt-7 text-pretty text-base leading-7 text-lunar-silver sm:text-lg sm:leading-8">
              The Qubeterra AI NextGen Fellowship brought together 100 emerging AI talents selected from approximately 300 applicants across the Middle East and the wider region.
            </p>
            <p className="mt-4 text-pretty text-base leading-7 text-lunar-silver/85">
              Fellows representing Egypt, Morocco, Tunisia, Syria, and other countries took part in collaborative, project-based learning across four applied AI tracks. They completed team projects, presented their work, and joined a growing fellowship community.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/nextgen-ai-fellowship-2026-graduates" className="inline-flex items-center gap-2 rounded-lg bg-quantum-blue px-6 py-3 text-sm font-medium text-deep-space transition-colors hover:bg-[#33C2FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-quantum-blue">
                View names from the graduation materials <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="rounded-lg border border-white/20 px-6 py-3 text-sm text-lunar-silver transition-colors hover:border-white/40 hover:text-electric-white">Contact Qubeterra</Link>
            </div>
          </div>
          <figure className="rounded-2xl border border-white/10 bg-white/[.025] p-3 sm:p-4">
            <a href="/images/new/group_photo.jpeg" target="_blank" rel="noopener noreferrer" aria-label="Open the full-resolution Qubeterra AI NextGen Fellowship graduation photograph in a new tab">
              <img src="/images/new/group_photo.jpeg" alt="Fellows and contributors gathered at the Qubeterra AI NextGen Fellowship graduation" className="h-auto max-h-[540px] w-full rounded-xl object-contain" fetchPriority="high" />
            </a>
            <figcaption className="px-2 pt-3 text-center text-xs leading-5 text-muted-text">The Qubeterra AI NextGen Fellowship graduation community. Open the image to view it at full size.</figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[.025] py-14 md:py-16" aria-label="Verified fellowship results">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 sm:gap-5 md:grid-cols-3 md:px-12">
          {verifiedResults.map((result) => <div key={result.label} className={`rounded-xl border border-white/10 bg-[#060b12]/70 p-5 text-center sm:p-7 ${result.value === 'Completed' ? 'col-span-2 md:col-span-1' : ''}`}><dt className="text-balance font-heading text-3xl font-medium text-electric-white sm:text-4xl">{result.value}</dt><dd className="mt-2 text-pretty text-xs leading-5 text-muted-text sm:text-sm">{result.label}</dd></div>)}
        </div>
        <p className="mx-auto mt-6 max-w-4xl px-5 text-center text-sm leading-6 text-lunar-silver/80 md:px-12">Selected fellows came from Egypt, Morocco, Tunisia, Syria, and other countries across the Middle East and wider region.</p>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <SectionLabel text="MAKING ADVANCED AI EDUCATION MORE ACCESSIBLE" />
              <h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-electric-white sm:text-4xl">Fully funded fellowship places</h2>
              <p className="mt-5 text-pretty text-sm leading-7 text-lunar-silver sm:text-base">
                Through the generous support of the International Telecommunication Union (ITU) and Huawei, the Qubeterra AI NextGen initiative was able to offer fully funded fellowship places to emerging AI talents from across the region. This support helped remove financial barriers to participation, enabling selected fellows to access advanced technical learning, international expertise, mentorship, and hands-on AI project development.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-5 rounded-2xl border border-white/10 bg-white/[.035] p-7 sm:flex-row sm:items-center sm:justify-around sm:p-10">
              <a href={PARTNER_LINKS.itu} target="_blank" rel="noopener noreferrer" aria-label="Visit the International Telecommunication Union official website" className="flex items-center justify-center rounded-lg p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-quantum-blue"><img src="/images/new/itu_logo.png" alt="International Telecommunication Union" className="h-20 w-20 object-contain" loading="lazy" /></a>
              <a href={PARTNER_LINKS.huawei} target="_blank" rel="noopener noreferrer" aria-label="Visit Huawei's official website" className="flex items-center justify-center rounded-lg p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-quantum-blue"><img src="/images/new/Huawei_Standard_logo.png" alt="Huawei" className="h-20 w-20 object-contain" loading="lazy" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/[.025] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-12">
          <div className="max-w-3xl">
            <SectionLabel text="PROJECT-BASED LEARNING" />
            <h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-electric-white sm:text-4xl md:text-5xl">Four tracks. Real-world AI challenges.</h2>
            <p className="mt-5 text-pretty text-base leading-7 text-lunar-silver">Fellows explored applied AI through these four project tracks, moving from technical concepts to collaborative, practical systems.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {tracks.map((track) => (
              <article key={track.number} className="rounded-2xl border border-white/10 bg-[#07111d]/80 p-6 sm:p-7">
                <p className="font-mono text-xs tracking-[0.16em] text-quantum-blue">TRACK {track.number}</p>
                <h3 className="mt-3 text-balance font-heading text-xl font-medium leading-snug text-electric-white sm:text-2xl">{track.title}</h3>
                <p className="mt-4 text-pretty text-sm leading-7 text-lunar-silver/85">{track.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="font-heading text-xl font-medium text-electric-white">Projects showcase</h3>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {showcaseImages.map((image) => (
                <figure key={image.src} className="overflow-hidden rounded-xl border border-white/10 bg-white/[.035]">
                  <img src={image.src} alt={image.alt} loading="lazy" className="aspect-[16/9] w-full object-cover" />
                  <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-5 text-muted-text">Projects showcase</figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="mt-8 flex gap-3 rounded-xl border border-amber-200/20 bg-amber-100/[.04] p-5" role="note">
            <CircleHelp className="mt-0.5 shrink-0 text-amber-100/80" size={19} aria-hidden="true" />
            <p className="text-sm leading-6 text-lunar-silver">The descriptions above present the four track themes and approaches. Team names, track-to-project assignments, and final deliverables can be added when those records are available.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-12">
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <SectionLabel text="OUTSTANDING TEAMS · FELLOWSHIP EXCELLENCE AWARDS" />
              <h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-electric-white sm:text-4xl">Recognition grounded in the program material.</h2>
              <p className="mt-5 text-pretty text-base leading-7 text-lunar-silver">Outstanding teams were recognized across all four tracks. The supplied materials include one Climate action recognition graphic; named teams and project records can be added when available.</p>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] p-3 sm:p-5">
              <img src="/images/new/best_in_climate_team.png" alt="Provided recognition graphic naming a best team in Climate action" className="h-auto w-full rounded-xl object-contain" loading="lazy" />
              <figcaption className="px-2 pt-4 text-sm leading-6 text-lunar-silver/80">The supplied graphic recognizes a “Best team in Climate action.” Team names and project details were not included in the material provided.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-white/[.025] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-12">
          <div className="max-w-3xl">
            <SectionLabel text="INTERNATIONAL EXPERTS AND MENTORS" />
            <h2 className="mt-4 text-balance font-heading text-3xl font-medium leading-tight text-electric-white sm:text-4xl">Global expertise. Practical knowledge. Regional impact.</h2>
            <p className="mt-5 text-pretty text-base leading-7 text-lunar-silver">The fellowship’s closing activities welcomed international experts with experience in climate innovation, technology, and entrepreneurship.</p>
          </div>
          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            {internationalExperts.map((expert) => (
              <article key={expert.name} className="overflow-hidden rounded-2xl border border-white/10 bg-[#07111d]/80">
                <img src={expert.image} alt={expert.alt} className="aspect-[16/9] w-full bg-[#080e17] object-contain" loading="lazy" />
                <div className="p-6 sm:p-7">
                  <SectionLabel text="INTERNATIONAL EXPERT · CLOSING ACTIVITIES" />
                  <h3 className="mt-3 font-heading text-2xl font-medium text-electric-white">{expert.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-quantum-blue">{expert.role}</p>
                  <p className="mt-4 text-sm leading-7 text-lunar-silver/85">{expert.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-12">
          <div className="overflow-hidden rounded-2xl border border-quantum-blue/25 bg-[#06142d]/80">
            <a href="/images/new/group_photo.jpeg" target="_blank" rel="noopener noreferrer" aria-label="Open the full-resolution fellowship graduation group photo in a new tab">
              <img src="/images/new/group_photo.jpeg" alt="Fellows and contributors celebrating the Qubeterra AI NextGen Fellowship graduation" className="h-auto max-h-[720px] w-full object-contain" loading="lazy" />
            </a>
            <div className="p-7 sm:p-10 md:p-12">
              <SectionLabel text="GRADUATION AND COMMUNITY" />
              <h2 className="mt-4 text-balance font-heading text-3xl font-medium text-electric-white sm:text-4xl">Celebrating the next generation of AI innovators.</h2>
              <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-lunar-silver">Beyond technical learning, the fellowship created a collaborative community of emerging AI innovators from across the region. The graduation ceremony marked a journey of learning, teamwork, experimentation, and applied AI development.</p>
              <p className="mt-3 text-xs text-muted-text">Qubeterra AI NextGen Fellowship graduation. Open the image above to view it at full size.</p>
              <Link to="/nextgen-ai-fellowship-2026-graduates" className="mt-7 inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm text-lunar-silver transition-colors hover:border-white/40 hover:text-electric-white">View names from the graduation materials <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-muted-text sm:flex-row sm:items-center sm:justify-between md:px-12">
          <div className="flex items-start gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-quantum-blue" aria-hidden="true" /><p>Track descriptions and expert profiles are now listed. Team names, track-to-project assignments, and final deliverables can be added when confirmed.</p></div>
          <a href={`mailto:${CONTACT_EMAIL}`} className="shrink-0 text-quantum-blue underline-offset-4 hover:underline">Email {CONTACT_EMAIL}</a>
        </div>
      </section>
    </div>
  );
}
