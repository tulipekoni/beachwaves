import React from "react";
import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const BoxButton = (props) => {
  return (
    <TouchableWithoutFeedback
      style={{
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: colors.white00,
        shadowRadius: 40,
        shadowColor: "rgba(202, 202, 224, 0.5)",
        shadowOpacity: 1,
        backdropFilter: "blur(30px)",
        alignItems: "center",
        justifyContent: "center",
      }}
      {...props}
    >
      {props.children}
    </TouchableWithoutFeedback>
  );
};
