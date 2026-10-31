import { useState, useEffect, useCallback } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Overview from '@/components/sections/Overview';
import StudentProfile from '@/components/sections/StudentProfile';
import InternshipPlacement from '@/components/sections/InternshipPlacement';
import LearningObjectives from '@/components/sections/LearningObjectives';
import TeachingActivities from '@/components/sections/TeachingActivities';
import ReflectiveJournal from '@/components/sections/ReflectiveJournal';
import DailyLogbook from '@/components/sections/DailyLogbook';
import WeeklyLog from '@/components/sections/WeeklyLog';
import EvidenceDocuments from '@/components/sections/EvidenceDocuments';
import SupervisorRecognition from '@/components/sections/SupervisorRecognition';
import FinalReflection from '@/components/sections/FinalReflection';
import Contact from '@/components/sections/Contact';
import { navSections } from '@/data/content';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const handleNavigate = useCallback((id: string) => {
    if (window.location.hash !== `#${id}`) {
      window.location.hash = id;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveSection(id);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && navSections.some((s) => s.id === hash)) {
        setActiveSection(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    navSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-ivory-100">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="lg:ml-64 pt-16 lg:pt-0">
        <div className="animate-fade-in">
          <Overview onNavigate={handleNavigate} />
          <StudentProfile />
          <InternshipPlacement />
          <LearningObjectives />
          <TeachingActivities />
          <ReflectiveJournal />
          <DailyLogbook />
          <WeeklyLog />
          <EvidenceDocuments />
          <SupervisorRecognition />
          <FinalReflection />
          <Contact />
        </div>

        <Footer />
      </main>
    </div>
  );
}
