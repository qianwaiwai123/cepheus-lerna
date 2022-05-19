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

let IconQiehuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M720.544687 402.905326 720.544687 402.905326 720.544687 402.905326l-84.467787-84.46267c-6.951319-6.956436-18.841114-2.031263-18.841114 7.79964l0 65.626673c0 6.095835-4.938476 11.036357-11.036357 11.036357L282.375206 402.905326c-6.092765 0-11.036357 4.938476-11.036357 11.036357l0 29.581736c0 6.092765 4.938476 11.036357 11.036357 11.036357l463.178061 0c9.830903 0 14.755052-11.889795 7.804756-18.84009L720.544687 402.905326 720.544687 402.905326 720.544687 402.905326zM720.544687 402.905326"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M307.317271 621.089557 307.317271 621.089557 307.317271 621.089557l84.467787 84.467787c6.951319 6.950296 18.841114 2.031263 18.841114-7.804756l0-65.626673c0-6.092765 4.943592-11.036357 11.036357-11.036357l323.839573 0c6.095835 0 11.040451-4.939499 11.040451-11.036357l0-29.577642c0-6.095835-4.944616-11.036357-11.040451-11.036357L282.308691 569.4392c-9.834996 0-14.755052 11.884678-7.800663 18.841114L307.317271 621.089557 307.317271 621.089557 307.317271 621.089557zM307.317271 621.089557"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M513.928932 947.106726c-239.914138 0-435.104679-195.186448-435.104679-435.109796 0-239.913115 195.190541-435.103656 435.104679-435.103656 239.917208 0 435.108772 195.190541 435.108772 435.103656C949.037704 751.920278 753.847164 947.106726 513.928932 947.106726L513.928932 947.106726zM513.928932 112.605637c-220.22368 0-399.393339 179.164542-399.393339 399.391293 0 220.22368 179.164542 399.396409 399.393339 399.396409 220.227774 0 399.396409-179.172729 399.396409-399.396409C913.326365 291.774273 734.156706 112.605637 513.928932 112.605637L513.928932 112.605637zM513.928932 112.605637"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconQiehuan.defaultProps = {
  size: 18,
};

IconQiehuan = React.memo ? React.memo(IconQiehuan) : IconQiehuan;

export default IconQiehuan;