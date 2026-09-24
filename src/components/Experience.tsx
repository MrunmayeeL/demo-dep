import React from "react";

interface Internship {
  role: string;
  company: string;
  duration: string;
  location: string;
  type: "research" | "industry";
  whatIBuilt: string;
  technologies: string[];
  challenges: string;
  impact: string;
  learnings: string;
}

function Experience() {
  const internships: Internship[] = [
    {
      role: "Software Engineering Intern",
      company: "NatWest Group",
      duration: "May 2025 - July 2025",
      location: "Bangalore, India (Enterprise Banking)",
      type: "industry",
      whatIBuilt: "Architected and implemented a high-performance logging integration hook inside core enterprise Spring Boot microservices, capturing and streaming telemetry signals directly to AWS CloudWatch for live operational auditing.",
      technologies: ["Spring Boot", "Java", "AWS CloudWatch", "GitLab CI/CD", "JIRA", "REST APIs", "Microservices"],
      challenges: "Mitigating the system overhead introduced by heavy logging protocols. By introducing asynchronous buffer writing and stream throttling, I successfully prevented latency spikes in transactional endpoints during high-concurrency test scenarios.",
      impact: "Analyzed and indexed thousands of log lines with zero degradation in endpoint response times. Enabled real-time error auditing pipelines, reducing mean-time-to-detection (MTTD) by 35% in simulated staging environments.",
      learnings: "Acquired deep understanding of enterprise-scale software design patterns, logging constraints under load, distributed tracking/telemetry (Span/Trace IDs), and agile workflow operations."
    },
    {
      role: "Research Intern",
      company: "IIT Roorkee",
      duration: "Dec 2024 - Jan 2025",
      location: "Roorkee, India (Autonomous Systems Lab)",
      type: "research",
      whatIBuilt: "Contributed to the perception-to-control software pipeline of a Dual Spray Agricultural Drone. Specifically developed localized QR-marker target detection nodes and crop-bed segmentation modules to guide intelligent spraying operations.",
      technologies: ["Python", "OpenCV", "ROS", "YOLOv8", "ArduPilot", "MAVLink"],
      challenges: "Achieving real-time crop boundary tracking under varied lighting conditions and camera vibrations. I designed a combined HSV-thresholding and active contour model that adjusted parameters dynamically based on average image luminance.",
      impact: "Contributed research and algorithm details to a pending paper submission. Conducted 10+ simulated autonomous spraying runs in high-fidelity agricultural maps with 92% coverage accuracy.",
      learnings: "Mastered hardware-software integration constraints, dynamic MAVLink message streaming, and spatial coordinates translation (pixel-to-GPS transformation matrices)."
    },
    {
      role: "Robotics Research Intern",
      company: "IvLabs (VNIT Nagpur)",
      duration: "May 2024 - Present",
      location: "Nagpur, India (Robotics Lab)",
      type: "research",
      whatIBuilt: "Designed the algorithmic coordinator for an Autonomous Multi-UAV Search and Rescue swarm. Developed path planning (A*/RRT*), dynamic collision avoidance nodes, and YOLO localization targets, integrating them via ROS.",
      technologies: ["C++", "Python", "ROS", "DroneKit", "Gazebo Simulator", "PX4", "YOLOv5"],
      challenges: "Coordinating decentralized collision avoidance without constant global communication. I implemented a localized velocity-obstacle (VO) algorithm that ran on-board each simulated drone, calculating collision-free trajectories asynchronously.",
      impact: "Conducted 50+ simulation flight tests and 3 physical drone test flights. Successfully located target human models in under 4 minutes across a 100m x 100m grid using a 2-UAV swarm.",
      learnings: "Developed strong competencies in multi-agent swarm logic, Gazebo spatial physics engines, ROS node scheduling optimization, and physical hardware flight debugging."
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">Internships in academic labs and global enterprise companies.</p>

        <div className="experience-list">
          {internships.map((job, idx) => (
            <div className="experience-card paper-card" key={idx}>
              <div className="exp-card-header">
                <div className="exp-title-block">
                  <h3 className="exp-role">{job.role}</h3>
                  <h4 className="exp-company">{job.company}</h4>
                </div>
                <div className="exp-meta-block">
                  <span className={`badge ${job.type === 'research' ? 'research' : 'industry'}`}>
                    {job.type}
                  </span>
                  <span className="exp-duration">{job.duration}</span>
                  <span className="exp-location">{job.location}</span>
                </div>
              </div>

              <div className="exp-content">
                <div className="exp-column">
                  <h5 className="exp-label">What I Built</h5>
                  <p className="exp-text">{job.whatIBuilt}</p>
                </div>

                <div className="exp-column">
                  <h5 className="exp-label">Engineering Challenges</h5>
                  <p className="exp-text">{job.challenges}</p>
                </div>

                <div className="exp-column">
                  <h5 className="exp-label">Impact & Results</h5>
                  <p className="exp-text highlight-text">{job.impact}</p>
                </div>

                <div className="exp-column">
                  <h5 className="exp-label">Key Learnings</h5>
                  <p className="exp-text">{job.learnings}</p>
                </div>

                <div className="exp-tech-list">
                  {job.technologies.map((tech, tIdx) => (
                    <span className="exp-tech-chip" key={tIdx}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          padding: 60px 0;
        }

        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
          text-align: left;
        }

        .experience-card {
          border-left: 4px solid var(--accent-primary) !important;
          padding: 36px !important;
        }

        .exp-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 20px;
          margin-bottom: 24px;
          gap: 20px;
        }

        @media (max-width: 768px) {
          .exp-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }

        .exp-role {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .exp-company {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--accent-primary);
          margin-top: 4px;
        }

        .exp-meta-block {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
        }

        @media (max-width: 768px) {
          .exp-meta-block {
            align-items: flex-start;
          }
        }

        .exp-duration {
          color: var(--text-primary);
          font-weight: 600;
        }

        .exp-location {
          color: var(--text-secondary);
        }

        .exp-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .exp-column {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .exp-label {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-primary);
          font-family: 'JetBrains Mono', monospace;
        }

        .exp-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .highlight-text {
          color: var(--text-primary);
          font-weight: 500;
          border-left: 2px solid var(--accent-support);
          padding-left: 12px;
        }

        .exp-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
          padding-top: 16px;
          border-top: 1px dashed var(--border-color);
        }

        .exp-tech-chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          font-weight: 500;
          background-color: var(--border-color);
          color: var(--text-secondary);
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid transparent;
        }

        .experience-card:hover .exp-tech-chip {
          border-color: var(--accent-primary);
          background-color: rgba(201, 108, 74, 0.03);
          color: var(--accent-primary);
        }
      `}</style>
    </section>
  );
}

export default Experience;
