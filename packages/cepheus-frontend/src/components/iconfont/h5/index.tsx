/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react';
import IconFenxiang from './IconFenxiang';
import IconQiehuan from './IconQiehuan';
import IconAddto from './IconAddto';
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
export { default as IconFenxiang } from './IconFenxiang';
export { default as IconQiehuan } from './IconQiehuan';
export { default as IconAddto } from './IconAddto';
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

export type IconNames = 'fenxiang' | 'qiehuan' | 'addto' | 'shuaxin' | 'scan' | 'add' | 'shezhitianchong' | 'xiangshang' | 'xindiantu' | 'morentouxiang' | 'angle-right' | 'angle-left' | 'weixin';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'fenxiang':
      return <IconFenxiang {...rest} />;
    case 'qiehuan':
      return <IconQiehuan {...rest} />;
    case 'addto':
      return <IconAddto {...rest} />;
    case 'shuaxin':
      return <IconShuaxin {...rest} />;
    case 'scan':
      return <IconScan {...rest} />;
    case 'add':
      return <IconAdd {...rest} />;
    case 'shezhitianchong':
      return <IconShezhitianchong {...rest} />;
    case 'xiangshang':
      return <IconXiangshang {...rest} />;
    case 'xindiantu':
      return <IconXindiantu {...rest} />;
    case 'morentouxiang':
      return <IconMorentouxiang {...rest} />;
    case 'angle-right':
      return <IconAngleRight {...rest} />;
    case 'angle-left':
      return <IconAngleLeft {...rest} />;
    case 'weixin':
      return <IconWeixin {...rest} />;

  }

  return null;
};

export default IconFont;
