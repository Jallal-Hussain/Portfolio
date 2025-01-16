import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { IoMenuSharp, IoHomeSharp } from "react-icons/io5";
import { FaBrain, FaGraduationCap } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { FaUser, FaFolderOpen } from "react-icons/fa";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./Navbar.css";
import { headerData } from "../../data/headerData";
import { ThemeContext } from "../../contexts/ThemeContext";

const useStyles = (theme, isSmallScreen, isExtraSmallScreen) => ({
  navMenu: {
    fontSize: isExtraSmallScreen ? "2.5rem" : "1.67rem",
    color: theme.secondary,
    cursor: "pointer",
    "&:hover": {
      color: theme.tertiary,
    },
  },
  MuiDrawer: {
    padding: "1em",
    width: isSmallScreen ? "16em" : "13em",
    fontFamily: "var(--primaryFont)",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1rem",
    background: theme.secondary,
  },
  closebtnIcon: {
    fontSize: "2rem",
    fontWeight: "bold",
    cursor: "pointer",
    color: theme.primary,
    position: "absolute",
    right: isSmallScreen ? 20 : 40,
    top: isSmallScreen ? 20 : 40,
    transition: "color 0.2s",
    "&:hover": {
      color: theme.tertiary,
    },
  },
  drawerItem: {
    margin: "2rem auto",
    borderRadius: "78.8418px",
    background: theme.secondary,
    color: theme.primary,
    width: isSmallScreen ? "100%" : "85%",
    height: isSmallScreen ? "55px" : "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "1.618rem",
    padding: isSmallScreen ? "0 25px" : "0 30px",
    boxSizing: "border-box",
    border: "2px solid",
    borderColor: theme.primary,
    transition: "background-color 0.2s, color 0.2s",
    "&:hover": {
      background: theme.primary,
      color: theme.secondary,
    },
  },
  drawerLinks: {
    fontFamily: "var(--primaryFont)",
    width: "50%",
    fontSize: isSmallScreen ? "1.125rem" : "1.3rem",
    fontWeight: 600,
  },
  drawerIcon: {
    fontSize: isSmallScreen ? "1.385rem" : "1.6rem",
  },
  navItem: {
    fontFamily: "var(--primaryFont)",
    padding: "0 1rem",
    color: theme.secondary,
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 300,
    transition: "color 0.3s",
    "&:hover": {
      borderBottom: `2px solid ${theme.secondary}`,
    },
  },
  navItemActive: {
    borderBottom: `2px solid ${theme.primary}`,
  },
  navBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
});

function Navbar() {
  const { theme, setHandleDrawer } = useContext(ThemeContext);
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down("md"));
  const isExtraSmallScreen = useMediaQuery(muiTheme.breakpoints.down("xs"));

  const [open, setOpen] = useState(false);
  const styles = useStyles(theme, isSmallScreen, isExtraSmallScreen);

  const handleDrawerOpen = () => {
    setOpen(true);
    setHandleDrawer();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
  };

  const shortname = (name) => {
    if (name.length > 15) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  return (
    <div className="navbar">
      <div className="navbar--container">
        <h1 style={{ color: theme.secondary }}>{shortname(headerData.name)}</h1>

        {!isSmallScreen ? (
          <div style={styles.navBar}>
            <Link
              to="#"
              smooth={true}
              spy="true"
              duration={2000}
              style={styles.navItem}
              activeStyle={styles.navItemActive}
            >
              Home
            </Link>
            <Link
              to="/#about"
              smooth={true}
              spy="true"
              duration={2000}
              style={styles.navItem}
              activeStyle={styles.navItemActive}
            >
              About
            </Link>
            <Link
              to="/#education"
              smooth={true}
              spy="true"
              duration={2000}
              style={styles.navItem}
              activeStyle={styles.navItemActive}
            >
              Education
            </Link>
            <Link
              to="/#projects"
              smooth={true}
              spy="true"
              duration={2000}
              style={styles.navItem}
              activeStyle={styles.navItemActive}
            >
              Projects
            </Link>
            <Link
              to="/#experience"
              smooth={true}
              spy="true"
              duration={2000}
              style={styles.navItem}
              activeStyle={styles.navItemActive}
            >
              Experience
            </Link>
          </div>
        ) : (
          <IoMenuSharp
            fontSize={"2em"}
            style={styles.navMenu}
            onClick={handleDrawerOpen}
            aria-label="Menu"
            id="navicon"
          />
        )}
      </div>

      {/* Drawer for Small Screens */}
      {isSmallScreen && (
        <Drawer
          variant="temporary"
          onClose={(event, reason) => {
            if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
              handleDrawerClose();
            }
          }}
          anchor="right"
          open={open}
          PaperProps={{ style: styles.MuiDrawer }}
          className="drawer"
          disableScrollLock={true}
        >
          <div className="div-closebtn">
            <CloseIcon
              onClick={handleDrawerClose}
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") {
                  e.preventDefault();
                  handleDrawerClose();
                }
              }}
              className={styles.closebtnIcon}
              role="button"
              tabIndex="0"
              aria-label="Close"
            />
          </div>

          <div onClick={handleDrawerClose}>
            <div className="navLink--container">
              <Fade left>
                <Link to="#" smooth={true} spy="true" duration={2000}>
                  <div style={styles.drawerItem}>
                    <IoHomeSharp className={styles.drawerIcon} />
                    <span className={styles.drawerLinks}>Home</span>
                  </div>
                </Link>
              </Fade>

              <Fade left>
                <Link to="/#about" smooth={true} spy="true" duration={2000}>
                  <div style={styles.drawerItem}>
                    <FaUser className={styles.drawerIcon} />
                    <span className={styles.drawerLinks}>About</span>
                  </div>
                </Link>
              </Fade>

              <Fade left>
                <Link
                  to="/#education"
                  smooth={true}
                  spy="true"
                  duration={2000}
                >
                  <div style={styles.drawerItem}>
                    <FaGraduationCap className={styles.drawerIcon} />
                    <span className={styles.drawerLinks}>Education</span>
                  </div>
                </Link>
              </Fade>

              <Fade left>
                <Link to="/#skills" smooth={true} spy="true" duration={2000}>
                  <div style={styles.drawerItem}>
                    <FaBrain className={styles.drawerIcon} />
                    <span className={styles.drawerLinks}>Skills</span>
                  </div>
                </Link>
              </Fade>

              <Fade left>
                <Link
                  to="/#projects"
                  smooth={true}
                  spy="true"
                  duration={2000}
                >
                  <div style={styles.drawerItem}>
                    <FaFolderOpen className={styles.drawerIcon} />
                    <span className={styles.drawerLinks}>Projects</span>
                  </div>
                </Link>
              </Fade>

              <Fade left>
                <Link
                  to="/#contacts"
                  smooth={true}
                  spy="true"
                  duration={2000}
                >
                  <div style={styles.drawerItem}>
                    <MdPhone className={styles.drawerIcon} />
                    <span className={styles.drawerLinks}>Contact</span>
                  </div>
                </Link>
              </Fade>
            </div>
          </div>
        </Drawer>
      )}
    </div>
  );
}

export default Navbar;
