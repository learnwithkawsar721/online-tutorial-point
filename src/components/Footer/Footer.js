import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="col-12 col-sm-12 col-md-4 col-lg-4">
          <p>Online Tutorial Point</p>
        </Col>
        <Col className="col-12 col-sm-12 col-md-4 col-lg-4">
          <p>&copy;CopyRight by Kawsar</p>
        </Col>
        <Col className="col-12 col-sm-12 col-md-4 col-lg-4">
          <p>kawsar721g@gmail.com</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
