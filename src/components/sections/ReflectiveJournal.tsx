import { useState } from 'react';
import { ChevronDown, Calendar, Lightbulb, ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { journalEntries } from '@/data/content';

export default function ReflectiveJournal() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper
      id="journal"
      eyebrow="Weekly Reflections"
      title="Reflective Journal"
    >
      <p className="text-sm text-navy-400 mb-8 italic max-w-2xl">
        Five weekly reflections preserving the original dates and wording. Three
        reflection dates (October 2, 9, and 14) fall after the stated
        internship period of September 1–30, 2026.
      </p>

      <div className="space-y-4">
        {journalEntries.map((entry, idx) => {
          const isOpen = openIndex === idx;
          return (
            <article
              key={idx}
              className="card overflow-hidden"
              style={{
                borderColor: isOpen ? '#dfc077' : undefined,
              }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-ivory-100"
                aria-expanded={isOpen}
                aria-controls={`journal-content-${idx}`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-full bg-navy-800 text-gold-300 flex items-center justify-center flex-shrink-0 font-serif text-sm font-semibold">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-lg font-semibold text-navy-800 leading-tight">
                      {entry.week}
                    </h3>
                    <p className="flex items-center gap-1.5 text-xs text-navy-400 mt-0.5">
                      <Calendar size={12} />
                      {entry.date}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-gold-600 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  id={`journal-content-${idx}`}
                  className="px-6 pb-6 animate-fade-in"
                >
                  <div className="border-t border-navy-100 pt-5 pl-0 sm:pl-16">
                    <div className="mb-5">
                      <p className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold-600 font-medium mb-2">
                        <Lightbulb size={14} />
                        What did I learn this week?
                      </p>
                      <p className="text-sm md:text-base text-navy-600 leading-relaxed font-sans">
                        {entry.learned}
                      </p>
                    </div>
                    <div>
                      <p className="flex items-center gap-2 text-xs uppercase tracking-wider text-navy-400 font-medium mb-2">
                        <ArrowRight size={14} />
                        What can I do differently next week?
                      </p>
                      <p className="text-sm md:text-base text-navy-600 leading-relaxed font-sans">
                        {entry.nextWeek}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
