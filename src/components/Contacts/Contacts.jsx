/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Snackbar, IconButton, SnackbarContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import isEmail from "validator/lib/isEmail";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { FiPhone, FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { ThemeContext } from "../../contexts/ThemeContext";

import { socialsData } from "../../data/socialsData";
import { contactsData } from "../../data/contactsData";
import "./Contacts.css";
import { Link } from "react-router-dom";

function Contacts() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const { theme } = useContext(ThemeContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const useStyles = {
    input: {
      border: `1px solid ${theme.primary80}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid ${theme.primary600}`,
      },
    },
    message: {
      border: `1px solid ${theme.primary80}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid ${theme.primary600}`,
      },
    },
    label: {
      backgroundColor: `${theme.secondary}`,
      color: `${theme.primary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 600,
      fontSize: "0.9rem",
      padding: "0 5px",
      transform: "translate(25px,50%)",
    },
    socialIcon: {
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "21px",
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
    detailsIcon: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "50%",
      width: "45px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "23px",
      transition: "250ms ease-in-out",
      flexShrink: 0,
      "&:hover": {
        transform: "scale(1.1)",
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
    submitBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.08)",
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
  };

  const handleContactForm = (e) => {
    e.preventDefault();

    if (name && email && message) {
      if (isEmail(email)) {
        const responseData = {
          name: name,
          email: email,
          message: message,
        };

        axios
          .post(contactsData.sheetAPI, responseData)
          .then((res) => {
            console.log("success");
            setSuccess(true);
            setErrMsg("");

            // Clear form fields
            setName("");
            setEmail("");
            setMessage("");
          })
          .catch((error) => {
            console.error("There was an error submitting the form:", error);
            setErrMsg(
              "There was an error submitting the form. Please try again."
            );
            setOpen(true);
          });
      } else {
        setErrMsg("Invalid email");
        setOpen(true);
      }
    } else {
      setErrMsg("Enter all the fields");
      setOpen(true);
    }
  };

  return (
    <div
      className="contacts"
      id="contacts"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="contacts--container">
        <h1 style={{ color: theme.primary }}>Contacts</h1>
        <div className="contacts-body">
          <div className="contacts-form">
            <form onSubmit={handleContactForm}>
              <div className="input-container">
                <label htmlFor="Name" style={useStyles.label}>
                  Name
                </label>
                <input
                  placeholder="Enter you full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="Name"
                  style={useStyles.input}
                  className="form-input"
                />
              </div>
              <div className="input-container">
                <label htmlFor="Email" style={useStyles.label}>
                  Email
                </label>
                <input
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="Email"
                  style={useStyles.input}
                  className="form-input"
                />
              </div>
              <div className="input-container">
                <label htmlFor="Message" style={useStyles.label}>
                  Message
                </label>
                <textarea
                  placeholder="Type your message...."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  name="Message"
                  style={useStyles.message}
                  className="form-input"
                />
              </div>

              <div className="submit-btn">
                <button type="submit" style={useStyles.submitBtn}>
                  <p>{!success ? "Send" : "Sent"}</p>
                  <div className="submit-icon">
                    <AiOutlineSend
                      className="send-icon"
                      style={{
                        animation: !success
                          ? "initial"
                          : "fly 0.8s linear both",
                        position: success ? "absolute" : "initial",
                      }}
                    />
                    <AiOutlineCheckCircle
                      className="success-icon"
                      style={{
                        display: !success ? "none" : "inline-flex",
                        opacity: !success ? "0" : "1",
                      }}
                    />
                  </div>
                </button>
              </div>
            </form>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={open}
              autoHideDuration={5000}
              onClose={handleClose}
            >
              <SnackbarContent
                action={
                  <React.Fragment>
                    <IconButton
                      size="small"
                      aria-label="close"
                      color="inherit"
                      onClick={handleClose}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
                style={{
                  backgroundColor: theme.primary,
                  color: theme.secondary,
                  fontFamily: "var(--primaryFont)",
                }}
                message={errMsg}
              />
            </Snackbar>
          </div>

          <div className="contacts-details">
            {/* <img src={theme.contactsimg} alt="contacts" className="contacts--img" /> */}
            <div
              // href={`mailto:${contactsData.email}`}
              className="personal-details"
            >
              <div style={useStyles.detailsIcon}>
                <FiMail />
              </div>
              <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
            </div>
            <div
              // href={`tel:${contactsData.phone}`}
              className="personal-details"
            >
              <div style={useStyles.detailsIcon}>
                <FiPhone />
              </div>
              <p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
            </div>
            <div className="personal-details">
              <div style={useStyles.detailsIcon}>
                <HiOutlineLocationMarker />
              </div>
              <p style={{ color: theme.tertiary }}>{contactsData.address}</p>
            </div>
            <div className="socialmedia-icons">
              {socialsData.map((social) => (
                <div key={social.key}>
                  <Link
                    to={social.url}
                    target="_blank"
                    rel="noreferrer"
                    style={useStyles.socialIcon}
                  >
                    {social.icon}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
