import { FileText, Download, AlertCircle } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { documents } from '@/data/content';
import { useFileExists } from '@/hooks/useFileExists';

export default function DailyLogbook() {
  const doc = documents[0];
  const { exists, loading } = useFileExists(doc.filePath);

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

            {!loading && exists && (
              <a
                href={doc.filePath}
                download
                className="btn-primary"
              >
                <Download size={17} />
                {doc.buttonLabel}
              </a>
            )}

            {!loading && !exists && (
              <div className="p-4 bg-gold-50 border border-gold-200 rounded-md">
                <div className="flex items-start gap-2 mb-3">
                  <AlertCircle
                    size={18}
                    className="text-gold-700 flex-shrink-0 mt-0.5"
                  />
                  <p className="text-sm text-navy-600 leading-relaxed">
                    The PDF file has not been added yet. Place the file at{' '}
                    <code className="text-navy-800 font-mono text-xs bg-ivory-200 px-1.5 py-0.5 rounded">
                      {doc.filePath}
                    </code>{' '}
                    and it will become available for download.
                  </p>
                </div>
                <a
                  href={doc.filePath}
                  download
                  className="btn-secondary opacity-60 pointer-events-none"
                  aria-disabled="true"
                >
                  <Download size={17} />
                  {doc.buttonLabel}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
