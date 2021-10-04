import React from "react";
import { Breadcrumb, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import useServices from "../../hooks/Services/useServices";
import Service from "../Service/Service";
import "./Servicess.css";
const Servicess = () => {
  document.title = "Services";
  const [services] = useServices();
  let histoty = useHistory();
  let path = histoty.location.pathname;
  let sliceServices;
  let showTitle;
  if (path === "/" || path === "/home") {
    sliceServices = services.slice(0, 6);
    showTitle = true;
  } else {
    sliceServices = [...services];
    showTitle = false;
  }

  return (
    <>
      {showTitle ? (
        <div className="text-center mt-5">
          <h1>Find the right course for you</h1>
          <p>
            Online learning offers a new way to explore subjects you’re
            passionate about.
          </p>
        </div>
      ) : (
        <div className="about_banner">
          <h1 className="banner_title">Services</h1>
          <Breadcrumb className="text-center">
            <Breadcrumb.Item>
              <NavLink to="/home">Home</NavLink>
            </Breadcrumb.Item>

            <Breadcrumb.Item active>Services</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      )}
      <Container>
        <Row className="g-4 my-5">
          {sliceServices.map((service) => (
            <Service service={service} key={service.id} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Servicess;
