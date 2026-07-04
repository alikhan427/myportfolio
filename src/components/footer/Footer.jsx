import React, { useState, useEffect } from "react";
import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaHeart,
  FaCode,
} from "react-icons/fa";

import {
  SiFiverr,
  SiUpwork,
} from "react-icons/si";

import { IoChevronUpOutline } from "react-icons/io5";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/alikhan427", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ali-khan-927162415/", label: "LinkedIn" },
    { icon: <SiFiverr />, url: "#", label: "Fiverr" },
    { icon: <SiUpwork />, url: "#", label: "Upwork" },
  ];

  const quickLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Skills", url: "/skills" },
    { label: "Projects", url: "/projects" },
    { label: "Contact", url: "/contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">MA</span>
              <span className="logo-bracket">/&gt;</span>
            </div>
            <p className="footer-tagline">
              Building modern web experiences with passion and precision.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="mailto:Alikhan03009050164@gmail.com">Email Me</a>
                </li>
                <li>
                  <a href="tel:+923009050164">Call Me</a>
                </li>
                <li>
                  <a href="/Muhammad-Ali-Feroz-CV.pdf" target="_blank" rel="noreferrer">
                    Download CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Footer Middle Section */}
        <div className="footer-middle">
          <div className="footer-social">
            <h4>Follow Me</h4>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                >
                  {social.icon}
                  <span className="social-label">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              &copy; {currentYear} <span className="highlight-name">Muhammad Ali Feroz</span>
              <span className="separator">|</span>
              <span className="made-with">
                Made with <FaHeart className="heart-icon" /> &amp; <FaCode className="code-icon" />
              </span>
            </p>
          </div>

          <button 
            className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <IoChevronUpOutline className="scroll-icon" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;