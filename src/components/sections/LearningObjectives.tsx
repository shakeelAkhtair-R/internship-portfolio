import { Target } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { learningObjectives } from '@/data/content';

export default function LearningObjectives() {
  return (
    <SectionWrapper
      id="objectives"
      eyebrow="What I Set Out to Learn"
      title="Learning Objectives"
    >
      <p className="text-sm text-navy-400 mb-8 italic max-w-2xl">
        These learning themes are drawn from the documented weekly reflections.
        They are not presented as a verified official university rubric.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {learningObjectives.map((objective, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-5 card card-hover animate-fade-in-up"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="w-10 h-10 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center flex-shrink-0">
              <Target size={18} className="text-gold-600" />
            </div>
            <p className="text-sm text-navy-600 leading-relaxed pt-2">
              {objective}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
