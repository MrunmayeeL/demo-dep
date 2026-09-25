import React, { useState, useEffect } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { SHOW_GITHUB_CODE_PRESENCE, SHOW_TECHNICAL_BLOG } from "../config/featureFlags";

interface NavigationProps {
  mode: string;
  onToggleTheme: () => void;
  activeSection?: string;
  onSelectSection?: (id: string) => void;
}

const rawNavItems: Array<[string, string] | null> = [
  ['Home', 'hero'],
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Research', 'research'],
  ['Projects', 'projects'],
  ['Publications', 'publications'],
  ['Skills', 'skills'],
  ['Achievements', 'achievements'],
  ['Leadership', 'leadership'],
  ['Timeline', 'timeline'],
  SHOW_GITHUB_CODE_PRESENCE ? ['GitHub', 'github'] : null,
  SHOW_TECHNICAL_BLOG ? ['Blog', 'blog'] : null,
  ['Contact', 'contact']
];

const navItems = rawNavItems.filter((item): item is [string, string] => item !== null);

function Navigation({ mode, onToggleTheme, activeSection: propActiveSection, onSelectSection }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [localActiveSection, setLocalActiveSection] = useState<string>('hero');

  const currentActiveSection = propActiveSection || localActiveSection;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      if (window.scrollY < 120) {
        setLocalActiveSection('hero');
        return;
      }

      for (const item of navItems) {
        const el = document.getElementById(item[1]);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setLocalActiveSection(item[1]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    setLocalActiveSection(id);
    if (onSelectSection) {
      onSelectSection(id);
    } else {
      if (id === 'hero' || id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <header className="nav-bar-fixed">
        <div className="nav-container">
          {/* Logo / Monogram - name removed to prevent navbar overlap */}
          <div className="nav-logo" onClick={() => handleNavClick('hero')} title="Scroll to top">
            <span className="logo-dot"></span>
          </div>

          {/* Single-line Scalable Desktop Nav */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item[1]}
                onClick={() => handleNavClick(item[1])}
                className={`nav-link ${currentActiveSection === item[1] ? 'active' : ''}`}
              >
                {item[0]}
              </button>
            ))}
          </nav>

          <div className="nav-actions">
            {/* Theme Toggle */}
            <button className="nav-action-btn" onClick={onToggleTheme} aria-label="Toggle Theme" title="Toggle Light/Dark Mode">
              {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
            </button>

            {/* Resume Button */}
            <a href="#resume-placeholder" className="nav-resume-btn btn-primary">
              Resume CV
            </a>

            {/* Mobile Menu Icon */}
            <button className="nav-action-btn mobile-menu-btn" onClick={handleDrawerToggle} aria-label="Toggle Mobile Menu">
              {mobileOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="drawer-content">
          {navItems.map((item) => (
            <button
              key={item[1]}
              onClick={() => handleNavClick(item[1])}
              className={`drawer-link ${currentActiveSection === item[1] ? 'active' : ''}`}
            >
              {item[0]}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .nav-bar-fixed {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background-color: rgba(255, 251, 240, 0.96);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 2px solid var(--border-color);
          box-shadow: 0 4px 18px rgba(44, 36, 29, 0.08);
          transition: all 0.3s ease;
          padding: 12px 0;
        }

        .dark-mode .nav-bar-fixed {
          background-color: rgba(23, 19, 17, 0.96);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .nav-container {
          width: 98%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: nowrap !important;
          gap: clamp(8px, 1.5vw, 28px);
        }

        .nav-logo {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          padding: 6px;
        }

        .logo-dot {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: var(--accent-primary);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 0 8px rgba(201, 108, 74, 0.4);
        }

        .nav-logo:hover .logo-dot {
          transform: scale(1.35);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap !important;
          gap: clamp(2px, 0.5vw, 10px);
          flex: 1;
          min-width: 0;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          padding: 4px 0;
        }

        .desktop-nav::-webkit-scrollbar {
          display: none;
        }

        .nav-link {
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-size: clamp(0.88rem, 0.98vw, 1.05rem);
          font-weight: 700 !important;
          padding: 7px clamp(6px, 0.7vw, 12px);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap !important;
          flex-shrink: 0;
          letter-spacing: -0.01em;
          opacity: 0.9;
        }

        .nav-link:hover {
          color: var(--accent-primary);
          opacity: 1;
          background-color: rgba(201, 108, 74, 0.1);
        }

        .nav-link.active {
          color: var(--accent-primary);
          background-color: rgba(201, 108, 74, 0.16);
          font-weight: 800 !important;
          opacity: 1;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          white-space: nowrap !important;
        }

        .nav-resume-btn {
          font-size: clamp(0.82rem, 0.9vw, 0.95rem) !important;
          padding: 8px clamp(10px, 1.2vw, 18px) !important;
          border-radius: 8px !important;
          white-space: nowrap !important;
          font-weight: 800 !important;
          background-color: var(--accent-primary) !important;
          color: #ffffff !important;
          box-shadow: 0 3px 10px rgba(201, 108, 74, 0.3);
        }

        @media (max-width: 480px) {
          .nav-resume-btn {
            display: none !important;
          }
        }

        .nav-action-btn {
          background: transparent;
          border: 1.5px solid var(--border-color);
          color: var(--text-primary);
          border-radius: 8px;
          padding: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .nav-action-btn:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          background-color: rgba(201, 108, 74, 0.08);
        }

        .mobile-menu-btn {
          display: none;
        }

        @media (max-width: 640px) {
          .mobile-menu-btn {
            display: flex;
          }
        }

        .palette-kbd {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          background-color: var(--border-color);
          color: var(--text-secondary);
          padding: 1px 4px;
          border-radius: 4px;
          border: 1px solid transparent;
        }

        .mobile-menu-btn {
          display: none;
        }

        @media (max-width: 1024px) {
          .mobile-menu-btn {
            display: flex;
          }
        }

        /* Mobile Drawer */
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          bottom: 0;
          background-color: var(--card-bg);
          border-left: 1px solid var(--border-color);
          box-shadow: -4px 0 20px rgba(0,0,0,0.05);
          z-index: 999;
          transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding-top: 80px;
          display: flex;
          flex-direction: column;
        }

        .mobile-nav-drawer.open {
          right: 0;
        }

        .drawer-content {
          display: flex;
          flex-direction: column;
          padding: 24px;
          gap: 8px;
          flex: 1;
        }

        .drawer-link {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 1rem;
          font-weight: 500;
          padding: 12px 16px;
          border-radius: 8px;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .drawer-link:hover, .drawer-link.active {
          color: var(--accent-primary);
          background-color: rgba(201, 108, 74, 0.08);
        }

        .drawer-footer {
          margin-top: auto;
          padding-top: 20px;
        }
      `}</style>
    </>
  );
}

export default Navigation;