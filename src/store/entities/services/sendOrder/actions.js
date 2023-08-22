import { sendData } from "../../../../sendData/sendData";


  export const ORDER_LOADING_STATUS = {
    GET_ORDER_REQUEST: "GET_ORDER_REQUEST", 
    ORDER_FINISHED: "ORDER_FINISHED",
    ORDER_FAILED: "ORDER_FAILED"   
  };

  export function sendOrder(order) {
   
    return async function(dispatch) {
      if (order.length > 1) {
        dispatch({
          type: ORDER_LOADING_STATUS.GET_ORDER_REQUEST
        });
        try {
          const result = await sendData(order);     
          if (result) {
            dispatch({
              type:  ORDER_LOADING_STATUS.ORDER_FINISHED,
              order: result
            });
          } else {
            dispatch({
              type: ORDER_LOADING_STATUS.ORDER_FAILED
            });
          }
        } catch (e) {
          console.log(e);
        }       
      }     
    };
  }