import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, Image, Button } from 'react-bootstrap'
import { logout } from '../actions/userActions'
import './Header.css'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin


  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>

      <NavDropdown title="CLASSES" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Physics</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Chemistry</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Biology</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="SUBJECTS" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">English</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Histroy</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Physics</NavDropdown.Item>
      </NavDropdown>

      <Nav.Link href="#action1"><span className="all-links">TUTOR</span></Nav.Link>
      <Nav.Link href="#action1"><span className="all-links">STUDENTS</span></Nav.Link>
      <Nav.Link href="#action1"><span className="all-links">PARENTS</span></Nav.Link>

      
            
            <Nav className='ml-auto'>
              
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                <LinkContainer to='/login'>
                  <Nav.Link>
                  <Button variant="outline-info">Sign in</Button>{' '}
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to='/register'>
                  <Nav.Link>
                  <Button variant="info">Sign up</Button>{' '}
                  </Nav.Link>
                </LinkContainer>
                </>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu' variant='warning'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
