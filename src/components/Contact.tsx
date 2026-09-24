import React, { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import BadgeIcon from '@mui/icons-material/Badge';
import RoomIcon from '@mui/icons-material/Room';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isNameEmpty = name.trim() === '';
    const isEmailEmpty = email.trim() === '';
    const isMessageEmpty = message.trim() === '';

    setNameError(isNameEmpty);
    setEmailError(isEmailEmpty);
    setMessageError(isMessageEmpty);

    if (!isNameEmpty && !isEmailEmpty && !isMessageEmpty) {
      console.log("Contact submission:", { name, email, message });
      setSubmitSuccess(true);

      // Directly open email client prefilled to send to mrunmayee.limaye@gmail.com
      const mailtoSubject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.open(`mailto:mrunmayee.limaye@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');

      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact & Collaboration</h2>
        <p className="section-subtitle">Reach out for research internships, engineering roles, or academic dialogue.</p>

        <div className="contact-grid">
          {/* Coordinates Column */}
          <div className="contact-coordinates paper-card">
            <h3>Contact Details</h3>
            <p className="coord-desc">
              Whether you are a recruiter searching for dynamic systems talent, a professor outlining graduate vacancies, 
              or a researcher sharing drone metrics, my inbox is open.
            </p>

            <div className="coordinates-list">
              <div className="coord-item">
                <span className="coord-icon"><RoomIcon fontSize="small"/></span>
                <div>
                  <h5>Location</h5>
                  <p>Nagpur, India (VNIT Campus)</p>
                </div>
              </div>
              <div className="coord-item">
                <span className="coord-icon"><MailOutlineIcon fontSize="small"/></span>
                <div>
                  <h5>Direct Email</h5>
                  <a href="mailto:mrunmayee.limaye@gmail.com">mrunmayee.limaye@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="academic-profiles">
              <h5>Profiles & Logs</h5>
              <div className="profiles-links">
                <a href="https://github.com/mrunmayee-limaye" target="_blank" rel="noreferrer" className="profile-link">
                  <GitHubIcon fontSize="inherit"/> GitHub
                </a>
                <a href="https://www.linkedin.com/in/mrunmayee-limaye" target="_blank" rel="noreferrer" className="profile-link">
                  <LinkedInIcon fontSize="inherit"/> LinkedIn
                </a>
                <a href="#google-scholar-placeholder" className="profile-link">
                  <SchoolIcon fontSize="inherit"/> Scholar <span className="todo-badge">TODO</span>
                </a>
                <a href="#orcid-placeholder" className="profile-link">
                  <BadgeIcon fontSize="inherit"/> ORCID <span className="todo-badge">TODO</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-card paper-card">
            <h3>Send Message</h3>
            
            {submitSuccess && (
              <div className="success-banner">
                <span>Message recorded successfully! Mrunmayee will reach back shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="custom-contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="user-name">Your Name *</label>
                  <input
                    id="user-name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setNameError(false);
                    }}
                    className={nameError ? "error-input" : ""}
                  />
                  {nameError && <span className="error-text">Name is required</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="user-email">Email / Phone *</label>
                  <input
                    id="user-email"
                    type="text"
                    placeholder="How to reach you"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError(false);
                    }}
                    className={emailError ? "error-input" : ""}
                  />
                  {emailError && <span className="error-text">Contact information is required</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="user-message">Message *</label>
                <textarea
                  id="user-message"
                  rows={6}
                  placeholder="Tell me about your project, internship opportunity, or academic query..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setMessageError(false);
                  }}
                  className={messageError ? "error-input" : ""}
                />
                {messageError && <span className="error-text">Message content is required</span>}
              </div>

              <button type="submit" className="btn-primary form-submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 60px 0 100px 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 24px;
          text-align: left;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        .contact-coordinates h3, .contact-form-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 14px;
          margin-bottom: 20px;
        }

        .coord-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .coordinates-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 28px;
        }

        .coord-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .coord-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background-color: rgba(201, 108, 74, 0.05);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
        }

        .coord-item h5 {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .coord-item p, .coord-item a {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        .coord-item a:hover {
          color: var(--accent-primary);
        }

        .academic-profiles h5 {
          font-size: 0.78rem;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
          color: var(--accent-primary);
          margin-bottom: 10px;
        }

        .profiles-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .profile-link {
          font-size: 0.8rem;
          font-weight: 550;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          padding: 6px 12px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .profile-link:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          background-color: rgba(201, 108, 74, 0.03);
        }

        /* Form Card */
        .custom-contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .form-group input, .form-group textarea {
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 10px 14px;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.92rem;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(201, 108, 74, 0.08);
        }

        .form-group input.error-input, .form-group textarea.error-input {
          border-color: #ef4444;
        }

        .error-text {
          font-size: 0.72rem;
          color: #ef4444;
          font-weight: 500;
        }

        .success-banner {
          background-color: rgba(124, 138, 88, 0.08);
          border: 1px solid rgba(124, 138, 88, 0.2);
          padding: 12px;
          border-radius: 6px;
          color: var(--accent-support);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 18px;
        }

        .form-submit-btn {
          align-self: flex-start;
          padding: 12px 24px;
          font-size: 0.9rem;
        }
      `}</style>
    </section>
  );
}

export default Contact;