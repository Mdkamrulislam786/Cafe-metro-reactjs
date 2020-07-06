import { ADD_PRODUCT_BASKET } from "./types";

export const addBasket = (productName) => {
  return (dispatch) => {
    console.log("add to basket");
    console.log("Product: ", productName);
    
    dispatch({
      type: ADD_PRODUCT_BASKET,
      payload: productName
    });
  };
};
