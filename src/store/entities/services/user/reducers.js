import { SET_USER, IS_CHECKED, IS_SUCCESS } from "./actions";

const initialState = {
  user: null,
  isChecked: false,
  success: false 
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {   

    case SET_USER: {
      return {
        ...state,
        user: action.payload        
      };
    }
    case IS_CHECKED: {
      return { 
        ...state,       
        isChecked: true
      };
    }

    case IS_SUCCESS: {
      return { 
        ...state,       
        success: action.payload
      };
    }
          
    default:
      return state
  }
} 