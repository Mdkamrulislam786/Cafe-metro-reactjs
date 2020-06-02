import React from "react";
import "./button.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Buttons = () => (
  <>
    <div>
      <Link to="/MainMenu">
      <Button href="/MainMenu" type="button" className="btns1 btn1">
        Order Online
      </Button>
      </Link>{" "}
      <Link to="/MainMenu">
      <Button href="/MainMenu" type="button" className="btns btn2">
        See The Menu
      </Button>
      </Link>
    </div>
  </>
);

export default Buttons;
