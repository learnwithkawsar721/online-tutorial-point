import Button from "@restart/ui/esm/Button";
import React from "react";
import {
  Breadcrumb,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import "./Contact.css";
import { NavLink } from "react-router-dom";

const Contact = () => {
  document.title = "Contact";
  return (
    <>
      <div className="about_banner text-center">
        <h1 className="banner_title">Contact</h1>
        <Breadcrumb className="text-center">
          <Breadcrumb.Item>
            <NavLink to="/home">Home</NavLink>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>Contact</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Container>
        <Row className="g-4 my-4">
          <Col className="col-6">
            <FloatingLabel
              controlId="floatingInput"
              label="Your Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="kawsar" />
            </FloatingLabel>
          </Col>
          <Col className="col-6">
            <FloatingLabel controlId="floatingPassword" label="E-mail Address">
              <Form.Control type="email" placeholder="E-mail" />
            </FloatingLabel>
          </Col>
          <Col className="col-12">
            <FloatingLabel
              controlId="floatingPassword"
              label="Enter your Subject"
            >
              <Form.Control type="text" />
            </FloatingLabel>
          </Col>
          <Col className="col-12">
            <FloatingLabel controlId="floatingTextarea2" label="Your Massage">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Col>
          <Col className="col-12 text-center">
            <Button className="contact_btn">Send Massage</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
