/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

export type IconNames = 'cc-arrow-circle-right' | 'xuanzhong' | 'weixuanzhong' | 'fenxiang' | 'qiehuan' | 'addto' | 'shuaxin' | 'scan' | 'add' | 'shezhitianchong' | 'xiangshang' | 'xindiantu' | 'morentouxiang' | 'angle-right' | 'angle-left' | 'weixin';

export interface IconProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<IconProps> = () => {
  return null;
};

export default IconFont;
