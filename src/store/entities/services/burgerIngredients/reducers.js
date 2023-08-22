import { CURRENT_INGREDIENTS } from "./actions";



const initialState = {        
    currentIngredientIDs: '',        
  };

export const currentIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
      
    case CURRENT_INGREDIENTS.PUT_CURRENT_INGREDIENTS: {
      return {
        ...state,
        currentIngredientIDs: action.payload
      };
    }

    case CURRENT_INGREDIENTS.DELETE_CURRENT_INGREDIENTS: {
      return {
        ...state,
        currentIngredientIDs: ''
      };
    }
          
    default:
      return state
  }
} 