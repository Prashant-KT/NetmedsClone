import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./productAction";

let initial = {
  cartItems: 0,
  totalPrice: 0,
  products : [],
  isLoading: false,
  isError: false,
};

export const productReducer = (state = initial, { type, payload }) => {
         switch (type) {
           case GET_PRODUCTS_REQUEST: {
             return {
               ...state,
               isLoading: true,
             };
           }

           case GET_PRODUCTS_SUCCESS: {
             return {
               ...state,
               isLoading: false,
               products: payload,
             };
           }

           case GET_PRODUCTS_FAILURE: {
             return {
               ...state,
               isLoading: false,
               isError:true,
             };
           }

           default:
             return state;
         }
};