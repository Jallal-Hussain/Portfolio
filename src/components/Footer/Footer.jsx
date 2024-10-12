import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className="footer" style={{ backgroundColor: theme.primary }}>
      <div className="footer-content">
        <div className="footer-section newsletter">
          <h3>Stay Updated</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" aria-label="Email for newsletter" />
            <button type="submit">Subscribe</button>
          </form>
          <p className="terms">*Subscribe to receive updates and news.</p>
        </div>
        <div className="footer-section links">
          <div className="link-column">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="link-column">
            <h3>Connect</h3>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#resume">Resume</a>
          </div>
          <div className="link-column">
            <h3>More Info</h3>
            <a href="#portfolio">Portfolio</a>
            <a href="#blog">Blog</a>
            <a href="#achievements">Achievements</a>
            <a href="#testimonials">Testimonials</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="powered-by">
          Powered By
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            {headerData.name}
          </a>
        </div>
        <div className="company-info">
          <p>Made in {headerData.location}</p>
          <p>&copy; {new Date().getFullYear()} {headerData.name}. All Rights Reserved.</p>
        </div>
        <div className="certification">
          {/* Add your certification or badge here */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
