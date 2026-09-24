import React, { useState } from "react";
import ProjectModal, { ProjectData } from "./ProjectModal";
import VisibilityIcon from '@mui/icons-material/Visibility';
import HubIcon from '@mui/icons-material/Hub';

function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"overview" | "architecture">("overview");

  const projects: ProjectData[] = [
    {
      id: "uav-search-rescue",
      title: "Autonomous Multi-UAV Search and Rescue System",
      subtitle: "Multi-agent coordination, spatial exploration, and target localization.",
      badges: ["Research", "Publication", "Open Source"],
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80",
      status: "Active Research",
      duration: "May 2024 - Present",
      role: "Lead Systems Researcher",
      impact: "Swarm located targets in under 4 minutes across a 100m² grid in physical hardware testing.",
      lessons: "Decentralized control requires robust local estimators. Simple velocity obstacles scale better than complex global optimization under packet loss constraints.",
      techStack: ["ROS", "DroneKit", "ArduPilot", "YOLOv5", "C++", "Python", "Gazebo"],
      problem: "In disaster areas, human rescue is bottlenecked by search times and hazardous environments. Single drones have limited battery and search area coverage, requiring a coordinated multi-agent system that functions without a single point of failure.",
      solution: "Engineered a decentralized multi-UAV system where drones coordinate search grids using velocity obstacles for collision avoidance, and run on-board deep-learning localization models to detect survivors.",
      challenges: "Eliminating dependency on constant global server communication. Solved by writing an on-board relative coordination node using MAVLink messages that runs asynchronously on the PX4 autopilot stack.",
      futureWork: "Deploying physical swarms of 5+ drones using a distributed mesh network and experimenting with dynamic target assignment in high wind conditions.",
      github: "https://github.com/mrunmayee-limaye/multi-uav-rescue",
      video: "#video-placeholder",
      publication: "#paper-placeholder",
      diagramType: "swarm"
    },
    {
      id: "exam-evaluation",
      title: "Intelligent Examination Evaluation System",
      subtitle: "Automated scoring and descriptive grading pipeline using OCR and LLMs.",
      badges: ["Research", "Academic"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
      status: "Completed",
      duration: "Aug 2024 - Oct 2024",
      role: "AI & Pipeline Engineer",
      impact: "Attained 94% grading correlation against professional human evaluators on benchmark datasets.",
      lessons: "OCR parsing errors heavily pollute embedding spaces. Adding a spelling corrector and structured prompt templates yields 20% higher grading reliability.",
      techStack: ["LLMs", "OCR", "SBERT", "Python", "REST APIs"],
      problem: "Grading descriptive academic answers is time-consuming and prone to human subjectivity. Standard text matching fails to reward conceptual accuracy expressed in different words.",
      solution: "Developed an automated grading pipeline. Scanned answers are transcribed using PaddleOCR, mapped into a semantic space using SBERT vector embeddings to score conceptual coverage, and then evaluated for semantic depth using customized LLMs.",
      challenges: "Correcting for bad handwriting and structural spacing. Overcame this by building a custom text-segmentation model that isolates individual sentences prior to feedforward extraction.",
      futureWork: "Extending the scoring model to check mathematical equations and hand-drawn flowcharts/diagrams using multimodal vision models.",
      github: "https://github.com/mrunmayee-limaye/intelligent-grading",
      diagramType: "grading"
    },
    {
      id: "agri-drone",
      title: "Autonomous Agricultural Spraying Drone",
      subtitle: "Target-specific dual spray crop protection using vision and flight controls.",
      badges: ["Research", "Internship"],
      image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=600&q=80",
      status: "Completed",
      duration: "Dec 2024 - Jan 2025",
      role: "Autonomous Systems Intern",
      impact: "Reduced chemical usage by 40% in field testing through target-specific spray actuation.",
      lessons: "Hardware latency in chemical valves must be calculated within the speed controllers; spraying early is better than spraying late due to forward drift.",
      techStack: ["ROS", "YOLOv8", "ArduPilot", "MAVLink", "Python", "OpenCV"],
      problem: "Traditional crop spraying is highly inefficient, wasting expensive chemicals on bare soil and creating significant environmental hazards.",
      solution: "Built a vision-guided autonomous spray controller. Integrated a downward-facing camera feeding a local YOLO model to identify target crop boundaries and trigger localized dual spray valves.",
      challenges: "Operating at low altitudes under heavy vibration. We resolved this by building a custom Kalman filter tracking crop positions dynamically, stabilizing target detection nodes.",
      futureWork: "Integrating multi-spectral cameras to classify crop health (Nir/Red) and vary chemical dosages based on real-time health indexes.",
      github: "https://github.com/mrunmayee-limaye/agri-drone-controller",
      diagramType: "agri"
    },
    {
      id: "guest-management",
      title: "QR Guest Management System",
      subtitle: "Production-ready check-in application with automated QR generation.",
      badges: ["Industry", "Open Source"],
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
      status: "Completed",
      duration: "Jan 2024 - Mar 2024",
      role: "Full Stack Developer",
      impact: "Deploys on AWS with sub-50ms API endpoint latencies under concurrent user testing.",
      lessons: "Stateless JWT authorization paired with Redis caching keeps database connections stable during peak registration events.",
      techStack: ["React", "Express.js", "PostgreSQL", "Docker", "AWS", "JWT"],
      problem: "Large scale events suffer from slow paper-based checking queues, entry tracking leaks, and slow host coordination.",
      solution: "Engineered a secure web app that generates dynamic QR passes for guests upon registration, supporting live check-in scanning, role-based controls, and host notification hooks.",
      challenges: "Preventing QR code duplication or theft. Solved by implementing timed TOTP-style hashes within the QR content that rotate every 60 seconds.",
      futureWork: "Adding face-recognition check-in backup and multi-tenant sub-event organization.",
      github: "https://github.com/mrunmayee-limaye/qr-guest-manager",
      diagramType: "qr"
    },
    {
      id: "sales-analytics",
      title: "Northwind Sales Analytics Dashboard",
      subtitle: "Business intelligence and pipeline visualization models on relational data.",
      badges: ["Industry", "Data"],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
      status: "Completed",
      duration: "Sep 2023 - Nov 2023",
      role: "Data Analyst",
      impact: "Identified $45k in supply bottlenecks and inventory overstock patterns through relational modeling.",
      lessons: "Simple denormalized views and indexes speed up complex analytical subqueries by over 10x.",
      techStack: ["SQL", "Python", "Pandas", "Matplotlib", "PowerBI"],
      problem: "Raw transactional tables hide macro operational trends, customer churn signals, and region-specific logistics issues.",
      solution: "Formulated aggregate SQL scripts, designed star-schema data models, and built interactive dashboards plotting customer lifetime value, shipping delays, and product margins.",
      challenges: "Handling anomalous and missing values in legacy database fields. Addressed using Pandas parsing cleanups and SQL fallback triggers.",
      futureWork: "Implementing automated predictive inventory forecasts using ARIMA statistical models in Python.",
      github: "https://github.com/mrunmayee-limaye/northwind-analytics",
      diagramType: "data"
    },
    {
      id: "expense-tracker",
      title: "CLI Expense Tracker",
      subtitle: "High-performance command-line transactional tracker.",
      badges: ["Open Source", "Academic"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      status: "Completed",
      duration: "Apr 2023 - May 2023",
      role: "Systems Programmer",
      impact: "Processes sorting and categorical filtering of 10,000 transactions in under 2ms.",
      lessons: "Manual pointer references and linked structures prevent memory fragmentation on micro-architectures compared to massive static arrays.",
      techStack: ["C", "CLI", "Data Structures", "Pointers"],
      problem: "High-level desktop applications require heavy frameworks and memory footprints just to track transaction Ledgers.",
      solution: "Wrote a lightweight command-line interface tool in pure C. Leveraged dynamic memory allocation, binary search trees for fast category indexing, and file streams for ledger caching.",
      challenges: "Preventing memory leaks during sorting operations. Solved by writing strict memory validation hooks and running the program through Valgrind debugger.",
      futureWork: "Porting the engine to bare-metal microcontroller boards with an attached OLED display.",
      github: "https://github.com/mrunmayee-limaye/cli-expense-tracker",
      diagramType: "c-cli"
    },
    {
      id: "gesture-robot",
      title: "Gesture Controlled Robot",
      subtitle: "Wireless spatial navigation controller using ESP32 and MPU6050.",
      badges: ["Competition", "Open Source"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
      status: "Completed",
      duration: "Oct 2023 - Dec 2023",
      role: "Hardware & Control Lead",
      impact: "Achieved sub-10ms wireless command transmission latency using ESP-NOW protocols.",
      lessons: "Accelerometer raw data is highly noisy. Implementing a complementary filter combining gyroscope integration is essential for drift correction.",
      techStack: ["ESP32", "MPU6050", "C++", "Embedded Systems", "ESP-NOW"],
      problem: "Traditional joystick systems require dual-hand coordination, making steering difficult for operators carrying secondary payloads.",
      solution: "Developed a glove-mounted controller utilizing an MPU6050 inertial measurement unit. The glove reads hand pitch/roll, calculates target steering vectors, and sends them wirelessly to the receiver chassis.",
      challenges: "Correcting for hand tremor. Resolved by applying a rolling-average noise filter to the tilt angles, ensuring smooth drive outputs.",
      futureWork: "Adding haptic feedback motors to the glove that vibrate as the chassis approaches obstacles.",
      github: "https://github.com/mrunmayee-limaye/gesture-robot-esp32",
      diagramType: "embedded"
    }
  ];

  const handleOpenModal = (project: ProjectData, tab: "overview" | "architecture") => {
    setSelectedProject(project);
    setModalTab(tab);
    setModalOpen(true);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Systems, software, and hardware built in labs, courses, and open source.</p>

        <div className="projects-grid-new">
          {projects.map((proj) => (
            <div className="project-card-new paper-card" key={proj.id}>
              
              {/* Cover Image */}
              <div className="proj-image-wrapper">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  loading="lazy"
                />
                <span className="proj-status-tag">{proj.status}</span>
              </div>

              {/* Card Body */}
              <div className="proj-body">
                <div className="proj-badges">
                  {proj.badges.map((b, idx) => (
                    <span className={`badge ${b.toLowerCase().replace(" ", "-")}`} key={idx}>{b}</span>
                  ))}
                </div>
                
                <h3 className="proj-title">{proj.title}</h3>
                <p className="proj-desc">{proj.subtitle}</p>

                <div className="proj-meta-info">
                  <span><strong>Duration:</strong> {proj.duration}</span>
                  <span><strong>Role:</strong> {proj.role}</span>
                </div>

                <div className="proj-card-actions">
                  <button 
                    className="btn-primary" 
                    onClick={() => handleOpenModal(proj, "overview")}
                  >
                    <VisibilityIcon fontSize="small" /> Deep Dive
                  </button>
                  <button 
                    className="btn-secondary" 
                    onClick={() => handleOpenModal(proj, "architecture")}
                  >
                    <HubIcon fontSize="small" /> Architecture
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* More Projects on GitHub */}
        <div className="more-projects-block paper-card">
          <h3>More Projects on GitHub</h3>
          <p className="more-projects-subtitle">A collection of single-purpose scripts, utilities, and libraries.</p>
          <div className="more-projects-list">
            <a href="https://github.com/mrunmayee-limaye/distributed-log-analyzer" target="_blank" rel="noreferrer" className="more-proj-link">
              <span><strong>distributed-log-analyzer</strong> — Java library parsing operational metrics to AWS CloudWatch.</span>
              <span className="arrow-link">↗</span>
            </a>
            <a href="https://github.com/mrunmayee-limaye/mpu6050-filter" target="_blank" rel="noreferrer" className="more-proj-link">
              <span><strong>mpu6050-filter</strong> — Complementary tilt calculation filter for ESP32 and MPU6050.</span>
              <span className="arrow-link">↗</span>
            </a>
            <a href="https://github.com/mrunmayee-limaye/dec-uav-planner" target="_blank" rel="noreferrer" className="more-proj-link">
              <span><strong>dec-uav-planner</strong> — Standalone A* and RRT* path-planning simulator in Python.</span>
              <span className="arrow-link">↗</span>
            </a>
            <a href="https://github.com/mrunmayee-limaye/ocr-sentence-seg" target="_blank" rel="noreferrer" className="more-proj-link">
              <span><strong>ocr-sentence-seg</strong> — Handwriting OCR segmenter utilizing PaddleOCR for text boundary analysis.</span>
              <span className="arrow-link">↗</span>
            </a>
            <a href="https://github.com/mrunmayee-limaye/sql-analytics-views" target="_blank" rel="noreferrer" className="more-proj-link">
              <span><strong>sql-analytics-views</strong> — Optimized relational views and index schemas for Northwind dataset.</span>
              <span className="arrow-link">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        initialTab={modalTab}
      />

      <style>{`
        .projects-section {
          padding: 60px 0;
        }

        .more-projects-block {
          margin-top: 48px;
          text-align: left;
          padding: 32px !important;
          border-left: 4px solid var(--accent-primary) !important;
        }

        .more-projects-block h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .more-projects-subtitle {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .more-projects-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .more-proj-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          font-size: 0.9rem;
          color: var(--text-secondary) !important;
          transition: all 0.2s ease;
          background-color: rgba(255, 255, 255, 0.01);
        }

        .more-proj-link strong {
          color: var(--text-primary);
          font-family: 'JetBrains Mono', monospace;
        }

        .more-proj-link:hover {
          border-color: var(--accent-primary);
          background-color: rgba(201, 108, 74, 0.03);
          transform: translateX(4px);
          color: var(--accent-primary) !important;
        }

        .arrow-link {
          font-weight: 700;
          color: var(--accent-primary);
        }

        .projects-grid-new {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          text-align: left;
        }

        @media (max-width: 1024px) {
          .projects-grid-new {
            grid-template-columns: 1fr;
          }
        }

        .project-card-new {
          display: flex;
          flex-direction: column;
          padding: 0px !important;
          border-radius: 16px;
        }

        .proj-image-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          border-bottom: 1px solid var(--border-color);
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
        }

        .proj-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card-new:hover .proj-image-wrapper img {
          transform: scale(1.05);
        }

        .proj-status-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          font-weight: 700;
          background-color: var(--accent-primary);
          color: #ffffff;
          padding: 4px 8px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .proj-body {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .proj-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 14px;
        }

        .proj-title {
          font-size: 1.28rem;
          font-weight: 750;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 8px;
        }

        .proj-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 20px;
          flex: 1;
        }

        .proj-meta-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
          padding-top: 12px;
          border-top: 1px dashed var(--border-color);
        }

        .proj-meta-info strong {
          color: var(--text-primary);
        }

        .proj-card-actions {
          display: flex;
          gap: 12px;
          margin-top: auto;
        }

        .proj-card-actions button {
          flex: 1;
          font-size: 0.88rem;
          padding: 10px 16px;
        }
      `}</style>
    </section>
  );
}

export default Project;