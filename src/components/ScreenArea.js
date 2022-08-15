import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../constraints/colors";

export default ScreenArea = ({ children, style }) => {
  return (
    <SafeAreaView
      style={[{ backgroundColor: colors.white10, height: "100%" }, style]}
    >
      {children}
    </SafeAreaView>
  );
};
