import React from "react";
import "./About.css";
import Navbar from "../../component/navbar/Navbar";
import { FaPencilRuler, FaCode, FaTools } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="about-section">
        
        {/* Title */}
        <div className="about-heading">
          <h1>ABOUT ME</h1>
        </div>

        {/* Description */}
        <div className="about-text">
          <p>
            I am a passionate Front-end Developer and UI Designer with experience
            in creating modern, responsive, and user-friendly websites. I
            specialize in React.js, JavaScript, HTML5, CSS3, and various UI
            frameworks.
          </p>

          <p>
            My goal is to bring your ideas to life with clean code and creative
            design that delivers real results.
          </p>
        </div>

        {/* Explore Button */}
        <div className="explore-wrapper">
          <button className="explore-btn">EXPLORE</button>
        </div>

        {/* Divider */}
        <div className="divider">
          <span></span>
          <p>〰</p>
          <span></span>
        </div>

        {/* Services */}
        <div className="services-container">

          <div className="service-box">
            <FaPencilRuler className="service-icon" />
            <h3>DESIGN</h3>
            <p>
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>

          <div className="service-box">
            <FaCode className="service-icon" />
            <h3>DEVELOPMENT</h3>
            <p>
              I can design and develop high-performance websites with modern
              technologies and clean responsive layouts.
            </p>
          </div>

          <div className="service-box">
            <FaTools className="service-icon" />
            <h3>MAINTENANCE</h3>
            <p>
              I can maintain your website, improve performance, fix bugs, and
              ensure everything runs smoothly and securely.
            </p>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="divider bottom-divider">
          <span></span>
          <p>〰</p>
          <span></span>
        </div>

      </section>
    </>
  );
};

export default About;