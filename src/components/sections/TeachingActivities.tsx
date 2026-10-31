import { BookOpen } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { teachingActivities, teachingContexts } from '@/data/content';

export default function TeachingActivities() {
  return (
    <SectionWrapper
      id="activities"
      eyebrow="What I Taught"
      title="Teaching Activities"
    >
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="text-xs uppercase tracking-wider text-navy-400 self-center mr-2">
          Documented contexts:
        </span>
        {teachingContexts.map((ctx) => (
          <span
            key={ctx}
            className="px-3 py-1 bg-navy-50 border border-navy-100 rounded-full text-xs font-medium text-navy-600"
          >
            {ctx}
          </span>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {teachingActivities.map((activity, idx) => (
          <article
            key={idx}
            className="card card-hover p-6 animate-fade-in-up group"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-navy-800 text-gold-300 flex items-center justify-center flex-shrink-0 font-serif text-sm font-semibold transition-transform group-hover:scale-105">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-navy-800 mb-2 leading-snug">
                  {activity.title}
                </h3>
                <p className="text-sm text-navy-500 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-xs text-navy-400 italic flex items-center gap-2">
        
        
      </p>
    </SectionWrapper>
  );
}
