import * as React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import colors from "../constraints/colors";

const SvgBackward = ({ fill, size }) => (
  <Svg width={19} height={10} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M.852 1.48a1 1 0 0 1 1-1h.777a1 1 0 0 1 1 1v7.258a1 1 0 0 1-1 1h-.777a1 1 0 0 1-1-1V1.48ZM5.694 5.923a1 1 0 0 1 0-1.628l3.762-2.686a1 1 0 0 1 1.58.814v5.372a1 1 0 0 1-1.58.814L5.694 5.923ZM18.443 2.423a1 1 0 0 0-1.581-.814L13.1 4.295a1 1 0 0 0 0 1.628l3.762 2.686a1 1 0 0 0 1.58-.814V2.423Z'
      fill='#E9EDF9'
    />
  </Svg>
);

SvgBackward.defaultProps = {
  fill: colors.white20,
  size: 50,
};

SvgBackward.propTypes = {
  // optional
  fill: PropTypes.string,
  size: PropTypes.number,
};

export default SvgBackward;
