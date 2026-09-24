import React, { useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArticleIcon from '@mui/icons-material/Article';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import DescriptionIcon from '@mui/icons-material/Description';

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  badges: string[];
  image: string;
  status: string;
  duration: string;
  role: string;
  impact: string;
  lessons: string;
  techStack: string[];
  problem: string;
  solution: string;
  challenges: string;
  futureWork: string;
  github?: string;
  liveDemo?: string;
  publication?: string;
  video?: string;
  documentation?: string;
  diagramType: "swarm" | "grading" | "agri" | "qr" | "data" | "embedded" | "c-cli";
}

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "overview" | "architecture";
}

function ProjectModal({ project, isOpen, onClose, initialTab = "overview" }: ProjectModalProps) {
  const [activeTab, setActiveTab] = React.useState<"overview" | "architecture">("overview");

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const renderArchitectureDiagram = () => {
    switch (project.diagramType) {
      case "swarm":
        return (
          <svg className="arch-svg" viewBox="0 0 800 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background nodes */}
            <rect x="10" y="10" width="180" height="70" rx="8" fill="var(--card-bg)" stroke="var(--accent-primary)" strokeWidth="2" />
            <text x="100" y="45" fill="var(--text-primary)" fontSize="13" fontWeight="600" textAnchor="middle">UAV Camera Feed</text>
            <text x="100" y="65" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">On-board 15 FPS Video</text>

            <rect x="230" y="10" width="180" height="70" rx="8" fill="var(--card-bg)" stroke="var(--accent-primary)" strokeWidth="2" />
            <text x="320" y="40" fill="var(--text-primary)" fontSize="13" fontWeight="600" textAnchor="middle">YOLO Object Detection</text>
            <text x="320" y="60" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">Local GPU / Jetson inference</text>

            <rect x="450" y="10" width="180" height="70" rx="8" fill="var(--card-bg)" stroke="var(--accent-primary)" strokeWidth="2" />
            <text x="540" y="40" fill="var(--text-primary)" fontSize="13" fontWeight="600" textAnchor="middle">Swarm Coordinator</text>
            <text x="540" y="60" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">Velocity Obstacle Logic</text>

            <rect x="450" y="130" width="180" height="70" rx="8" fill="var(--card-bg)" stroke="var(--accent-support)" strokeWidth="2" />
            <text x="540" y="160" fill="var(--text-primary)" fontSize="13" fontWeight="600" textAnchor="middle">MAVLink / ROS Bridge</text>
            <text x="540" y="180" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">Command Dispatch</text>

            <rect x="670" y="130" width="120" height="70" rx="8" fill="var(--card-bg)" stroke="var(--accent-support)" strokeWidth="2" />
            <text x="730" y="160" fill="var(--text-primary)" fontSize="13" fontWeight="600" textAnchor="middle">PX4 / Hardware</text>
            <text x="730" y="180" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">Real Drone Control</text>

            {/* Connecting arrows */}
            <path d="M 190 45 L 230 45" stroke="var(--accent-primary)" strokeWidth="2" markerEnd="url(#arrow)" />
            <path d="M 410 45 L 450 45" stroke="var(--accent-primary)" strokeWidth="2" markerEnd="url(#arrow)" />
            <path d="M 540 80 L 540 130" stroke="var(--accent-primary)" strokeWidth="2" markerEnd="url(#arrow)" />
            <path d="M 630 165 L 670 165" stroke="var(--accent-support)" strokeWidth="2" markerEnd="url(#arrow)" />

            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent-primary)" />
              </marker>
            </defs>
          </svg>
        );
      case "grading":
        return (
          <svg className="arch-svg" viewBox="0 0 800 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="160" height="70" rx="8" fill="var(--card-bg)" stroke="var(--accent-primary)" strokeWidth="2" />
            <text x="90" y="45" fill="var(--text-primary)" fontSize="13" fontWeight="600" textAnchor="middle">Exam Scanning Node</text>
            <text x="90" y="65" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">Raw Student Papers</text>

            <rect x="210" y="10" width="160" height="70" rx="8" fill="var(--card-bg)" stroke="var(--accent-primary)" strokeWidth="2" />
            <text x="290" y="40" fill="var(--text-primary)" fontSize="13" fontWeight="600" textAnchor="middle">PaddleOCR/Tesseract</text>
            <text x="290" y="60" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">Segmented Text Blocks</text>

            <rect x="420" y="10" width="160" height="70" rx="8" fill="var(--card-bg)" stroke="var(--accent-primary)" strokeWidth="2" />
            <text x="500" y="40" fill="var(--text-primary)" fontSize="13" fontWeight="600" textAnchor="middle">SBERT Embedding Match</text>
            <text x="500" y="60" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">Vector Cosine Similarity</text>

            <rect x="630" y="10" width="160" height="70" rx="8" fill="var(--card-bg)" stroke="var(--accent-highlight)" strokeWidth="2" />
            <text x="710" y="40" fill="var(--text-primary)" fontSize="13" fontWeight="600" textAnchor="middle">LLM Evaluation</text>
            <text x="710" y="60" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">Contextual Grading & feedback</text>

            <path d="M 170 45 L 210 45" stroke="var(--accent-primary)" strokeWidth="2" markerEnd="url(#arrow)" />
            <path d="M 370 45 L 420 45" stroke="var(--accent-primary)" strokeWidth="2" markerEnd="url(#arrow)" />
            <path d="M 580 45 L 630 45" stroke="var(--accent-primary)" strokeWidth="2" markerEnd="url(#arrow)" />
          </svg>
        );
      case "agri":
        return (
          <svg className="arch-svg" viewBox="0 0 800 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="180" height="70" rx="8" fill="var(--card-bg)" stroke="var(--accent-primary)" strokeWidth="2" />
            <text x="100" y="45" fill="var(--text-primary)" fontSize="13" fontWeight="600" textAnchor="middle">Target Detection Node</text>
            <text x="100" y="65" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">QR / Contour Camera</text>

            <rect x="240" y="10" width="180" height="70" rx="8" fill="var(--card-bg)" stroke="var(--accent-primary)" strokeWidth="2" />
            <text x="330" y="40" fill="var(--text-primary)" fontSize="13" fontWeight="600" textAnchor="middle">Coordinate Estimator</text>
            <text x="330" y="60" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">Relative Distance mapping</text>

            <rect x="470" y="10" width="180" height="70" rx="8" fill="var(--card-bg)" stroke="var(--accent-support)" strokeWidth="2" />
            <text x="560" y="40" fill="var(--text-primary)" fontSize="13" fontWeight="600" textAnchor="middle">Pixhawk Flight Controller</text>
            <text x="560" y="60" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">MAVLink / Sprayer PWM</text>

            <path d="M 190 45 L 240 45" stroke="var(--accent-primary)" strokeWidth="2" markerEnd="url(#arrow)" />
            <path d="M 420 45 L 470 45" stroke="var(--accent-primary)" strokeWidth="2" markerEnd="url(#arrow)" />
          </svg>
        );
      default:
        return (
          <div className="custom-ascii-fallback">
            <pre className="mono-text">
              {`[ Input Segment ] --(Processing Pipeline)--> [ Core Logic Database ]\n` +
               `        |                                              |\n` +
               `        v                                              v\n` +
               `[ Local Node Client ] <=======================> [ Scalable Hosting / API ]`}
            </pre>
          </div>
        );
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog paper-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="modal-top-badges">
              {project.badges.map((badge, idx) => (
                <span key={idx} className={`badge ${badge.toLowerCase().replace(" ", "-")}`}>
                  {badge}
                </span>
              ))}
              <span className="modal-duration-badge">{project.duration}</span>
            </span>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>
          <button className="close-modal-btn" onClick={onClose} aria-label="Close Modal">
            <CloseIcon />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="modal-tabs">
          <button 
            className={`modal-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Project Overview
          </button>
          <button 
            className={`modal-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
            onClick={() => setActiveTab('architecture')}
          >
            System Architecture
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="modal-body-content">
          {activeTab === "overview" ? (
            <div className="overview-tab-content">
              
              <div className="info-summary-grid">
                <div className="info-item">
                  <strong>Role:</strong> <span>{project.role}</span>
                </div>
                <div className="info-item">
                  <strong>Project Status:</strong> <span>{project.status}</span>
                </div>
                <div className="info-item">
                  <strong>Impact:</strong> <span className="highlight-text">{project.impact}</span>
                </div>
              </div>

              <div className="content-markdown-block">
                <h4>The Problem</h4>
                <p>{project.problem}</p>
              </div>

              <div className="content-markdown-block">
                <h4>The Solution</h4>
                <p>{project.solution}</p>
              </div>

              <div className="content-markdown-block">
                <h4>Engineering Challenges faced</h4>
                <p>{project.challenges}</p>
              </div>

              <div className="content-markdown-block">
                <h4>Key Lessons & Insights</h4>
                <p>{project.lessons}</p>
              </div>

              <div className="content-markdown-block">
                <h4>Future Expansion & Work</h4>
                <p>{project.futureWork}</p>
              </div>

              <div className="modal-tech-stack">
                <h4>Technologies Used</h4>
                <div className="tech-chips">
                  {project.techStack.map((tech, idx) => (
                    <span className="tech-chip" key={idx}>{tech}</span>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            <div className="architecture-tab-content">
              <h4>System Blueprint Diagram</h4>
              <div className="diagram-container">
                {renderArchitectureDiagram()}
              </div>

              <div className="architecture-desc-block">
                <h4>Pipeline & Data Flow Overview</h4>
                <p>
                  The system relies on a pipelined architecture designed to process dynamic sensor feeds in real-time, compute optimal spatial trajectories or semantic scores, and forward actionable control signals directly to execution engines (hardware actuators, LLM frameworks, or relational tables).
                </p>
                <ul>
                  <li><strong>Data Ingestion:</strong> Ingests inputs through microservice interfaces, hardware controllers, or sensors (camera streams, IMUs, file loaders).</li>
                  <li><strong>Perception/Logic Layer:</strong> Performs semantic classification, vision detection (YOLO, OpenCV), or vector computation (SBERT, SQL grouping).</li>
                  <li><strong>Optimization Loop:</strong> Feeds localized parameters into autonomous coordinators (RRT*, consensus algorithms, grading metrics).</li>
                  <li><strong>Actuation/Persistence:</strong> Executes target directives via MAVLink actuators, Spring Boot web responses, or database updates.</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Links */}
        <div className="modal-links-footer">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <GitHubIcon fontSize="small" /> GitHub Code
            </a>
          )}
          {project.publication && (
            <a href={project.publication} target="_blank" rel="noreferrer" className="btn-secondary">
              <ArticleIcon fontSize="small" /> Research Preprint
            </a>
          )}
          {project.video && (
            <a href={project.video} target="_blank" rel="noreferrer" className="btn-secondary">
              <PlayCircleOutlineIcon fontSize="small" /> Watch Demo Video
            </a>
          )}
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn-primary">
              <LaunchIcon fontSize="small" /> Live Demonstration
            </a>
          )}
          {project.documentation && (
            <a href={project.documentation} target="_blank" rel="noreferrer" className="btn-secondary">
              <DescriptionIcon fontSize="small" /> Documentation
            </a>
          )}
        </div>

      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(23, 19, 17, 0.55);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .modal-dialog {
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          padding: 32px !important;
          animation: modalSlideIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
        }

        @keyframes modalSlideIn {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
        }

        .modal-top-badges {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .modal-duration-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          background-color: var(--border-color);
          color: var(--text-secondary);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .modal-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .modal-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-top: 4px;
        }

        .close-modal-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 6px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }

        .close-modal-btn:hover {
          background-color: rgba(201, 108, 74, 0.1);
          color: var(--accent-primary);
          border-color: var(--accent-primary);
        }

        /* Modal Tabs */
        .modal-tabs {
          display: flex;
          border-bottom: 1px solid var(--border-color);
          margin-top: 16px;
          gap: 16px;
        }

        .modal-tab-btn {
          background: transparent;
          border: none;
          padding: 12px 6px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          position: relative;
          transition: color 0.2s ease;
        }

        .modal-tab-btn:hover {
          color: var(--text-primary);
        }

        .modal-tab-btn.active {
          color: var(--accent-primary);
        }

        .modal-tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--accent-primary);
        }

        /* Modal Body Scroll */
        .modal-body-content {
          flex: 1;
          overflow-y: auto;
          padding: 24px 0;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .info-summary-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          background-color: rgba(44, 36, 29, 0.02);
          border: 1px solid var(--border-color);
          padding: 16px;
          border-radius: 8px;
          margin-bottom: 12px;
        }

        .dark-mode .info-summary-grid {
          background-color: rgba(255,255,255,0.01);
        }

        .info-item {
          display: flex;
          flex-direction: column;
          font-size: 0.88rem;
          gap: 4px;
        }

        .info-item strong {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          text-transform: uppercase;
          color: var(--accent-primary);
        }

        .info-item span {
          color: var(--text-primary);
          font-weight: 500;
        }

        .content-markdown-block {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .content-markdown-block h4 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .content-markdown-block p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .modal-tech-stack h4 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .tech-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          background-color: var(--border-color);
          color: var(--text-secondary);
          padding: 4px 10px;
          border-radius: 6px;
        }

        /* Architecture style */
        .diagram-container {
          background-color: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .arch-svg {
          width: 100%;
          max-height: 220px;
        }

        .custom-ascii-fallback {
          padding: 20px;
          background-color: #171311;
          color: #a8ff60;
          border-radius: 8px;
          width: 100%;
          overflow-x: auto;
          text-align: left;
        }

        .architecture-desc-block {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .architecture-desc-block h4 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .architecture-desc-block p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .architecture-desc-block ul {
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 8px;
        }

        .architecture-desc-block li {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .architecture-desc-block strong {
          color: var(--text-primary);
        }

        /* Footer links */
        .modal-links-footer {
          border-top: 1px solid var(--border-color);
          padding-top: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: flex-end;
        }

        @media (max-width: 600px) {
          .modal-links-footer {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

export default ProjectModal;
