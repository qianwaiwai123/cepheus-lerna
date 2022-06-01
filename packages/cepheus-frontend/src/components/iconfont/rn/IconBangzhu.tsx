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

let IconBangzhu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z m0 832c-212.08 0-384-171.92-384-384s171.92-384 384-384 384 171.92 384 384-171.92 384-384 384z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 776m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M704 408a191.6 191.6 0 0 0-192-192c-106 0-192 86-192 192a32 32 0 0 0 64 0 128 128 0 1 1 128 128 32 32 0 0 0-32 32v112a32 32 0 0 0 64 0v-82.67c90.81-15.24 160-94.2 160-189.33z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconBangzhu.defaultProps = {
  size: 18,
};

IconBangzhu = React.memo ? React.memo(IconBangzhu) : IconBangzhu;

export default IconBangzhu;
