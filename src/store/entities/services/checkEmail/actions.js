import { request } from "../../../../utils/request";

export const EMAIL_LOADING_STATUS = {
    EMAIL_REQUEST: "EMAIL_REQUEST", 
    EMAIL_FINISHED: "EMAIL_FINISHED",
    EMAIL_FAILED: "EMAIL_FAILED"   
  };


  export function checkEmail(api, value) {
   
    return async function(dispatch) {

      dispatch({
        type: EMAIL_LOADING_STATUS.EMAIL_REQUEST,
      });
      try {
        const result = await request(api, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(value),
        });      
        if (result) {
          dispatch({
            type: EMAIL_LOADING_STATUS.EMAIL_FINISHED,
            message: result.message
          });
        } else {
          dispatch({
            type: EMAIL_LOADING_STATUS.EMAIL_FAILED
          });
        }
      } catch(e) {
        console.log(e);
      }     
    };
  }

 