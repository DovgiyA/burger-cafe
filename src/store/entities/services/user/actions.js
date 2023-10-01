import { EXIT, USER } from "../../../../constants/constants";
import { fetchWithRefresh, request } from "../../../../utils/request";

export const  SET_USER = "SET_USER";
export const  IS_CHECKED = "IS_CHECKED";
export const IS_SUCCESS = 'IS_SUCCESS';

  export const setUser = (user) => ({
    type: SET_USER,
    payload: user
  });

  export const getUser = () => {
    return async function(dispatch) {
        const responce = await fetchWithRefresh(USER, {
          method: 'GET',
          headers: { authorization: localStorage.getItem("accessToken") }          
        });               
        dispatch(setUser(responce.user));     
    }
  }

  export const refreshUser = (value) => {
    return async function(dispatch) {
      const responce = await fetchWithRefresh(USER, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json;charset=utf-8',
          authorization: localStorage.getItem("accessToken") },
        body: JSON.stringify(value)
      });      
      dispatch(setUser(responce.user));     
    }
  }

  export const setAuthChecked = (value) => ({
    type: IS_CHECKED,
    payload: value
  })

  export const isSuccess = (value) =>({
    type: IS_SUCCESS,
    payload: value
  })

  export function loginRequest(api, value) { 
    return async function(dispatch) {      
      try {        
        const result = await request(api, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(value),
        });     
          localStorage.setItem("accessToken", result.accessToken);
          localStorage.setItem("refreshToken", result.refreshToken);
          dispatch(setUser(result.user));
          dispatch(setAuthChecked(true));    
        
      } catch(e) {
        console.log(e);
      }     
    };
  }

 export const checkUser = () => {
  return async function(dispatch) {
    if (localStorage.getItem("accessToken")) {
      dispatch(getUser());
      dispatch(setAuthChecked(true));
    }
    dispatch(setAuthChecked(true));
  }
 }

 export const logout = () => {
  return async function(dispatch) {
  await request(EXIT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({token: localStorage.getItem("refreshToken")}),           
  });    
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  dispatch(setUser(null));
  }  
}

export function reset(api, value) { 
  return async function(dispatch) {      
    try {        
      const result = await request(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(value),
      });    
       dispatch(isSuccess(result.success))
    } catch(e) {
      console.log(e);
    }     
  };
}