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

let IconXindiantu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M119.466667 610.986667l3.413333 150.186666s-5.12 37.546667 71.68 44.373334l653.653333-1.706667s59.733333-30.72 56.32-66.56l-5.12-121.173333-83.626666 3.413333-54.613334-78.506667-49.493333 66.56L614.4 314.026667l-102.4 310.613333h-52.906667l-56.32-100.693333-46.08 100.693333h-47.786666l-75.093334-211.626667L119.466667 610.986667z"
        fill={getIconColor(color, 0, '#EAFFFB')}
      />
      <Path
        d="M831.146667 814.08h-648.533334c-42.666667 0-76.8-34.133333-76.8-76.8v-546.133333c0-42.666667 34.133333-76.8 76.8-76.8h648.533334c42.666667 0 76.8 34.133333 76.8 76.8v546.133333c0 42.666667-34.133333 76.8-76.8 76.8z m-648.533334-682.666667c-32.426667 0-59.733333 27.306667-59.733333 59.733334v546.133333c0 32.426667 27.306667 59.733333 59.733333 59.733333h648.533334c32.426667 0 59.733333-27.306667 59.733333-59.733333v-546.133333c0-32.426667-27.306667-59.733333-59.733333-59.733334h-648.533334zM684.373333 909.653333H329.386667c-8.533333 0-17.066667-6.826667-17.066667-17.066666 0-8.533333 6.826667-17.066667 17.066667-17.066667h354.986666c8.533333 0 17.066667 8.533333 17.066667 17.066667 0 10.24-8.533333 17.066667-17.066667 17.066666z"
        fill={getIconColor(color, 1, '#44B9A3')}
      />
      <Path
        d="M512 633.173333h-63.146667l-49.493333-100.693333-42.666667 100.693333h-58.026666l-71.68-199.68-105.813334 189.44-15.36-8.533333 124.586667-221.866667 80.213333 223.573334h35.84l51.2-124.586667 61.44 124.586667h40.96l105.813334-351.573334 100.693333 324.266667 52.906667-71.68 54.613333 92.16 92.16-1.706667v17.066667l-102.4 3.413333-46.08-80.213333-58.026667 78.506667L605.866667 324.266667z"
        fill={getIconColor(color, 2, '#44B9A3')}
      />
    </Svg>
  );
};

IconXindiantu.defaultProps = {
  size: 18,
};

IconXindiantu = React.memo ? React.memo(IconXindiantu) : IconXindiantu;

export default IconXindiantu;