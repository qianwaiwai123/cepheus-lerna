/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const IconBangzhu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z m0 832c-212.08 0-384-171.92-384-384s171.92-384 384-384 384 171.92 384 384-171.92 384-384 384z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M512 776m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M704 408a191.6 191.6 0 0 0-192-192c-106 0-192 86-192 192a32 32 0 0 0 64 0 128 128 0 1 1 128 128 32 32 0 0 0-32 32v112a32 32 0 0 0 64 0v-82.67c90.81-15.24 160-94.2 160-189.33z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </svg>
  );
};

IconBangzhu.defaultProps = {
  size: 18,
};

export default IconBangzhu;
