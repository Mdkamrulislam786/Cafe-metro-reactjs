import React from "react";
import { Link } from "react-router-dom";
import "./sidenav.css";
import MenuHome from '../../Body/Menu/menu-home'
import {
  Dropdown,
  DropdownButton,
  Nav,
  NavDropdown,
  NavItem,
  NavLink
} from "react-bootstrap";



const SideNavItems = () => {

  const showItems = () => {
  
    return (
      <>
      <Nav  className="flex-column option">
       <Link to="/"><Nav.Link href="/home"><i className="fas fa-home icon"></i>Home</Nav.Link></Link>
       <Link to="/MainMenu"><Nav.Link href="/"><i class="fas fa-mug-hot icon"></i>Menu</Nav.Link></Link>
      <NavDropdown  title="Our-Services" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      
      </Nav>
      </>
    );
  };



  return (
    <div>
      {showItems()}
    </div>
  );
};

export default SideNavItems;
