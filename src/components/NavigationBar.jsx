import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let location = window.location.href;
  console.log(location);

  return (
    <Navbar fixed="top" expand="md" style={{ backgroundColor: "#233" }}>
      <div className="container">
        <NavbarBrand href="#page-top" className="navbrand">
          Lorem Ipsum
        </NavbarBrand>
        <NavbarToggler
          onClick={() => setIsOpen(!isOpen)}
          className="nav-toggle"
        >
          <i className="fa fa-bars"></i>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto text-uppercase" navbar>
            <NavItem>
              <NavLink
                href="#services"
                className={
                  location === "http://localhost:3000/#services"
                    ? "active"
                    : "inactive"
                }
              >
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#portfolio"
                className={
                  location === "http://localhost:3000/#portfolio"
                    ? "active"
                    : "inactive"
                }
              >
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#about"
                className={
                  location === "http://localhost:3000/#about"
                    ? "active"
                    : "inactive"
                }
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#team"
                className={
                  location === "http://localhost:3000/#team"
                    ? "active"
                    : "inactive"
                }
              >
                Team
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#contact"
                className={
                  location === "http://localhost:3000/#contact"
                    ? "active"
                    : "inactive"
                }
              >
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
