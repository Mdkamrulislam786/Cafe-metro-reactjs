import React from "react";
import "./button.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Buttons = (props) => {
  let template = null;

  switch (props.type) {
    case "greenButton":
      template = (
        <>
        <Link to={props.linkTo} onClick={props.onClick}>
          <Button href="/MainMenu"  className="btns1 btn1">
           {props.cta}
          </Button>
        </Link>
        </>
      );
      break;
    case "redButton":
      template = (
        <>
          <Link to={props.linkTo}>
            <Button href="/MainMenu"  className="btns btn2">
             {props.cta}
            </Button>
          </Link>
        </>
      );
      break;
    default:
      template = null;
  }
  return template;
};

export default Buttons;
