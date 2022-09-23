import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const Servings = ({ time }) => {

    const [servings, setServings] = useState(1)
    const [coockingTime, setCoockingTime] = useState(time)


    const formatedTime = (timeInMinutes) => {
        let hours = Math.floor(timeInMinutes / 60)
        let minutes = timeInMinutes - (hours * 60)
        let time = `${hours} hr ${minutes} min`
        return time
    }

    const deacreseButtonHandler = () => {
        if (servings > 0) {
            setServings(prev => prev - 1)
            setCoockingTime(prev => prev - time)
        }
    }

    const increaseButtonHandler = () => {
        setServings(prev => prev + 1)
        setCoockingTime(prev => prev + time)
    }


    return (
        <View style={styles.wrapper}>
            <View style={styles.servingsWrapper}>
                <Text style={styles.title}>Servings</Text>
                <View style={styles.buttonsWrapper}>
                    <TouchableOpacity
                        onPress={deacreseButtonHandler}
                        style={{ ...styles.button, marginRight: 17 }}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text>{servings}</Text>
                    <TouchableOpacity
                        onPress={increaseButtonHandler}
                        style={{ ...styles.button, marginLeft: 17 }}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.coockingTimeWrapper}>
                <Text style={styles.coockingTimeTitle}>Coocking Time</Text>
                <Text>{formatedTime(coockingTime)}</Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop:10
    },
    servingsWrapper: {
        marginHorizontal: 15,
        marginVertical: 10
    },
    title: {
        fontWeight: "600",
        fontSize: 17,
        marginBottom: 6
    },
    buttonsWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#A8A8A8",
        borderRadius: 5,
        width: 25,
        height: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "white"
    },
    coockingTimeWrapper: {
        marginHorizontal: 25
    },
    coockingTimeTitle: {
        marginBottom: 13,
        fontWeight: "600",
        fontSize: 17,
    }

})