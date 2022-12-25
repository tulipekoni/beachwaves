import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../screens/Home";
import { Playing } from "../screens/Playing";
import { Search } from "../screens/Search";
import { Liked } from "../screens/Liked";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='home'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen
          name='playing'
          component={Playing}
          sharedElements={(navigation, otherNavigation, showing) => {
            const track = navigation.getParam("track");
            return [track.title];
          }}
        />
        <Stack.Screen
          name='search'
          sharedElements={() => {
            return ["shared"];
          }}
          component={Search}
        />
        <Stack.Screen name='liked' component={Liked} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
