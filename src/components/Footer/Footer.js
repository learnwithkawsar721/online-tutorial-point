import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="col-10 mx-auto ">
          <div className="d-flex justify-content-between">
            <p>Online Tutorial Point</p>
            <p>&copy;CopyRight by Kawsar</p>
            <p>kawsar721g@gmail.com</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
