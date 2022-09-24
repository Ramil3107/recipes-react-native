import { useEffect, useState } from 'react';
import { CenteredActivityIndicator } from '../../components/CenteredActivityIndicator';
import { RecipeCards } from './components/RecipeCards';
import { SearchBarCustom } from '../../components/SearchBar';
import { useSelector, useDispatch } from "react-redux";
import { getFilteredRecipesThunk, getRecipesThunk } from '../../../redux/recipesSlice';

export const Recipes = ({ navigation }) => {

    const dispatch = useDispatch()
    const { recipes, isRecipesLoading } = useSelector(state => state.allRecipes)
    const [searchingRecipe, setSearchingRecipe] = useState()

    useEffect(() => {
        dispatch(getRecipesThunk())
    }, [])

    const onSearchingRecipe = (searchingRecipe) => {
        setSearchingRecipe(searchingRecipe)
        dispatch(getFilteredRecipesThunk(searchingRecipe))
    }

    return (
        <>
            {isRecipesLoading && <CenteredActivityIndicator />}

            {!isRecipesLoading &&
                <>
                    <SearchBarCustom
                        value={searchingRecipe}
                        onChangeText={onSearchingRecipe}
                    />

                    <RecipeCards
                        navigation={navigation}
                        recipes={recipes}
                    />
                </>
            }
        </>
    )
}


