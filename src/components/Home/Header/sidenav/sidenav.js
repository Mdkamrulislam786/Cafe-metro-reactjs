import React, { Component } from "react";
import { bubble as Menu } from "react-burger-menu";
import "./sidenav.css";
import SideNavItems from "./sidenavitems";

class SideNav extends Component {
  render() {
    return (
      <div>
        <Menu right>
          <SideNavItems />
        </Menu>
      </div>
    );
  }
}
{
  /* <a id="contact" className="menu-item" href="/contact">Contact</a> */
}
export default SideNav;
