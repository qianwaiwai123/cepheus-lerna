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

let IconFenxiang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M836.4032 569.1392c14.813867 0 26.8288 12.014933 26.8288 26.8288v139.912533a145.408 145.408 0 0 1-145.237333 145.2032H281.770667A145.408 145.408 0 0 1 136.533333 735.914667V299.656533a145.408 145.408 0 0 1 145.237334-145.237333h137.8304a26.8288 26.8288 0 0 1 0 53.623467H281.770667A91.682133 91.682133 0 0 0 190.122667 299.6224v436.224a91.682133 91.682133 0 0 0 91.613866 91.613867h436.224a91.682133 91.682133 0 0 0 91.579734-91.579734V595.968c0-14.813867 12.014933-26.8288 26.8288-26.8288zM629.8624 219.5456a26.8288 26.8288 0 0 1 0-53.623467h174.1824c14.813867 0 26.8288 12.014933 26.8288 26.8288v159.3344a26.8288 26.8288 0 0 1-53.623467 0v-105.472L443.392 620.987733a26.692267 26.692267 0 0 1-37.853867 2.184534 26.794667 26.794667 0 0 1-2.1504-37.888l326.144-365.738667h-99.669333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFenxiang.defaultProps = {
  size: 18,
};

IconFenxiang = React.memo ? React.memo(IconFenxiang) : IconFenxiang;

export default IconFenxiang;
