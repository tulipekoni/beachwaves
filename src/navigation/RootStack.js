import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Home } from "../screens/Home";
import { Playing } from "../screens/Playing";
import { Search } from "../screens/Search";
const Stack = createSharedElementStackNavigator();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='home'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name='home'
          component={Home}
          sharedElements={() => {
            return ["shared"];
          }}
        />
        <Stack.Screen name='playing' component={Playing} />
        <Stack.Screen
          name='search'
          sharedElements={() => {
            return ["shared"];
          }}
          component={Search}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
