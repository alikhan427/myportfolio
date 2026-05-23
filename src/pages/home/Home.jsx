import React from 'react';
import './Home.css';

import Navbar from '../../components/navbar/Navbar';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFiverr, SiUpwork } from 'react-icons/si';

const Home = () => {
  return (
    <div className="home">

      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">

        {/* LEFT SIDE */}
        <div className="hero-left">

          <div className="hero-content">

            <h3 className="small-text">Hi, I am</h3>

            <h1 className="big-text">
              MUHAMMAD ALI FEROZ
            </h1>

            <p className="role">
              Front-end Developer / UI Designer
            </p>

            {/* SOCIAL ICONS */}
            <div className="social-icons">

              <a href="#" className="social-box">
                <FaGithub />
              </a>

              <a href="#" className="social-box">
                <FaLinkedin />
              </a>

              <a href="#" className="social-box">
                <SiFiverr />
              </a>

              <a href="#" className="social-box">
                <SiUpwork />
              </a>

            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          
        </div>

      </section>

      {/* DESCRIPTION SECTION */}
      <section className="description-section">

        <div className="description-container">

          <div className="it-berries-title">
            ABOUT MY WORK
          </div>

          <div className="description-text">

            <p>
              Muhammad Ali Feroz is a passionate Front-end Developer and UI
              Designer focused on creating modern, responsive, and visually
              engaging websites. I specialize in React.js, JavaScript,
              HTML5, CSS3, and interactive UI development.
            </p>

            <p>
              I love transforming ideas into clean and functional digital
              experiences that not only look beautiful but also perform
              smoothly across all devices. Every project is crafted with
              attention to detail and modern design principles.
            </p>

            <p>
              My goal is to help brands and businesses build strong online
              presence through high-quality web solutions and creative
              user experiences.
            </p>

          </div>

          <div className="read-more">
            READ MORE
          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;