import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [auth, setAuth] = useState("");
  const [user, setUser] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    var auth = window.localStorage.getItem("email");
    var userName = window.localStorage.getItem("userName");

    if (auth === null) {
      navigate("/login");
    }
    setAuth(auth);
    setUser(userName);
  }, []);

  const LogOut = () => {
    localStorage.removeItem("email");
    localStorage.clear();
    navigate("/login");
  };

  const navstyle = {
    color: "white",
  };

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/home" style={navstyle}>
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login" style={navstyle}>
              Login
            </Nav.Link>
            <Nav.Link href="/register" style={navstyle}>
              Register
            </Nav.Link>

            <Nav.Link to="" style={navstyle} onClick={LogOut}>
              <span>{user}|</span>
              LogOut
            </Nav.Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
