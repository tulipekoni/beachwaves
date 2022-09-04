import * as React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../constraints/colors";

export default SvgHeart = ({ fill = colors.primary, size }) => (
  <Svg
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.85.85c.63 0 1.26.09 1.86.29 3.69 1.2 5.02 5.25 3.91 8.79a12.728 12.728 0 01-3.01 4.809 38.445 38.445 0 01-6.33 4.96l-.25.15-.26-.16a38.087 38.087 0 01-6.369-4.96A12.933 12.933 0 01.39 9.93c-1.13-3.54.2-7.59 3.931-8.81.29-.1.589-.17.889-.21h.12c.281-.04.56-.06.84-.06h.11c.63.02 1.24.13 1.83.33h.06c.04.02.07.04.09.06.22.07.43.15.63.26l.38.17c.092.05.195.124.284.189.056.04.107.077.146.101l.05.03c.085.05.175.101.25.16a6.263 6.263 0 013.85-1.3zm2.45 8.721a1.271 1.271 0 001.222-1.177V8.21c.047-2.166-1.266-4.128-3.262-4.885a1.238 1.238 0 00-1.562.773c-.216.65.124 1.36.773 1.59.991.372 1.655 1.347 1.655 2.428v.048c-.03.354.077.696.293.959.217.262.541.416.882.448z'
      fill={fill}
    />
  </Svg>
);
