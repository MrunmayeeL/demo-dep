import React, { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TYPING_WORDS = [
  "Multi-Agent Systems",
  "Robotics & Control",
  "Autonomous Systems",
  "Distributed Systems",
  "Research Engineering",
  "Cloud-native AI"
];

function Main() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = TYPING_WORDS[wordIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        setTypingSpeed(100); // stable typing speed
        
        if (currentText === fullText) {
          // Pause at the end of word
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
        setTypingSpeed(50); // faster deleting speed
        
        if (currentText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed]);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-grid-pattern"></div>
      
      <div className="hero-flex-container">
        {/* ========================================================================= */}
        {/* PROFILE IMAGE PLACEHOLDER                                                 */}
        {/* Replace this placeholder with your actual profile image by placing your   */}
        {/* photo in the public directory at: public/profile-image.jpg                */}
        {/* ========================================================================= */}
        <div className="hero-image-wrapper">
          <div className="hero-image-card">
            <img
              src="/profile-image.jpg"
              alt="Mrunmayee Mandar Limaye"
              className="hero-profile-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallbackEl = document.getElementById('profile-img-fallback');
                if (fallbackEl) fallbackEl.style.display = 'flex';
              }}
            />
            <div id="profile-img-fallback" className="hero-img-fallback" style={{ display: 'none' }}>
              <div className="fallback-avatar-circle">
                <span>ML</span>
              </div>
              <div className="fallback-info">
                <span className="fallback-title">Profile Photo Placeholder</span>
                <span className="fallback-path">Replace file: <code>public/profile-image.jpg</code></span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-top-badge">
            <span className="pulse-dot"></span>
            <span>Actively seeking Fall 2027 MS & Research Opportunities</span>
          </div>
          
          <h1 className="hero-name">Mrunmayee Mandar Limaye</h1>
          
          <h2 className="hero-title">
            Computer Science Undergraduate at VNIT Nagpur
            <div className="typing-container">
              <span>Specializing in </span>
              <span className="typing-text">{currentText}</span>
              <span className="typing-cursor">|</span>
            </div>
          </h2>

          <p className="hero-bio">
            I design and build autonomous, intelligent systems. My work spans the pipeline from high-level 
            <strong> Multi-Agent AI</strong> and <strong>Computer Vision</strong> algorithms to real-time 
            <strong> Robotics Control (ROS/ArduPilot)</strong> and scalable <strong>Cloud Infrastructure (AWS/Spring Boot)</strong>. 
            Bridging the gap between academic research and production-grade software engineering is my primary drive.
          </p>

          <div className="hero-buttons">
            <a href="#resume-placeholder" className="btn-primary btn-resume-cta">
              <DescriptionIcon fontSize="medium" /> Download / View Resume CV
            </a>
            <a href="https://github.com/mrunmayee-limaye" target="_blank" rel="noreferrer" className="btn-secondary">
              <GitHubIcon fontSize="small" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/mrunmayee-limaye" target="_blank" rel="noreferrer" className="btn-secondary">
              <LinkedInIcon fontSize="small" /> LinkedIn
            </a>
            <a href="#google-scholar-placeholder" className="btn-secondary">
              <SchoolIcon fontSize="small" /> Google Scholar <span className="todo-badge">TODO</span>
            </a>
            <a href="mailto:mrunmayee.limaye@gmail.com" className="btn-secondary">
              <EmailIcon fontSize="small" /> Email
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down / Read More Arrow Indicator */}
      <div className="hero-scroll-indicator">
        <a 
          href="#about" 
          className="scroll-down-btn"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>Read More</span>
          <KeyboardArrowDownIcon className="bounce-arrow" fontSize="small" />
        </a>
      </div>

      <style>{`
        .hero-section {
          min-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 120px 24px 80px 24px;
          position: relative;
          overflow: hidden;
          max-width: 1240px;
          margin: 0 auto;
        }

        .hero-scroll-indicator {
          margin-top: 40px;
          z-index: 10;
          display: flex;
          justify-content: center;
        }

        .scroll-down-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--text-primary);
          font-size: 0.88rem;
          font-weight: 700;
          padding: 8px 20px;
          border-radius: 99px;
          border: 1.5px solid var(--border-color);
          background-color: var(--card-bg);
          transition: all 0.3s ease;
          text-decoration: none;
          box-shadow: 0 4px 14px var(--shadow-color);
          cursor: pointer;
        }

        .scroll-down-btn:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          transform: translateY(3px);
          background-color: rgba(201, 108, 74, 0.08);
        }

        .bounce-arrow {
          animation: bounce 1.8s infinite ease-in-out;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(4px); }
          60% { transform: translateY(2px); }
        }

        .hero-flex-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 44px;
          width: 100%;
          z-index: 10;
        }

        .hero-image-wrapper {
          z-index: 10;
          flex-shrink: 0;
        }

        .hero-content {
          flex: 1;
          z-index: 10;
          text-align: left;
        }

        @media (max-width: 860px) {
          .hero-flex-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 28px;
          }
          .hero-section {
            padding-top: 100px;
          }
        }

        .hero-image-card {
          width: 260px;
          height: 260px;
          border-radius: 20px;
          border: 2px solid var(--border-color);
          background-color: var(--card-bg);
          box-shadow: 0 16px 36px var(--shadow-color);
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hero-image-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px var(--shadow-hover);
        }

        .hero-profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-img-fallback {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 24px;
          text-align: center;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(201, 108, 74, 0.08) 0%, rgba(217, 119, 69, 0.04) 100%);
        }

        .fallback-avatar-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: var(--accent-primary);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.8rem;
          font-family: 'JetBrains Mono', monospace;
          box-shadow: 0 4px 14px rgba(201, 108, 74, 0.3);
        }

        .fallback-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .fallback-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .fallback-path {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .fallback-path code {
          background-color: rgba(201, 108, 74, 0.1);
          color: var(--accent-primary);
          padding: 2px 5px;
          border-radius: 4px;
        }

        .hero-top-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 99px;
          border: 1px solid var(--border-color);
          background-color: var(--card-bg);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 24px;
          font-family: 'JetBrains Mono', monospace;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background-color: var(--accent-support);
          border-radius: 50%;
          display: inline-block;
          position: relative;
        }

        .pulse-dot::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: var(--accent-support);
          border-radius: 50%;
          animation: pulse 1.8s infinite ease-in-out;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.4); opacity: 0; }
        }

        .hero-name {
          font-size: 4rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 12px;
        }

        @media (max-width: 768px) {
          .hero-name {
            font-size: 2.8rem;
          }
        }

        .hero-title {
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--text-secondary);
          line-height: 1.4;
          margin-bottom: 24px;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 1.2rem;
          }
        }

        .typing-container {
          margin-top: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.25rem;
          color: var(--accent-primary);
          font-weight: 600;
        }

        .typing-text {
          color: var(--accent-primary);
        }

        .typing-cursor {
          display: inline-block;
          font-weight: 200;
          animation: blink 1s step-end infinite;
          color: var(--accent-primary);
          margin-left: 2px;
        }

        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-bio {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 40px;
        }

        .hero-bio strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }

        .btn-resume-cta {
          padding: 14px 28px !important;
          font-size: 1.05rem !important;
          font-weight: 700 !important;
          background-color: var(--accent-primary) !important;
          box-shadow: 0 6px 20px rgba(201, 108, 74, 0.25) !important;
          animation: pulse-border 2s infinite;
        }

        @keyframes pulse-border {
          0% { box-shadow: 0 0 0 0 rgba(201, 108, 74, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(201, 108, 74, 0); }
          100% { box-shadow: 0 0 0 0 rgba(201, 108, 74, 0); }
        }
      `}</style>
    </section>
  );
}

export default Main;