import React from "react";
import { Dimensions, Image, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { BlurView } from "expo-blur";
import styled from "styled-components/native";

import { images } from "../constraints";
import { Title, Subtitle } from "../constraints/typography";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const CURRENT_ITEM_TRANSLATE_Y = 0.8;
export const CarouselCard = ({ item, index, cardSize, scrollX, playTrack }) => {
  if (!item.title) {
    return (
      <View
        style={{
          width: (Dimensions.get("window").width - cardSize) / 2,
        }}
      />
    );
  }

  const animatedStyle = useAnimatedStyle(() => {
    const itemWidth = cardSize;
    const inputRange = [
      (index - 2) * itemWidth,
      (index - 1) * itemWidth,
      index * itemWidth,
    ];
    return {
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
            [CURRENT_ITEM_TRANSLATE_Y, 1, CURRENT_ITEM_TRANSLATE_Y],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <TouchableWithoutFeedback onPress={() => playTrack(item)}>
      <Animated.View
        style={[
          animatedStyle,
          {
            height: "100%",
            alignItems: "center",
            width: cardSize,
          },
        ]}
      >
        <Image
          source={images[item.image]}
          style={{
            height: cardSize,
            width: cardSize,
            borderRadius: 32,
          }}
        ></Image>
        <View
          style={{
            position: "absolute",
            bottom: 12,
            left: 12,
            right: 12,
            height: "40%",
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
