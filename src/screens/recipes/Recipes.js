import { Alert } from 'react-native';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { CenteredActivityIndicator } from '../../components/CenteredActivityIndicator';
import { RecipeCards } from './components/RecipeCards';
import { SearchBarCustom } from '../../components/SearchBar';
import { useSelector, useDispatch } from "react-redux";
import { setRecipes } from '../../../redux/recipesSlice';

export const Recipes = ({ navigation }) => {

    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true);
    const recipes = useSelector(state => state.allRecipes.recipes)

    const getRecipes = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get("https://6321d90d82f8687273baba5a.mockapi.io/enjoy/recipes")
            const data = response.data
            dispatch(setRecipes(data))
            setIsLoading(false)
        } catch (error) {
            Alert.alert(error.message)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getRecipes()
    }, [])

    return (
        <>
            {isLoading && <CenteredActivityIndicator />}

            {!isLoading && <>
                <SearchBarCustom />

                <RecipeCards navigation={navigation} recipes={recipes} />
            </>
            }
        </>
    )
}


