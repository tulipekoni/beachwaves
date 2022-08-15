import * as React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import colors from "../constraints/colors";

const SvgBack = ({ fill, size }) => (
  <Svg
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <Path
      d='M8 1 2.133 5.4a2 2 0 0 0 0 3.2L8 13M3 7h9'
      stroke={fill}
      strokeWidth={2}
      strokeLinecap='round'
    />
  </Svg>
);

SvgBack.defaultProps = {
  fill: colors.primary,
  size: 15,
};

SvgBack.propTypes = {
  // optional
  fill: PropTypes.string,
  size: PropTypes.number,
};

export default SvgBack;
