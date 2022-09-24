import axios from 'axios';
import { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setFavouriteRecipes } from '../../../redux/recipesSlice';
import { CenteredActivityIndicator } from '../../components/CenteredActivityIndicator';
import { SearchBarCustom } from '../../components/SearchBar'
import { FavouriteRecipesCards } from './components/FavouriteRecipesCards';

export const Favourites = ({ navigation }) => {

    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true);
    const favouriteRecipes = useSelector(state => state.allRecipes.favouriteRecipes)

    const getFavouritesRecipes = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get("https://6321d90d82f8687273baba5a.mockapi.io/enjoy/recipes")
            const data = response.data
            dispatch(setFavouriteRecipes(data))
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

                <FavouriteRecipesCards
                    navigation={navigation}
                    favouriteRecipes={favouriteRecipes} />
            </>
            }

        </>
    )
}


