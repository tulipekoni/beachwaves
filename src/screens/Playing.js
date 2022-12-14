import React, { useContext, useEffect, useRef } from "react";
import { Animated, Image, Text, View } from "react-native";
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
import SvgPause from "../icons/Svg.Pause";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import LottieView from "lottie-react-native";
import SvgHeart from "../icons/Svg.Heart";

export const Playing = ({ navigation }) => {
  const {
    currentTrack,
    playState,
    setPaused,
    paused,
    ManipulateLikedTracks,
    likedTracks,
  } = useContext(AppContext);
  const timeElapsed = func.formatTime(playState.current);
  const timeLeft = func.formatTime(playState.duration - playState.current);

  const heartProgress = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (likedTracks.includes(currentTrack.id)) {
      heartProgress.setValue(1);
      return;
    }
  }, []);
  function heartClicked() {
    ManipulateLikedTracks(currentTrack.id);
    if (likedTracks.includes(currentTrack.id)) {
      heartProgress.setValue(0);
      return;
    }
    Animated.timing(heartProgress, {
      toValue: 1,
      duration: 750,
      useNativeDriver: true,
    }).start();
  }
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
        <BoxButton onPress={() => navigation.goBack()}>
          <SvgBack />
        </BoxButton>
        <View style={{ opacity: 0.5 }}>
          <SubHeading>Now playing</SubHeading>
        </View>
        <BoxButton onPress={() => navigation.navigate("liked")}>
          <SvgHeart size={20} />
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
          source={images[currentTrack.image]}
        />
      </View>
      <View
        style={{
          position: "relative",
          marginTop: 30,
          marginHorizontal: 44,
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => heartClicked()}
          containerStyle={{
            width: 80,
            height: 80,
            right: -20,
            top: -25,
            position: "absolute",
            zIndex: 10,
          }}
          style={{ height: "100%" }}
        >
          <LottieView
            progress={heartProgress}
            source={require("../assets/heart_primary.json")}
          />
        </TouchableWithoutFeedback>
        <View style={{ alignItems: "center" }}>
          <Title color={colors.black}>{currentTrack.title}</Title>
          <Subtitle>{currentTrack.place}</Subtitle>
          <View style={{ height: 21 }} />
          <Slider
            timeElapsed={timeElapsed}
            timeLeft={timeLeft}
            current={playState.current}
            max={playState.duration}
          />
        </View>
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
        <TouchableWithoutFeedback
          onPress={() => setPaused(!paused)}
          style={{
            width: 60,
            height: 60,
            backgroundColor: colors.primary,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: paused ? 3 : 0,
          }}
        >
          {paused ? (
            <SvgPlay fill={colors.white10} size={50} />
          ) : (
            <SvgPause fill={colors.white10} size={50} />
          )}
        </TouchableWithoutFeedback>
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
