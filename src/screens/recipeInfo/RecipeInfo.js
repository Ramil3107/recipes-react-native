import React, { useEffect, useState } from 'react'
import { Button, FlatList, Image, LogBox, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ingredients } from './components/Ingredients'
import { Servings } from './components/Servings'
import { Steps } from './components/Steps'

export const RecipeInfo = ({ route, navigation }) => {


    const truncateDishName = (dishName) => {
        if (dishName.length > 20) {
            return dishName.slice(0, 20) + "..."
        } else {
            return dishName
        }
    }
    const { image, ingredients, coockingTime, recipe, dish } = route.params
    navigation.setOptions({ title: truncateDishName(dish) })

    return (
        <ScrollView nestedScrollEnabled={true}>
            <Image style={styles.cardImage} source={{ uri: image }} />

            <Ingredients ingredients={ingredients} />

            <Servings time={coockingTime} />

            <Steps recipe={recipe} />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    cardImage: {
        width: "100%",
        height: 250
    }
})
