import * as React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import colors from "../constraints/colors";

const SvgCross = ({ fill, size }) => (
  <Svg
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <Path
      d='M16 2L2 16M16 16L2 2'
      stroke={fill}
      strokeWidth={3}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

SvgCross.defaultProps = {
  fill: colors.black,
  size: 18,
};

SvgCross.propTypes = {
  // optional
  fill: PropTypes.string,
  size: PropTypes.number,
};

export default SvgCross;
