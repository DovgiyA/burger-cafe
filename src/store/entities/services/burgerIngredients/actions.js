
export const CURRENT_INGREDIENTS = {
    PUT_CURRENT_INGREDIENTS: 'currentIngredientsReducer/PUT_CURRENT_INGREDIENTS',
    DELETE_CURRENT_INGREDIENTS: 'currentIngredientsReducer/DELETE_CURRENT_INGREDIENTS'
  };

  export const putIngredient = (ingredient) => ({
    type: CURRENT_INGREDIENTS.PUT_CURRENT_INGREDIENTS,
    payload: ingredient
  })

  export const deleteIngredient = (ingredient) => ({
    type: CURRENT_INGREDIENTS.DELETE_CURRENT_INGREDIENTS,
  })

 