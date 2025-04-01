import React from 'react';
import { Link } from 'react-router-dom';
import { RiLoginBoxLine } from 'react-icons/ri';
import { MdPersonAddAlt } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import '../styles/Header.css';
import bannerImage from '../assets/all-purpose-banner-v3.jpg';

const Header = () => {
  return (
    <header>
      <img src={bannerImage} alt="CMS Banner" className="banner-image" />
      <div className="header">
        <div className="header-container">
          <div className="header-content">
            <nav className="nav-menu">
              <Link to="/">Home</Link>
              <Link to="/about">About ASETT</Link>
              <Link to="/contact">Contact Us</Link>
              <div className="dropdown">
                <Link to="#" className="dropdown-toggle">
                  Support <MdKeyboardArrowDown />
                </Link>
                <div className="dropdown-menu">
                  <Link to="/glossary">ASETT Glossary</Link>
                  <Link to="/faq">Frequently Asked Questions</Link>
                  <Link to="/manual">User Manual</Link>
                </div>
              </div>
            </nav>
            <div className="auth-buttons">
              <Link to="/register">
                <MdPersonAddAlt className="register-icon" /> Register
              </Link>
              <Link to="/login">
                <RiLoginBoxLine className="login-icon" /> Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
