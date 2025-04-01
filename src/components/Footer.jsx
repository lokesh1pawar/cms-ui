import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/" className="footer-link">
          Home
        </Link>
        <Link to="/privacy" className="footer-link">
          Privacy Policy
        </Link>
        <Link to="/security" className="footer-link">
          Security Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
