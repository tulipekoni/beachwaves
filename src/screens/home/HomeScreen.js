import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenArea from "../../components/ScreenArea";
import { PopularList } from "./components/PopularList";
import {
  NavBarContainer,
  PopularContainer,
  RecentlyPlayedContainer,
  SearchContainer,
} from "./components/Styles";

export default function HomeScreen() {
  return (
    <ScreenArea
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <NavBarContainer></NavBarContainer>
      <SearchContainer></SearchContainer>
      <PopularContainer>
        <PopularList />
      </PopularContainer>
      <RecentlyPlayedContainer></RecentlyPlayedContainer>
    </ScreenArea>
  );
}
