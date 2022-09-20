import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { CenteredActivityIndicator } from '../../components/CenteredActivityIndicator';

export const Recipes = () => {

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
                <View style={styles.inputContainer}>
                    <TextInput style={styles.searchInput} />
                </View>

                {/* ADD IMAGES TO BACK */}

                <FlatList
                    data={recipes} 
                    renderItem={({item}) => {
                        return <TouchableOpacity>
                            <View>
                                <Text>{item.dish}</Text>
                            </View>
                        </TouchableOpacity>
                    }}
                    keyExtractor={item => item.id}
                    />
            </>
            }

        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        alignItems: "center",
        marginVertical: 15
    },
    searchInput: {
        borderColor: "black",
        borderWidth: 1,
        width: "70%",
        borderRadius: 7,
        height: 25
    }
})