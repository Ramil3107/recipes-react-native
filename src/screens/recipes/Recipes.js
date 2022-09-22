import { Alert, FlatList, StyleSheet, View } from 'react-native';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { CenteredActivityIndicator } from '../../components/CenteredActivityIndicator';
import { SearchBar } from "@rneui/themed";
import { RecipeCard } from './components/RecipeCard';
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
            Alert.alert(error)
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

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={recipes}
                    renderItem={({ item }) => {
                        return (
                            <RecipeCard item={item} navigation={navigation} />
                        )
                    }}
                />
            </>
            }
        </>
    )
}


