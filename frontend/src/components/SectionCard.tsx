import { ReactNode } from 'react';

interface SectionCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const SectionCard = ({ title, subtitle, children }: SectionCardProps) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        {subtitle ? <p className="text-sm text-slate-500">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
};

export default SectionCard;
