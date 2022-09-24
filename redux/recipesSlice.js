import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { recipesAPI } from "../api/api";


export const getRecipesThunk = createAsyncThunk(
    "allRecipes/getRecipesThunk",
    async (_, { dispatch }) => {
        try {
            dispatch(setIsRecipesLoading(true))
            const recipes = await recipesAPI.getRecipes()
            dispatch(setRecipes(recipes))
            dispatch(setIsRecipesLoading(false))

        } catch (error) {
            Alert.alert(error.message)
            dispatch(setIsRecipesLoading(false))
        }
    }
)

export const getFavouriteRecipesThunk = createAsyncThunk(
    "allRecipes/getFavouriteRecipesThunk",
    async (_, { dispatch }) => {
        try {
            dispatch(setIsFavouriteRecipesLoading(true))
            const favouriteRecipes = await recipesAPI.getFavouriteRecipes()
            dispatch(setFavouriteRecipes(favouriteRecipes))
            dispatch(setIsFavouriteRecipesLoading(false))

        } catch (error) {
            Alert.alert(error.message)
            dispatch(setIsFavouriteRecipesLoading(false))
        }
    }
)

const initialState = {
    recipes: null,
    favouriteRecipes: null,
    isRecipesLoading: true,
    isFavouriteRecipeLoading: true
}

const recipesSlice = createSlice({
    name: "allRecipes",
    initialState,
    reducers: {
        setRecipes: (state, action) => {
            state.recipes = action.payload
        },
        setFavouriteRecipes: (state, action) => {
            state.favouriteRecipes = action.payload
        },
        setIsRecipesLoading: (state, action) => {
            state.isRecipesLoading = action.payload
        },
        setIsFavouriteRecipesLoading: (state, action) => {
            state.isFavouriteRecipeLoading = action.payload
        },
    }
})


export const { setRecipes, setFavouriteRecipes, setIsRecipesLoading, setIsFavouriteRecipesLoading } = recipesSlice.actions
export default recipesSlice.reducer