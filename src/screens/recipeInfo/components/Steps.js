import { FlatList, StyleSheet, Text, View } from "react-native"

export const Steps = ({ recipe }) => {
    return (
        <>
            <View style={styles.titleWrapper}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Recipe
                    </Text>
                </View>
            </View>


            <FlatList
                scrollEnabled={false}
                data={recipe}
                keyExtractor={item => item.stepNumber}
                renderItem={({ item }) => {
                    return (
                        <>
                            <View style={styles.stepNumberContainer}>
                                <Text style={styles.stepNumber}>
                                    {item.stepNumber}
                                </Text>
                                <View style={styles.stepSeparateLine}></View>
                            </View>

                            <View style={styles.stepInfoContainer}>
                                <Text style={styles.stepInfo}>
                                    {item.stepInfo}
                                </Text>
                            </View>
                        </>
                    )
                }}
            />

        </>
    )
}


const styles = StyleSheet.create({
    titleWrapper: {
        alignItems: "center",
        marginVertical: 20
    },
    titleContainer: {
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: "90%"
    },
    title: {
        fontWeight: "500",
        fontSize: 20
    },
    stepNumberContainer: {
        marginLeft: 15
    },
    stepNumber: {
        fontSize: 18,
        fontWeight: "700",
        color: "grey"
    },
    stepSeparateLine: {
        borderBottomWidth: 0.3,
        marginVertical: 10,
        width: 250
    },
    stepInfoContainer: {
        marginHorizontal: 15,
        marginVertical: 15
    },
    stepInfo:
    {
        fontSize: 18,
        color: "#181818"
    }
})