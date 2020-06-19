import React, { Fragment } from "react";
import { connect } from "react-redux";
import { productQuantity, clearProduct } from "../actions/productQuantity";
import { Button} from 'react-bootstrap'
import choclateCake from "../images/cake-1.jpeg";
import birthdayCake from "../images/cake-2.jpeg";
import doughnut from "../images/doughnut-2.jpeg";
import sweets from "../images/z-sweets-3.jpeg";
import pastry from '../assets/pastry.jpg'

const Cart = ({ basketProps, productQuantity, clearProduct }) => {
  console.log(basketProps);

  let productsInCart = [];

  Object.keys(basketProps.products).forEach((item) => {
    console.log(item);
    console.log(basketProps.products[item].inCart);
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
    console.log(productsInCart);
  });

  // let productsImages = [cake, cake1, doughnut, sweets];
  const productsImages = (product) => {
    if (product.tagName === "choclateCake") {
      return choclateCake;
    } else if (product.tagName === "birthdayCake") {
      return birthdayCake;
    } else if (product.tagName === "doughnut") {
      return doughnut;
    } else if (product.tagName === "sweets") {
      return sweets;
    }else if (product.tagName === "pastry") {
      return pastry;
    }
  };

  productsInCart = productsInCart.map((product, index) => {
    console.log("my product is", product);

    return (
      <Fragment key={index}>
        <div className="product">
          <i
            onClick={() => clearProduct(product.tagName)}
            className="fas fa-times-circle"
          ></i>
          <img src={productsImages(product)} alt="Cakes&pastry" />
          <span className="sm-hide">{product.name}</span>
        </div>
        <div className="price sm-hide">{product.price}tk</div>
        <div className="quantity">
          <i
            onClick={() => productQuantity("decrease", product.tagName)}
            className="fas fa-minus-circle"
          ></i>
          <span>{product.numbers}</span>
          <i
            onClick={() => productQuantity("increase", product.tagName)}
            className="fas fa-plus-circle"
          ></i>
        </div>
        <div className="total">${product.numbers * product.price}tk</div>
      </Fragment>
    );
  });

  return (
    <div className="container-products">
      <div className="product-header">
        <h5 className="product-title">PRODUCT</h5>
        <h5 className="price sm-hide">PRICE</h5>
        <h5 className="quantity">QUANTITY</h5>
        <h5 className="total">TOTAL</h5>
      </div>
      <div className="products">{productsInCart}</div>
      <div className="basketTotalContainer">
        <h4 className="basketTotalTitle">Total</h4>
        <h4 className="baskeTotal">{basketProps.cartCost} tk</h4>
      </div>
      <div>
        <Button onClick={()=> alert(`CONFIRM YOUR ORDER: TOTAL PRICE ${basketProps.cartCost}`)}   type="button" varient="primary">ORDER NOW</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Cart
);
