import React from "react";


import "./MenuMain/menuhome.css";
import Modals from "../../../widgets/Modals/modal";

const MenuHome = (props) => (
  <>
    <div id="menuhome">
      <div className={props.className}>
        <h3>{props.h3}</h3>
        <p>{props.p}</p>
        {/* <a as='button' href={props.to} >{props.cta}</a> */}
        <Modals cta={props.cta} to={props.to} video={props.video} />
      </div>
    </div>
  </>
);

export default MenuHome;
