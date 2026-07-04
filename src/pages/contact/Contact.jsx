import React, { useState, useEffect } from "react";
import "./Contact.css";
import Navbar from "../../components/navbar/Navbar";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarker, 
  FaGithub, 
  FaLinkedin, 
  FaArrowRight,
  FaCheckCircle,
  FaPaperPlane,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { 
  SiFiverr, 
  SiUpwork,
  SiGmail,
} from "react-icons/si";
import { 
  AiOutlineThunderbolt, 
  AiOutlineCode,
  AiOutlineSend,
} from "react-icons/ai";
import { BiHappy } from "react-icons/bi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you! I'll get back to you soon. 🚀",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: "",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "Alikhan03009050164@gmail.com",
      link: "mailto:Alikhan03009050164@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+92 3469303730",
      link: "tel:+923469303730",
    },
    {
      icon: <FaMapMarker />,
      label: "Location",
      value: "Pakistan",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/alikhan427", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ali-khan-927162415/", label: "LinkedIn" },
    { icon: <SiFiverr />, url: "#", label: "Fiverr" },
    { icon: <SiUpwork />, url: "#", label: "Upwork" },
    { icon: <FaWhatsapp />, url: "https://wa.me/+923469303730", label: "WhatsApp" },
    { icon: <SiGmail />, url: "mailto:Alikhan03009050164@gmail.com", label: "Gmail" },
  ];

  const availability = [
    { icon: <AiOutlineThunderbolt />, text: "Available for Freelance" },
    { icon: <BiHappy />, text: "100% Client Satisfaction" },
    { icon: <FaCheckCircle />, text: "Fast Response Time" },
  ];

  return (
    <>
      <Navbar />
      <div className="contact-container">
        {/* Animated Background */}
        <div className="bg-grid"></div>
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>

        {/* Hero Section */}
        <section className="contact-hero animate-on-scroll">
          <div className="contact-hero-content">
            <div className="contact-hero-text">
              <span className="eyebrow">Get In Touch</span>
              <h1 className="contact-hero-title">
                Let's <span className="highlight">Connect</span>
              </h1>
              <div className="contact-hero-line"></div>
              <p className="contact-hero-description">
                Have a project in mind or want to collaborate? I'm always 
                open to discussing <strong>web development</strong>, 
                <strong> UI/UX design</strong>, or <strong>freelance opportunities</strong>. 
                Let's create something amazing together!
              </p>
              <div className="contact-availability">
                {availability.map((item, index) => (
                  <div key={index} className="availability-item">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="contact-hero-image">
              <div className="contact-hero-circle">
                <div className="contact-hero-icon-wrapper">
                  <FaPaperPlane className="contact-hero-icon" />
                  <div className="contact-hero-pulse"></div>
                </div>
                <div className="contact-hero-ring"></div>
                <div className="contact-hero-ring contact-hero-ring-2"></div>
                <div className="floating-dot floating-dot-1"></div>
                <div className="floating-dot floating-dot-2"></div>
                <div className="floating-dot floating-dot-3"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-main animate-on-scroll">
          <div className="section-header">
            <span className="eyebrow">Contact</span>
            <h2>Get In Touch</h2>
            <p>I'd love to hear from you! Reach out for collaborations or just to say hello.</p>
          </div>

          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p className="contact-info-description">
                Feel free to reach out through any of these channels. I typically 
                respond within 24 hours.
              </p>

              <div className="contact-info-list">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-info-icon">{item.icon}</div>
                    <div className="contact-info-details">
                      <span className="contact-info-label">{item.label}</span>
                      {item.link ? (
                        <a href={item.link} className="contact-info-value">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact-info-value">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-social">
                <h4>Connect with me</h4>
                <div className="social-links-grid">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link-item"
                      aria-label={social.label}
                    >
                      {social.icon}
                      <span className="social-tooltip">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                {formStatus.submitted && (
                  <div className={`form-status ${formStatus.success ? 'success' : 'error'}`}>
                    {formStatus.message}
                  </div>
                )}

                <button type="submit" className="submit-btn">
                  <AiOutlineSend /> Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section animate-on-scroll">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's work together to create something extraordinary.</p>
            <a href="mailto:Alikhan03009050164@gmail.com" className="btn btn-primary cta-btn">
              <FaEnvelope /> Email Me Now <FaArrowRight />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;