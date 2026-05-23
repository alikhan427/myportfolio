import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span>PortFolio</span>
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About me</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>

        <li>
          <Link to="/contact">
            <button className="contact-btn">CONTACT ME</button>
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;