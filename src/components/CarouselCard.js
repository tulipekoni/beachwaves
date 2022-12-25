import React from "react";
import { Dimensions, Image, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { images } from "../constraints";
import { SubHeading } from "../constraints/typography";

const CURRENT_ITEM_TRANSLATE_Y = 0.8;
export const CarouselCard = ({ item, index, cardSize, scrollX }) => {
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
          borderRadius: 32,
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          height: "40%",
        }}
      >
        <SubHeading>{item.title}</SubHeading>
      </View>
    </Animated.View>
  );
};
