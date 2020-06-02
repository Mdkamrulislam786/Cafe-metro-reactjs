import React from "react";
import "./headermain.css";
import { Container } from "react-bootstrap";
import { Jumbotron, Row, Col, Button } from "react-bootstrap";
import Buttons from "../../../widgets/Buttons/button";
import SideIconBar from "../../../widgets/Side-IconBar/sideiconbar";

const HomeMain = () => {
  return (
    <>
    <div>
      <Container fluid="xlg lg md sm xs">
        <Jumbotron fluid className="jumbo">
          <div className="overlay"></div>
          <p className="rotate"> New </p>

          <h1 class="detail">
            Cafe <span class="name">Metro</span>{" "}
          </h1>

          <p>Pizaria Pastry Grill</p>
          <p>
            <Buttons />
          </p>
          <SideIconBar/>
        </Jumbotron> 
      </Container>
      </div>
    </>
  );
};

export default HomeMain;
{
  /* <h1>Cafe Metro</h1>
            <p>
             Pizaria Pastry Grill
            </p>
            <p>
              <Button variant="primary">Order Online</Button>
              <Button variant="primary">See Menu</Button>
            </p> */
}
