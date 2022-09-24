import { Alert } from 'react-native';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { CenteredActivityIndicator } from '../../components/CenteredActivityIndicator';
import { RecipeCards } from './components/RecipeCards';
import { SearchBarCustom } from '../../components/SearchBar';
import { useSelector, useDispatch } from "react-redux";
import { getRecipesThunk, setRecipes } from '../../../redux/recipesSlice';

export const Recipes = ({ navigation }) => {

    const dispatch = useDispatch()
    const { recipes, isRecipesLoading } = useSelector(state => state.allRecipes)

    useEffect(() => {
        dispatch(getRecipesThunk())
    }, [])

    return (
        <>
            {isRecipesLoading && <CenteredActivityIndicator />}

            {!isRecipesLoading && <>
                <SearchBarCustom />

                <RecipeCards navigation={navigation} recipes={recipes} />
            </>
            }
        </>
    )
}


