import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span>MA</span>
        </Link>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiX /> : <HiMenu />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/skills" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="contact-btn">Contact</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;