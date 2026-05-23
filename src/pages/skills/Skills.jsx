import React from 'react';
import './Skills.css';
import Navbar from '../../components/navbar/Navbar';

const Skills = () => {
  return (
    <>
      <Navbar />

      <section className="skills-container">

        {/* TITLE */}
        <div className="skills-title-box">
          <h1 className="skills-title">SKILLS</h1>
        </div>

        {/* USING NOW */}
        <div className="skills-column">
          <h2 className="column-title">USING NOW:</h2>

          <div className="skills-grid">

            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                alt="C++"
              />
              <p>C++</p>
            </div>

            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                alt="C"
              />
              <p>C</p>
            </div>

            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML"
              />
              <p>HTML</p>
            </div>

            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS"
              />
              <p>CSS</p>
            </div>

            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JS"
              />
              <p>JAVASCRIPT</p>
            </div>

            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
              />
              <p>REACT JS</p>
            </div>

          </div>
        </div>

        {/* LEARNING */}
        <div className="skills-column learning-section">

          <h2 className="column-title">LEARNING:</h2>

          <div className="skills-grid">

            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node"
              />
              <p>NODE JS</p>
            </div>
            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt="Next"
              />
              <p>NEXT JS</p>
            </div>

            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
              />
              <p>MONGODB</p>
            </div>

            <div className="skill-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
              />
              <p>PYTHON</p>
            </div>

          </div>
        </div>

      </section>
    </>
  );
};

export default Skills;