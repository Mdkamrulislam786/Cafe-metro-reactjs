import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const MenuItems = (props) => {
  return (
    <div className="menuitem">
      <div className="images">
        <img className="image" src={props.src} alt={props.alt} />
        <div className="menuitem__buttons">
          <ButtonGroup size="sm">
            <Button onClick={props.itemInfo} variant="info">
              <i className="fa fa-info-circle" aria-hidden="true" />
              nfo
            </Button>
            <Button onClick={props.addItem} variant="success">
              <i className="fas fa-shopping-cart" />
              Add
            </Button>
          </ButtonGroup>
        </div>
        <span className="images__h3">
          <h5 style={{ textAlign: "center" }}>{props.h3}</h5>
          <h5 style={{ color: "green", textAlign: "center", fontSize: "16px" }}>
            Price: {props.price}tk
          </h5>
        </span>
      </div>
    </div>
  );
};

export default MenuItems;
