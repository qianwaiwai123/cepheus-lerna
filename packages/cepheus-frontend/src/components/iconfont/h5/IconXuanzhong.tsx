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

const IconXuanzhong: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 64C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64z m271.529 719.529c-35.286 35.287-76.359 62.983-122.078 82.321C614.15 885.856 563.868 896 512 896c-51.868 0-102.15-10.144-149.451-30.15-45.719-19.337-86.792-47.034-122.078-82.321-35.287-35.286-62.983-76.359-82.321-122.078C138.144 614.15 128 563.868 128 512s10.144-102.15 30.15-149.451c19.337-45.719 47.034-86.792 82.321-122.078 35.286-35.287 76.359-62.983 122.078-82.321C409.85 138.144 460.132 128 512 128c51.868 0 102.15 10.144 149.451 30.15 45.719 19.337 86.792 47.034 122.078 82.321 35.287 35.286 62.983 76.359 82.321 122.078C885.856 409.85 896 460.132 896 512s-10.144 102.15-30.15 149.451c-19.338 45.718-47.034 86.792-82.321 122.078z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M707.576 362.526L448.465 621.637 316.424 489.596c-12.497-12.497-32.758-12.497-45.255 0s-12.497 32.758 0 45.255l154.668 154.668c6.249 6.249 14.438 9.373 22.627 9.373s16.379-3.124 22.627-9.373L752.83 407.781c12.497-12.497 12.497-32.758 0-45.255-12.496-12.497-32.758-12.497-45.254 0z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconXuanzhong.defaultProps = {
  size: 18,
};

export default IconXuanzhong;
