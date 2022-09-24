import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipes: null,
    favouriteRecipes: null,
}

const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        setRecipes: (state, action) => {
            state.recipes = action.payload
        },
        setFavouriteRecipes: (state, action) => {
            state.favouriteRecipes = action.payload
        }
    }
})


export const { setRecipes, setFavouriteRecipes } = recipesSlice.actions
export default recipesSlice.reducer