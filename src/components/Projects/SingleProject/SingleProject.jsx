import { useContext } from "react";
import { FaPlay, FaCode } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

import placeholder from "../../../assets/png/placeholder.png";
import "./SingleProject.css";
import { ThemeContext } from "../../../contexts/ThemeContext";

function SingleProject({ id, name, desc, tags, code, demo, image }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = {
    iconBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: "scale(1.1)",
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: "1.1rem",
      transition: "all 0.2s",
    },
  };

  return (
    <Fade bottom>
      <div
        key={id}
        className="singleProject"
        style={{ backgroundColor: theme.primary400 }}
      >
        <div className="projectContent">
          <div className="img-box">
            <img src={image ? image : placeholder} alt={name} />
          </div>
          <h2
            id={name.replace(" ", "-").toLowerCase()}
            style={{ color: theme.tertiary }}
          >
            {name}
          </h2>
          <div className="project--showcaseBtn">
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={useStyles.iconBtn}
              aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                .replace(" ", "-")
                .toLowerCase()}-demo`}
            >
              <FaPlay
                id={`${name.replace(" ", "-").toLowerCase()}-demo`}
                className={useStyles.icon}
                aria-label="Demo"
              />
            </a>
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className={useStyles.iconBtn}
              aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                .replace(" ", "-")
                .toLowerCase()}-code`}
            >
              <FaCode
                id={`${name.replace(" ", "-").toLowerCase()}-code`}
                className={useStyles.icon}
                aria-label="Code"
              />
            </a>
          </div>
        </div>
        <p
          className="project--desc"
          style={{
            background: theme.secondary,
            color: theme.tertiary,
          }}
        >
          {desc}
        </p>
        <div
          className="project--lang"
          style={{
            background: theme.secondary,
            color: theme.tertiary80,
          }}
        >
          {tags.map((tag, id) => (
            <span key={id}>{tag}</span>
          ))}
        </div>
      </div>
    </Fade>
  );
}

export default SingleProject;
