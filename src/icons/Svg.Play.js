import * as React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import colors from "../constraints/colors";

const SvgPlay = ({ fill, size }) => (
  <Svg
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <Path
      d='M28.91 23.998a2.083 2.083 0 0 1 0 3.38l-6.858 4.947c-1.377.995-3.302.01-3.302-1.689V20.74c0-1.699 1.925-2.683 3.302-1.689l6.857 4.948Z'
      fill={fill}
    />
  </Svg>
);

SvgPlay.defaultProps = {
  fill: colors.primary,
  size: 50,
};

SvgPlay.propTypes = {
  // optional
  fill: PropTypes.string,
  size: PropTypes.number,
};

export default SvgPlay;
