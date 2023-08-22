import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { ingredientsReducer } from "./entities/services/ingredients/reducers";
import { currentIngredientsReducer } from "./entities/services/burgerIngredients/reducers";
import { dndReducer } from "./entities/services/burgerConstructor/reducers";
import { orderReducer } from "./entities/services/sendOrder/reducers";

const rootReducer = combineReducers({
    ingredientsReducer: ingredientsReducer,
    currentIngredientsReducer: currentIngredientsReducer,
    dnd: dndReducer,
    order: orderReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([])
});

