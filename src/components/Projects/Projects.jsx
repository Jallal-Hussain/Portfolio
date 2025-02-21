import { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/projectsData";
import { HiArrowRight } from "react-icons/hi";

import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";
import { Button } from "@mui/material";

function Projects() {
  const { theme } = useContext(ThemeContext);

  const useStyles = {
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.secondary.light,
      transition: "color 0.2s",
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      width: "40px",
      height: "40px",
      padding: "0.5rem",
      fontSize: "1.05rem",
      borderRadius: "50%",
      cursor: "pointer",
    },
  };

  return (
    <>
      {projectsData.length > 0 && (
        <div
          className="projects"
          id="projects"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>Projects</h1>
          </div>
          <div className="projects--body">
            <div className="projects--bodyContainer">
              {projectsData.slice(0, 4).map((project) => (
                <SingleProject
                  theme={theme}
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              ))}
            </div>

            {projectsData.length > 4 && (
              <div className="projects--viewAll">
                <Link to="/projects">
                  <Button sx={useStyles.viewAllBtn}>
                    View All
                    <HiArrowRight sx={useStyles.viewArr} />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
