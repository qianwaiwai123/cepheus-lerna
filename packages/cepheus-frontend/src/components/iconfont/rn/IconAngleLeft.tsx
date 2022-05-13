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

let IconAngleLeft: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M378.24 512l418.88 418.88L704 1024 192 512l512-512 93.12 93.12z"
        fill={getIconColor(color, 0, '#262626')}
      />
    </Svg>
  );
};

IconAngleLeft.defaultProps = {
  size: 18,
};

IconAngleLeft = React.memo ? React.memo(IconAngleLeft) : IconAngleLeft;

export default IconAngleLeft;
