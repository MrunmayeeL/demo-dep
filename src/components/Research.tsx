import React from "react";
import AutoModeIcon from '@mui/icons-material/AutoMode';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import FlightIcon from '@mui/icons-material/Flight';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ForumIcon from '@mui/icons-material/Forum';

interface InterestItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  accent: string;
}

function Research() {
  const currentInterests: InterestItem[] = [
    {
      title: "Agentic AI",
      desc: "Investigating decentralized decision planning structures, goal decomposition, and recursive error-correction frameworks in localized AI agents.",
      icon: <PsychologyIcon />,
      accent: "var(--accent-primary)"
    },
    {
      title: "Multi-Agent Systems",
      desc: "Formulating swarm coordination mechanics, consensus algorithms under bandwidth constraints, and spatial waypoint routing inside dynamic aerial networks.",
      icon: <AutoModeIcon />,
      accent: "var(--accent-support)"
    },
    {
      title: "Cloud-native AI",
      desc: "Designing resilient cluster infrastructures (Kubernetes, AWS) capable of orchestrating stateful and stateless AI inference workloads at scale.",
      icon: <CloudCircleIcon />,
      accent: "var(--accent-highlight)"
    },
    {
      title: "Autonomous UAVs",
      desc: "Optimizing on-board visual odometry (VIO), real-time path-planning (RRT*/A*), and obstacle negotiation models inside GPS-denied environments.",
      icon: <FlightIcon />,
      accent: "var(--accent-secondary)"
    },
    {
      title: "Computer Vision",
      desc: "Developing localized object detection frameworks (YOLO, Haar cascades) optimized for low-compute embedded processing units (ESP32, Jetson Nano).",
      icon: <VisibilityIcon />,
      accent: "var(--accent-support-sec)"
    },
    {
      title: "Large Language Models",
      desc: "Benchmarking prompt evaluation frameworks, automated grading pipelines using LLMs and SBERT semantic vector spaces, and RAG architectures.",
      icon: <ForumIcon />,
      accent: "var(--accent-primary)"
    }
  ];

  return (
    <section className="research-section" id="research">
      <div className="container">
        <h2 className="section-title">Research Focus</h2>
        <p className="section-subtitle">Exploring decentralized autonomy and scalable intelligent systems.</p>

        <div className="research-grid-new">
          <div className="research-panel paper-card">
            <h3>Current Interests</h3>
            <div className="interests-grid">
              {currentInterests.map((interest, idx) => (
                <div className="interest-card" key={idx} style={{ '--interest-accent': interest.accent } as React.CSSProperties}>
                  <div className="interest-icon-box">
                    {interest.icon}
                  </div>
                  <div className="interest-body">
                    <h4>{interest.title}</h4>
                    <p>{interest.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="research-panel paper-card future-directions-panel">
            <h3>Future Directions</h3>
            <div className="directions-timeline">
              <div className="timeline-point">
                <div className="point-marker"></div>
                <div className="point-content">
                  <h5>Swarm Consensus Under Packet Loss</h5>
                  <p>Exploring mathematical modeling of distributed agent synchronization when communication networks suffer from high packet-drop ratios.</p>
                </div>
              </div>

              <div className="timeline-point">
                <div className="point-marker"></div>
                <div className="point-content">
                  <h5>Low-latency Embedded Inference</h5>
                  <p>Investigating knowledge distillation techniques to compress massive Vision-Language-Action (VLA) models onto resource-constrained UAV flight controllers.</p>
                </div>
              </div>

              <div className="timeline-point">
                <div className="point-marker"></div>
                <div className="point-content">
                  <h5>Federated Swarm Learning</h5>
                  <p>Studying decentralized model tuning where autonomous aerial systems train local vision modules and exchange neural gradients over mesh networks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .research-section {
          padding: 60px 0;
        }

        .research-grid-new {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
          text-align: left;
        }

        @media (max-width: 1024px) {
          .research-grid-new {
            grid-template-columns: 1fr;
          }
        }

        .research-panel h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 14px;
          margin-bottom: 24px;
        }

        .interests-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        @media (max-width: 640px) {
          .interests-grid {
            grid-template-columns: 1fr;
          }
        }

        .interest-card {
          display: flex;
          gap: 16px;
          padding: 16px;
          border-radius: 10px;
          border: 1px solid var(--border-color);
          background-color: rgba(255,255,255,0.01);
          transition: all 0.2s ease;
        }

        .interest-card:hover {
          border-color: var(--interest-accent);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px var(--shadow-color);
          background-color: rgba(201, 108, 74, 0.02);
        }
        
        .dark-mode .interest-card:hover {
          background-color: rgba(255, 255, 255, 0.01);
        }

        .interest-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(201, 108, 74, 0.05);
          color: var(--interest-accent);
          flex-shrink: 0;
          border: 1px solid var(--border-color);
        }

        .interest-body {
          display: flex;
          flex-direction: column;
        }

        .interest-body h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .interest-body p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-top: 4px;
        }

        /* Future Directions Timeline */
        .future-directions-panel {
          border-left: 1px solid var(--border-color);
        }

        .directions-timeline {
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
          padding-left: 20px;
          border-left: 2px dashed var(--border-color);
          margin-left: 8px;
        }

        .timeline-point {
          position: relative;
        }

        .point-marker {
          position: absolute;
          left: -27px;
          top: 4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: var(--accent-primary);
          border: 2px solid var(--card-bg);
          box-shadow: 0 0 0 2px var(--border-color);
        }

        .point-content h5 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .point-content p {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}

export default Research;
