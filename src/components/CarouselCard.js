import React, { useContext, useEffect, useRef } from "react";
import {
  Dimensions,
  Image,
  View,
  Animated as NativeAnimated,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";
import LottieView from "lottie-react-native";
import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { images } from "../constraints";
import { AppContext } from "../context/AppState";
import { Title, Subtitle } from "../constraints/typography";

const MIN_SCALE = 0.8;
export const CarouselCard = ({ item, index, cardSize, scrollX, playTrack }) => {
  //the items passed to this component from the flatlist have placeholders as the first and the last component,
  //if the item passed as a prop doesn't contain a title => render placeholder
  if (!item.title) {
    return (
      <View
        style={{
          width: (Dimensions.get("window").width - cardSize) / 2,
        }}
      />
    );
  }

  // -HEART- //
  //The card has a clickable heart where the user can like the track, notice that regular react-native Animation is used for the animation
  const { ManipulateLikedTracks, likedTracks } = useContext(AppContext);
  //the animationProgress of the lottieFile, 0 = not clicked, 1 = clicked
  const heartProgress = useRef(new NativeAnimated.Value(0)).current;
  //When the card is first rendered, check whether the track has been liked already and it it is, set the heart-animation to liked.
  useEffect(() => {
    if (likedTracks.includes(item.id)) heartProgress.setValue(1);
  }, []);

  function heartClicked() {
    ManipulateLikedTracks(item.id);
    if (likedTracks.includes(item.id)) {
      heartProgress.setValue(0);
      return;
    }
    NativeAnimated.timing(heartProgress, {
      toValue: 1,
      duration: 750,
      useNativeDriver: true,
    }).start();
  }

  const cardContainerStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 2) * cardSize,
      (index - 1) * cardSize,
      index * cardSize,
    ];
    return {
      height: "100%",
      alignItems: "center",
      width: cardSize,
      opacity: interpolate(
        scrollX.value,
        inputRange,
        [0.5, 1, 0.5],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          scale: interpolate(
            scrollX.value,
            inputRange,
            [MIN_SCALE, 1, MIN_SCALE],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <TouchableWithoutFeedback onPress={() => playTrack(item)}>
      <Animated.View style={cardContainerStyle}>
        <Image
          source={images[item.image]}
          style={{
            height: cardSize,
            width: cardSize,
            borderRadius: 32,
          }}
        ></Image>
        <TouchableWithoutFeedback
          onPress={() => heartClicked()}
          containerStyle={{
            width: 100,
            height: 100,
            right: -15,
            top: -15,
            position: "absolute",
            zIndex: 10,
          }}
          style={{ height: "100%" }}
        >
          <LottieView
            progress={heartProgress}
            source={require("../assets/heart_white.json")}
          />
        </TouchableWithoutFeedback>
        <View
          style={{
            position: "absolute",
            bottom: 12,
            left: 12,
            right: 12,
            height: "35%",
            borderRadius: 32,
            overflow: "hidden",
          }}
        >
          <BlurView
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              padding: 24,
            }}
            intensity={50}
            tint='light'
          >
            <View style={{ width: "100%" }}>
              <CardTitle>{item.title}</CardTitle>
              <CardSubTitle>{item.place}</CardSubTitle>
            </View>
          </BlurView>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const CardTitle = styled(Title)`
  font-size: 18px;
`;
const CardSubTitle = styled(Subtitle)`
  font-size: 14px;
  color: #fff;
`;
