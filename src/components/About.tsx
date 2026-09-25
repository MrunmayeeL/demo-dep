import React from "react";
import InfoIcon from '@mui/icons-material/Info';

function About() {
  return (
    <section className="about-section-new" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Building software projects across backend development, cloud, automation and Agentic AI.</p>

        <div className="about-grid">
          <div className="about-main paper-card">
            <div className="about-icon-header">
              <InfoIcon className="info-icon" />
              <h3>The Narrative</h3>
            </div>
            
            <div className="about-text-content">
              <p>
                Technology was around me long before I knew what I wanted to build with it.Watching my father and brother work in the field sparked my curiosity, but studying Computer Science at VNIT turned that curiosity into something of my own — a fascination with what I can imagine and create with software.
              </p>

              <p>
                Software led me to robotics, robotics led me to AI, and AI eventually led me to research. Through IvLabs, I worked with UAVs, computer vision, embedded systems, and autonomous navigation, discovering a side of software where code doesn't just produce an output on a screen, but interacts with the physical world. Along the way, I've built everything from backend applications to autonomous systems, always finding myself drawn to the next question.
              </p>

              <p>
                <strong>I'm a software developer by foundation, a researcher by curiosity, and a builder at heart.</strong>
              </p>


              <div className="future-goals-block">
                <h4>Future Outlook</h4>
                <p>
                  Looking for opportunities to learn, build, and contribute. I'm actively seeking a 6-month software engineering internship from January to May, and I'm also open to full-time opportunities where I can work on meaningful products, learn from experienced teams, and grow as a software engineer. I'm open to both remote and on-site roles.
                </p>
              </div>
            </div>
          </div>

          <div className="about-side-card paper-card">
            <h3>Key Directives</h3>
            <div className="directives-list">
              <div className="directive-item">
                <span className="directive-num">01</span>
                <div>
                  <h5>System Autonomy</h5>
                  <p>Developing ROS/MAVLink controllers for multi-agent drone swarms.</p>
                </div>
              </div>
              <div className="directive-item">
                <span className="directive-num">02</span>
                <div>
                  <h5>Scalable AI Inference</h5>
                  <p>Optimizing YOLO and LLM pipelines on dockerized cloud clusters.</p>
                </div>
              </div>
              <div className="directive-item">
                <span className="directive-num">03</span>
                <div>
                  <h5>Enterprise Reliability</h5>
                  <p>Writing robust Java/Spring Boot microservices with telemetry logging.</p>
                </div>
              </div>
              <div className="directive-item">
                <span className="directive-num">04</span>
                <div>
                  <h5>Academic Rigor</h5>
                  <p>Formulating mathematical path optimizations and publishing peer-reviewed research.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section-new {
          padding: 60px 0;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
          text-align: left;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        .about-main {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-icon-header {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 14px;
        }

        .about-icon-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .info-icon {
          color: var(--accent-primary);
        }

        .about-text-content {
          display: flex;
          flex-direction: column;
          gap: 18px;
          font-size: 1.02rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .about-text-content strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .future-goals-block {
          background-color: rgba(124, 138, 88, 0.05);
          border: 1px solid rgba(124, 138, 88, 0.2);
          border-radius: 8px;
          padding: 18px;
          margin-top: 12px;
        }

        .future-goals-block h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--accent-support);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 6px;
          font-family: 'JetBrains Mono', monospace;
        }

        .future-goals-block p {
          font-size: 0.92rem;
          margin: 0;
          line-height: 1.6;
        }

        /* Sidebar key directives */
        .about-side-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 14px;
          margin-bottom: 20px;
        }

        .directives-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .directive-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .directive-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1rem;
          font-weight: 700;
          color: var(--accent-primary);
          background-color: rgba(201, 108, 74, 0.06);
          border: 1px solid var(--border-color);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .directive-item h5 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .directive-item p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
}

export default About;
