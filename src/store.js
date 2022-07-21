import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import thunk from "redux-thunk";
import { loginReducer } from "./Pages/LoginPage/loginRedux/loginReducer";
import { productReducer } from "./Pages/ProductRedux/productReducer";

const rootReducer = combineReducers({
  loginState: loginReducer,
  productDetails: productReducer,
});

// const middleware = (store) =>(next) =>(action) =>{
//   let res = store.getState().count.count
//      if(typeof action === "function"){
//       return action(store.dispatch)
//      }
//      next(action);
// }

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// export const store = legacy_createStore(rootReducer,applyMiddleware(middleware));
// export const store = legacy_createStore(rootReducer);
