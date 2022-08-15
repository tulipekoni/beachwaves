import React, { useContext } from "react";
import { Image, Text, View } from "react-native";
import { BoxButton } from "../components/BoxButton";
import ScreenArea from "../components/ScreenArea";
import { Slider } from "../components/Slider";
import { SubHeading, Subtitle, Title } from "../constraints/typography";
import SvgBack from "../icons/Svg.Back";
import SvgBackward from "../icons/Svg.Backward";
import SvgForward from "../icons/Svg.Forward";
import SvgMenu from "../icons/Svg.Menu";
import SvgPlay from "../icons/Svg.Play";
import { AppContext } from "../context/AppState";
import { images } from "../constraints";
import { colors, func } from "../constraints";

export const Playing = ({ navigation }) => {
  const { currentSong } = useContext(AppContext);
  const timeElapsed = func.formatTime(currentSong.current);
  const timeLeft = func.formatTime(currentSong.length - currentSong.current);
  return (
    <ScreenArea style={{ paddingTop: 30 }}>
      <View
        style={{
          marginHorizontal: 30,
          marginBottom: 30,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <BoxButton onPress={() => navigation.navigate("home")}>
          <SvgBack />
        </BoxButton>
        <View style={{ opacity: 0.5 }}>
          <SubHeading>Now playing</SubHeading>
        </View>
        <BoxButton>
          <SvgMenu />
        </BoxButton>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white00,
          marginHorizontal: 21,
          borderRadius: 55,
          padding: 12,
          background: "rgba(255, 255, 255, 0.5)",
          boxShadow: "0px 16px 40px rgba(202, 202, 224, 0.3)",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%", borderRadius: 55 }}
          source={images[currentSong.image]}
        />
      </View>
      <View
        style={{ alignItems: "center", marginTop: 30, marginHorizontal: 44 }}
      >
        <Title color={colors.black}>{currentSong.title}</Title>
        <Subtitle>{currentSong.place}</Subtitle>
        <View style={{ height: 21 }} />
        <Slider
          timeElapsed={timeElapsed}
          timeLeft={timeLeft}
          current={currentSong.current}
          max={currentSong.length}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          marginVertical: 20,
          flexDirection: "row",
          marginHorizontal: 76,
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: colors.white00,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 3,
          }}
        >
          <SvgBackward />
        </View>
        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: colors.primary,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 3,
          }}
        >
          <SvgPlay fill={colors.white10} size={50} />
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: colors.white00,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 3,
          }}
        >
          <SvgForward />
        </View>
      </View>
    </ScreenArea>
  );
};
