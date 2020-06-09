import React from "react";
import "./headermain.css";
import { Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import Buttons from "../../../widgets/Buttons/button";
import SideIconBar from "../../../widgets/Side-IconBar/sideiconbar";

const HomeMain = () => {
  return (
    <>
      <div id="home">
        <div>
          <Jumbotron fluid className="jumbo">
            <div className="overlay"></div>
            <p className="rotate"> New </p>

            <h1 class="detail">
              Cafe <span class="name">Metro</span>{" "}
            </h1>

            <p>Pizaria Pastry Grill</p>
            <p>
              <Buttons
                type="greenButton"
                linkTo="/MainMenu"
                cta="Order Online"
              />
              <Buttons type="redButton" linkTo="/MainMenu" cta="See The Menu" />
            </p>
            <SideIconBar />
          </Jumbotron>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
