import { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className="footer" style={{ backgroundColor: theme.primary }}>
      <div className="footer-content">
        <div className="footer-section links">
          <div className="link-column">
            <ul>
              <h3>Quick Links</h3>
              <li>
                <NavLink to="#" smooth={true} spy="true" duration={2000}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/#about" smooth={true} spy="true" duration={2000}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#education"
                  smooth={true}
                  spy="true"
                  duration={2000}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#achievement"
                  smooth={true}
                  spy="true"
                  duration={2000}
                >
                  Achievements
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Connect</h3>
            <Link to={socialsData.linkedIn} target="_blank" rel="noreferrer">
              LinkedIn
            </Link>
            <Link to={socialsData.github} target="_blank" rel="noreferrer">
              Github
            </Link>
            {headerData.resumePdf && (
              <Button
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: theme.secondary,
                  color: theme.primary,
                }}
                onClick={() => window.open(headerData.resumePdf, "_blank")}
              >
                Download CV
              </Button>
            )}
          </div>
          <div className="link-column">
            <h3>More Info</h3>
            <NavLink to="/#projects" smooth={true} spy="true" duration={2000}>
              Projects
            </NavLink>
            <NavLink to="/#experience" smooth={true} spy="true" duration={2000}>
              Experience
            </NavLink>
          </div>
        </div>
        {/* <div className="footer-section newsletter">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="subscribe-button"
              style={{ backgroundColor: theme.secondary, color: theme.primary }}
            >
              Subscribe
            </button>
          </form>
          <p className="terms">*Subscribe to receive updates and news.</p>
        </div> */}
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
