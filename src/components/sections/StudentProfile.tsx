import { Mail, Phone, GraduationCap, Building2, UserCheck } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { studentInfo } from '@/data/content';

export default function StudentProfile() {
  const details = [
    { icon: GraduationCap, label: 'Degree', value: studentInfo.degree },
    { icon: Building2, label: 'Institution', value: studentInfo.institution },
    { icon: Mail, label: 'Email', value: studentInfo.email, href: `mailto:${studentInfo.email}` },
    { icon: Phone, label: 'Phone', value: studentInfo.whatsapp, href: studentInfo.whatsappLink },
    { icon: UserCheck, label: 'Supervisor', value: studentInfo.supervisor },
  ];

  return (
    <SectionWrapper id="profile" eyebrow="Who I Am" title="Student Profile">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-base text-navy-600 leading-relaxed mb-6">
            <span className="font-serif text-xl text-navy-800 block mb-3">
              {studentInfo.primaryName}
            </span>
            This portfolio documents the teaching activities, learning
            experiences, weekly reflections, and supporting documents from a
            one-month internship at {studentInfo.institution}. It is submitted
            as part of the {studentInfo.degree} programme requirements.
          </p>
          <p className="text-sm text-navy-400 leading-relaxed">
            The internship was supervised by {studentInfo.supervisor} and took
            place during {studentInfo.internshipPeriod}.
          </p>
        </div>

        <div className="space-y-3">
          {details.map((detail) => {
            const Icon = detail.icon;
            const content = detail.href ? (
              <a
                href={detail.href}
                className="text-navy-700 hover:text-gold-700 transition-colors"
                target={detail.href.startsWith('http') ? '_blank' : undefined}
                rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {detail.value}
              </a>
            ) : (
              <span className="text-navy-700">{detail.value}</span>
            );

            return (
              <div
                key={detail.label}
                className="flex items-center gap-4 p-4 card card-hover"
              >
                <div className="w-10 h-10 rounded-md bg-navy-50 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-gold-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-navy-400 mb-0.5">
                    {detail.label}
                  </p>
                  <p className="text-sm font-medium">{content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
