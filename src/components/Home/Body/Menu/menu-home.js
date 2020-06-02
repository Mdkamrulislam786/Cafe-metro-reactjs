import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./MenuMain/menuhome.css";

const MenuHome = (props) => {
  const mystyle = {
    background:"url(../../../../../assets/jonathan-borba-8l8Yl2ruUsg-unsplash.jpg)"
  };
  return (
    <>
      <Container fluid="xlg lg md sm xs">
        <div className={props.className}>
          <Link to={props.Link}>
            <h3>{props.h3}</h3>
            <p>{props.p}</p>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default MenuHome;
// className="MenuHomeImg"
