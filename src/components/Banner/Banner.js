import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  document.title = "Home";
  return (
    <Container fluid className="banner-container">
      <Row className="g-3">
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="d-flex align-items-center banner-content"
        >
          <div className="text-center">
            <h1 className="banner_text">
              Best Online Learning For your future.
            </h1>
            <Button className="banner_btn">View Tutorial</Button>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} >
          <Image
            src="https://xpressrow.com/html/edulan/assets/img/hero/hero_img.png"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
