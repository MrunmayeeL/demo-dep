import React from "react";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

function Leadership() {
  return (
    <section className="leadership-section" id="leadership">
      <div className="container">
        <h2 className="section-title">Leadership & Mentorship</h2>
        <p className="section-subtitle">Fostering collaboration and knowledge sharing in the robotics community.</p>

        <div className="leadership-grid">
          <div className="leadership-main paper-card">
            <div className="lead-header">
              <PeopleOutlineIcon className="lead-icon" />
              <h3>IvLabs Laboratory Mentorship</h3>
            </div>
            <div className="lead-body">
              <p>
                As a senior member of <strong>IvLabs</strong>, the flagship robotics research club of VNIT Nagpur, 
                I actively guide junior undergraduates through the complexities of autonomous systems. My focus 
                is on lowering the entry barrier to hardware-software integration.
              </p>
              <ul>
                <li><strong>Individual Mentorship:</strong> Directing 5+ junior students on spatial kinematics, Linux workspace environments, and dynamic simulation platforms (Gazebo/PX4).</li>
                <li><strong>Code Review Standards:</strong> Introduced rigid git branching guidelines and codebase modularity requirements, increasing general repository health and software reuse.</li>
                <li><strong>Cross-functional Coordination:</strong> Bridging the software-control subgroup and the physical structural design team to resolve weight, battery, and actuator limits for custom UAV chassis.</li>
              </ul>
            </div>
          </div>

          <div className="leadership-sub paper-card">
            <div className="lead-header">
              <LibraryBooksIcon className="lead-icon" />
              <h3>Workshops & Workshops</h3>
            </div>
            <div className="workshops-list">
              <div className="workshop-item">
                <h5>ROS & Gazebo Workshop</h5>
                <p>Co-led a hands-on developer training workshop for 30+ students detailing ROS nodes, custom message publishing, and high-fidelity sensor physics modeling.</p>
                <span className="ws-date">Oct 2024</span>
              </div>
              <div className="workshop-item">
                <h5>Computer Vision Bootcamp</h5>
                <p>Designed tutorial pipelines demonstrating OpenCV image masking, filter kernels, and edge detection, leading up to a live deploy of YOLOv5 models.</p>
                <span className="ws-date">Sep 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .leadership-section {
          padding: 60px 0;
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: 3.5fr 2.5fr;
          gap: 24px;
          text-align: left;
        }

        @media (max-width: 1024px) {
          .leadership-grid {
            grid-template-columns: 1fr;
          }
        }

        .lead-header {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 14px;
          margin-bottom: 20px;
        }

        .lead-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .lead-icon {
          color: var(--accent-primary);
        }

        .lead-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .lead-body strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .lead-body ul {
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .lead-body li {
          font-size: 0.92rem;
        }

        .workshops-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .workshop-item {
          border-left: 2px solid var(--accent-support);
          padding-left: 14px;
          position: relative;
        }

        .workshop-item h5 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .workshop-item p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
          margin-top: 4px;
        }

        .ws-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          color: var(--accent-primary);
          display: inline-block;
          margin-top: 4px;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}

export default Leadership;
