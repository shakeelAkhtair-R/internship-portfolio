
import { FileText, Download } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { documents } from '@/data/content';

export default function DailyLogbook() {
  const doc = documents[0];

  return (
    <SectionWrapper
      id="logbook"
      eyebrow="Original Documents"
      title="Daily Logbook"
    >
      <p className="text-sm text-navy-400 mb-8 max-w-2xl leading-relaxed">
        The student's original daily internship log is available for download.
        The document is not reproduced inside this website.
      </p>

      <div className="card p-6 md:p-8 max-w-2xl">
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-lg bg-navy-800 text-gold-300 flex items-center justify-center flex-shrink-0">
            <FileText size={26} />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-xl font-semibold text-navy-800 mb-2">
              {doc.title}
            </h3>

            <p className="text-sm text-navy-500 mb-5 leading-relaxed">
              {doc.description}
            </p>

            <a
              href={doc.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Download size={17} />
              {doc.buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
