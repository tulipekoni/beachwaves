import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Playing } from "../screens/Playing";
import { Search } from "../screens/Search";
const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='search'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='playing' component={Playing} />
        <Stack.Screen name='search' component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
