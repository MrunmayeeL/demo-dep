import React, { useState, useEffect } from "react";
import {
  Navigation,
  Main,
  Highlights,
  CurrentlyWorking,
  About,
  Experience,
  Research,
  Project,
  Publications,
  TechnicalSkills,
  Achievements,
  Leadership,
  Timeline,
  GithubActivity,
  Blog,
  Contact,
  Footer
} from "./components";
import { SHOW_GITHUB_CODE_PRESENCE, SHOW_TECHNICAL_BLOG } from "./config/featureFlags";
import './index.scss';

// Error Boundary Component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          backgroundColor: '#171311',
          color: '#F5F1EC',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace'
        }}>
          <h2>Perception Pipeline Failure</h2>
          <p>An unexpected exception occurred. Please try reloading the page.</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#C96C4A',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Reboot System
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [mode, setMode] = useState<string>('dark');
  const [activeSection, setActiveSection] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'hero';
  });

  // Listen to hash change for smooth scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
        if (hash === 'hero' || hash === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectSection = (id: string) => {
    setActiveSection(id);
    if (id === 'hero' || id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Theme Sync
  useEffect(() => {
    document.body.className = `${mode}-mode`;
  }, [mode]);

  const handleToggleTheme = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ErrorBoundary>
      <div className={`main-container ${mode}-mode`}>
        {/* Navigation Bar - Always visible fixed at top */}
        <Navigation 
          mode={mode} 
          onToggleTheme={handleToggleTheme} 
          activeSection={activeSection}
          onSelectSection={handleSelectSection}
        />

        {/* Continuous Flow of All Sections */}
        <main className="page-sections-flow">
          <Main />
          <Highlights />
          <About />
          <CurrentlyWorking />
          <Experience />
          <Research />
          <Project />
          <Publications />
          <TechnicalSkills />
          <Achievements />
          <Leadership />
          <Timeline />
          {SHOW_GITHUB_CODE_PRESENCE && <GithubActivity />}
          {SHOW_TECHNICAL_BLOG && <Blog />}
          <Contact />
        </main>

        {/* Credit footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;