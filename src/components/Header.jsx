import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand>
          <Link className="me-2 text-decoration-none" to="/">
            Logo
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link className="me-2" to="/">
            Home
          </Link>
          <Link className="me-2" to="/features">
            Features
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
