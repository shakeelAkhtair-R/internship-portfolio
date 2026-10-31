import { Mail, MessageCircle, GraduationCap } from 'lucide-react';
import { studentInfo } from '@/data/content';

export default function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-navy-800 py-10 mt-8">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-300 text-navy-800 flex items-center justify-center">
              <GraduationCap size={20} />
            </div>
            <span className="font-serif text-lg text-ivory-50">
              {studentInfo.primaryName}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${studentInfo.email}`}
              className="flex items-center gap-2.5 px-5 py-3 rounded-md bg-navy-700 text-ivory-50 hover:bg-navy-600 transition-all duration-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
              aria-label="Email Shakeel Akhtiar"
            >
              <Mail size={20} className="text-gold-300" />
              <span className="text-sm font-medium">
                {studentInfo.email}
              </span>
            </a>

            <a
              href={studentInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 rounded-md bg-navy-700 text-ivory-50 hover:bg-navy-600 transition-all duration-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
              aria-label="Message on WhatsApp"
            >
              <MessageCircle size={20} className="text-gold-300" />
              <span className="text-sm font-medium">
                {studentInfo.whatsapp}
              </span>
            </a>
          </div>

          <p className="text-xs text-navy-300 text-center max-w-md leading-relaxed">
            BS English — Applied Linguistics · Internship Portfolio ·{' '}
            {studentInfo.internshipPeriod}
          </p>
        </div>
      </div>
    </footer>
  );
}
