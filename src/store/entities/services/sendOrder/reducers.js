import { ORDER_LOADING_STATUS } from "./actions";

const initialState = {         
        orderID: {},
        oredersRequest: false,
        ordersFailed: false,
    };

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {   

    case ORDER_LOADING_STATUS.GET_ORDER_REQUEST: {
      return {
        ...state,
        oredersRequest: true
      };
    }
    case ORDER_LOADING_STATUS.ORDER_FINISHED: {
      console.log(action.order)
      return { ...state, orderID: action.order,        
       ordersFailed: false,
       oredersRequest: false
      };
    }
    case ORDER_LOADING_STATUS.ORDER_FAILED: {
      return { ...initialState, ordersFailed: true, oredersRequest: false };
    }
       
    default:
      return state
  }
} 