import React from "react";
import { Dimensions, Image, View } from "react-native";

import { images } from "../constraints";

export const CarouselCard = ({ item, cardSize }) => {
  if (!item.title) {
    return (
      <View
        style={{ width: (Dimensions.get("window").width - cardSize - 20) / 2 }}
      />
    );
  }
  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
        width: cardSize + 20,
      }}
    >
      <Image
        source={images[item.image]}
        style={{
          height: cardSize,
          width: cardSize,
          borderRadius: 32,
        }}
      />
    </View>
  );
};
