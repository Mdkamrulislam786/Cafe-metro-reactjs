import React from "react";
import { Link } from "react-router-dom";
import "./sidenav.css";
import { Nav, NavDropdown } from "react-bootstrap";
import HomeMain from '../HeaderMain/headermain'

const SideNavItems = () => {
  const showItems = () => {
    return (
      <>
        <Nav className="flex-column option">
          <Link to="/">
            <Nav.Link href="/">
              <i className="fas fa-home icon"></i>Home
            </Nav.Link>
            </Link>
          <Link to="/MainMenu">
            <Nav.Link href="/">
              <i class="fas fa-mug-hot icon"></i>Menu
            </Nav.Link>
          </Link>
          <NavDropdown title="Our-Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#ContactUs">
              <i class="fas fa-mug-hot icon"></i>Contact Us
            </Nav.Link>
        </Nav>
      </>
    );
  };

  return <div>{showItems()}</div>;
};

export default SideNavItems;
