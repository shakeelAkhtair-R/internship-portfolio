import { Mail, MessageCircle } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { studentInfo } from '@/data/content';

export default function Contact() {
  return (
    <SectionWrapper id="contact" eyebrow="Get in Touch" title="Contact">
      <p className="text-sm text-navy-400 mb-8 max-w-2xl leading-relaxed">
        For questions about this internship portfolio, please reach out using
        the contact methods below.
      </p>

      <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
        <a
          href={`mailto:${studentInfo.email}`}
          className="card card-hover p-6 flex items-center gap-4 group"
          aria-label="Email Shakeel Akhtiar"
        >
          <div className="w-14 h-14 rounded-lg bg-navy-800 text-gold-300 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
            <Mail size={24} />
          </div>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wider text-navy-400 mb-1">
              Email
            </p>
            <p className="text-sm font-medium text-navy-700 truncate">
              {studentInfo.email}
            </p>
          </div>
        </a>

        <a
          href={studentInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="card card-hover p-6 flex items-center gap-4 group"
          aria-label="Message on WhatsApp"
        >
          <div className="w-14 h-14 rounded-lg bg-navy-800 text-gold-300 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
            <MessageCircle size={24} />
          </div>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wider text-navy-400 mb-1">
              WhatsApp
            </p>
            <p className="text-sm font-medium text-navy-700">
              {studentInfo.whatsapp}
            </p>
          </div>
        </a>
      </div>

      <p className="mt-6 text-xs text-navy-300 italic max-w-2xl">
        Clicking the WhatsApp icon opens a conversation with the supplied
        number, subject to WhatsApp being available on your device.
      </p>
    </SectionWrapper>
  );
}
