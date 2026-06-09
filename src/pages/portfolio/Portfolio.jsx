import React from "react";
import "./Portfolio.css";
import Navbar from "../../components/navbar/Navbar";

// Dashboard 1 Images
import d1img1 from "../../assets/Dashboard1/img1.png";
import d1img2 from "../../assets/dashboard1/img2.png";
import d1img3 from "../../assets/dashboard1/img3.png";

// Dashboard 2 Images
import d2img1 from "../../assets/dashboard2/img1.png";
import d2img2 from "../../assets/dashboard2/img2.png";
import d2img3 from "../../assets/dashboard2/img3.png";

// Dashboard 3 Images
import d3img1 from "../../assets/dashboard3/img1.png";
import d3img2 from "../../assets/dashboard3/img2.png";
import d3img3 from "../../assets/dashboard3/img3.png";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      link: "https://dashboarda1.netlify.app/",
      images: [d1img1, d1img2, d1img3],
    },

    {
      title: "Admin Dashboard",
      link: "https://dashboarda1.netlify.app/",
      images: [d2img1, d2img2, d2img3],
    },

    {
      title: "Analytics Dashboard",
      link: "https://e-dashboarde.netlify.app/",
      images: [d3img1, d3img2, d3img3],
    },
  ];

  return (
    <>
      <Navbar />

      <section className="portfolio">
        <h1 className="portfolio-title">PORTFOLIO</h1>

        {projects.map((project, index) => (
          <div key={index} className="project">
            <div className="project-top">
              <h2>{project.title}</h2>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="live-btn"
              >
                Live Demo
              </a>
            </div>

            <div className="portfolio-grid">
              {project.images.map((image, i) => (
                <img key={i} src={image} alt="dashboard" />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Portfolio;