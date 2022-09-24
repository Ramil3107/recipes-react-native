import axios from 'axios';
import { useEffect, useState } from 'react';
import { Alert, FlatList, RefreshControl, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getFavouriteRecipesThunk, setFavouriteRecipes } from '../../../redux/recipesSlice';
import { CenteredActivityIndicator } from '../../components/CenteredActivityIndicator';
import { SearchBarCustom } from '../../components/SearchBar'
import { FavouriteRecipesCards } from './components/FavouriteRecipesCards';

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

            {!isFavouriteRecipeLoading && <>

                <SearchBarCustom />

                <FavouriteRecipesCards
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    navigation={navigation}
                    favouriteRecipes={favouriteRecipes} />
            </>
            }

        </>
    )
}


