interface SectionLabelProps {
  text: string;
}

export function SectionLabel({ text }: SectionLabelProps) {
  return (
    <span className="section-label">
      — {text}
    </span>
  );
}
