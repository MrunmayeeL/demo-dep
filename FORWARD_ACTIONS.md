# Forward Actions Checklist

This document details all the placeholders, assets, and configurations that need to be finalized or uploaded by **Mrunmayee Mandar Limaye** to complete the portfolio setup.

---

## 👤 Profile & Brand
- [ ] **Professional Headshot**: Replace placeholder/avatar in `src/components/Main.tsx` or add to assets.
- [ ] **Personal Logo**: (Optional) Add a custom logo asset or custom initials in `src/components/Navigation.tsx`.
- [ ] **Bio Refinement**: Refine short summary text in `src/components/Main.tsx` and `src/components/About.tsx`.

---

## 🔗 Links & Credentials
- [ ] **Resume PDF**: Upload `Resume.pdf` to the public assets directory and replace `#resume-placeholder` in `src/components/Main.tsx` and `src/components/Footer.tsx`.
- [ ] **LinkedIn URL**: Verify LinkedIn path (`https://www.linkedin.com/in/mrunmayee-limaye`) in all links.
- [ ] **GitHub URL**: Verify GitHub profile path (`https://github.com/mrunmayee-limaye`) in components and in `src/components/GithubActivity.tsx` username state.
- [ ] **Google Scholar Profile**: Create a Google Scholar profile and replace `#google-scholar-placeholder` in `src/components/Main.tsx`.
- [ ] **ORCID Profile**: Add ORCID ID and replace `#orcid-placeholder` in `src/components/Contact.tsx`.
- [ ] **Email Verification**: Ensure direct mail links (`mailto:mrunmayee.limaye@gmail.com`) are routed properly.

---

## 💼 Experience Metrics
- [ ] **NatWest Group**: Verify internship dates, add company logos, or add more software/logging performance metrics.
- [ ] **IIT Roorkee**: Update agricultural drone project dates or add specific camera/nozzle flow details.
- [ ] **IvLabs**: Finalize role dates and add physical UAV hardware specs.

---

## 🛠️ Projects Deep Dive
- [ ] **Autonomous Multi-UAV Search and Rescue System**:
  - [ ] Upload high-resolution cover image.
  - [ ] Add flight testing simulation video link.
  - [ ] Update documentation link (GitBook/GitHub Wiki).
  - [ ] Upload system component diagram (replace inline SVG outline as needed).
- [ ] **Intelligent Examination Evaluation System**:
  - [ ] Add NLP dataset benchmarks and accuracy charts.
  - [ ] Link local source repository.
- [ ] **Autonomous Agricultural Drone**:
  - [ ] Add actual field test photos or spraying coordination diagrams.
  - [ ] Link control nodes source repository.
- [ ] **QR Guest Management System**:
  - [ ] Link Vercel/live demo endpoint.
  - [ ] Upload database schemas.
- [ ] **Northwind Sales Analytics**:
  - [ ] Add dashboard PNG screenshots.
  - [ ] Link SQL relational scripts.
- [ ] **Expense Tracker**:
  - [ ] Link C source files and include Valgrind validation logs.
- [ ] **Gesture Controlled Robot**:
  - [ ] Add physical glove demonstration video link.
  - [ ] Add schematic blueprint for ESP32 and MPU6050 connections.

---

## 🔬 Research & Publications
- [ ] **Research Description Refinement**: Verify sub-topics under "Current Interests" and "Future Directions" in `src/components/Research.tsx`.
- [ ] **Multi-UAV Collision Avoidance Paper**:
  - [ ] Update venue name after review cycle (e.g., IEEE L-RA / ICRA).
  - [ ] Upload preprint PDF and replace `#paper-placeholder` in `src/components/Publications.tsx`.
  - [ ] Add actual BibTeX snippet and citation count when indexed.
- [ ] **Agricultural Spraying Drone Paper**:
  - [ ] Replace "Coming Soon" badge with final proceedings link and conference booklet.
  - [ ] Add slides presentation PDF.

---

## 🏆 Achievements & Leadership
- [ ] **Achievements Verification**: Review and rewrite the mock achievements content in `src/components/Achievements.tsx` as the current entries are temporary placeholders marked with TODO badges.
- [ ] **Dean's List**: Replace Dean's List placeholder in `src/components/Achievements.tsx` with actual semesters/citations (currently set to 8.7 CGPA).
- [ ] **Scholarships**: Add the final title of undergraduate/national scholarships and remove "TODO" badge.
- [ ] **Workshops**: Double check dates and number of attendees for ROS and CV workshops in `src/components/Leadership.tsx`.

---

## 📝 Blog & RSS Feed
- [ ] **First Article**: Write the first technical article markdown draft.
- [ ] **RSS Feed Generation**: Set up an automated script (e.g., node script on build) to generate a sitemap-like `rss.xml` for blog posts, and replace `#rss-placeholder` in `src/components/Blog.tsx`.

---

## 📷 Media Assets
- [ ] **Drone Flight Photos**: Collect and compress JPEG photos of multi-UAV test runs.
- [ ] **Internship Photos**: Gather group photos or team logos from NatWest and IIT Roorkee.
- [ ] **Lab Photos**: Add photos of the IvLabs workspace and equipment.

---

## 🌐 SEO & Site Optimization
- [ ] **Google Analytics**: Embed tracking ID in `public/index.html` (e.g., Global Site Tag).
- [ ] **Google Search Console**: Upload verification HTML file to public directory.
- [ ] **Keywords**: Refine primary keywords in `public/index.html` head tags.
- [ ] **Sitemap Verification**: Ensure `public/sitemap.xml` priority matches search intent.

---

## 🚀 Deployment & Devops
- [ ] **Vercel / Netlify Configuration**: Connect the GitHub repository to Vercel/Netlify for automatic branch deployments.
- [ ] **Custom Domain**: Bind custom domain `mrunmayeelimaye.me` in Vercel settings and configure DNS A/CNAME records.
- [ ] **HTTPS Certificate**: Verify Let's Encrypt SSL activation in host settings.
- [ ] **Favicon**: Create a custom favicon representing initials or robotics node and overwrite `public/favicon.ico`.
- [ ] **Social Preview Image**: Upload `social_preview.png` to the public directory for OpenGraph link previews.
