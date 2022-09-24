import { useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';



export const RecipeCards = ({ recipes, navigation }) => {

    const [isFavouriteIconSelected, setIsFavouriteIconSelected] = useState(false);

    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={recipes}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => navigation.navigate("RecipeInfo", {
                            image: item.image,
                            ingredients: item.ingredients,
                            coockingTime: item.coockingTimeMin,
                            recipe: item.recipe,
                            dish: item.dish
                        })}
                        style={styles.recipeCardWrapper}>
                        <View>
                            <Image
                                PlaceholderContent={<ActivityIndicator />}
                                borderRadius={15}
                                style={styles.recipeCardImage}
                                source={{ uri: item.image }}
                            />
                            <Icon
                                onPress={() => console.log("Selected")}
                                style={styles.recipeCardIcon}
                                name={
                                    isFavouriteIconSelected
                                        ? 'md-heart-sharp'
                                        : "md-heart-outline"
                                }
                                size={40}
                                color="white"
                            />
                            <Text
                                style={styles.recipeCardText}>
                                {item.dish}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
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
    },
    recipeCardIcon: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 10,
        position: "absolute",
        left: "80%",
        top: "5%"
    },
    recipeCardText: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 10,
        color: "white",
        fontWeight: "600",
        fontSize: 30,
        position: "absolute",
        top: "80%",
        marginHorizontal: 15,
    }
})