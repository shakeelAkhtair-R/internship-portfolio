import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function SectionWrapper({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 scroll-mt-20">
      <div className="section-container">
        <div className="mb-10 md:mb-14">
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="section-heading">{title}</h2>
          <div className="w-16 h-px bg-gold-400 mt-4" aria-hidden="true" />
        </div>
        {children}
      </div>
    </section>
  );
}
