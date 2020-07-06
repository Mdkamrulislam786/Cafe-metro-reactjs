import React from "react";

const MenuItems = (props) => {
  return (
    <div>
      <div className="images">
        <img className="image" src={props.src} alt={props.alt} />
        <h3>{props.h3}</h3>
        <h3>{props.price}</h3>
        <a onClick={props.onClick} href="#" className="addToCart carts">
          <i className="fas fa-shopping-cart">Add to Cart</i>
        </a>
      </div>
    </div>
  );
};

export default MenuItems;
