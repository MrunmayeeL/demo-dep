import React, { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import AutorenewIcon from '@mui/icons-material/Autorenew';

interface RepoData {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

interface ProfileStats {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}

function GithubActivity() {
  const [username, setUsername] = useState("mrunmayee-limaye");
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [profile, setProfile] = useState<ProfileStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [languages, setLanguages] = useState<{ [key: string]: number }>({});

  const fetchGithubData = async () => {
    setLoading(true);
    setError(false);
    try {
      // Fetch profile statistics
      const profileRes = await fetch(`https://api.github.com/users/${username}`);
      if (!profileRes.ok) throw new Error("Profile not found");
      const profileData = await profileRes.json();
      setProfile({
        public_repos: profileData.public_repos,
        followers: profileData.followers,
        following: profileData.following,
        avatar_url: profileData.avatar_url
      });

      // Fetch repos
      const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
      if (!reposRes.ok) throw new Error("Repositories not found");
      const reposData: RepoData[] = await reposRes.json();
      
      // Sort by stargazers first, then limit to top 4
      const sortedRepos = [...reposData]
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 4);
      setRepos(sortedRepos);

      // Aggregate languages
      const langCount: { [key: string]: number } = {};
      let totalLangs = 0;
      reposData.forEach(r => {
        if (r.language) {
          langCount[r.language] = (langCount[r.language] || 0) + 1;
          totalLangs++;
        }
      });
      // Convert to percentages
      const langPercentages: { [key: string]: number } = {};
      Object.keys(langCount).forEach(k => {
        langPercentages[k] = Math.round((langCount[k] / totalLangs) * 100);
      });
      setLanguages(langPercentages);
    } catch (err) {
      console.warn("GitHub API error or rate-limit. Degraded gracefully.", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubData();
  }, [username]);

  const renderSkeleton = () => (
    <div className="github-skeleton-grid">
      <div className="skeleton-item paper-card" style={{ height: '140px' }}></div>
      <div className="skeleton-item paper-card" style={{ height: '140px' }}></div>
      <div className="skeleton-item paper-card" style={{ height: '240px', gridColumn: 'span 2' }}></div>
    </div>
  );

  return (
    <section className="github-section" id="github">
      <div className="container">
        <h2 className="section-title">GitHub Code Presence</h2>
        <p className="section-subtitle">Real-time statistics and repository pipelines directly from my GitHub profile.</p>

        {loading ? (
          renderSkeleton()
        ) : error ? (
          <div className="github-degraded-card paper-card">
            <div className="degraded-header">
              <span className="todo-badge">TODO</span>
              <h3>GitHub API Limit / Connection Offline</h3>
            </div>
            <p>
              We were unable to establish a connection with the GitHub REST API (this is common if rate limits are reached on the client side). 
              The layout has degraded gracefully. You can configure your GitHub username at the top of <code>GithubActivity.tsx</code>.
            </p>
            <div className="fallback-details-grid">
              <div className="fallback-card">
                <h5>Fallback Repository</h5>
                <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer">
                  github.com/{username} <span className="open-icon">↗</span>
                </a>
              </div>
              <button className="btn-secondary" onClick={fetchGithubData}>
                <AutorenewIcon fontSize="small"/> Retry Connection
              </button>
            </div>
          </div>
        ) : (
          <div className="github-activity-grid">
            {/* Stats Card */}
            <div className="github-stats-card paper-card">
              <div className="stats-header">
                {profile?.avatar_url && (
                  <img src={profile.avatar_url} alt="GitHub Avatar" className="github-avatar" />
                )}
                <div>
                  <h4>@{username}</h4>
                  <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer" className="view-profile-link">
                    View Profile <GitHubIcon fontSize="inherit"/>
                  </a>
                </div>
              </div>
              <div className="stats-row">
                <div className="stat-col">
                  <span className="stat-num">{profile?.public_repos || 0}</span>
                  <span className="stat-lbl">Public Repos</span>
                </div>
                <div className="stat-col">
                  <span className="stat-num">{profile?.followers || 0}</span>
                  <span className="stat-lbl">Followers</span>
                </div>
                <div className="stat-col">
                  <span className="stat-num">{profile?.following || 0}</span>
                  <span className="stat-lbl">Following</span>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="github-langs-card paper-card">
              <h3>Language Distribution</h3>
              <div className="langs-bar-container">
                {Object.keys(languages).map((lang, idx) => {
                  const colors = ["var(--accent-primary)", "var(--accent-support)", "var(--accent-highlight)", "var(--accent-secondary)", "var(--accent-support-sec)"];
                  const col = colors[idx % colors.length];
                  return (
                    <div 
                      key={lang} 
                      className="lang-bar-segment" 
                      style={{ 
                        width: `${languages[lang]}%`, 
                        backgroundColor: col 
                      }} 
                      title={`${lang}: ${languages[lang]}%`}
                    />
                  );
                })}
              </div>
              <div className="langs-legend">
                {Object.keys(languages).map((lang, idx) => {
                  const colors = ["var(--accent-primary)", "var(--accent-support)", "var(--accent-highlight)", "var(--accent-secondary)", "var(--accent-support-sec)"];
                  const col = colors[idx % colors.length];
                  return (
                    <div key={lang} className="legend-item">
                      <span className="legend-dot" style={{ backgroundColor: col }} />
                      <span className="legend-text">{lang} ({languages[lang]}%)</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Top Repositories */}
            <div className="github-repos-card paper-card">
              <h3>Active Repositories</h3>
              <div className="repos-grid">
                {repos.map(repo => (
                  <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo-item-link" key={repo.name}>
                    <div className="repo-box">
                      <div className="repo-box-header">
                        <h4>{repo.name}</h4>
                        <span className="repo-lang-tag">{repo.language || "Plain"}</span>
                      </div>
                      <p className="repo-desc-text">{repo.description || "No description provided."}</p>
                      <div className="repo-stats-row">
                        <span className="stat-item"><StarBorderIcon fontSize="inherit"/> {repo.stargazers_count}</span>
                        <span className="stat-item"><CallSplitIcon fontSize="inherit"/> {repo.forks_count}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .github-section {
          padding: 60px 0;
        }

        .github-degraded-card {
          border-left: 4px solid var(--accent-highlight) !important;
          padding: 32px !important;
          text-align: left;
        }

        .degraded-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .degraded-header h3 {
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .github-degraded-card p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .fallback-details-grid {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .fallback-card h5 {
          font-size: 0.72rem;
          font-family: 'JetBrains Mono', monospace;
          color: var(--accent-primary);
          text-transform: uppercase;
        }

        .fallback-card a {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        /* Stats Grid */
        .github-activity-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 24px;
          text-align: left;
        }

        @media (max-width: 1024px) {
          .github-activity-grid {
            grid-template-columns: 1fr;
          }
        }

        .github-repos-card {
          grid-column: span 2;
        }

        @media (max-width: 1024px) {
          .github-repos-card {
            grid-column: span 1;
          }
        }

        .github-stats-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 28px !important;
        }

        .stats-header {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .github-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
        }

        .stats-header h4 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .view-profile-link {
          font-size: 0.82rem;
          color: var(--accent-primary);
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-top: 2px;
        }

        .stats-row {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid var(--border-color);
          padding-top: 20px;
          margin-top: 20px;
        }

        .stat-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }

        .stat-num {
          font-size: 1.45rem;
          font-weight: 800;
          font-family: 'JetBrains Mono', monospace;
          color: var(--text-primary);
        }

        .stat-lbl {
          font-size: 0.72rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          margin-top: 4px;
          letter-spacing: 0.05em;
        }

        /* Languages card */
        .github-langs-card {
          padding: 28px !important;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .github-langs-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .langs-bar-container {
          display: flex;
          height: 12px;
          border-radius: 6px;
          overflow: hidden;
          background-color: var(--border-color);
          margin-bottom: 20px;
        }

        .lang-bar-segment {
          height: 100%;
          transition: width 0.3s ease;
        }

        .langs-legend {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .legend-text {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-family: 'JetBrains Mono', monospace;
        }

        /* Repos card */
        .github-repos-card h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 20px;
        }

        .repos-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        @media (max-width: 640px) {
          .repos-grid {
            grid-template-columns: 1fr;
          }
        }

        .repo-item-link {
          display: block;
        }

        .repo-box {
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 20px;
          background-color: rgba(255,255,255,0.01);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.2s ease;
        }

        .repo-item-link:hover .repo-box {
          border-color: var(--accent-primary);
          background-color: rgba(201, 108, 74, 0.02);
          transform: translateY(-2px);
        }
        
        .dark-mode .repo-item-link:hover .repo-box {
          background-color: rgba(255, 255, 255, 0.01);
        }

        .repo-box-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .repo-box-header h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .repo-lang-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          background-color: var(--border-color);
          color: var(--text-secondary);
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 550;
        }

        .repo-desc-text {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
          margin-bottom: 14px;
          flex: 1;
        }

        .repo-stats-row {
          display: flex;
          gap: 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          color: var(--text-secondary);
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 3px;
        }

        /* Skeleton Loading styles */
        .github-skeleton-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .skeleton-item {
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          position: relative;
          overflow: hidden;
        }

        .skeleton-item::after {
          content: '';
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          background: linear-gradient(90deg, transparent, rgba(201, 108, 74, 0.04), transparent);
          transform: translateX(-100%);
          animation: loading-sweep 1.5s infinite;
        }

        @keyframes loading-sweep {
          to { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}

export default GithubActivity;
