import { useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import { Image, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from "react-redux";
import { getFavouriteRecipesThunk } from "../../../../redux/recipesSlice";


export const FavouriteRecipesCards = ({ favouriteRecipes, navigation, onRefresh, refreshing }) => {
    return (
        <FlatList
            refreshing={refreshing}
            onRefresh={onRefresh}
            data={favouriteRecipes}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("RecipeInfo", {
                            image: item.image,
                            ingredients: item.ingredients,
                            coockingTime: item.coockingTimeMin,
                            recipe: item.recipe,
                            dish: item.dish
                        })}
                        activeOpacity={0.8}
                        style={styles.recipeCardWrapper}>
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
                                item.favourite
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
                    </TouchableOpacity>
                )
            }}
        />
    )
}


const styles = StyleSheet.create({
    recipeCardWrapper: {
        alignItems: "center",
        marginBottom: 30
    },
    recipeCardImage: {
        height: 300,
        width: "90%",
    },
    recipeCardIcon: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 10,
        position: "absolute",
        left: "77%",
        top: "8%"
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
        top: "65%",
        marginHorizontal: 15,
    }
})