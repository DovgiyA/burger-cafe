import { SET_USER, IS_CHECKED } from "./actions";

const initialState = {
  user: null,
  isChecked: false 
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
          
    default:
      return state
  }
} 