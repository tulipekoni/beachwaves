import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { DetailScreen } from "../../screens/detail/DetailScreen";
import HomeScreen from "../../screens/home/HomeScreen";
// const Stack = createSharedElementStackNavigator();
const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='detail' component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
