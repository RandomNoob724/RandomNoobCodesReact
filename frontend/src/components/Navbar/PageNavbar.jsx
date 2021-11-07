import React from "react";
import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import { NavLink } from 'react-router-dom'

const PageNavbar = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">RandomNoobCodes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Blog">Blog</Nav.Link>
            <NavDropdown title="About me" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/Portfolio/Projects">Projects</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/Portfolio/CodeSkills">
                Code Skills
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/Portfolio/WorkExperience">Work Experience</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/Contact">
                Contact
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PageNavbar;
