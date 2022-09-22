import { SearchBar } from "@rneui/themed"
import { useState } from "react";
import { StyleSheet, View } from "react-native"


export const SearchBarCustom = () => {

    const [searchBarValue, setSearchBarValue] = useState();


  return (
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
        marginBottom: 30,
        backgroundColor: "auto",
        borderBottomWidth: 0,
        borderTopWidth: 0,
    },
    searchBarInputContainer: {
        backgroundColor: "white",
        borderRadius: 100,
        width: "90%",
        height: 40
    }
})