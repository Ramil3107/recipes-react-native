import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { CenteredActivityIndicator } from '../../components/CenteredActivityIndicator';
import { Image, SearchBar } from "@rneui/themed";

export const Recipes = () => {

    const [recipes, setRecipes] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [searchBarValue, setSearchBarValue] = useState();

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
                <View style={styles.searchBarWrapper}>
                    <SearchBar
                        placeholder='Search recipes...'
                        value={searchBarValue}
                        onChangeText={setSearchBarValue}
                        containerStyle={styles.searchBarContainer}
                        inputContainerStyle={styles.searchBarInputContainer}
                        inputStyle={styles.searchBarInput}
                    />
                </View>

                <FlatList
                    horizontal
                    data={recipes}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.recipeCardWrapper}>
                                <Image
                                    PlaceholderContent={<ActivityIndicator />}
                                    borderRadius={15}
                                    style={styles.recipeCardImage}
                                    source={{ uri: item.image }}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />

            </>
            }

        </>
    )
}


const styles = StyleSheet.create({
    searchBarWrapper: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 5,
        alignItems: "center"
    },
    searchBarContainer: {
        marginVertical: 10,
        marginBottom: 20,
        backgroundColor: "auto",
        borderBottomWidth: 0,
        borderTopWidth: 0,
    },
    searchBarInputContainer: {
        backgroundColor: "white",
        borderRadius: 100,
        width: "90%",
        height: 40
    },
    recipeCardWrapper: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
        alignItems: "center",
        marginHorizontal: 10,
        marginLeft: 20
    },
    recipeCardImage: {
        height: 500,
        width: 320,
    }
})