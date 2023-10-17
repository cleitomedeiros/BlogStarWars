import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function  NavBar() {
  return (
    <div className="display: flex-auto">
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">StarWars</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
          {/* É foda */} 
          
          <NavDropdown title="Servicios" id="basic-nav-dropdown">
            <NavDropdown.Item href="/servicio1">
              Servicio 1
            </NavDropdown.Item>
            <NavDropdown.Item href="/servicio2">
              Servicio 2
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  )
}
export default NavBar;