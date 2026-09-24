import React from "react";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

function Blog() {
  const futureTopics = [
    {
      title: "Swarm Consensus Algorithms",
      desc: "Analyzing consensus mathematical frameworks in packet-loss heavy distributed mesh networks.",
      tag: "Robotics"
    },
    {
      title: "Telemetry Bottlenecks under Concurrency",
      desc: "How asynchronous log buffering and ring queue handlers prevent microservice endpoint blocking.",
      tag: "Systems"
    },
    {
      title: "Localizing Odometry in GPS-Denied Space",
      desc: "A hands-on implementation guide comparing complementary filters and Kalman filters for IMUs.",
      tag: "AI & Sensing"
    }
  ];

  return (
    <section className="blog-placeholder-section" id="blog">
      <div className="container">
        <h2 className="section-title">Technical Blog</h2>
        <p className="section-subtitle">Writing about deep engineering challenges, system designs, and algorithms.</p>

        <div className="blog-card paper-card">
          <div className="blog-header-row">
            <span className="upcoming-badge">
              <LibraryBooksIcon fontSize="inherit"/> Articles Pipeline
            </span>
            <a href="#rss-placeholder" className="rss-placeholder-link" title="RSS Feed Placeholder">
              <RssFeedIcon fontSize="small"/> RSS Feed <span className="todo-badge">TODO</span>
            </a>
          </div>

          <div className="blog-main-message">
            <h3>Technical articles coming soon.</h3>
            <p>
              I am currently compiling research findings and system case studies. 
              Below are draft outlines currently in my pipeline:
            </p>
          </div>

          <div className="topics-preview-grid">
            {futureTopics.map((topic, idx) => (
              <div className="topic-item" key={idx}>
                <div className="topic-header">
                  <span className="topic-tag">{topic.tag}</span>
                  <h4>{topic.title}</h4>
                </div>
                <p className="topic-desc">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .blog-placeholder-section {
          padding: 60px 0;
        }

        .blog-card {
          padding: 40px !important;
          border: 1px solid var(--border-color);
          background-color: var(--card-bg);
          box-shadow: 0 4px 20px var(--shadow-color);
          text-align: left;
        }

        .blog-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 18px;
          margin-bottom: 28px;
        }

        .upcoming-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--accent-primary);
          text-transform: uppercase;
        }

        .rss-placeholder-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          padding: 4px 10px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .rss-placeholder-link:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          background-color: rgba(201, 108, 74, 0.05);
        }

        .blog-main-message {
          margin-bottom: 32px;
        }

        .blog-main-message h3 {
          font-size: 1.38rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .blog-main-message p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .topics-preview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 768px) {
          .topics-preview-grid {
            grid-template-columns: 1fr;
          }
        }

        .topic-item {
          border: 1px solid var(--border-color);
          background-color: rgba(44, 36, 29, 0.01);
          padding: 20px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: all 0.2s ease;
        }
        
        .dark-mode .topic-item {
          background-color: rgba(255, 255, 255, 0.01);
        }

        .topic-item:hover {
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .topic-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          font-weight: 750;
          color: var(--accent-primary);
          text-transform: uppercase;
        }

        .topic-header h4 {
          font-size: 0.95rem;
          font-weight: 650;
          color: var(--text-primary);
          margin-top: 4px;
        }

        .topic-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
}

export default Blog;
