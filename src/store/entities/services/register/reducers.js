import { REGISTER_LOADING_STATUS } from "./actions";

const initialState = {
  success: true,
  user: {
    email: "",
    name: ""
  },
  accessToken: "Bearer ...",
  refreshToken: ""
} ;

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {   

    case REGISTER_LOADING_STATUS.REGISTER_REQUEST: {
      return {
        ...state,        
      };
    }
    case REGISTER_LOADING_STATUS.REGISTER_FINISHED: {
      return { ...state,       
        ...action.result
      };
    }
    case REGISTER_LOADING_STATUS.REGISTER_FAILED: {
      return { ...initialState,  success: false, };
    }
       
    default:
      return state
  }
} 