import React, { useState } from "react";
import ShareIcon from '@mui/icons-material/Share';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import BookIcon from '@mui/icons-material/Book';

interface PublicationData {
  title: string;
  authors: string;
  venue: string;
  status: "Published" | "Under Review" | "Coming Soon";
  abstract: string;
  keywords: string[];
  bibtex: string;
  citation: string;
  pdf?: string;
  slides?: string;
  code?: string;
  dataset?: string;
}

function Publications() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(type);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const publications: PublicationData[] = [
    {
      title: "Robust Anomaly Detection in High-Dimensional Time-Series Streams for Distributed Cloud Clusters",
      authors: "Mrunmayee Mandar Limaye, et al.",
      venue: "Proceedings of the IEEE International Conference on Big Data (IEEE Big Data 2025)",
      status: "Published",
      abstract: "Analyzing distributed cloud telemetry under massive concurrency. This work formulates an adaptive thresholding algorithm running over high-dimensional streaming logs. By evaluating anomaly scoring vectors across decoupled cluster layers, we reduce latency overhead by 30% under peak loads.",
      keywords: ["Cloud Telemetry", "Anomaly Detection", "Distributed Systems", "Time-Series"],
      bibtex: `@inproceedings{limaye2025robust,\n  title={Robust Anomaly Detection in High-Dimensional Time-Series Streams},\n  author={Limaye, Mrunmayee Mandar and others},\n  booktitle={IEEE International Conference on Big Data},\n  year={2025}\n}`,
      citation: "Limaye, M. M., et al. (2025). Robust Anomaly Detection in High-Dimensional Time-Series Streams for Distributed Cloud Clusters. Proceedings of the IEEE International Conference on Big Data."
    },
    {
      title: "Decentralized Collision Avoidance for Multi-UAV Swarms in Cluttered Environments Using Localized Velocity Obstacles",
      authors: "Mrunmayee Mandar Limaye, et al.",
      venue: "Accepted (In Press), IEEE Robotics and Automation Letters (L-RA)",
      status: "Coming Soon",
      abstract: "This paper introduces a decentralized spatial optimization pipeline for micro-aerial vehicle (UAV) swarms operating in search and rescue missions. By deploying localized velocity-obstacle (VO) filters on-board each PX4 unit, we establish a collision-free consensus model that requires no global coordination server. Flight tests in Gazebo simulators and physical hardware showcase robust target tracking and avoidance rates.",
      keywords: ["Multi-Agent Swarms", "Autonomous UAVs", "Path Planning", "ROS", "PX4"],
      bibtex: `@article{limaye2026multi,\n  title={Decentralized Collision Avoidance for Multi-UAV Swarms in Cluttered Environments},\n  author={Limaye, Mrunmayee Mandar and others},\n  journal={IEEE Robotics and Automation Letters (Accepted)},\n  year={2026}\n}`,
      citation: "Limaye, M. M., et al. (2026). Decentralized Collision Avoidance for Multi-UAV Swarms in Cluttered Environments. IEEE Robotics and Automation Letters (L-RA). In Press."
    },
    {
      title: "Intelligent Spraying Controller for Agricultural Drones via Visual Crop-Bed Segmentation and Edge YOLO Inference",
      authors: "Mrunmayee Mandar Limaye, et al.",
      venue: "Accepted (In Press), National Conference on Autonomous UAV Systems",
      status: "Coming Soon",
      abstract: "Automating precision spraying in agricultural fields. Using a downward-facing camera feed, we deploy a cropped YOLOv8 model combined with boundary segmentation on the edge. The system adjusts actuator flow dynamically, reducing crop-bed chemical runoff.",
      keywords: ["Precision Agriculture", "YOLOv8", "Computer Vision", "Valve Actuation"],
      bibtex: `@inproceedings{limaye2026agri,\n  title={Intelligent Spraying Controller for Agricultural Drones via Visual Crop-Bed Segmentation},\n  author={Limaye, Mrunmayee Mandar and others},\n  booktitle={National Conference on Autonomous UAV Systems (Accepted)},\n  year={2026}\n}`,
      citation: "Limaye, M. M., et al. (2026). Intelligent Spraying Controller for Agricultural Drones. National Conference on Autonomous UAV Systems. In Press."
    }
  ];

  return (
    <section className="publications-section" id="publications">
      <div className="container">
        <h2 className="section-title">Research Publications</h2>
        <p className="section-subtitle">Academic papers, workshop contributions, and preprints.</p>

        <div className="publications-list">
          {publications.map((pub, idx) => (
            <div className="publication-card paper-card" key={idx}>
              <div className="pub-header">
                <div className="pub-badge-row">
                  <span className={`pub-status-tag ${pub.status.toLowerCase().replace(" ", "-")}`}>
                    {pub.status}
                  </span>
                  <span className="pub-type-tag"><BookIcon fontSize="inherit"/> Journal / Conference Paper</span>
                </div>
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-venue">{pub.venue}</p>
              </div>

              {/* Expandable/Details for Abstract */}
              <details className="pub-details-dropdown">
                <summary className="pub-details-summary">View Abstract & Details</summary>
                <div className="pub-details-body">
                  <div className="details-block">
                    <h5>Abstract</h5>
                    <p>{pub.abstract}</p>
                  </div>
                  <div className="details-block">
                    <h5>Keywords</h5>
                    <div className="pub-keywords-chips">
                      {pub.keywords.map((kw, kIdx) => (
                        <span className="kw-chip" key={kIdx}>{kw}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </details>

              {/* Action Buttons */}
              <div className="pub-actions">
                <button 
                  className="btn-secondary font-mono" 
                  onClick={() => handleCopy(pub.bibtex, `bib-${idx}`)}
                >
                  <ShareIcon fontSize="small" /> 
                  {copiedId === `bib-${idx}` ? "Copied BibTeX!" : "Copy BibTeX"}
                </button>
                <button 
                  className="btn-secondary font-mono" 
                  onClick={() => handleCopy(pub.citation, `cite-${idx}`)}
                >
                  <FileCopyIcon fontSize="small" /> 
                  {copiedId === `cite-${idx}` ? "Copied Citation!" : "Copy Citation"}
                </button>
                <a href="#paper-placeholder" className="btn-secondary disabled">
                  PDF (Coming Soon)
                </a>
                <a href="#slides-placeholder" className="btn-secondary disabled">
                  Slides (Coming Soon)
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .publications-section {
          padding: 60px 0;
        }

        .publications-list {
          display: flex;
          flex-direction: column;
          gap: 28px;
          text-align: left;
        }

        .publication-card {
          border-left: 4px solid var(--accent-support) !important;
          padding: 32px !important;
        }

        .pub-badge-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .pub-status-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .pub-status-tag.published {
          background-color: var(--accent-support);
          color: #ffffff;
        }

        .pub-status-tag.under-review {
          background-color: var(--accent-primary);
          color: #ffffff;
        }

        .pub-status-tag.coming-soon {
          background-color: var(--accent-highlight);
          color: #171311;
        }

        .pub-status-tag.in-press {
          background-color: var(--accent-secondary);
          color: #ffffff;
        }

        .pub-type-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .pub-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .pub-authors {
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-top: 6px;
          font-weight: 500;
        }

        .pub-venue {
          font-size: 0.88rem;
          font-style: italic;
          color: var(--text-secondary);
          margin-top: 4px;
        }

        /* Details accordion dropdown */
        .pub-details-dropdown {
          margin-top: 16px;
          border-top: 1px solid var(--border-color);
          padding-top: 14px;
        }

        .pub-details-summary {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--accent-primary);
          cursor: pointer;
          outline: none;
          user-select: none;
          padding: 4px 0;
        }

        .pub-details-summary:hover {
          color: var(--accent-secondary);
        }

        .pub-details-body {
          padding-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .details-block h5 {
          font-size: 0.78rem;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
          color: var(--accent-primary);
          margin-bottom: 4px;
        }

        .details-block p {
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .pub-keywords-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .kw-chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          background-color: var(--border-color);
          color: var(--text-secondary);
          padding: 2px 8px;
          border-radius: 4px;
        }

        /* Actions row */
        .pub-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 20px;
          border-top: 1px dashed var(--border-color);
          padding-top: 16px;
        }

        .pub-actions button, .pub-actions a {
          font-size: 0.82rem;
          padding: 8px 14px;
        }

        .pub-actions a.disabled {
          opacity: 0.5;
          pointer-events: none;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
}

export default Publications;
