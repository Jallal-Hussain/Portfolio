import { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { Link } from "react-router-dom";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className="footer" style={{ backgroundColor: theme.primary }}>
      <div className="footer-content">
        <div className="footer-section newsletter">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email for newsletter" 
            />
            <button
              type="submit"
              style={{ backgroundColor: theme.secondary, color: theme.primary }}
            >
              Subscribe
            </button>
          </form>
          <p className="terms">*Subscribe to receive updates and news.</p>
        </div>
        <div className="footer-section links">
          <div className="link-column">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/contacts">Contact</Link>
          </div>
          <div className="link-column">
            <h3>Connect</h3>
            <Link
              to={{ pathname: "https://linkedin.com/in/yourprofile" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              to={{ pathname: "https://github.com/yourprofile" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link to="/resume">Resume</Link>
          </div>
          <div className="link-column">
            <h3>More Info</h3>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/achievements">Achievements</Link>
            <Link to="/testimonials">Testimonials</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="company-info">
          <p>
            &copy; {new Date().getFullYear()} {headerData.name}. All Rights
            Reserved.
          </p>
        </div>
        <div className="certification">
          {/* Add your certification or badge here */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;