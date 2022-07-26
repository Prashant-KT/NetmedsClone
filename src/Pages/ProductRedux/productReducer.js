import {
  ADD_TEMP_CART,
  CHANGE_CART_COUNTER,
  DELETE_CART_ITEM,
  FINAL_SELLING_PRICE,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  SORT_HIGH_TO_LOW,
  SORT_LOW_TO_HIGH,
  TOTAL_MRP,
  TOTAL_SAVING,
} from "./productAction";

let initial = {
  noOfItemInCart: 0,
  totalPrice: 0,
  totalMrp:0,
  totalSaving:0,
  products: [],
  cartProducts:[],
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

    case CHANGE_CART_COUNTER: {
      return {
        ...state,
        noOfItemInCart: state.noOfItemInCart + payload,
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

    case ADD_TEMP_CART: {
      return {
        ...state,
        cartProducts: [...state.cartProducts, payload],
      };
    }
    case DELETE_CART_ITEM: {
      return {
        ...state,
        cartProducts: state.cartProducts.filter((el) => el.id !== payload),
        noOfItemInCart: state.noOfItemInCart - 1,
      };
    }
    case FINAL_SELLING_PRICE: {
      return {
        ...state,
        totalPrice: payload,
      };
    }

    case TOTAL_MRP: {
      return {
        ...state,
        totalMrp: payload,
      };
    }

    case TOTAL_SAVING: {
      return {
        ...state,
        totalSaving: payload,
      };
    }

    default:
      return state;
  }
};

