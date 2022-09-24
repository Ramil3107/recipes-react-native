import axios from 'axios';
import { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { CenteredActivityIndicator } from '../../components/CenteredActivityIndicator';
import { SearchBarCustom } from '../../components/SearchBar'
import { FavouriteRecipeCard } from './components/FavouriteRecipeCard';

export const Favourites = () => {


    const [isLoading, setIsLoading] = useState(true);
    const [favouriteRecipes, setFavouriteRecipes] = useState(true);

    const getFavouritesRecipes = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get("https://6321d90d82f8687273baba5a.mockapi.io/enjoy/recipes")
            const data = response.data
            setFavouriteRecipes(data)
            setIsLoading(false)
        } catch (error) {
            Alert.alert(error.message)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getFavouritesRecipes()
    }, [])


    return (
        <>

            {isLoading && <CenteredActivityIndicator />}

            {!isLoading && <>
                <SearchBarCustom />

                <FavouriteRecipeCard favouriteRecipes={favouriteRecipes} />
            </>
            }

        </>
    )
}


