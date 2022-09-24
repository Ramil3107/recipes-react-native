import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./recipesSlice";


export const store = configureStore({
    reducer: {
        allRecipes: recipesSlice
    }
})