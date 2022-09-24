import { Alert } from 'react-native';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { CenteredActivityIndicator } from '../../components/CenteredActivityIndicator';
import { RecipeCards } from './components/RecipeCards';
import { SearchBarCustom } from '../../components/SearchBar';

export const Recipes = ({ navigation }) => {

    const [recipes, setRecipes] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getRecipes = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get("https://6321d90d82f8687273baba5a.mockapi.io/enjoy/recipes")
            const data = response.data
            setRecipes(data)
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


