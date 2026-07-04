import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import profile from "../../assets/profile.png";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaCode,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGitAlt,
  FaBootstrap,
  FaFigma,
  FaExternalLinkAlt,
  FaBriefcase,
  FaUserGraduate,
  FaAward,
  FaRocket,
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiFiverr, 
  SiUpwork,
  SiExpress,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { 
  AiOutlineThunderbolt, 
  AiOutlineCode, 
  AiOutlineEye,
  AiOutlineHeart,
} from "react-icons/ai";
import { BiCodeAlt, BiBrain, BiRocket, BiPalette } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { MdOutlineDevices, MdOutlineSpeed, MdOutlineSecurity } from "react-icons/md";

const Home = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const skills = {
    frontend: [
      { name: "React.js", icon: <FaReact className="skill-icon-react" />, level: 90 },
      { name: "JavaScript", icon: <FaJs className="skill-icon-js" />, level: 85 },
      { name: "HTML5", icon: <FaHtml5 className="skill-icon-html" />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt className="skill-icon-css" />, level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="skill-icon-tailwind" />, level: 85 },
      { name: "Bootstrap", icon: <FaBootstrap className="skill-icon-bootstrap" />, level: 80 },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="skill-icon-node" />, level: 70 },
      { name: "Express.js", icon: <SiExpress className="skill-icon-express" />, level: 65 },
      { name: "MongoDB", icon: <SiMongodb className="skill-icon-mongo" />, level: 60 },
      { name: "REST APIs", icon: <FaServer className="skill-icon-api" />, level: 75 },
    ],
    tools: [
      { name: "Git", icon: <FaGitAlt className="skill-icon-git" />, level: 85 },
      { name: "GitHub", icon: <FaCode className="skill-icon-github" />, level: 85 },
      { name: "Postman", icon: <SiPostman className="skill-icon-postman" />, level: 70 },
      { name: "Figma", icon: <FaFigma className="skill-icon-figma" />, level: 65 },
    ],
  };

  const stats = [
    { value: "2+", label: "Years Experience", icon: <FaBriefcase /> },
    { value: "15+", label: "Projects Completed", icon: <FaRocket /> },
    { value: "100%", label: "Client Satisfaction", icon: <AiOutlineHeart /> },
    { value: "MERN", label: "Full Stack Learning", icon: <FaUserGraduate /> },
  ];

  const achievements = [
    { icon: <FaAward />, text: "Best Frontend Project" },
    { icon: <FaCode />, text: "500+ Hours Coding" },
    { icon: <BiBrain />, text: "Problem Solver" },
  ];

  const services = [
    {
      icon: <BiCodeAlt />,
      title: "Web Development",
      desc: "Building responsive, high-performance web applications with modern technologies.",
    },
    {
      icon: <MdOutlineDevices />,
      title: "Responsive Design",
      desc: "Creating pixel-perfect interfaces that work seamlessly across all devices.",
    },
    {
      icon: <MdOutlineSpeed />,
      title: "Performance Optimization",
      desc: "Optimizing websites for speed, SEO, and best user experience.",
    },
    {
      icon: <BiPalette />,
      title: "UI/UX Design",
      desc: "Designing intuitive, beautiful interfaces with focus on user experience.",
    },
  ];

  const techStack = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "Express", icon: <SiExpress />, color: "#000000" },
  ];

  return (
    <>
      <Navbar />
      <div className="home-container">
        {/* Animated Background Elements */}
        <div className="bg-grid"></div>
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>

        {/* Hero Section */}
        <section className="hero-section animate-on-scroll" id="hero">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                Available for Freelance
              </div>
              <p className="greeting">👋 Hello, I'm</p>
              <h1 className="name">
                Muhammad Ali <span className="highlight">Feroz</span>
              </h1>
              <div className="title-container">
                <h2 className="title">
                  <span className="typing-text">Frontend Developer</span>
                </h2>
                <span className="title-line"></span>
              </div>
              <p className="description">
                I craft modern, responsive, and high-performance web applications 
                using <strong>React.js</strong> and cutting-edge frontend technologies. 
                Currently expanding into <strong>Full Stack MERN</strong> development 
                to build complete digital solutions.
              </p>
              <div className="hero-stats-mini">
                <div>
                  <span>2+</span>
                  <p>Years Code</p>
                </div>
                <div>
                  <span>15+</span>
                  <p>Projects</p>
                </div>
                <div>
                  <span>100%</span>
                  <p>Responsive</p>
                </div>
              </div>
              <div className="button-group">
                <a href="/Muhammad-Ali-Feroz-CV.pdf" className="btn btn-primary">
                  <FaDownload /> Download CV
                </a>
                <a href="/projects" className="btn btn-secondary">
                  View Projects <FaArrowRight />
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/alikhan427" target="_blank" rel="noreferrer" className="social-link">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/ali-khan-927162415/" target="_blank" rel="noreferrer" className="social-link">
                  <FaLinkedin />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="social-link">
                  <SiFiverr />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="social-link">
                  <SiUpwork />
                </a>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image">
                <div className="hero-image-border">
                  <img src={profile} alt="Muhammad Ali Feroz" />
                </div>
                <div className="floating-badge top-right">
                  <AiOutlineThunderbolt /> React Dev
                </div>
                <div className="floating-badge bottom-left">
                  <FaReact /> 2+ Years
                </div>
                <div className="floating-badge bottom-right">
                  <AiOutlineEye /> Available
                </div>
                <div className="floating-circle floating-circle-1"></div>
                <div className="floating-circle floating-circle-2"></div>
                <div className="floating-circle floating-circle-3"></div>
              </div>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        {/* Tech Stack Marquee */}
        <div className="tech-marquee">
          <div className="tech-marquee-track">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-marquee-item">
                <span style={{ color: tech.color }}>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
            {techStack.map((tech, index) => (
              <div key={`dup-${index}`} className="tech-marquee-item">
                <span style={{ color: tech.color }}>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <section className="services-section animate-on-scroll" id="services">
          <div className="section-header">
            <span className="eyebrow">What I Do</span>
            <h2>My Services</h2>
            <p>Turning ideas into reality through code and design</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-hover-effect"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section animate-on-scroll" id="skills">
          <div className="section-header">
            <span className="eyebrow">Expertise</span>
            <h2>Technical Skills</h2>
            <p>Technologies and tools I work with</p>
          </div>
          <div className="skills-tabs">
            <button 
              className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
              onClick={() => setActiveTab("skills")}
            >
              All Skills
            </button>
            <button 
              className={`tab-btn ${activeTab === "frontend" ? "active" : ""}`}
              onClick={() => setActiveTab("frontend")}
            >
              Frontend
            </button>
            <button 
              className={`tab-btn ${activeTab === "backend" ? "active" : ""}`}
              onClick={() => setActiveTab("backend")}
            >
              Backend
            </button>
            <button 
              className={`tab-btn ${activeTab === "tools" ? "active" : ""}`}
              onClick={() => setActiveTab("tools")}
            >
              Tools
            </button>
          </div>
          <div className="skills-grid">
            {activeTab === "skills" && 
              [...skills.frontend, ...skills.backend, ...skills.tools].map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon-wrapper">{skill.icon}</div>
                  <span>{skill.name}</span>
                  <div className="skill-level">
                    <div className="skill-level-bar" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))
            }
            {activeTab === "frontend" && 
              skills.frontend.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon-wrapper">{skill.icon}</div>
                  <span>{skill.name}</span>
                  <div className="skill-level">
                    <div className="skill-level-bar" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))
            }
            {activeTab === "backend" && 
              skills.backend.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon-wrapper">{skill.icon}</div>
                  <span>{skill.name}</span>
                  <div className="skill-level">
                    <div className="skill-level-bar" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))
            }
            {activeTab === "tools" && 
              skills.tools.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon-wrapper">{skill.icon}</div>
                  <span>{skill.name}</span>
                  <div className="skill-level">
                    <div className="skill-level-bar" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))
            }
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section animate-on-scroll" id="stats">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="about-section animate-on-scroll" id="about">
          <div className="section-header">
            <span className="eyebrow">About Me</span>
            <h2>Who I Am</h2>
            <p>Passionate developer crafting digital experiences</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm <strong>Muhammad Ali Feroz</strong>, a passionate Frontend Developer 
                currently pursuing Computer Science. I specialize in building modern, 
                responsive web applications using <strong>React.js</strong> and the 
                latest frontend technologies.
              </p>
              <p>
                My journey in web development started with a curiosity for how websites 
                work, which quickly evolved into a deep passion for creating beautiful 
                and functional digital experiences. I believe in writing clean, 
                maintainable code that not only works but also inspires.
              </p>
              <p>
                Currently, I'm expanding my skills into <strong>Full Stack MERN</strong> 
                development to build end-to-end solutions. I'm always eager to learn new 
                technologies and take on challenging projects that push my boundaries.
              </p>
              <div className="about-tags">
                <span>#ReactJS</span>
                <span>#JavaScript</span>
                <span>#MERNStack</span>
                <span>#Frontend</span>
                <span>#UI/UX</span>
                <span>#WebDev</span>
              </div>
              <div className="about-achievements">
                {achievements.map((item, index) => (
                  <div key={index} className="achievement-item">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-image">
              <div className="about-icon-wrapper">
                <div className="about-icon-content">
                  <BiCodeAlt className="about-icon" />
                  <div className="about-icon-pulse"></div>
                </div>
                <div className="about-icon-ring"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section animate-on-scroll" id="cta">
          <div className="cta-content">
            <h2>Ready to Build Something Amazing?</h2>
            <p>Let's collaborate and bring your ideas to life with modern web technologies.</p>
            <a href="/contact" className="btn btn-primary cta-btn">
              Let's Talk <FaArrowRight />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;