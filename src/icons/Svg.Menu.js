import * as React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import colors from "../constraints/colors";
import { View } from "react-native";

const SvgMenu = ({ fill, size }) => {
  function renderItem() {
    return (
      <View
        style={{
          width: size / 4,
          height: size / 4,
          borderRadius: size / 8,
          backgroundColor: fill,
        }}
      />
    );
  }
  function renderSpacer() {
    return (
      <View
        style={{
          width: size / 8,
          height: size / 4,
        }}
      />
    );
  }
  return (
    <View
      style={{
        width: size,
        flexDirection: "row",
      }}
    >
      {renderItem()}
      {renderSpacer()}
      {renderItem()}
      {renderSpacer()}
      {renderItem()}
    </View>
  );
};

SvgMenu.defaultProps = {
  fill: colors.primary,
  size: 20,
};

SvgMenu.propTypes = {
  // optional
  fill: PropTypes.string,
  size: PropTypes.number,
};

export default SvgMenu;
