import { FetchData } from "../../../../FetchData/FetchData";

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
      const data = await FetchData();      
        if (data) {
          dispatch({
            type: INGREDIENTS_LOADING_STATUS.INGREDIENTS_FINISHED,
            ingredients: data
          });
        } else {
          dispatch({
            type: INGREDIENTS_LOADING_STATUS.INGREDIENTS_FAILED
          });
        }
     
    };
  }

 