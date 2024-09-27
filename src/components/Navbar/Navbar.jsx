/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
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
import { Margin } from "@mui/icons-material";

function Navbar() {
  const { theme, setHandleDrawer } = useContext(ThemeContext);
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down("md"));
  const isExtraSmallScreen = useMediaQuery(muiTheme.breakpoints.down("xs"));

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setHandleDrawer();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
  };

  const useStyles = {
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
        color: theme.primary,
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
          <div style={useStyles.navBar}>
            <NavLink
              to="#"
              smooth={true}
              spy="true"
              duration={2000}
              style={useStyles.navItem}
              activeStyle={useStyles.navItemActive}
            >
              Home
            </NavLink>
            <NavLink
              to="/#about"
              smooth={true}
              spy="true"
              duration={2000}
              style={useStyles.navItem}
              activeStyle={useStyles.navItemActive}
            >
              About
            </NavLink>
            <NavLink
              to="/#education"
              smooth={true}
              spy="true"
              duration={2000}
              style={useStyles.navItem}
              activeStyle={useStyles.navItemActive}
            >
              Education
            </NavLink>
            <NavLink
              to="/#projects"
              smooth={true}
              spy="true"
              duration={2000}
              style={useStyles.navItem}
              activeStyle={useStyles.navItemActive}
            >
              Projects
            </NavLink>
            <NavLink
              to="/#experience"
              smooth={true}
              spy="true"
              duration={2000}
              style={useStyles.navItem}
              activeStyle={useStyles.navItemActive}
            >
              Experience
            </NavLink>
          </div>
        ) : (
          <IoMenuSharp
            fontSize={"2em"}
            style={useStyles.navMenu}
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
          PaperProps={{ style: useStyles.MuiDrawer }}
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
              className={useStyles.closebtnIcon}
              role="button"
              tabIndex="0"
              aria-label="Close"
            />
          </div>

          <div onClick={handleDrawerClose}>
            <div className="navLink--container">
              <Fade left>
                <NavLink to="#" smooth={true} spy="true" duration={2000}>
                  <div style={useStyles.drawerItem}>
                    <IoHomeSharp className={useStyles.drawerIcon} />
                    <span className={useStyles.drawerLinks}>Home</span>
                  </div>
                </NavLink>
              </Fade>

              <Fade left>
                <NavLink to="/#about" smooth={true} spy="true" duration={2000}>
                  <div style={useStyles.drawerItem}>
                    <FaUser className={useStyles.drawerIcon} />
                    <span className={useStyles.drawerLinks}>About</span>
                  </div>
                </NavLink>
              </Fade>

              <Fade left>
                <NavLink
                  to="/#education"
                  smooth={true}
                  spy="true"
                  duration={2000}
                >
                  <div style={useStyles.drawerItem}>
                    <FaGraduationCap className={useStyles.drawerIcon} />
                    <span className={useStyles.drawerLinks}>Education</span>
                  </div>
                </NavLink>
              </Fade>

              <Fade left>
                <NavLink to="/#skills" smooth={true} spy="true" duration={2000}>
                  <div style={useStyles.drawerItem}>
                    <FaBrain className={useStyles.drawerIcon} />
                    <span className={useStyles.drawerLinks}>Skills</span>
                  </div>
                </NavLink>
              </Fade>

              <Fade left>
                <NavLink
                  to="/#projects"
                  smooth={true}
                  spy="true"
                  duration={2000}
                >
                  <div style={useStyles.drawerItem}>
                    <FaFolderOpen className={useStyles.drawerIcon} />
                    <span className={useStyles.drawerLinks}>Projects</span>
                  </div>
                </NavLink>
              </Fade>

              <Fade left>
                <NavLink
                  to="/#contacts"
                  smooth={true}
                  spy="true"
                  duration={2000}
                >
                  <div style={useStyles.drawerItem}>
                    <MdPhone className={useStyles.drawerIcon} />
                    <span className={useStyles.drawerLinks}>Contact</span>
                  </div>
                </NavLink>
              </Fade>
            </div>
          </div>
        </Drawer>
      )}
    </div>
  );
}

export default Navbar;
