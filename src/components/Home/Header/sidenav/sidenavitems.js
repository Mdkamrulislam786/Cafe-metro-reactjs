import React from "react";
import { Link } from "react-router-dom";
import "./sidenav.css";
import { Nav, NavDropdown } from "react-bootstrap";

const SideNavItems = () => {
  const showItems = () => {
    return (
      <>
        <Nav className="flex-column option">
          
            <Nav.Link as={Link} to="/">
              <i className="fas fa-home icon"></i>Home
            </Nav.Link>
          
         
            <Nav.Link as={Link} to="/MainMenu-Order-Online">
            <i className="fas fa-mug-hot icon"></i>  Menu
            </Nav.Link>
          
          <NavDropdown
            title={<i className="fas fa-clipboard-list icon">Our Services</i>}
           >
              <NavDropdown.Item as={Link} to="/Catering-services" href="#action/3.1">
                <i className="fas fa-wine-glass-alt icon"></i> Catering Services
              </NavDropdown.Item>
            
            
              <NavDropdown.Item as={Link} to="/Wedding-services" href="#action/3.2">
                <i className="fas fa-ring icon"></i> Wedding services
              </NavDropdown.Item>
            
          </NavDropdown>
          <Nav.Link href="#ContactUs">
            <i className="fas fa-id-card-alt icon"></i> Contact Us
          </Nav.Link>
        </Nav>
      </>
    );
  };

  return <div>{showItems()}</div>;
};

export default SideNavItems;
