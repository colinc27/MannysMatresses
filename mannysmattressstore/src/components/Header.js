import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import image001 from "../img/image001.gif";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="/">
              <img src={image001}></img>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/about">
                <Nav.Link>
                  <i className="fa-solid fa-couch px-1"></i>
                  About
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/gallery">
                <Nav.Link>
                  <i className="fa-solid fa-images px-1"></i>Gallery
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>
                  <i className="fa-solid fa-phone-volume px-1"></i>Contact Us
                </Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="/careers">
                <Nav.Link>
                  <i className="fa-solid fa-book px-1"></i>Careers
                </Nav.Link>
              </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
