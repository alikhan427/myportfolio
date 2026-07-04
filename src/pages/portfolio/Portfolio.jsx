import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Portfolio.css";
import Navbar from "../../components/navbar/Navbar";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaArrowRight, 
  FaArrowLeft,
  FaStar,
  FaCode,
  FaRocket,
  FaEye,
  FaCheckCircle,
} from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";

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
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
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
      category: "Dashboard",
      year: "2024",
    },
    {
      id: 2,
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
      category: "Admin Panel",
      year: "2024",
    },
    {
      id: 3,
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
      category: "Analytics",
      year: "2024",
    },
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Navbar />
      <div className="portfolio-container">
        {/* Animated Background */}
        <div className="bg-grid"></div>
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>

        {/* Hero Section */}
        <section className="portfolio-hero animate-on-scroll">
          <div className="portfolio-hero-content">
            <div className="portfolio-hero-text">
              <span className="eyebrow">My Work</span>
              <h1 className="portfolio-hero-title">
                Featured <span className="highlight">Projects</span>
              </h1>
              <div className="portfolio-hero-line"></div>
              <p className="portfolio-hero-description">
                Explore my latest web development projects. Each project showcases 
                my skills in <strong>React.js</strong>, <strong>JavaScript</strong>, 
                and <strong>modern frontend technologies</strong>. I focus on creating 
                responsive, performant, and user-friendly applications.
              </p>
              <div className="portfolio-hero-stats">
                <div className="portfolio-hero-stat">
                  <span className="stat-number">{projects.length}+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="portfolio-hero-stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Responsive</span>
                </div>
                <div className="portfolio-hero-stat">
                  <span className="stat-number">Modern</span>
                  <span className="stat-label">Tech Stack</span>
                </div>
              </div>
            </div>
            <div className="portfolio-hero-image">
              <div className="portfolio-hero-circle">
                <div className="portfolio-hero-icon-wrapper">
                  <FaCode className="portfolio-hero-icon" />
                  <div className="portfolio-hero-pulse"></div>
                </div>
                <div className="portfolio-hero-ring"></div>
                <div className="portfolio-hero-ring portfolio-hero-ring-2"></div>
                <div className="floating-dot floating-dot-1"></div>
                <div className="floating-dot floating-dot-2"></div>
                <div className="floating-dot floating-dot-3"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="projects-section">
          <div className="section-header">
            <span className="eyebrow">Portfolio</span>
            <h2>My Projects</h2>
            <p>Each project is built with care and attention to detail</p>
          </div>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card animate-on-scroll ${activeProject === index ? 'active' : ''}`}
              id={`project-${index}`}
            >
              <div className="project-image-section">
                <div className="project-image-grid">
                  {project.images.map((img, i) => (
                    <div 
                      key={i} 
                      className="project-image-wrapper"
                      onClick={() => openImageModal(img)}
                    >
                      <img src={img} alt={`${project.title} ${i + 1}`} />
                      <div className="project-image-overlay">
                        <FaEye />
                        <span>View</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="project-category-badge">
                  <FaStar /> {project.category}
                </div>
              </div>

              <div className="project-info-section">
                <div className="project-header">
                  <span className="project-number">0{index + 1}</span>
                  <span className="project-year">{project.year}</span>
                </div>

                <h2 className="project-title">{project.title}</h2>

                <p className="project-description">{project.overview}</p>

                <div className="project-features">
                  <h4>✨ Key Features</h4>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>
                        <FaCheckCircle className="feature-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  <h4>⚙ Tech Stack</h4>
                  <div className="tech-tags">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-secondary"
                  >
                    <FaGithub /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation */}
          <div className="project-navigation">
            <button onClick={prevProject} className="nav-btn">
              <FaArrowLeft /> Previous
            </button>
            <span className="nav-counter">
              {activeProject + 1} / {projects.length}
            </span>
            <button onClick={nextProject} className="nav-btn">
              Next <FaArrowRight />
            </button>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div className="image-modal" onClick={closeModal}>
            <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Project preview" />
              <button className="modal-close" onClick={closeModal}>✕</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;