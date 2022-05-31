/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconCcArrowCircleRight: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M65.201489 510.666632c0 247.044536 200.255906 447.301466 447.240067 447.301466C759.554654 957.969121 959.7113 757.711168 959.7113 510.666632c0-246.984161-200.157669-447.240067-447.270766-447.240067C265.457396 63.426565 65.201489 263.682471 65.201489 510.666632zM139.937634 510.666632c0-205.689662 166.815283-372.503922 372.503922-372.503922 205.753107 0 372.567367 166.81426 372.567367 372.503922 0 205.816552-166.81426 372.565321-372.567367 372.565321C306.752918 883.231953 139.937634 716.483184 139.937634 510.666632z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M721.859124 508.243443 560.343543 374.739846c0 0-19.10922-20.222577-19.10922 1.63729 0 22.119787 0 75.259054 0 75.259054s-12.958126 0-32.720216 0c-56.838519 0-160.206772 0-202.254424 0 0 0-11.352559-3.074012-11.352559 14.332427 0 17.407462 0 93.64889 0 105.9521 0 12.500709 9.488095 12.173251 9.488095 12.173251 40.903595 0 147.771555 0 202.612581 0 17.86795 0 34.390251 0 34.390251 0s0 42.668799 0 69.435419c0 26.831089 19.009959 3.599991 19.009959 3.599991s146.951887-110.533442 162.79062-126.372176C734.68422 519.172353 721.859124 508.243443 721.859124 508.243443z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconCcArrowCircleRight.defaultProps = {
  size: 18,
};

IconCcArrowCircleRight = React.memo ? React.memo(IconCcArrowCircleRight) : IconCcArrowCircleRight;

export default IconCcArrowCircleRight;
