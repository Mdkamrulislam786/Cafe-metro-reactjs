import { ADD_PRODUCT_BASKET } from "./types";

export const addBasket = (productName) => {
  return (dispatch) => {
    console.log("add to absket");
    console.log("Productt: ", productName);
    
    dispatch({
      type: ADD_PRODUCT_BASKET,
      payload: productName
    });
  };
};
