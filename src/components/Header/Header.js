import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <Navbar bg="light" collapseOnSelect expand="lg" sticky="top">
      <Container>
        <NavLink className="navbar-brand" to="/">
          O.T.Point
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/service">
              Service
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
