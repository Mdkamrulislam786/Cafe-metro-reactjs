import React from "react";
import { Link } from "react-router-dom";

import "./MenuMain/menuhome.css";
import Modals from "../../../widgets/Modals/modal";

const MenuHome = (props) => (
  <>
    <div id="menuhome">
      <div className={props.className}>
        
        <Link to={props.link}>
          <h3>{props.h3}</h3>
          <p>{props.p}</p>
        </Link>
        <Modals cta={props.cta} linkTo={props.linkTo} video={props.video} />
      </div>
    </div>
  </>
);

export default MenuHome;
