import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Favourites } from "./src/screens/favourites/Favourites";
import { RecipeInfo } from "./src/screens/recipeInfo/RecipeInfo";
import { Recipes } from "./src/screens/recipes/Recipes";
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const RecipesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Recipes" component={Recipes} />
      <Stack.Screen name="RecipeInfo" component={RecipeInfo} />
    </Stack.Navigator>
  )
}


const FavouritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favourites" component={Favourites} />
      <Stack.Screen name="RecipeInfo" component={RecipeInfo} />
    </Stack.Navigator>
  )
}

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Recipes') {
              iconName = focused
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'Favourites') {
              iconName = focused
                ? 'md-heart-sharp'
                : 'md-heart-outline';
            }
            return <Icon name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name="Recipes" component={RecipesStack} />
        <Tab.Screen name="Favourites" component={FavouritesStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
