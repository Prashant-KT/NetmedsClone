import { LOGGIN_SUCCESS } from "./loginaction";

const init = {
  isAuth: false,
  userName: "",
};
export const loginReducer = (state=init,action)=>{
    switch (action.type) {
      case LOGGIN_SUCCESS: {
        return {
          ...state,
          isAuth: true,
          userName: action.payload,
        };
      }
      default:
        return state;
    } 
}