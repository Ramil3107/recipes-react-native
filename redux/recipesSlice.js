import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

export const getFilteredRecipesThunk = createAsyncThunk(
    "allRecipes/getRecipesThunk",
    async (text, { dispatch }) => {
        try {
            const recipes = await recipesAPI.getFilteredRecipes(text)
            dispatch(setRecipes(recipes))

        } catch (error) {
            Alert.alert(error.message)
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

export const toggleFavouriteThunk = createAsyncThunk(
    "allRecipes/toggleFavouriteThunk",
    async (id, { dispatch }) => {
        try {
            dispatch(toggleFavourite(id))
            const recipe = await recipesAPI.getRecipe(id)
            const favouriteStatus = recipe.favourite
            await recipesAPI.changeRecipeFavouriteStatus(id, favouriteStatus)
            const favouriteRecipes = await recipesAPI.getFavouriteRecipes()
            dispatch(setFavouriteRecipes(favouriteRecipes))
        } catch (error) {
            Alert.alert(error.message)
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
        toggleFavourite: (state, action) => {
            state.recipes = state.recipes.map(recipe => {
                if (recipe.id == action.payload) {
                    recipe.favourite = !recipe.favourite
                    return recipe
                } else {
                    return recipe
                }
            })
            state.favouriteRecipes = state.favouriteRecipes.map(recipe => {
                if (recipe.id == action.payload) {
                    recipe.favourite = !recipe.favourite
                    return recipe
                } else {
                    return recipe
                }
            })
        },
    }
})


export const { toggleFavourite, setRecipes, setFavouriteRecipes, setIsRecipesLoading, setIsFavouriteRecipesLoading } = recipesSlice.actions
export default recipesSlice.reducer