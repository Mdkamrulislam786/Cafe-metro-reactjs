import React, { Component } from "react";
import "./layout.css";
import Header from '../../components/Home/Header/header'
import SideIconBar from '../../components/widgets/Side-IconBar/sideiconbar'
class Layout extends Component {
  state = {};

  render() {
    return (
      <div id="page-wrap">
       <Header/>
      
        {this.props.children}
        Footers
      </div>
    );
  }
}
export default Layout;
