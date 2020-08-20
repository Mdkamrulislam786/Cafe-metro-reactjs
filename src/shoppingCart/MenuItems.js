import React from "react";
import {Button} from 'react-bootstrap'

const MenuItems = (props) => {
  return (
    <div>
      <div className="images">
        <img className="image" src={props.src} alt={props.alt} />
        <h3>{props.h3}</h3>
        <h3>{props.price}</h3>
        <Button onClick={props.onClick}  className="addToCart carts">
          <i className="fas fa-shopping-cart">Add to Cart</i>
        </Button>
      </div>
    </div>
  );
};

export default MenuItems;
