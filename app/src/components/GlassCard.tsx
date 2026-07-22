import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  accentColor?: string;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, accentColor, className = '', hover = true }: GlassCardProps) {
  return (
    <div
      className={`rounded-xl p-8 ${hover ? 'glass-card' : ''} ${className}`}
      style={{
        background: 'rgba(217, 221, 226, 0.05)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(217, 221, 226, 0.1)',
        borderTop: accentColor ? `2px solid ${accentColor}` : '1px solid rgba(217, 221, 226, 0.1)',
        transition: 'all 0.4s ease',
      }}
    >
      {children}
    </div>
  );
}
