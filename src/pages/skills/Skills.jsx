import React, { useState, useEffect } from 'react';
import './Skills.css';
import Navbar from '../../components/navbar/Navbar';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaServer,
  FaDatabase,
  FaCode,
  FaRocket,
  FaGraduationCap,
  FaArrowRight,
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiC,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiExpress,
  SiPostman,
} from 'react-icons/si';
import { BiBrain, BiRocket } from 'react-icons/bi';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

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

  const skillCategories = {
    languages: [
      { name: 'C++', icon: <SiCplusplus />, level: 85, color: '#00599C' },
      { name: 'C', icon: <SiC />, level: 80, color: '#A8B9CC' },
      { name: 'JavaScript', icon: <FaJsSquare />, level: 90, color: '#F7DF1E' },
      { name: 'Python', icon: <FaPython />, level: 70, color: '#3776AB' },
    ],
    frontend: [
      { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
      { name: 'React.js', icon: <FaReact />, level: 88, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85, color: '#06B6D4' },
      { name: 'Bootstrap', icon: <SiBootstrap />, level: 80, color: '#7952B3' },
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 70, color: '#339933' },
      { name: 'Express.js', icon: <SiExpress />, level: 65, color: '#000000' },
      { name: 'MongoDB', icon: <SiMongodb />, level: 60, color: '#47A248' },
      { name: 'REST APIs', icon: <FaServer />, level: 75, color: '#FF6B6B' },
    ],
    tools: [
      { name: 'Git', icon: <SiGit />, level: 85, color: '#F05032' },
      { name: 'GitHub', icon: <SiGithub />, level: 85, color: '#ffffff' },
      { name: 'Postman', icon: <SiPostman />, level: 70, color: '#FF6C37' },
      { name: 'VS Code', icon: <FaCode />, level: 90, color: '#007ACC' },
    ],
  };

  const learningSkills = [
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  ];

  const stats = [
    { value: '8+', label: 'Languages', icon: <FaCode /> },
    { value: '4+', label: 'Frameworks', icon: <FaReact /> },
    { value: '100%', label: 'Always Learning', icon: <FaGraduationCap /> },
    { value: '15+', label: 'Projects', icon: <FaRocket /> },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(skillCategories).flat();
    }
    return skillCategories[activeCategory] || [];
  };

  const categories = {
    all: 'All Skills',
    languages: 'Languages',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools',
  };

  return (
    <>
      <Navbar />
      <div className="skills-container">
        {/* Animated Background */}
        <div className="bg-grid"></div>
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>

        {/* Hero Section */}
        <section className="skills-hero animate-on-scroll">
          <div className="skills-hero-content">
            <div className="skills-hero-text">
              <span className="eyebrow">My Expertise</span>
              <h1 className="skills-hero-title">
                Technical <span className="highlight">Skills</span>
              </h1>
              <div className="skills-hero-line"></div>
              <p className="skills-hero-description">
                A comprehensive overview of my technical skills and competencies.
                I'm proficient in various <strong>programming languages</strong>, 
                <strong> frameworks</strong>, and <strong>development tools</strong> 
                that enable me to build modern, responsive web applications.
              </p>
              <div className="skills-hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="skills-hero-stat">
                    <span className="stat-number">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="skills-hero-image">
              <div className="skills-hero-circle">
                <div className="skills-hero-icon-wrapper">
                  <FaCode className="skills-hero-icon" />
                  <div className="skills-hero-pulse"></div>
                </div>
                <div className="skills-hero-ring"></div>
                <div className="skills-hero-ring skills-hero-ring-2"></div>
                <div className="floating-dot floating-dot-1"></div>
                <div className="floating-dot floating-dot-2"></div>
                <div className="floating-dot floating-dot-3"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Skill Categories */}
        <section className="skills-categories animate-on-scroll">
          <div className="section-header">
            <span className="eyebrow">Categories</span>
            <h2>My Skill Set</h2>
            <p>Technologies and tools I work with</p>
          </div>

          <div className="category-tabs">
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                className={`category-tab ${activeCategory === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="skills-grid-container">
            {getFilteredSkills().map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon-wrapper" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <h4>{skill.name}</h4>
                <div className="skill-level-bar-container">
                  <div 
                    className="skill-level-bar-fill" 
                    style={{ 
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                    }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Section */}
        <section className="learning-section animate-on-scroll">
          <div className="section-header">
            <span className="eyebrow">Growth</span>
            <h2>Currently Learning</h2>
            <p>Expanding my skills to become a Full Stack Developer</p>
          </div>

          <div className="learning-grid">
            {learningSkills.map((skill, index) => (
              <div key={index} className="learning-card">
                <div className="learning-icon-wrapper" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <h4>{skill.name}</h4>
                <div className="learning-status">
                  <span className="learning-dot"></span>
                  In Progress
                </div>
                <div className="learning-progress">
                  <div className="learning-progress-bar"></div>
                </div>
                <BiRocket className="learning-rocket" />
              </div>
            ))}
          </div>
        </section>

        {/* Journey Section */}
        <section className="journey-section animate-on-scroll">
          <div className="journey-content">
            <div className="journey-text">
              <span className="eyebrow">My Journey</span>
              <h2>Continuous Learning</h2>
              <p>
                I believe in lifelong learning and constantly strive to expand my
                technical knowledge. Every day is an opportunity to learn something
                new and improve my skills.
              </p>
              <div className="journey-tags">
                <span>#NeverStopLearning</span>
                <span>#CodeEveryDay</span>
                <span>#FullStackDev</span>
                <span>#MERNStack</span>
              </div>
              <a href="/contact" className="btn btn-primary journey-btn">
                Let's Connect <FaArrowRight />
              </a>
            </div>
            <div className="journey-icon-wrapper">
              <div className="journey-icon-circle">
                <BiBrain className="journey-icon" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;