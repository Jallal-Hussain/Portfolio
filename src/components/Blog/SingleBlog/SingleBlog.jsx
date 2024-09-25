import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { ThemeContext } from "../../../contexts/ThemeContext";
import placeholder from "../../../assets/png/placeholder.png";
import "./SingleBlog.css";

function SingleBlog({ title, desc, date, image, url, id }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Fade bottom>
      <a
        className="singleBlog"
        key={id}
        href={url}
        target="_blank"
        rel="noreferrer"
        style={{ backgroundColor: theme.primary400 }}
      >
        <div
          className="singleBlog--image"
          style={{ backgroundColor: theme.secondary }}
        >
          <img src={image ? image : placeholder} alt={title} />
        </div>
        <div className="singleBlog--body">
          <p style={{ color: theme.tertiary }}>{date}</p>
          <h3 style={{ color: theme.secondary }}>{title}</h3>
          <h6 style={{ color: theme.secondary }}>{desc}</h6>
        </div>
      </a>
    </Fade>
  );
}

export default SingleBlog;
