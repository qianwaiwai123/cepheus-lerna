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

let IconAngleRight: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M610.88 512L192 93.12 285.12 0l512 512-512 512L192 930.88z"
        fill={getIconColor(color, 0, '#262626')}
      />
    </Svg>
  );
};

IconAngleRight.defaultProps = {
  size: 18,
};

IconAngleRight = React.memo ? React.memo(IconAngleRight) : IconAngleRight;

export default IconAngleRight;
