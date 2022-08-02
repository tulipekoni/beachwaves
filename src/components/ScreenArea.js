import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../infrastructure/theme";

export default ScreenArea = ({ children, style }) => {
  return (
    <SafeAreaView
      style={[{ backgroundColor: theme.white10, height: "100%" }, style]}
    >
      {children}
    </SafeAreaView>
  );
};
