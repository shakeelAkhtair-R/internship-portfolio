import { Building2, UserCheck, CalendarRange, Clock, Hourglass, CheckCircle2 } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { studentInfo } from '@/data/content';

export default function InternshipPlacement() {
  const details = [
    { icon: Building2, label: 'Institution', value: studentInfo.internshipPlacement },
    { icon: UserCheck, label: 'Supervisor', value: studentInfo.supervisor },
    { icon: CalendarRange, label: 'Internship Period', value: studentInfo.internshipPeriod },
    { icon: Clock, label: 'Duration', value: `${studentInfo.durationDays} days, as supplied` },
    { icon: Hourglass, label: 'Required Hours', value: `${studentInfo.requiredHours.min}–${studentInfo.requiredHours.max}` },
    { icon: CheckCircle2, label: 'Completed Hours', value: `${studentInfo.completedHours}` },
  ];

  return (
    <SectionWrapper
      id="placement"
      eyebrow="Where I Taught"
      title="Internship Placement"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {details.map((detail, idx) => {
          const Icon = detail.icon;
          return (
            <div
              key={detail.label}
              className="card card-hover p-6 animate-fade-in-up"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-navy-800 flex items-center justify-center mb-4">
                <Icon size={22} className="text-gold-300" />
              </div>
              <p className="text-xs uppercase tracking-wider text-navy-400 mb-1">
                {detail.label}
              </p>
              <p className="text-base font-serif font-medium text-navy-800">
                {detail.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-6 card border-l-4 border-l-gold-400">
        <p className="text-sm text-navy-500 leading-relaxed">
          The internship was completed at{' '}
          <span className="font-medium text-navy-700">
            {studentInfo.institution}
          </span>{' '}
          under the supervision of{' '}
          <span className="font-medium text-navy-700">
            {studentInfo.supervisor}
          </span>
          . The placement spanned {studentInfo.durationDays} days during{' '}
          {studentInfo.internshipPeriod}, fulfilling the required{' '}
          {studentInfo.requiredHours.min}–{studentInfo.requiredHours.max} hour
          range with {studentInfo.completedHours} reported hours.
        </p>
      </div>
    </SectionWrapper>
  );
}
