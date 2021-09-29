import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { logout } from "../../../actions/userActions";
import logo from "../../../Asset/logo.png";
import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header bg="light" expand="lg">
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <img className="logo" src={logo} alt="" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavDropdown className="dropdown_style header_text effect ml-5" title="CLASSES" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Physics</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Chemistry</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Biology</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className="dropdown_style header_text effect" title="SUBJECTS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">English</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Histroy</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Physics</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#action1">
              <span className="header_text effect">TUTOR</span>
            </Nav.Link>
            <Nav.Link href="#action1">
              <span className="header_text effect">STUDENTS</span>
            </Nav.Link>
            <Nav.Link href="#action1">
              <span className="header_text effect">PARENTS</span>
            </Nav.Link>

            <Nav className="ml-auto">
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <Button className="header_button" variant="outline-info">Sign in</Button>{" "}
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/register">
                    <Nav.Link>
                      <Button className="header_button" variant="outline-info">Sign up</Button>{" "}
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu" variant="warning">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
