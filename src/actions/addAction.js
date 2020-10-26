import {
  ADD_PRODUCT_BASKET,
  HANDLE_DETAILS,
  CLEAR_PRODUCT,
  CLEAR_CART,
  MODAL_OPEN,
  MODAL_CLOSE,
} from "./types";

export const addBasket = (id) => {
  return (dispatch) => {
    console.log("add to basket");
    console.log("Product: ", id);

    dispatch({
      type: ADD_PRODUCT_BASKET,
      payload: id,
    });
  };
};

export const handleDetail = (id) => {
  return (dispatch) => {
    dispatch({
      type: HANDLE_DETAILS,
      payload: id,
    });
  };
};

export const removeItem = (id) => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_PRODUCT,
      payload: id,
    });
  };
};
export const clearCart = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_CART,
    });
  };
};
export const openModal = (id) => {
  return (dispatch) => {
    dispatch({
      type: MODAL_OPEN,
      payload: id,
    });
  };
};

export const closeModal = (id) => {
  return (dispatch) => {
    dispatch({
      type: MODAL_CLOSE,
      payload: id,
    });
  };
};
