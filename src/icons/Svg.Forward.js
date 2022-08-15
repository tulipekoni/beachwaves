import * as React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import colors from "../constraints/colors";

const SvgForward = ({ fill, size }) => (
  <Svg width={19} height={10} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M18.443 8.738a1 1 0 0 1-1 1h-.778a1 1 0 0 1-1-1V1.48a1 1 0 0 1 1-1h.778a1 1 0 0 1 1 1v7.258ZM13.6 4.295a1 1 0 0 1 0 1.628L9.838 8.609a1 1 0 0 1-1.58-.814V2.423a1 1 0 0 1 1.58-.814L13.6 4.295ZM.851 7.795a1 1 0 0 0 1.581.814l3.762-2.686a1 1 0 0 0 0-1.628L2.432 1.61a1 1 0 0 0-1.58.814v5.372Z'
      fill={fill}
    />
  </Svg>
);

SvgForward.defaultProps = {
  fill: colors.white20,
  size: 50,
};

SvgForward.propTypes = {
  // optional
  fill: PropTypes.string,
  size: PropTypes.number,
};

export default SvgForward;
