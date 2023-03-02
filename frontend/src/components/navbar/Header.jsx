import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/user/userSlice'

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const logout = () =>{

  }
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>Parcel Hero</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user ? (
              <>
                <Nav.Link as={Link} to={"/"} className="text-white">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"} className="text-white">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to={"/parcel"} className="text-white">
                  parcel
                </Nav.Link>
                <Nav.Link as={Link} to={"/contact"} className="text-white">
                  Contact
                </Nav.Link>
                <button className="btn text-white" onClick={logout}>
                  logout
                </button>
                <NavDropdown title="john" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/profile"}>
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Logout</NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to={"/"} className="text-white">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"} className="text-white">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to={"/parcel"} className="text-white">
                  parcel
                </Nav.Link>
                <Nav.Link as={Link} to={"/contact"} className="text-white">
                  Contact
                </Nav.Link>
                <Nav.Link as={Link} to={"/login"} className="text-white">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
