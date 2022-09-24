import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getFavouriteRecipesThunk } from '../../../redux/recipesSlice';
import { CenteredActivityIndicator } from '../../components/CenteredActivityIndicator';
import { SearchBarCustom } from '../../components/SearchBar'
import { FavouriteRecipesCards } from './components/FavouriteRecipesCards';
import { FavouritesEmtyState } from './components/FavouritesEmtyState';


export const Favourites = ({ navigation }) => {

    const dispatch = useDispatch()
    const { favouriteRecipes, isFavouriteRecipeLoading } = useSelector(state => state.allRecipes)
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        dispatch(getFavouriteRecipesThunk())
    }, [])

    const onRefresh = () => {
        setRefreshing(true)
        dispatch(getFavouriteRecipesThunk())
        setRefreshing(false)
    }

    return (
        <>
            {isFavouriteRecipeLoading && <CenteredActivityIndicator />}

            {!isFavouriteRecipeLoading && favouriteRecipes.length > 0 && <>

                <SearchBarCustom />

                <FavouriteRecipesCards
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    navigation={navigation}
                    favouriteRecipes={favouriteRecipes} />
            </>
            }

            {!isFavouriteRecipeLoading && favouriteRecipes.length === 0 && <>
                <FavouritesEmtyState navigation={navigation} />
            </>
            }

        </>
    )
}


