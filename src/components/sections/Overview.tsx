import { useState } from 'react';
import {
  ArrowRight,
  FileText,
  Clock,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import { studentInfo, progressData } from '@/data/content';
import { usePhoto } from '@/hooks/usePhoto';

type OverviewProps = {
  onNavigate: (id: string) => void;
};

export default function Overview({ onNavigate }: OverviewProps) {
  const { hasPhoto } = usePhoto(studentInfo.photoPath);
  const [photoError, setPhotoError] = useState(false);

  const showPhoto = hasPhoto && !photoError;

  return (
    <section id="overview" className="py-16 md:py-24 scroll-mt-20">
      <div className="section-container">
        {/* Hero area */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-3 animate-fade-in-up">
            <p className="section-eyebrow">Academic Internship Portfolio</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-navy-800 leading-tight mb-3">
              {studentInfo.primaryName}
            </h1>
            <p className="text-lg md:text-xl text-navy-600 font-sans mb-2">
              {studentInfo.degree}
            </p>
            <p className="text-base text-navy-400 font-sans mb-6">
              {studentInfo.institution}
            </p>
            <p className="text-sm md:text-base text-navy-500 leading-relaxed max-w-2xl mb-8">
              This portfolio documents a one-month teaching internship in
              English grammar, covering classroom activities, weekly reflective
              journals, a daily logbook, supporting evidence, and supervisor
              recognition. It is presented as part of the requirements for the
              BS English — Applied Linguistics programme.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('profile')}
                className="btn-primary"
              >
                Explore Portfolio
                <ArrowRight size={17} />
              </button>
              <button
                onClick={() => onNavigate('evidence')}
                className="btn-secondary"
              >
                <FileText size={17} />
                View Documents
              </button>
            </div>
          </div>

          {/* Portrait area */}
          <div className="lg:col-span-2 animate-fade-in">
            <div className="relative max-w-xs mx-auto">
              <div className="absolute -inset-3 border border-gold-300 rounded-2xl" aria-hidden="true" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-ivory-200 border border-navy-100 shadow-md">
                {showPhoto ? (
                  <img
                    src={studentInfo.photoPath}
                    alt={`${studentInfo.primaryName} portrait`}
                    className="w-full h-full object-cover"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-ivory-200 to-ivory-300">
                    <div className="w-24 h-24 rounded-full bg-navy-800 text-gold-300 flex items-center justify-center font-serif text-4xl font-semibold">
                      SA
                    </div>
                    <p className="text-xs text-navy-400 px-6 text-center max-w-[200px] leading-relaxed">
                      Place the student's photo at
                      <br />
                      <code className="text-navy-500 text-[11px]">
                        public/images/student-photo.jpg
                      </code>
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-4 text-center">
                <p className="font-serif text-lg text-navy-700">
                  {studentInfo.primaryName}
                </p>
                <p className="text-xs text-gold-600 uppercase tracking-wider">
                  Internship Period: {studentInfo.internshipPeriod}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress dashboard */}
        <div className="card p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={20} className="text-gold-600" />
            <h3 className="text-xl font-serif font-semibold text-navy-800">
              Internship Progress Tracker
            </h3>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-ivory-100 border border-navy-100 rounded-lg p-4">
              <p className="text-xs uppercase tracking-wider text-navy-400 mb-1">
                Minimum Required
              </p>
              <p className="text-2xl font-serif font-semibold text-navy-800">
                {progressData.minRequired}
                <span className="text-sm text-navy-400 ml-1">hours</span>
              </p>
            </div>
            <div className="bg-ivory-100 border border-navy-100 rounded-lg p-4">
              <p className="text-xs uppercase tracking-wider text-navy-400 mb-1">
                Maximum Permitted
              </p>
              <p className="text-2xl font-serif font-semibold text-navy-800">
                {progressData.maxPermitted}
                <span className="text-sm text-navy-400 ml-1">hours</span>
              </p>
            </div>
            <div className="bg-navy-800 border border-navy-700 rounded-lg p-4">
              <p className="text-xs uppercase tracking-wider text-gold-300 mb-1">
                Completed
              </p>
              <p className="text-2xl font-serif font-semibold text-ivory-50">
                {progressData.completed}
                <span className="text-sm text-navy-200 ml-1">hours</span>
              </p>
            </div>
            <div className="bg-ivory-100 border border-navy-100 rounded-lg p-4">
              <p className="text-xs uppercase tracking-wider text-navy-400 mb-1">
                Progress vs. Upper Limit
              </p>
              <p className="text-2xl font-serif font-semibold text-gold-700">
                {progressData.percentageOfMax}%
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-navy-600 font-medium">
                Hours completed
              </span>
              <span className="text-sm text-navy-400">
                {progressData.completed} / {progressData.maxPermitted} hours
              </span>
            </div>
            <div
              className="h-4 bg-ivory-200 rounded-full border border-navy-100 overflow-hidden"
              role="progressbar"
              aria-valuenow={progressData.completed}
              aria-valuemin={0}
              aria-valuemax={progressData.maxPermitted}
              aria-label={progressData.ariaLabel}
            >
              <div
                className="h-full bg-gradient-to-r from-gold-500 to-gold-400 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressData.percentageOfMax}%` }}
              />
            </div>
          </div>

          {/* Detail row */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3 p-4 bg-ivory-100 rounded-lg border border-navy-100">
              <Clock size={18} className="text-navy-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-navy-600">
                  Hours above minimum:{' '}
                  <span className="font-semibold text-navy-800">
                    {progressData.hoursAboveMinimum}
                  </span>
                </p>
                <p className="text-sm text-navy-600 mt-1">
                  Hours remaining until upper limit:{' '}
                  <span className="font-semibold text-navy-800">
                    {progressData.hoursRemainingToMax}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-ivory-100 rounded-lg border border-navy-100">
              <CheckCircle2
                size={18}
                className="text-gold-600 mt-0.5 flex-shrink-0"
              />
              <div>
                <p className="text-sm text-navy-600 font-medium">
                  {progressData.status}
                </p>
                <p className="text-sm text-gold-700 mt-1 font-medium">
                  {progressData.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
