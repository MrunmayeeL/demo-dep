import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NavigationIcon from '@mui/icons-material/Navigation';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import { SHOW_GITHUB_CODE_PRESENCE, SHOW_TECHNICAL_BLOG } from '../config/featureFlags';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  mode: string;
  onToggleTheme: () => void;
}

interface CommandItem {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

function CommandPalette({ isOpen, onClose, mode, onToggleTheme }: CommandPaletteProps) {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const commands: CommandItem[] = [
    {
      id: 'hero',
      name: 'Go to Hero / Intro',
      category: 'Navigation',
      icon: <NavigationIcon fontSize="small" />,
      action: () => scrollToSection('hero'),
      shortcut: 'G H',
    },
    {
      id: 'about',
      name: 'Go to About Summary',
      category: 'Navigation',
      icon: <NavigationIcon fontSize="small" />,
      action: () => scrollToSection('about'),
      shortcut: 'G A',
    },
    {
      id: 'experience',
      name: 'Go to Experience & Internships',
      category: 'Navigation',
      icon: <NavigationIcon fontSize="small" />,
      action: () => scrollToSection('experience'),
      shortcut: 'G E',
    },
    {
      id: 'research',
      name: 'Go to Research Interests',
      category: 'Navigation',
      icon: <NavigationIcon fontSize="small" />,
      action: () => scrollToSection('research'),
      shortcut: 'G R',
    },
    {
      id: 'projects',
      name: 'Go to Featured Projects',
      category: 'Navigation',
      icon: <NavigationIcon fontSize="small" />,
      action: () => scrollToSection('projects'),
      shortcut: 'G P',
    },
    {
      id: 'publications',
      name: 'Go to Research Publications',
      category: 'Navigation',
      icon: <NavigationIcon fontSize="small" />,
      action: () => scrollToSection('publications'),
      shortcut: 'G B',
    },
    {
      id: 'skills',
      name: 'Go to Technical Skills',
      category: 'Navigation',
      icon: <NavigationIcon fontSize="small" />,
      action: () => scrollToSection('skills'),
      shortcut: 'G S',
    },
    {
      id: 'achievements',
      name: 'Go to Achievements & Awards',
      category: 'Navigation',
      icon: <NavigationIcon fontSize="small" />,
      action: () => scrollToSection('achievements'),
      shortcut: 'G V',
    },
    {
      id: 'leadership',
      name: 'Go to Leadership & Mentorship',
      category: 'Navigation',
      icon: <NavigationIcon fontSize="small" />,
      action: () => scrollToSection('leadership'),
      shortcut: 'G L',
    },
    {
      id: 'timeline',
      name: 'Go to Academic Timeline',
      category: 'Navigation',
      icon: <NavigationIcon fontSize="small" />,
      action: () => scrollToSection('timeline'),
      shortcut: 'G T',
    },
    ...(SHOW_GITHUB_CODE_PRESENCE ? [{
      id: 'github',
      name: 'Go to GitHub Activity',
      category: 'Navigation',
      icon: <NavigationIcon fontSize="small" />,
      action: () => scrollToSection('github'),
      shortcut: 'G G',
    }] : []),
    ...(SHOW_TECHNICAL_BLOG ? [{
      id: 'blog',
      name: 'Go to Blog Placeholder',
      category: 'Navigation',
      icon: <NavigationIcon fontSize="small" />,
      action: () => scrollToSection('blog'),
      shortcut: 'G O',
    }] : []),
    {
      id: 'contact',
      name: 'Go to Contact Form',
      category: 'Navigation',
      icon: <NavigationIcon fontSize="small" />,
      action: () => scrollToSection('contact'),
      shortcut: 'G C',
    },
    {
      id: 'theme',
      name: `Switch to ${mode === 'dark' ? 'Light' : 'Dark'} Theme`,
      category: 'Preferences',
      icon: mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />,
      action: () => {
        onToggleTheme();
        onClose();
      },
      shortcut: 'T T',
    },
    {
      id: 'email',
      name: 'Copy Email Address (mrunmayee.limaye@gmail.com)',
      category: 'Contact',
      icon: <EmailIcon fontSize="small" />,
      action: () => {
        navigator.clipboard.writeText('mrunmayee.limaye@gmail.com');
        alert('Email copied to clipboard!');
        onClose();
      },
      shortcut: 'C E',
    },
    {
      id: 'linkedin-link',
      name: 'Open LinkedIn Profile',
      category: 'Socials',
      icon: <LinkedInIcon fontSize="small" />,
      action: () => {
        window.open('https://www.linkedin.com/in/mrunmayee-limaye', '_blank');
        onClose();
      },
    },
    {
      id: 'github-link',
      name: 'Open GitHub Profile',
      category: 'Socials',
      icon: <GitHubIcon fontSize="small" />,
      action: () => {
        window.open('https://github.com/mrunmayee-limaye', '_blank');
        onClose();
      },
    },
    {
      id: 'resume',
      name: 'Download Resume CV (PDF)',
      category: 'Documents',
      icon: <FilePresentIcon fontSize="small" />,
      action: () => {
        window.open('#resume-placeholder', '_blank'); // Handled via forward actions
        onClose();
      },
    },
  ];

  const scrollToSection = (id: string) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  // Adjust scroll when arrow keys navigate list
  useEffect(() => {
    const activeEl = listRef.current?.querySelector('.active-command-item');
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="command-palette-overlay" onClick={onClose}>
      <div className="command-palette-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="command-palette-header">
          <SearchIcon className="search-icon" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search sections..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <button className="close-btn" onClick={onClose} aria-label="Close Command Palette">
            <CloseIcon fontSize="small" />
          </button>
        </div>

        <div className="command-palette-list" ref={listRef}>
          {filteredCommands.length === 0 ? (
            <div className="no-results">No matching commands found.</div>
          ) : (
            filteredCommands.reduce((acc: React.ReactNode[], cmd, index) => {
              const prevCmd = index > 0 ? filteredCommands[index - 1] : null;
              const showCategory = !prevCmd || prevCmd.category !== cmd.category;

              if (showCategory) {
                acc.push(
                  <div key={`cat-${cmd.category}`} className="category-header">
                    {cmd.category}
                  </div>
                );
              }

              acc.push(
                <button
                  key={cmd.id}
                  className={`command-item ${index === selectedIndex ? 'active-command-item' : ''}`}
                  onClick={() => cmd.action()}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <span className="command-item-icon">{cmd.icon}</span>
                  <span className="command-item-name">{cmd.name}</span>
                  {cmd.shortcut && (
                    <kbd className="command-item-shortcut">{cmd.shortcut}</kbd>
                  )}
                </button>
              );

              return acc;
            }, [])
          )}
        </div>

        <div className="command-palette-footer">
          <span>Use <kbd>↑</kbd> <kbd>↓</kbd> to navigate, <kbd>Enter</kbd> to select, and <kbd>Esc</kbd> to close.</span>
        </div>
      </div>

      <style>{`
        .command-palette-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(23, 19, 17, 0.4);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 15vh;
        }

        .command-palette-dialog {
          width: 100%;
          max-width: 600px;
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
          overflow: hidden;
          animation: scaleUp 0.15s ease-out;
        }

        @keyframes scaleUp {
          from { transform: scale(0.96); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .command-palette-header {
          display: flex;
          align-items: center;
          padding: 14px 18px;
          border-bottom: 1px solid var(--border-color);
          gap: 12px;
        }

        .command-palette-header input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 1.05rem;
          font-family: inherit;
        }

        .search-icon {
          color: var(--text-secondary);
        }

        .close-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          border-radius: 4px;
        }
        
        .close-btn:hover {
          background-color: rgba(201, 108, 74, 0.1);
          color: var(--accent-primary);
        }

        .command-palette-list {
          max-height: 380px;
          overflow-y: auto;
          padding: 8px;
        }

        .category-header {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-primary);
          padding: 8px 12px 4px 12px;
          font-family: 'JetBrains Mono', monospace;
        }

        .command-item {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 10px 12px;
          background: transparent;
          border: none;
          border-radius: 8px;
          text-align: left;
          cursor: pointer;
          gap: 12px;
          color: var(--text-primary);
          font-size: 0.92rem;
          transition: background-color 0.15s ease;
        }

        .command-item.active-command-item {
          background-color: rgba(201, 108, 74, 0.08);
          outline: none;
        }

        .command-item-icon {
          display: flex;
          align-items: center;
          color: var(--text-secondary);
        }

        .command-item.active-command-item .command-item-icon {
          color: var(--accent-primary);
        }

        .command-item-name {
          flex: 1;
        }

        .command-item-shortcut {
          font-size: 0.7rem;
          font-family: 'JetBrains Mono', monospace;
          background-color: var(--border-color);
          color: var(--text-secondary);
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 500;
        }

        .no-results {
          padding: 20px;
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .command-palette-footer {
          padding: 10px 18px;
          border-top: 1px solid var(--border-color);
          background-color: rgba(0, 0, 0, 0.05);
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-family: 'JetBrains Mono', monospace;
        }

        .command-palette-footer kbd {
          background-color: var(--border-color);
          padding: 1px 4px;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}

export default CommandPalette;
