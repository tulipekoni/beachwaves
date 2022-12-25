import React from "react";
import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import colors from "../constraints/colors";
import SvgSearch from "../icons/Svg.Search";
import ScreenArea from "../components/ScreenArea";
import { BoxButton } from "../components/BoxButton";
import { PlayingCard } from "../components/PlayingCard";
import { TrackCarousel } from "../components/TrackCarousel";
import { Heading, SubHeading, Title } from "../constraints/typography";

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
        <BoxButton onPress={() => navigation.navigate("liked")}>
          <SvgHeart size={20} />
        </BoxButton>
      </View>
      <View style={{ marginLeft: 30, marginRight: 75 }}>
        <Heading>Enjoy relaxing and calming beachWaves</Heading>
      </View>
      <View style={{ marginTop: 30, marginHorizontal: 30 }}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("search")}
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
        </TouchableWithoutFeedback>
      </View>
      <SubHeading style={{ margin: 20 }}>Popular tracks right now</SubHeading>
      <View style={{ flex: 1 }}>
        <TrackCarousel />
      </View>
      <SubHeading style={{ margin: 20 }}>Playing</SubHeading>
      <View style={{ margin: 30, marginTop: 0 }}>
        <PlayingCard />
      </View>
    </ScreenArea>
  );
};
