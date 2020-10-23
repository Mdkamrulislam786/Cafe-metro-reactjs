import React from "react";
import { Button } from "react-bootstrap";

const MenuItems = (props) => {
  return (
    <div className="menuitem">
      <div className="images">
        <img className="image" src={props.src} alt={props.alt} />
        <span className="images__h3">
          <h4 style={{ textAlign: "center" }}>{props.h3}</h4>
          <h4 style={{ color: "green", textAlign: "center", fontSize: "18px" }}>
            Price: {props.price}tk
          </h4>
        </span>
        <Button onClick={props.onClick} className="addToCart carts">
          <i className="fas fa-shopping-cart">Add to Cart</i>
        </Button>
      </div>
    </div>
  );
};

export default MenuItems;
