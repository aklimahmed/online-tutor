import React from "react";
import "./Header.scss";
import logo from "../../../Asset/Picture/logo.png";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const header = () => {
  return (
    <div className="header">
      <Navbar className="container-fluid" expand="lg">
        <Container fluid>
          <img className="header-logo" src={logo} alt="" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 navStyle"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown className="nav-title" title="CLASSES" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="nav-title" title="SUBJECTS" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="nav-title" href="#action1">TUTOR</Nav.Link>
              <Nav.Link className="nav-title" href="#action2">STUDENTS</Nav.Link>
              <Nav.Link className="nav-title" href="#action2">PARENTS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default header;
