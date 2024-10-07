/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";

import { ThemeContext } from "../../contexts/ThemeContext";

import { AiOutlineFolder } from "react-icons/ai";

import "./Achievement.css";

function AchievementCard({ id, title, details, date, field, image }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = {
    achievementCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
    },
  };

  return (
    <Fade bottom>
      <div key={id} className="achievement-card">
        <div className="achievecard-content">
          <div className="achievecard-details1">
            <h2 style={{ color: theme.tertiary }}>{title}</h2>
            <p style={{ color: theme.tertiary80 }}>{details}</p>
          </div>
          <div
            className="achievecard-details2"
            style={{ color: theme.primary }}
          >
            <h5>{date}</h5>
            <div className="achievecard-field">
              <AiOutlineFolder />
              <h5>{field}</h5>
            </div>
          </div>
        </div>
        <div className="achievecard-imgcontainer">
          <a href={image} target="_blank" rel="noopener noreferrer">
            <img src={image} alt="Certificate" />
          </a>
        </div>
      </div>
    </Fade>
  );
}

export default AchievementCard;
