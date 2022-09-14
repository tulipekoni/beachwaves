import * as React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import colors from "../constraints/colors";

const SvgPause = ({ fill, size }) => (
  <Svg
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <Path
      d='M32 32a1 1 0 01-1 1h-2a1 1 0 01-1-1V18a1 1 0 011-1h2a1 1 0 011 1v14zM22 32a1 1 0 01-1 1h-2a1 1 0 01-1-1V18a1 1 0 011-1h2a1 1 0 011 1v14z'
      fill={fill}
    />
  </Svg>
);

SvgPause.defaultProps = {
  fill: colors.primary,
  size: 16,
};

SvgPause.propTypes = {
  // optional
  fill: PropTypes.string,
  size: PropTypes.number,
};

export default SvgPause;
