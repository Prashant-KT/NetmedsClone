import axios from "axios";
export const ADD_CART = "ADD_CART";
export const GET_CART_PRODUCTS = "GET_CART_PRODUCTS";
export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

export const getProductsRequest = () => {
  return {
    type: GET_PRODUCTS_REQUEST,
  };
};

export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const getProductsSuccess = () => async (dispatch) => {
  let r = await axios.get("http://localhost:8080/netmedsproducts", {
        params: {
          _page: 1,
          _limit: 20,
        },
      });
  let products = await r.data;
  dispatch(getProducts(products));
};

export const getProductsFailure = () => {
  return {
    type: GET_PRODUCTS_FAILURE,
  };
};
