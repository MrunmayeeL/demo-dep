import React from "react";
import CodeIcon from '@mui/icons-material/Code';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import StorageIcon from '@mui/icons-material/Storage';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BuildIcon from '@mui/icons-material/Build';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

function TechnicalSkills() {
  const categories: SkillCategory[] = [
    {
      title: "Programming",
      icon: <CodeIcon fontSize="small"/>,
      skills: ["Python", "Java", "C++", "C", "SQL", "JavaScript"]
    },
    {
      title: "Artificial Intelligence",
      icon: <AutoAwesomeIcon fontSize="small"/>,
      skills: ["PyTorch", "OpenCV", "YOLO (v5/v8)", "LLM Pipelines", "SBERT", "PaddleOCR", "Computer Vision"]
    },
    {
      title: "Cloud & Systems",
      icon: <CloudQueueIcon fontSize="small"/>,
      skills: ["AWS", "Docker", "GitLab CI/CD", "Linux", "Telemetry Tracking", "CloudWatch"]
    },
    {
      title: "Backend Engineering",
      icon: <StorageIcon fontSize="small"/>,
      skills: ["Spring Boot", "REST APIs", "Microservices", "PostgreSQL", "Relational Modeling"]
    },
    {
      title: "Robotics & Swarms",
      icon: <PrecisionManufacturingIcon fontSize="small"/>,
      skills: ["ROS (Robot OS)", "DroneKit", "ArduPilot", "MAVLink Control", "PX4 Autopilot", "Gazebo Simulator"]
    },
    {
      title: "Developer Tools",
      icon: <BuildIcon fontSize="small"/>,
      skills: ["Git", "GitHub Actions", "VSCode", "JIRA", "Postman", "Valgrind Memory Debugger"]
    }
  ];

  return (
    <section className="skills-section-new" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Categorized competencies spanning robotics control and cloud-native software.</p>

        <div className="skills-grid-layout">
          {categories.map((cat, idx) => (
            <div className="skills-card paper-card" key={idx}>
              <div className="skills-card-header">
                <span className="skills-icon-box">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skills-list-box">
                {cat.skills.map((skill, sIdx) => {
                  const isPlaceholder = skill.includes("placeholder") || skill.includes("PX4") || skill.includes("Gazebo");
                  return (
                    <span className="skill-chip-item" key={sIdx}>
                      {skill}
                      {isPlaceholder && <span className="todo-badge-inline">TODO</span>}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section-new {
          padding: 60px 0;
        }

        .skills-grid-layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          text-align: left;
        }

        @media (max-width: 900px) {
          .skills-grid-layout {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .skills-grid-layout {
            grid-template-columns: 1fr;
          }
        }

        .skills-card {
          padding: 28px !important;
          border-left: 3px solid var(--accent-primary) !important;
        }

        .skills-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 12px;
          margin-bottom: 18px;
        }

        .skills-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(201, 108, 74, 0.05);
          color: var(--accent-primary);
          border: 1px solid var(--border-color);
        }

        .skills-card-header h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skills-list-box {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-chip-item {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.78rem;
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 4px 10px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: all 0.2s ease;
        }

        .skills-card:hover .skill-chip-item {
          border-color: var(--accent-primary);
          color: var(--text-primary);
          background-color: rgba(201, 108, 74, 0.02);
        }

        .todo-badge-inline {
          font-size: 0.55rem;
          font-weight: 700;
          background-color: var(--accent-highlight);
          color: #171311;
          padding: 1px 3px;
          border-radius: 2px;
        }
      `}</style>
    </section>
  );
}

export default TechnicalSkills;
