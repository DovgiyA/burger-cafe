import { EMAIL_LOADING_STATUS } from "./actions";

const initialState = {  
    success: true,    
    message: ""     
  };

export const emailReducer = (state = initialState, action) => {
  switch (action.type) {   

    case EMAIL_LOADING_STATUS.EMAIL_REQUEST: {
      return {
        ...state,        
      };
    }
    case EMAIL_LOADING_STATUS.EMAIL_FINISHED: {
      return { ...state,
        success: true,
        message: action.message
      };
    }
    case EMAIL_LOADING_STATUS.EMAIL_FAILED: {
      return { ...initialState,  success: false, };
    }
       
    default:
      return state
  }
} 