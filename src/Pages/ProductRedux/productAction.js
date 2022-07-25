import axios from "axios";
export const ADD_CART = "ADD_CART";
export const GET_CART_PRODUCTS = "GET_CART_PRODUCTS";
export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";
export const SORT_HIGH_TO_LOW = "SORT_HIGH_TO_LOW"
export const SORT_LOW_TO_HIGH = "SORT_LOW_TO_HIGH";
export const CHANGE_CART_COUNTER = "CHANGE_CART_COUNTER";
export const ADD_TEMP_CART = "ADD_TEMP_CART";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";
export const FINAL_SELLING_PRICE = "FINAL_SELLING_PRICE";


export const getProductsRequest = () => {
  return {
    type: GET_PRODUCTS_REQUEST,
  };
};

export const changeCartCounter = (payload) =>{
  return{
    type:CHANGE_CART_COUNTER,
    payload:payload,
  }
}

export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const getProductsSuccess = (page) => async (dispatch) => {
  // console.log("page",page);

  let r = await axios.get("http://localhost:8080/netmedsproducts", {
    params: {
      _limit: 16,
      _page: page,
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

export const sortProductHighToLow = () =>{
  return {
    type:SORT_HIGH_TO_LOW
  }
}
export const sortProductLowToHigh = () => {
  return {
    type: SORT_LOW_TO_HIGH,
  };
};

export const filterProducts = (page,basedOn) => async (dispatch) => {
  let r = await axios.get(`http://localhost:8080/netmedsproducts?category=${basedOn}`, {
    params: {
      _limit: 16,
      _page: page,
    },
  });
  let products = await r.data;
  dispatch(getProducts(products));
};

export const addToTempCart = (payload) =>{
    return{
      type:ADD_TEMP_CART,
      payload:payload
    }
}

export const deleteCartItem = (id)=>{
  return{
    type:DELETE_CART_ITEM,
    payload:id
  }
}

export const getFinalSellingPrice = (payload) =>{
  return{
    type:FINAL_SELLING_PRICE,
    payload: payload
  }
}