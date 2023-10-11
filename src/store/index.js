import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { ingredientsReducer } from "./entities/services/ingredients/reducers";
import { currentIngredientsReducer } from "./entities/services/burgerIngredients/reducers";
import { dndReducer } from "./entities/services/burgerConstructor/reducers";
import { orderReducer } from "./entities/services/sendOrder/reducers";
import { emailReducer } from "./entities/services/checkEmail/reducers";
import { registerReducer } from "./entities/services/register/reducers";
import { userReducer } from "./entities/services/user/reducers";


const rootReducer = combineReducers({
    ingredientsReducer: ingredientsReducer,
    currentIngredientsReducer: currentIngredientsReducer,
    dnd: dndReducer,
    order: orderReducer,
    email: emailReducer,
    register: registerReducer,
    user: userReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([])
});

