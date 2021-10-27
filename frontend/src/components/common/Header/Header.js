import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { logout } from "../../../actions/userActions";
import logo from "../../../Asset/logo.png";
import "./Header.scss";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  const dispatch = useDispatch();

  const [fetchProfile, setFetchProfile] = useState({});
  let id = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))._id
    : "";
    
  useEffect(() => {
    if (id !== "") {
      axios
        .get(`http://localhost:5000/api/tutor/profile/${id}`)
        .then((data) => setFetchProfile(data.data));
    }
  }, [id]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar className="nav_background" expand="lg">
      <Container fluid className="header_width">
        <Navbar.Brand>
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown
              className="effect"
              title="CLASSES"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="effect"
              title="SUBJECTS"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="effect_single" href="#action1">
              TUTOR
            </Nav.Link>
            <Nav.Link className="effect_single" href="#action2">
              STUDENTS
            </Nav.Link>
            <Nav.Link className="effect_single" href="#">
              PARENTS
            </Nav.Link>
          </Nav>
          {id !== "" ? (
            <NavDropdown
              title={
                fetchProfile.videoUpload &&
                fetchProfile.videoUpload.profilePhotoUrl !== "" ? (
                  <img
                    className="header_image"
                    src={fetchProfile.videoUpload.profilePhotoUrl}
                  />
                ) : (
                  <>{fetchProfile.basic && fetchProfile.basic.tutorsName}</>
                )
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav>
              <LinkContainer to="/login">
                <Button>Sign in</Button>
              </LinkContainer>
              <LinkContainer to="/register">
                <Button>Sign up</Button>
              </LinkContainer>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
