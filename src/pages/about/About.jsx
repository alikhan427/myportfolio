import React, { useState, useEffect } from "react";
import "./About.css";
import Navbar from "../../components/navbar/Navbar";
import profile from "../../assets/profile.png"; // Import your profile image
import { 
  FaPencilRuler, 
  FaCode, 
  FaTools, 
  FaUser, 
  FaAward, 
  FaRocket,
  FaGraduationCap,
  FaBriefcase,
  FaQuoteLeft,
  FaQuoteRight,
  FaArrowRight,
  FaCheckCircle,
  FaHeart,
  FaStar,
  FaUsers,
  FaGlobe,
  FaMobile,
  FaServer,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";
import { 
  AiOutlineThunderbolt, 
  AiOutlineCode, 
  AiOutlineEye,
  AiOutlineDashboard,
} from "react-icons/ai";
import { BiBrain, BiRocket, BiPalette, BiHappy } from "react-icons/bi";

const About = () => {
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

  const services = [
    {
      icon: <FaPencilRuler />,
      title: "UI/UX Design",
      desc: "Creating intuitive, beautiful interfaces with focus on user experience and modern design principles.",
      color: "#3b82f6",
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Building high-performance web applications using React.js and cutting-edge frontend technologies.",
      color: "#8b5cf6",
    },
    {
      icon: <FaTools />,
      title: "Maintenance & Support",
      desc: "Providing ongoing maintenance, performance optimization, and technical support for your projects.",
      color: "#06b6d4",
    },
    {
      icon: <FaServer />,
      title: "Backend Integration",
      desc: "Connecting frontend applications with REST APIs, databases, and cloud services for full-stack solutions.",
      color: "#f59e0b",
    },
    {
      icon: <FaMobile />,
      title: "Responsive Design",
      desc: "Ensuring pixel-perfect experiences across all devices and screen sizes with mobile-first approach.",
      color: "#10b981",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Performance",
      desc: "Implementing best practices for web security, performance optimization, and accessibility.",
      color: "#ef4444",
    },
  ];

  const stats = [
    { value: "2+", label: "Years Experience", icon: <FaBriefcase /> },
    { value: "15+", label: "Projects Delivered", icon: <FaRocket /> },
    { value: "100%", label: "Client Satisfaction", icon: <BiHappy /> },
    { value: "MERN", label: "Full Stack Learning", icon: <FaGraduationCap /> },
  ];

  const achievements = [
    { icon: <FaAward />, text: "Best Frontend Project" },
    { icon: <FaCode />, text: "500+ Hours Coding" },
    { icon: <BiBrain />, text: "Problem Solver" },
    { icon: <FaUsers />, text: "Team Player" },
    { icon: <FaGlobe />, text: "Global Projects" },
    { icon: <FaHeart />, text: "Passionate Developer" },
  ];

  return (
    <>
      <Navbar />
      <div className="about-container">
        {/* Animated Background Elements */}
        <div className="bg-grid"></div>
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>

        {/* Hero Section */}
        <section className="about-hero animate-on-scroll" id="hero">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <span className="eyebrow">Who I Am</span>
              <h1 className="about-hero-title">
                About <span className="highlight">Me</span>
              </h1>
              <div className="about-hero-line"></div>
              <p className="about-hero-description">
                I'm a passionate <strong>Frontend Developer</strong> and 
                <strong> UI/UX Designer</strong> with a love for creating modern, 
                responsive, and user-friendly digital experiences. Currently pursuing 
                Computer Science, I combine technical expertise with creative design 
                to build solutions that make a difference.
              </p>
              <div className="about-hero-stats">
                <div className="about-hero-stat">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="about-hero-stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="about-hero-stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Satisfaction</span>
                </div>
              </div>
              <div className="about-hero-buttons">
                <a href="/contact" className="btn btn-primary">
                  Let's Connect <FaArrowRight />
                </a>
                <a href="#services" className="btn btn-secondary">
                  My Services
                </a>
              </div>
            </div>
            <div className="about-hero-image">
              <div className="about-hero-circle">
                <div className="about-hero-image-wrapper">
                  <img 
                    src={profile} 
                    alt="Muhammad Ali Feroz" 
                    className="about-hero-profile-image"
                  />
                  <div className="about-hero-pulse"></div>
                </div>
                <div className="about-hero-ring"></div>
                <div className="about-hero-ring about-hero-ring-2"></div>
                <div className="floating-badge about-badge-1">
                  <FaCode /> Developer
                </div>
                <div className="floating-badge about-badge-2">
                  <FaRocket /> Creative
                </div>
                <div className="floating-badge about-badge-3">
                  <FaHeart /> Passionate
                </div>
                <div className="floating-dot floating-dot-1"></div>
                <div className="floating-dot floating-dot-2"></div>
                <div className="floating-dot floating-dot-3"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey/Stats Section */}
        <section className="journey-section animate-on-scroll" id="journey">
          <div className="section-header">
            <span className="eyebrow">My Journey</span>
            <h2>Career Highlights</h2>
            <p>My professional development journey in numbers</p>
          </div>
          <div className="journey-grid">
            {stats.map((stat, index) => (
              <div key={index} className="journey-card">
                <div className="journey-icon">{stat.icon}</div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
                <div className="journey-hover-effect"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-section animate-on-scroll" id="mission">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon"><BiRocket /></div>
              <h3>My Mission</h3>
              <p>
                To create innovative, accessible, and high-quality digital 
                solutions that help businesses grow and users thrive in the 
                digital world.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon"><AiOutlineEye /></div>
              <h3>My Vision</h3>
              <p>
                To become a leading Full Stack MERN developer, building 
                impactful applications that solve real-world problems and 
                inspire others in the tech community.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section animate-on-scroll" id="services">
          <div className="section-header">
            <span className="eyebrow">What I Offer</span>
            <h2>My Services</h2>
            <p>Professional services to bring your ideas to life</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-card-hover"></div>
                <div className="service-number">0{index + 1}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="achievements-section animate-on-scroll" id="achievements">
          <div className="section-header">
            <span className="eyebrow">Recognition</span>
            <h2>Achievements</h2>
            <p>My accomplishments and milestones</p>
          </div>
          <div className="achievements-grid">
            {achievements.map((item, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{item.icon}</div>
                <span>{item.text}</span>
                <FaCheckCircle className="achievement-check" />
              </div>
            ))}
          </div>
        </section>

        {/* Quote Section */}
        <section className="quote-section animate-on-scroll" id="quote">
          <div className="quote-content">
            <FaQuoteLeft className="quote-icon quote-left" />
            <blockquote>
              "The best way to predict the future is to create it. Every line 
              of code I write is a step towards building a better digital world."
            </blockquote>
            <FaQuoteRight className="quote-icon quote-right" />
            <div className="quote-author">
              <div className="quote-author-line"></div>
              <span>Muhammad Ali Feroz</span>
              <div className="quote-author-line"></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section animate-on-scroll" id="cta">
          <div className="cta-content">
            <h2>Ready to Build Something Amazing?</h2>
            <p>Let's work together to create exceptional digital experiences.</p>
            <a href="/contact" className="btn btn-primary cta-btn">
              Get In Touch <FaArrowRight />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;