import React from "react";
import "./Portfolio.css";
import Navbar from "../../components/navbar/Navbar";

// Dashboard 1
import d1img1 from "../../assets/Dashboard1/img1.png";
import d1img2 from "../../assets/Dashboard1/img2.png";
import d1img3 from "../../assets/Dashboard1/img3.png";

// Dashboard 2
import d2img1 from "../../assets/Dashboard2/img1.png";
import d2img2 from "../../assets/Dashboard2/img2.png";
import d2img3 from "../../assets/Dashboard2/img3.png";

// Dashboard 3
import d3img1 from "../../assets/Dashboard3/img1.png";
import d3img2 from "../../assets/Dashboard3/img2.png";
import d3img3 from "../../assets/Dashboard3/img3.png";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      overview:
        "A modern analytics dashboard that provides real-time business insights, sales tracking, product management, and advanced visual reports.",
      live: "https://e-dashboardai.netlify.app/#/dashboard",
      github: "https://github.com/yourusername/project",
      features: [
        "Real-time Analytics",
        "Interactive Charts",
        "User Management",
        "Dark/Light Mode",
        "Responsive Design",
        "Data Export",
      ],
      tech: [
        "React",
        "JavaScript",
        "CSS3",
        "Chart.js",
        "Axios",
        "React Router",
      ],
      images: [d1img1, d1img2, d1img3],
    },

    {
      title: "Admin Dashboard",
      overview:
        "Powerful admin panel for managing users, products, analytics, reports, and business operations through a clean and intuitive interface.",
      live: "https://dashboarda1.netlify.app/",
      github: "https://github.com/yourusername/project",
      features: [
        "Product Approval",
        "Analytics",
        "User Roles",
        "Notifications",
        "Responsive UI",
        "Secure Access",
      ],
      tech: [
        "React",
        "Context API",
        "CSS3",
        "Axios",
        "React Router",
      ],
      images: [d2img1, d2img2, d2img3],
    },

    {
      title: "Analytics Dashboard",
      overview:
        "Advanced reporting and analytics system featuring interactive charts, KPI monitoring, performance metrics, and exportable reports.",
      live: "https://e-dashboarde.netlify.app/",
      github: "https://github.com/yourusername/project",
      features: [
        "KPI Monitoring",
        "Bar Charts",
        "Pie Charts",
        "Performance Reports",
        "Mobile Responsive",
        "Dark Theme",
      ],
      tech: [
        "React",
        "JavaScript",
        "Chart.js",
        "Axios",
        "CSS3",
      ],
      images: [d3img1, d3img2, d3img3],
    },
  ];

  return (
    <>
      <Navbar />

      <section className="portfolio">
        <h1 className="portfolio-title">MY PORTFOLIO</h1>

        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {/* Left Side */}
            <div className="project-left">
              <span className="featured">
                ⭐ Featured Project
              </span>

              <h2>{project.title}</h2>

              <p className="project-description">
                {project.overview}
              </p>

              <div className="project-buttons">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="live-btn"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  View Code
                </a>
              </div>

              <div className="portfolio-grid">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={project.title}
                  />
                ))}
              </div>

              <div className="overview-box">
                <h3>📄 Project Overview</h3>

                <p>{project.overview}</p>
              </div>
            </div>

            {/* Right Side */}
            <div className="project-right">
              <h3>✨ Key Features</h3>

              <ul>
                {project.features.map((item, i) => (
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>

              <h3>⚙ Tech Stack</h3>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <h3>🔗 Project Links</h3>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Portfolio;