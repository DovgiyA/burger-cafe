import { LOADING } from "../../../../constants/constants";
import { request } from "../../../../utils/request";

export const INGREDIENTS_LOADING_STATUS = {
    GET_INGREDIENTS_REQUEST: "GET_INGREDIENTS_REQUEST", 
    INGREDIENTS_FINISHED: "INGREDIENTS_FINISHED",
    INGREDIENTS_FAILED: "INGREDIENTS_FAILED"   
  };


  export function getIngredients() {
   
    return async function(dispatch) {

      dispatch({
        type: INGREDIENTS_LOADING_STATUS.GET_INGREDIENTS_REQUEST
      });
      try {
        const result = await request(LOADING);      
        if (result) {
          dispatch({
            type: INGREDIENTS_LOADING_STATUS.INGREDIENTS_FINISHED,
            ingredients: result.data
          });
        } else {
          dispatch({
            type: INGREDIENTS_LOADING_STATUS.INGREDIENTS_FAILED
          });
        }
      } catch(e) {
        console.log(e);
      }     
    };
  }

 