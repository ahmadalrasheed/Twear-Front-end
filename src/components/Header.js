import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>T-wear</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    Cart<i className="fa-solid fa-cart-shopping"></i>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>
                    Login<i className="fa-solid fa-cart-shopping"></i>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
