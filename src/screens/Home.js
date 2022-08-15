import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { BoxButton } from "../components/BoxButton";
import Donut from "../components/Donut";
import ScreenArea from "../components/ScreenArea";
import colors from "../constraints/colors";
import {
  Heading,
  SubHeading,
  Subtitle,
  Title,
} from "../constraints/typography";
import SvgMenu from "../icons/Svg.Menu";
import SvgSearch from "../icons/Svg.Search";

import mostPlayed from "../mockdata/mostPlayed.json";
import { useNavigation } from "@react-navigation/native";
import { PlayingCard } from "../components/PlayingCard";

export const Home = ({ navigation }) => {
  return (
    <ScreenArea style={{ paddingTop: 30 }}>
      <View
        style={{
          marginHorizontal: 30,
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <BoxButton>
          <SvgMenu />
        </BoxButton>
      </View>
      <View style={{ marginLeft: 30, marginRight: 75 }}>
        <Heading>Enjoy relaxing and calming beachWaves</Heading>
      </View>
      <View style={{ marginTop: 30, marginHorizontal: 30 }}>
        <View
          style={{
            backgroundColor: colors.primary,
            width: "100%",
            paddingTop: 24,
            paddingBottom: 21,
            paddingHorizontal: 20,
            borderRadius: 15,
            flexDirection: "row",
            shadowOffset: {
              width: 0,
              height: 16,
            },
            shadowRadius: 40,
            shadowColor: "rgba(202, 202, 224, 0.3)",
            shadowOpacity: 1,
          }}
        >
          <SvgSearch />
          <Title style={{ marginLeft: 10 }}>Search place</Title>
        </View>
      </View>
      <SubHeading style={{ margin: 30 }}>Popular tracks right now</SubHeading>
      <View style={{ backgroundColor: colors.white00, flex: 1 }}></View>
      <SubHeading style={{ margin: 30 }}>Playing</SubHeading>
      <View style={{ margin: 30, marginTop: 0 }}><PlayingCard/></View>
    </ScreenArea>
  );
};
