import React from "react";
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
} from "react-icons/fa";
import { SiFiverr, SiUpwork, SiTailwindcss, SiMongodb } from "react-icons/si";

const Home = () => {
  const skills = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: "🎯" },
    { name: "Git", icon: "🔀" },
    { name: "GitHub", icon: "🐙" },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: "🚀" },
    { name: "MongoDB", icon: <SiMongodb /> },
  ];

  const stats = [
    { value: "2+", label: "Years Learning" },
    { value: "15+", label: "Projects Completed" },
    { value: "100%", label: "Responsive Designs" },
    { value: "MERN", label: "Currently Learning" },
  ];

  return (
    <>
      <Navbar />
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <span className="badge">👋 Available for Freelance</span>
              <p className="greeting">Hello, I'm</p>
              <h1 className="name">
                Muhammad Ali <span className="highlight">Feroz</span>
              </h1>
              <h2 className="title">
                <span className="typing-text">Frontend Developer</span>
              </h2>
              <p className="description">
                I'm a passionate Computer Science student who enjoys building 
                modern, responsive, and interactive web applications using React.js. 
                Currently expanding my skills in Node.js, Express.js, and MongoDB 
                to become a Full Stack MERN Developer.
              </p>
              <div className="button-group">
                <a href="/Muhammad-Ali-Feroz-CV.pdf" className="btn btn-primary">
                  <FaDownload /> Download CV
                </a>
                <a href="/portfolio" className="btn btn-secondary">
                  View Projects <FaArrowRight />
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/alikhan427" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/ali-khan-927162415/" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <SiFiverr />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <SiUpwork />
                </a>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image">
                <img src={profile} alt="Muhammad Ali Feroz" />
                <div className="floating-badge top-right">
                  <FaCode /> React Dev
                </div>
                <div className="floating-badge bottom-left">
                  <FaReact /> 2+ Years
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <div className="section-header">
            <h2>Tech Stack</h2>
            <p>Technologies I work with</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="section-header">
            <h2>About Me</h2>
            <p>Get to know me better</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm <strong>Muhammad Ali Feroz</strong>, a Frontend Developer passionate
                about designing beautiful and modern websites. My expertise includes
                <strong> React.js, JavaScript, HTML5, and CSS3</strong>.
              </p>
              <p>
                I'm currently expanding my skills in Backend Development by learning
                <strong> Node.js, Express.js, and MongoDB</strong> to become a professional
                Full Stack MERN Developer.
              </p>
              <p>
                I enjoy solving real-world problems through clean, responsive, and
                user-friendly web applications.
              </p>
              <div className="about-tags">
                <span>#ReactJS</span>
                <span>#JavaScript</span>
                <span>#MERNStack</span>
                <span>#Frontend</span>
              </div>
            </div>
            <div className="about-image">
              <div className="about-icon-wrapper">
                <FaCode className="about-icon" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;