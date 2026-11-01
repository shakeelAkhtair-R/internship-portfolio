
import { Sparkles, FileText, Download, ExternalLink } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { finalReflectionThemes } from '@/data/content';

const reportPath = `${import.meta.env.BASE_URL}documents/final-report.pdf`;

export default function FinalReflection() {
  return (
    <SectionWrapper
      id="reflection"
      eyebrow="Concluding Summary"
      title="Final Reflection"
    >
      <div className="p-6 md:p-8 card border-l-4 border-l-gold-400 mb-8">
        <p className="text-sm md:text-base text-navy-600 leading-relaxed">
          Across the five weeks of the internship, the reflections describe a
          consistent approach to teaching English grammar: explaining concepts
          clearly, adapting to students' different levels of prior knowledge,
          encouraging participation, and using regular revision to reinforce
          learning. The teaching progressed from parts of speech to tenses and
          then to active and passive voice, always moving from explanation to
          guided practice and independent examples. Constructive feedback
          during exercises, awareness of different learning needs across Grade
          9, Matriculation, and First Year, and a commitment to reflective
          practice were recurring themes throughout.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {finalReflectionThemes.map((theme, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-5 card card-hover animate-fade-in-up"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="w-10 h-10 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center flex-shrink-0">
              <Sparkles size={16} className="text-gold-600" />
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold text-navy-800 mb-1.5">
                {theme.title}
              </h3>
              <p className="text-sm text-navy-500 leading-relaxed">
                {theme.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-6 md:p-8 max-w-3xl">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 rounded-lg bg-navy-800 text-gold-300 flex items-center justify-center">
            <FileText size={24} />
          </div>
          <div>
            <h3 className="font-serif text-xl font-semibold text-navy-800">
              Final Internship Report
            </h3>
            <p className="text-sm text-navy-500">
              Complete internship report
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={reportPath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <ExternalLink size={17} />
            View Final Report
          </a>

          <a
            href={reportPath}
            download="final-report.pdf"
            className="btn-secondary"
          >
            <Download size={17} />
            Download Final Report
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
