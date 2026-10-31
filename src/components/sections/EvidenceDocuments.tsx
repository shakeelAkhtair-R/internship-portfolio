

import { useState } from 'react';
import { Camera, Image as ImageIcon, X } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

const base = import.meta.env.BASE_URL;

const weeks = [
  {
    title: 'Week 1',
    description: 'Internship activities and classroom observations.',
    photos: [`${base}images/week1/classroom1.jpeg`],
  },
  {
    title: 'Week 2',
    description: 'Teaching practice and learning activities.',
    photos: [
      `${base}images/week2/classroom1.jpeg`,
      `${base}images/week2/classroom2.jpeg`,
    ],
  },
  {
    title: 'Week 3',
    description: 'Classroom engagement and practical experience.',
    photos: [`${base}images/week3/activity.jpeg`],
  },
  {
    title: 'Week 4',
    description: 'Internship progress and teaching experience.',
    photos: [
      `${base}images/week4/teaching.jpeg`,
      `${base}images/week4/activity.jpeg`,
    ],
  },
];

export default function EvidenceDocuments() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <SectionWrapper
      id="evidence"
      eyebrow="Internship Gallery"
      title="Evidence & Documents"
    >
      <p className="text-sm text-navy-400 mb-10 max-w-2xl leading-relaxed">
        A visual record of internship activities, classroom
        observations, teaching practice, and weekly progress.
        Select any photograph to view it in full size.
      </p>

      <div className="space-y-12">
        {weeks.map((week) => (
          <section key={week.title}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center">
                <Camera size={21} className="text-gold-600" />
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-navy-800">
                  {week.title}
                </h3>
                <p className="text-sm text-navy-400">
                  {week.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {week.photos.map((photo, photoIndex) => (
                <button
                  type="button"
                  key={photo}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group text-left overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-gold-500"
                  aria-label={`View ${week.title} photo ${photoIndex + 1}`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-ivory-100">
                    <img
                      src={photo}
                      alt={`${week.title} internship evidence ${photoIndex + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4 flex items-center gap-3">
                    <ImageIcon size={18} className="text-gold-600 shrink-0" />
                    <span className="text-sm font-medium text-navy-700">
                      {week.title} — Photo {photoIndex + 1}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 p-4 flex items-center justify-center"
          onClick={() => setSelectedPhoto(null)}
          role="presentation"
        >
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-5 right-5 text-white hover:text-amber-300"
            aria-label="Close image"
          >
            <X size={30} />
          </button>

          <img
            src={selectedPhoto}
            alt="Full-size internship evidence"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </SectionWrapper>
  );
}
