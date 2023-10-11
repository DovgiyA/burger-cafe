import { request } from "../../../../utils/request";

export const REGISTER_LOADING_STATUS = {
  REGISTER_REQUEST: "REGISTER_REQUEST", 
  REGISTER_FINISHED: "REGISTER_FINISHED",
  REGISTER_FAILED: "REGISTER_FAILED"   
  };


  export function registerRequest(api, value) {
 
    return async function(dispatch) {

      dispatch({
        type: REGISTER_LOADING_STATUS.REGISTER_REQUEST,
      });
      try {        
        const result = await request(api, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(value),
        });      
        if (result) {
          dispatch({
            type: REGISTER_LOADING_STATUS.REGISTER_FINISHED,
            result
          });
        } else {
          dispatch({
            type: REGISTER_LOADING_STATUS.REGISTER_FAILED
          });
        }
      } catch(e) {
        console.log(e);
      }     
    };
  }

 