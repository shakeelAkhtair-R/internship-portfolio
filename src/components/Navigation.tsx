import { useEffect, useState } from 'react';
import {
  LayoutDashboard,
  User,
  Building2,
  Target,
  BookOpen,
  PenLine,
  FileText,
  CalendarDays,
  FolderOpen,
  Award,
  Sparkles,
  Mail,
  Menu,
  X,
  GraduationCap,
} from 'lucide-react';
import { navSections } from '@/data/content';

const iconMap: Record<string, typeof LayoutDashboard> = {
  LayoutDashboard,
  User,
  Building2,
  Target,
  BookOpen,
  PenLine,
  FileText,
  CalendarDays,
  FolderOpen,
  Award,
  Sparkles,
  Mail,
};

type NavProps = {
  activeSection: string;
  onNavigate: (id: string) => void;
};

export default function Navigation({ activeSection, onNavigate }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col border-r border-navy-100 bg-ivory-100 z-40"
        aria-label="Portfolio navigation"
      >
        <div className="px-6 py-8 border-b border-navy-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-navy-800 text-gold-300 flex items-center justify-center flex-shrink-0">
              <GraduationCap size={20} />
            </div>
            <div className="min-w-0">
              <p className="font-serif text-lg text-navy-800 leading-tight truncate">
                Shakeel Ahmed
              </p>
              <p className="text-[11px] text-gold-600 uppercase tracking-wider truncate">
                Internship Portfolio
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {navSections.map((section) => {
              const Icon = iconMap[section.icon] ?? LayoutDashboard;
              const isActive = activeSection === section.id;
              return (
                <li key={section.id}>
                  <button
                    onClick={() => handleClick(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-navy-800 text-ivory-50 shadow-sm'
                        : 'text-navy-600 hover:bg-navy-50 hover:text-navy-800'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon
                      size={17}
                      className={isActive ? 'text-gold-300' : 'text-gold-500'}
                    />
                    <span className="text-left">{section.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="px-6 py-4 border-t border-navy-100">
          <p className="text-[11px] text-navy-300 leading-relaxed">
            BS English — Applied Linguistics
            <br />
            September 2026
          </p>
        </div>
      </aside>

      {/* Mobile header bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-ivory-100 border-b border-navy-100 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-navy-800 text-gold-300 flex items-center justify-center flex-shrink-0">
            <GraduationCap size={16} />
          </div>
          <span className="font-serif text-base text-navy-800">
            Shakeel Akhtiar
          </span>
        </div>
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 rounded-md text-navy-700 hover:bg-navy-50 transition-colors"
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-navy-900/40 animate-fade-in"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-ivory-100 shadow-xl animate-slide-in-left overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b border-navy-100">
              <span className="font-serif text-lg text-navy-800">Sections</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-md text-navy-700 hover:bg-navy-50 transition-colors"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="px-3 py-3">
              <ul className="space-y-1">
                {navSections.map((section) => {
                  const Icon = iconMap[section.icon] ?? LayoutDashboard;
                  const isActive = activeSection === section.id;
                  return (
                    <li key={section.id}>
                      <button
                        onClick={() => handleClick(section.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-navy-800 text-ivory-50'
                            : 'text-navy-600 hover:bg-navy-50'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <Icon
                          size={17}
                          className={
                            isActive ? 'text-gold-300' : 'text-gold-500'
                          }
                        />
                        <span className="text-left">{section.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
