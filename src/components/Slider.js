import React from "react";
import { Text, View } from "react-native";
import colors from "../constraints/colors";

export const Slider = (props) => {
  return (
    <>
      <View
        style={{
          width: "100%",
          height: 10,
          backgroundColor: colors.white20,
          borderRadius: 5,
        }}
      >
        <View
          style={{
            width: `${(props.current / props.max) * 100}%`,
            height: 10,
            backgroundColor: colors.primary,
            borderRadius: 5,
          }}
        ></View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 10,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            fontSize: 12,
            color: colors.black,
            opacity: 0.5,
          }}
        >
          {props.timeElapsed}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            fontSize: 12,
            color: colors.black,
            opacity: 0.5,
          }}
        >
          {`-${props.timeLeft}`}
        </Text>
      </View>
    </>
  );
};
