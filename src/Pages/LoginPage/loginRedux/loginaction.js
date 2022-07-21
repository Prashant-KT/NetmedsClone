
export const LOGGIN_SUCCESS = "LOGGIN_SUCCESS"

export const matchData = (data) => {
  return{
    type:LOGGIN_SUCCESS,
    payload:data
  }
};