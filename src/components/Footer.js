import React from 'react';
import './Footer.css'; // Import the CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a2 href="https://www.instagram.com/zain_naved/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a2>
        <a2 href="https://www.linkedin.com/in/zain-naved-b96b1b203/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a2>
        <a2 href="https://github.com/zainnaved123" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a2>
      </div>
      <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      <p>Contact us at <a href="mailto:zainnaved28@gmail.com">zainnaved28@gmail.com</a></p>
    </footer>
  );
};

export default Footer;

