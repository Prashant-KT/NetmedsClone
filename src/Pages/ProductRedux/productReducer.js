import { FILTER_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, SORT_HIGH_TO_LOW, SORT_LOW_TO_HIGH } from "./productAction";

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
               isError: true,
             };
           }

           case SORT_HIGH_TO_LOW: {
             return {
               ...state,
               isLoading: false,
               isError: false,
               products: [...state.products].sort((a, b) => b.sp - a.sp),
             };
           }
           case SORT_LOW_TO_HIGH: {
             return {
               ...state,
               isLoading: false,
               isError: false,
               products: [...state.products].sort((a, b) => a.sp - b.sp),
             };
           }
           case FILTER_PRODUCTS: {
             return {
               ...state,
               isLoading: false,
               isError: false,
               products: [...state.products].sort((a, b) => a.sp - b.sp),
             };
           }

           default:
             return state;
         }
};
// [...state.products].sort((a, b) => a.sp - b.sp);