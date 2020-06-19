import React from "react";
import "./headermain.css";
import { Jumbotron } from "react-bootstrap";
import Buttons from "../../../widgets/Buttons/button";
import SideIconBar from "../../../widgets/Side-IconBar/sideiconbar";

const HomeMain = () => {
  return (
    <>
      <div id="home">
        <div>
          <Jumbotron fluid className="jumbo">
            <p className="rotate"> New </p>

            <h1 className="detail">
              Cafe <span className="name">Metro</span>{" "}
            </h1>

            <p>Pizaria Pastry Grill</p>
            
              <div>
                <Buttons
                  type="greenButton"
                  linkTo="/MainMenu-Order-Online"
                  cta="Order Online"
                />
              </div>
              <div>
                <Buttons
                  type="redButton"
                  linkTo="/MainMenu"
                  cta="See The Menu"
                />
              </div>
           
            <SideIconBar />
          </Jumbotron>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
