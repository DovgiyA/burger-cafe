
export const DRAG_INGREDIENT = {
   DRAG_INGREDIENT_IN_CONSTRUCTOR: 'dndReducer/DRAG_INGREDIENT_IN_CONSTRUCTOR',
   DELETE_INGREDIENT_IN_CONSTRUCTOR: 'dndReducer/DELETE_INGREDIENT_IN_CONSTRUCTOR',
   DRAG_BUN_IN_CONSTRUCTOR: 'dndReducer/DRAG_BUN_IN_CONSTRUCTOR',
   SORT_IN_CONSTRUCTOR: 'dndReducer/SORT_IN_CONSTRUCTOR',
  };

  export const dragIngredient = (ingredient) => ({
    type: DRAG_INGREDIENT.DRAG_INGREDIENT_IN_CONSTRUCTOR,
    payload: ingredient
  });

  export const dragBun = (ingredient) => ({
    type: DRAG_INGREDIENT.DRAG_BUN_IN_CONSTRUCTOR,
    payload: ingredient
  });

  export const deleteBun = (ingredient) => ({
    type: DRAG_INGREDIENT.DELETE_INGREDIENT_IN_CONSTRUCTOR,
    payload: ingredient
  });

  export const sortIngredient = (ingredient) => ({
    type: DRAG_INGREDIENT.SORT_IN_CONSTRUCTOR,
    payload: ingredient
  });