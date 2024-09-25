import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { Button } from "@mui/material";
import { ThemeContext } from "../../contexts/ThemeContext";
import { blogData } from "../../data/blogData";
import SingleBlog from "./SingleBlog/SingleBlog";

import "./Blog.css";

function Blog() {
  const { theme } = useContext(ThemeContext);

  const useStyles = {
    viewAllBtnSX: {
      color: theme.tertiary,
      backgroundColor: theme.secondary,
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },

    viewArrSX: {
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
      {blogData.length > 0 && (
        <div
          className="blog"
          id="blog"
          style={{ backgroundColor: theme.secondary.light }}
        >
          <div className="blog--header">
            <h1 style={{ color: theme.primary }}>Blog</h1>
          </div>
          <div className="blog--body">
            <div className="blog--bodyContainer">
              {blogData
                .slice(0, 3)
                .reverse()
                .map((blog) => (
                  <SingleBlog
                    theme={theme}
                    key={blog.id}
                    title={blog.title}
                    desc={blog.description}
                    date={blog.date}
                    image={blog.image}
                    url={blog.url}
                  />
                ))}
            </div>

            {blogData.length > 3 && (
              <div className="blog--viewAll">
                <Link to="/blog">
                  <Button sx={useStyles.viewAllBtnSX}>
                    View All
                    <HiArrowRight sx={useStyles.viewArrSX} />
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

export default Blog;
