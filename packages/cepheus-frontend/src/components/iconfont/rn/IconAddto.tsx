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

let IconAddto: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M544 480h112a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16h-112v112a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-112h-112a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h112v-112a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v112z m-32 320c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconAddto.defaultProps = {
  size: 18,
};

IconAddto = React.memo ? React.memo(IconAddto) : IconAddto;

export default IconAddto;
