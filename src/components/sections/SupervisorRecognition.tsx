
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { recognitionData } from '@/data/content';

const base = import.meta.env.BASE_URL;

const recognitionImages = [
  {
    src: `${base}images/supervisor-recognition-1.jpg`,
    alt: 'Supervisor recognition photo 1',
    title: 'Supervisor Recognition 1',
  },
  {
    src: `${base}images/supervisor-recognition-2.jpg`,
    alt: 'Supervisor recognition photo 2',
    title: 'Supervisor Recognition 2',
  },
];

export default function SupervisorRecognition() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <SectionWrapper
      id="recognition"
      eyebrow="Supervisor Statement"
      title={recognitionData.heading}
    >
      <p className="text-sm text-navy-400 mb-8 italic max-w-2xl">
        Recognition and appreciation from the internship supervisor.
      </p>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {recognitionImages.map((image) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelectedImage(image.src)}
            className="group relative block w-full overflow-hidden rounded-2xl border border-navy-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-4"
            aria-label={`View ${image.title} in full size`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="mx-auto max-h-[75vh] w-full object-contain"
            />
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-navy-900/85 px-4 py-2 text-sm font-medium text-white transition group-hover:bg-navy-800">
              <ZoomIn size={17} /> View full size
            </span>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setSelectedImage(null);
          }}
          role="presentation"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Close enlarged recognition photo"
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged supervisor recognition paper"
            onClick={(event) => event.stopPropagation()}
            className="max-h-[92vh] max-w-full rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </SectionWrapper>
  );
}
