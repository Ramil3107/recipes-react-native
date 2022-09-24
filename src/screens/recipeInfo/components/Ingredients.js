import { FlatList, StyleSheet, Text, View } from "react-native"

export const Ingredients = ({ ingredients }) => {
    return (
        <View>
            <FlatList
                scrollEnabled={false}
                keyExtractor={item => item}
                contentContainerStyle={{ marginTop: 10 }}
                numColumns={4}
                data={ingredients}
                renderItem={({ item }) => {
                    return (
                        <>
                            <View style={styles.ingredientItem}>
                                <Text style={styles.ingredientItemText}>{item}</Text>
                            </View>
                        </>
                    )
                }}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    ingredientItem: {
        backgroundColor: "tomato",
        alignSelf: "flex-start",
        padding: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
        margin: 5,
        marginHorizontal: 7
    },
    ingredientItemText: {
        color: "white"
    }
})
