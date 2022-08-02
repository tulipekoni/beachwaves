import React from "react";
import { Dimensions, Image, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
export const DetailScreen = ({ route }) => {
  const { item } = route.params;
  const windowWidth = Dimensions.get("window").width;

  return (
    <View
      style={{
        width: windowWidth / 1.5,
        height: windowWidth / 1.5,
      }}
    >
      <SharedElement id={`item.${item.id}.photo`}>
        <Image
          source={item.image}
          style={{ width: undefined, height: undefined, aspectRatio: 1 }}
        />
      </SharedElement>
    </View>
  );
};
