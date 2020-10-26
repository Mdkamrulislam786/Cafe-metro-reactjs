import React, { Fragment } from "react";
import EmptyCart from "./EmptyCart/EmptyCart";
import CartList from "./CartList/CartList";
import CartColumns from "./CartColumns/CartColumns";
import CartTotals from "./CartTotals/CartTotals";
import "./cart.css";
//REDUX
import { connect } from "react-redux";

const Cart = (props) => {
  const { cart } = props.testReducer;
  const showCart = () => {
    if (cart.length > 0) {
      return (
        <Fragment>
          <div>
            <h2
              style={{
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "20px",
                fontFamily: "Robotto",
              }}
            >
              Your Cart
            </h2>
          </div>
          <CartColumns />
          <CartList value={props.testReducer} />
          <CartTotals value={props.testReducer} />
        </Fragment>
      );
    } else {
      return <EmptyCart />;
    }
  };
  return <section>{showCart()}</section>;
};
const mapStateToProps = (state) => ({
  basketProps: state.basketState,
  testReducer: state.testReducer,
});

export default connect(mapStateToProps, null)(Cart);
