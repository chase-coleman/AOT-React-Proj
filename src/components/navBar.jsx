import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />
        <Nav className="me-auto border-4 bg-white ">
          <Nav.Link as={Link} to="/about/">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/characters/">
            Characters
          </Nav.Link>
          <Nav.Link as={Link} to="/titans/">
            Titans
          </Nav.Link>
          <Nav.Link as={Link} to="">
            Organizations
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
