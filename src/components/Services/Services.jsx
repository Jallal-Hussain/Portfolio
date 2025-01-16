import React, { useContext, useMemo } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import { servicesData } from "../../data/servicesData.jsx";

import "./Services.css";
import SingleService from "./SingleService/SingleService";

function Services() {
  const { theme } = useContext(ThemeContext);

  const renderedServices = useMemo(() => {
    return servicesData.map((service) => (
      <SingleService
        key={service.id}
        id={service.id}
        title={service.title}
        icon={service.icon}
      />
    ));
  }, [servicesData]);

  return (
    <>
      {servicesData.length > 0 && (
        <div
          className="services"
          id="services"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="services-header">
            <h1 style={{ color: theme.primary }}>Services</h1>
          </div>
          <div className="services-body">
            <p style={{ color: theme.tertiary80 }}>
              These are some of the services I offer. Reach out to me if I can
              help you with any!
            </p>
            <div className="services-bodycontainer">
              {renderedServices}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
