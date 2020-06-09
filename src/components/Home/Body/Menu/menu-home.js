import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./MenuMain/menuhome.css";
import Modals from "../../../widgets/Modals/modal";
import {ColoredLine} from '../../Footer/footer'
const MenuHome = (props) => (
  <>
    <div id="menuhome">
    
            <div className={props.className}>
            <div className="overlay"></div>
              <Link to={props.link}>
                <h3>{props.h3}</h3>
                <p>{props.p}</p>
              </Link>
              <Modals
              cta={props.cta}
              linkTo={props.linkTo}
              video={props.video}
              />
            </div>
        
    </div>
  </>
);

export default MenuHome;
