import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <Link
          to="/"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <span>PortFolio</span>
        </Link>
      </div>

      {/* MENU ICON */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </div>

      {/* NAV LINKS */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About me
          </Link>
        </li>

        <li>
          <Link to="/skills" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
        </li>

        <li>
          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
            Portfolio
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="contact-btn">
              CONTACT ME
            </button>
          </Link>
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;