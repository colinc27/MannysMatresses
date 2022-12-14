import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import BellaSleep from "../img/BellaSleep.jpg";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="/" className="text-center">
              <img
                className="navImg border border-warning rounded"
                src={BellaSleep}
                alt="Bella Sleep Logo"
              ></img>
              {/* <h5 className="text-warning">BellaSleep Inc</h5> */}
            </Navbar.Brand>
          </LinkContainer>
          <div className="text-center">
            <h1 className="text-warning">Bella Sleep Inc.</h1>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <LinkContainer to="/about">
                <Nav.Link>
                  <i className="fa-solid fa-couch px-1"></i>
                  About
                </Nav.Link>
              </LinkContainer> */}
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
