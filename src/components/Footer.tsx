import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-left">
            <p className="footer-credit">
              Designed and developed by <strong>Mrunmayee Mandar Limaye</strong> using React and TypeScript.
            </p>
            <p className="footer-location">Nagpur, India • Open for global opportunities</p>
          </div>
          <div className="footer-right">
            <div className="footer-socials">
              <a href="https://github.com/mrunmayee-limaye" target="_blank" rel="noreferrer" title="GitHub" aria-label="GitHub"><GitHubIcon fontSize="small"/></a>
              <a href="https://www.linkedin.com/in/mrunmayee-limaye" target="_blank" rel="noreferrer" title="LinkedIn" aria-label="LinkedIn"><LinkedInIcon fontSize="small"/></a>
              <a href="mailto:mrunmayee.limaye@gmail.com" title="Email" aria-label="Email"><MailOutlineIcon fontSize="small"/></a>
            </div>
            <a href="#resume-placeholder" className="footer-resume-link">Download CV (PDF)</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {currentYear} Mrunmayee Mandar Limaye. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        .footer-section {
          background-color: var(--card-bg);
          border-top: 1px solid var(--border-color);
          padding: 48px 0 24px 0;
          color: var(--text-secondary);
          transition: background-color 0.4s ease, border-color 0.4s ease;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
          margin-bottom: 32px;
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .footer-credit {
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .footer-location {
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .footer-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }

        @media (max-width: 768px) {
          .footer-right {
            align-items: center;
          }
        }

        .footer-socials {
          display: flex;
          gap: 14px;
        }

        .footer-socials a {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .footer-socials a:hover {
          color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .footer-resume-link {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-primary);
          border-bottom: 1px dashed var(--accent-primary);
          padding-bottom: 2px;
          transition: all 0.2s ease;
        }

        .footer-resume-link:hover {
          color: var(--accent-secondary);
          border-color: var(--accent-secondary);
        }

        .footer-bottom {
          border-top: 1px solid var(--border-color);
          padding-top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer-copy {
          font-size: 0.78rem;
          color: var(--text-secondary);
        }
      `}</style>
    </footer>
  );
}

export default Footer;