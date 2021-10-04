import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./About.css";
import AboutTabs from "./AboutTabs";

const About = () => {
  document.title = "About";
  return (
    <>
      <div className="about_banner">
        <h1 className="banner_title">About Us</h1>
        <Breadcrumb className="text-center">
          <Breadcrumb.Item>
            <NavLink to="/home">Home</NavLink>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>About</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Container>
        <Row className="my-5 g-4">
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="about_img">
              <img
                src="https://xpressrow.com/html/edulan/assets/img/about/about_img_02.jpg"
                alt="about img"
                className="w-100"
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8}>
            <div className="about_content">
              <h1 className="about_title">
                We are turitor an online learning community.
              </h1>
              <p className="about_text">
                At Turitor, we believe everyone should have the opportunity to
                create progress through technology and develop the skills of
                tomorrow. With assessments, learning paths and courses authored
                by industry experts
              </p>
            </div>
            <AboutTabs />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
