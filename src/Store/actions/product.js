import * as actionTypes from "./actionTypes";

export const loadProducts = () => {
  return {
    type: actionTypes.LOAD_PRODUCTS,
  };
};

export const setCurProduct = (payload) => {
  return {
    type: actionTypes.SET_CUR_PRODUCT,
    payload: payload,
  };
};
