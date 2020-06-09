import React from "react";
import "./button.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Buttons = (props) => {
  let template = null;

  switch (props.type) {
    case "greenButton":
      template = (
        <div>
        <Link to={props.linkTo} onClick={props.onClick}>
          <Button href="/MainMenu"  className="btns1 btn1">
           {props.cta}
          </Button>
        </Link>
        </div>
      );
      break;
    case "redButton":
      template = (
        <div>
          <Link to={props.linkTo}>
            <Button href="/MainMenu"  className="btns btn2">
             {props.cta}
            </Button>
          </Link>
        </div>
      );
      break;
    default:
      template = null;
  }
  return template;
};

export default Buttons;
