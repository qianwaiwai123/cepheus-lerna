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

let IconXiangshang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M64.633 702.181L511.145 255.67l446.512 446.511z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXiangshang.defaultProps = {
  size: 18,
};

IconXiangshang = React.memo ? React.memo(IconXiangshang) : IconXiangshang;

export default IconXiangshang;
