import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Recipes } from "./src/screens/recipes/Recipes";

const Stack = createNativeStackNavigator();
export const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Recipes" component={Recipes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
