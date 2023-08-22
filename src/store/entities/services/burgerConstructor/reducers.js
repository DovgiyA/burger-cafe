import { DRAG_INGREDIENT } from "./actions";


const initialState = {        
    ingredientsWithoutBuns: [],
    buns: ''        
  };

export const dndReducer = (state = initialState, action) => {
  switch (action.type) {
      
    case DRAG_INGREDIENT.DRAG_INGREDIENT_IN_CONSTRUCTOR: {
      return {
        ...state,
        ingredientsWithoutBuns: [...state.ingredientsWithoutBuns, action.payload]
      };
    }

    case DRAG_INGREDIENT.DRAG_BUN_IN_CONSTRUCTOR: {
        return {
          ...state,
          buns: action.payload
        };
      }

    case DRAG_INGREDIENT.DELETE_INGREDIENT_IN_CONSTRUCTOR: {
        return {
          ...state,
          ingredientsWithoutBuns: state.ingredientsWithoutBuns.filter((item, index) => state.ingredientsWithoutBuns.indexOf(action.payload) !== index)
        };
      }

      case DRAG_INGREDIENT.SORT_IN_CONSTRUCTOR: {
        return {
          ...state,
          ingredientsWithoutBuns: [...action.payload]            
        };
      }

      case DRAG_INGREDIENT.RESET_IN_CONSTRUCTOR: {
        return {
          ...initialState            
        };
      }
          
    default:
      return state
  }
} 