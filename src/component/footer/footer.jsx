import React from "react";
import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiFiverr,
  SiUpwork,
} from "react-icons/si";

import { IoChevronUpOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">

      {/* BACK TO TOP */}
      <div className="back-to-top">

        <IoChevronUpOutline className="top-icon" />

        <p>BACK TO TOP</p>

      </div>

      {/* SOCIAL ICONS */}
      <div className="footer-icons">

        <a href="#" className="footer-icon">
          <FaGithub />
        </a>

        <a href="#" className="footer-icon">
          <FaLinkedin />
        </a>

        <a href="#" className="footer-icon">
          <SiFiverr />
        </a>

        <a href="#" className="footer-icon">
          <SiUpwork />
        </a>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-text">
        <p>
          @2026 <span>Muhammad Ali Feroz</span> All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;