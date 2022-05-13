/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconShuaxin from './IconShuaxin';
import IconScan from './IconScan';
import IconAdd from './IconAdd';
import IconShezhitianchong from './IconShezhitianchong';
import IconXiangshang from './IconXiangshang';
import IconXindiantu from './IconXindiantu';
import IconMorentouxiang from './IconMorentouxiang';
import IconAngleRight from './IconAngleRight';
import IconAngleLeft from './IconAngleLeft';
import IconWeixin from './IconWeixin';
export { default as IconShuaxin } from './IconShuaxin';
export { default as IconScan } from './IconScan';
export { default as IconAdd } from './IconAdd';
export { default as IconShezhitianchong } from './IconShezhitianchong';
export { default as IconXiangshang } from './IconXiangshang';
export { default as IconXindiantu } from './IconXindiantu';
export { default as IconMorentouxiang } from './IconMorentouxiang';
export { default as IconAngleRight } from './IconAngleRight';
export { default as IconAngleLeft } from './IconAngleLeft';
export { default as IconWeixin } from './IconWeixin';

export type IconNames = 'shuaxin' | 'scan' | 'add' | 'shezhitianchong' | 'xiangshang' | 'xindiantu' | 'morentouxiang' | 'angle-right' | 'angle-left' | 'weixin';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'shuaxin':
      return <IconShuaxin key="1" {...rest} />;
    case 'scan':
      return <IconScan key="2" {...rest} />;
    case 'add':
      return <IconAdd key="3" {...rest} />;
    case 'shezhitianchong':
      return <IconShezhitianchong key="4" {...rest} />;
    case 'xiangshang':
      return <IconXiangshang key="5" {...rest} />;
    case 'xindiantu':
      return <IconXindiantu key="6" {...rest} />;
    case 'morentouxiang':
      return <IconMorentouxiang key="7" {...rest} />;
    case 'angle-right':
      return <IconAngleRight key="8" {...rest} />;
    case 'angle-left':
      return <IconAngleLeft key="9" {...rest} />;
    case 'weixin':
      return <IconWeixin key="10" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
