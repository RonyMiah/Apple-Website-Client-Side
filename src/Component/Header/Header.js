import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Cart from "../Cart/Cart";
import "./Header.css";

const Header = () => {
  const { user ,logOut} = useAuth();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              className="logo container "
              src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="container">
            <Nav
              className="me-auto my-2 my-lg-0 text-dark "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                className="m-2 text-decoration-none text-uppercase"
                to="/home"
              >
                Home
              </NavLink>

              <NavLink
                className="m-2 text-decoration-none text-uppercase"
                to="/product"
              >
                Product
              </NavLink>
              <NavLink
                className="m-2 text-decoration-none text-uppercase"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="m-2 text-decoration-none text-uppercase"
                to="/home"
              >
                Contact Us
              </NavLink>
            </Nav>
            <Form className="d-flex">
              {
                user.email? 
                
                  <Button className="mx-3" onClick={logOut}>LogOut</Button> 
                  :
                  <Link to="/login" className="btn  btn-outline-primary mx-3">
                LogIn
              </Link>
              }
            </Form>
            <Form className="d-flex">
              <Cart></Cart>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
