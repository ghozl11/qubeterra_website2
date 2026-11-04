import { useEffect } from 'react';

const pageMap: Record<string, { file: string; title: string; description: string }> = {
  overview: {
    file: 'index.html',
    title: 'Qubeterra Decision Labs — Intelligence before decisions',
    description: 'AI-augmented decision intelligence and strategic consultancy from Qubeterra Decision Labs.',
  },
  manufacturing: {
    file: 'manufacturing.html',
    title: 'Manufacturing & Industrial Operations — Qubeterra Decision Labs',
    description: 'Explore production-line and supply-chain decision scenarios with Qubeterra Decision Labs.',
  },
  fintech: {
    file: 'fintech.html',
    title: 'Financial Services & Fintech — Qubeterra Decision Labs',
    description: 'Understand merchants, segments, and digital-payment decisions with Qubeterra Decision Labs.',
  },
  healthcare: {
    file: 'healthcare.html',
    title: 'Healthcare Operations — Qubeterra Decision Labs',
    description: 'Explore patient-flow and facility-access decision scenarios with Qubeterra Decision Labs.',
  },
  policy: {
    file: 'policy.html',
    title: 'Government & Public Policy — Qubeterra Decision Labs',
    description: 'Prepare consultations and explore public-policy alternatives with Qubeterra Decision Labs.',
  },
  consumer: {
    file: 'consumer.html',
    title: 'Consumer Products — Qubeterra Decision Labs',
    description: 'Test product concepts with simulated survey and focus-group experiences.',
  },
};

interface DecisionLabsProps {
  page?: keyof typeof pageMap;
}

export function DecisionLabs({ page = 'overview' }: DecisionLabsProps) {
  const details = pageMap[page];

  useEffect(() => {
    document.title = details.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', details.description);
    return () => {
      document.title = 'Qubeterra Institute';
    };
  }, [details]);

  return (
    <section className="relative -mt-2 min-h-[calc(100svh-72px)] bg-[#04070D]" aria-label="Qubeterra Decision Labs">
      <iframe
        key={details.file}
        title={details.title}
        src={`/decision-labs/${details.file}`}
        className="block h-[calc(100svh-72px)] min-h-[760px] w-full border-0"
        loading="eager"
      />
    </section>
  );
}

export function DecisionLabsPage() {
  return <DecisionLabs page="overview" />;
}
