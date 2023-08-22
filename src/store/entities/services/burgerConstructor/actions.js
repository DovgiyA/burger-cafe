import { v4 as uuidv4 } from 'uuid';

export const DRAG_INGREDIENT = {
   DRAG_INGREDIENT_IN_CONSTRUCTOR: 'dndReducer/DRAG_INGREDIENT_IN_CONSTRUCTOR',
   DELETE_INGREDIENT_IN_CONSTRUCTOR: 'dndReducer/DELETE_INGREDIENT_IN_CONSTRUCTOR',
   DRAG_BUN_IN_CONSTRUCTOR: 'dndReducer/DRAG_BUN_IN_CONSTRUCTOR',
   SORT_IN_CONSTRUCTOR: 'dndReducer/SORT_IN_CONSTRUCTOR',
   RESET_IN_CONSTRUCTOR: 'dndReducer/RESET_IN_CONSTRUCTOR',
  };

  export const dragIngredient = (ingredient) => ({
    type: DRAG_INGREDIENT.DRAG_INGREDIENT_IN_CONSTRUCTOR,
    payload: {ingredient,
    item: uuidv4()
  }
  });

  export const dragBun = (ingredient) => ({
    type: DRAG_INGREDIENT.DRAG_BUN_IN_CONSTRUCTOR,
    payload: ingredient
  });

  export const deleteBun = (ingredient) => ({
    type: DRAG_INGREDIENT.DELETE_INGREDIENT_IN_CONSTRUCTOR,
    payload: ingredient
  });

  export const sortIngredient = (ingredientArr) => ({    
    type: DRAG_INGREDIENT.SORT_IN_CONSTRUCTOR,
    payload: ingredientArr
  });

  export const resetIngredient = () => ({
    type: DRAG_INGREDIENT.RESET_IN_CONSTRUCTOR,    
  });