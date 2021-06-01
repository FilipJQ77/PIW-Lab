import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, NavItem, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../contexts/Context";

const MyNavbar = () => {
  const { loggedIn, setLoggedIn, currentUser, setCurrentUser } =
    useContext(Context);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Pizzeria
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Strona główna
          </Nav.Link>
          <Nav.Link as={Link} to="/menu">
            Menu
          </Nav.Link>
        </Nav>

        <Form inline>
          {loggedIn === false ? (
            <React.Fragment>
              <Nav.Link as={Link} to="/login">
                Zaloguj się
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Zarejestruj się
              </Nav.Link>
            </React.Fragment>
          ) : (
            <Nav.Link as={Link} to="/user">
              {currentUser}
            </Nav.Link>
          )}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
