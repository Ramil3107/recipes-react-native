import { Button } from '@rneui/base'
import { Image, StyleSheet, Text, View } from 'react-native'


export const FavouritesEmtyState = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <Image
                style={styles.image}
                source={require('../assets/emty.png')} />

            <Text style={styles.text}>Your saved recipes will appear here</Text>

            <Button
                onPress={() => navigation.navigate("Recipes")}
                titleStyle={styles.buttonTextStyle}
                buttonStyle={styles.buttonStyle}
                title="Browse Recipes" />
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: "center",
        top: "15%"
    },
    image: {
        width: 250,
        height: 250
    },
    text: {
        marginTop: 10,
        fontSize: 18,
        textAlign: "center"
    },
    buttonStyle: {
        backgroundColor: "tomato",
        marginTop: 30,
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 15
    },
    buttonTextStyle: {
        fontSize: 18
    }
})


