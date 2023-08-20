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
        const data = await sendData(order);      
          if (data) {
            dispatch({
              type:  ORDER_LOADING_STATUS.ORDER_FINISHED,
              order: data
            });
          } else {
            dispatch({
              type: ORDER_LOADING_STATUS.ORDER_FAILED
            });
          }
      }     
    };
  }