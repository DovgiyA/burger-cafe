import { INGREDIENTS_LOADING_STATUS } from "./actions";


const initialState = {
        ingredients: {},
        ingredientsIDs: [],
        ingredientsRequest: false,
        ingredientsFailed: false, 
      
    };

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
      
    case INGREDIENTS_LOADING_STATUS.GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true
      };
    }
    case INGREDIENTS_LOADING_STATUS.INGREDIENTS_FINISHED: {
      return { ...state, ingredients: action.ingredients.reduce((acc, ingredient) => {       
        acc[ingredient._id] = ingredient;
        return acc;
      }, {}), ingredientsIDs: action.ingredients.map(({ _id }) => _id), ingredientsFailed: false, ingredientsRequest: false };
    }
    case INGREDIENTS_LOADING_STATUS.INGREDIENTS_FAILED: {
      return { ...initialState, ingredientsFailed: true, ingredientsRequest: false };
    }   
       
    default:
      return state
  }
} 