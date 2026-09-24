import React from "react";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface Achievement {
  title: string;
  category: string;
  description: string;
  metric?: string;
  todo?: boolean;
}

function Achievements() {
  const list: Achievement[] = [
    {
      title: "Pending Publication L-RA",
      category: "Research",
      description: "Preprint on localized Velocity Obstacle collision avoidance for multi-agent UAV coordination submitted to IEEE Letters.",
      metric: "1 Submission",
      todo: true
    },
    {
      title: "Robotics Competition Win",
      category: "Hackathon",
      description: "Undergraduate competition or design challenge win in robotics routing or system control.",
      metric: "1st Place",
      todo: true
    },
    {
      title: "VNIT Nagpur Dean's List",
      category: "Academic",
      description: "Academic excellence citation awarded to students maintaining top-tier grades in the Computer Science department.",
      metric: "CGPA 8.7",
      todo: true
    },
    {
      title: "National Merit Scholarship",
      category: "Scholarship",
      description: "Merit-based financial award for outstanding engineering undergraduate candidates.",
      metric: "Under Review",
      todo: true
    }
  ];

  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <h2 className="section-title">Key Achievements</h2>
        <p className="section-subtitle">Academic honors, competition rankings, and research milestones.</p>

        <div className="achievements-grid-layout">
          {list.map((item, idx) => (
            <div className="achievement-card paper-card" key={idx}>
              <div className="ach-header">
                <span className="ach-icon-wrapper">
                  <EmojiEventsIcon fontSize="small"/>
                </span>
                <span className="ach-category">{item.category}</span>
                {item.todo && <span className="todo-badge">TODO</span>}
              </div>
              <h3 className="ach-title">{item.title}</h3>
              <p className="ach-desc">{item.description}</p>
              {item.metric && (
                <div className="ach-metric-tag">
                  <span>{item.metric}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .achievements-section {
          padding: 60px 0;
        }

        .achievements-grid-layout {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          text-align: left;
        }

        @media (max-width: 1024px) {
          .achievements-grid-layout {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .achievements-grid-layout {
            grid-template-columns: 1fr;
          }
        }

        .achievement-card {
          padding: 24px !important;
          display: flex;
          flex-direction: column;
          border-top: 3px solid var(--accent-primary) !important;
        }

        .ach-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
        }

        .ach-icon-wrapper {
          color: var(--accent-highlight);
          display: flex;
          align-items: center;
        }

        .ach-category {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          flex: 1;
        }

        .ach-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 8px;
        }

        .ach-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 16px;
          flex: 1;
        }

        .ach-metric-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--accent-primary);
          background-color: rgba(201, 108, 74, 0.05);
          border: 1px dashed var(--accent-primary);
          padding: 4px 10px;
          border-radius: 6px;
          align-self: flex-start;
        }
      `}</style>
    </section>
  );
}

export default Achievements;
