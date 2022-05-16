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

const IconAddto: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M544 480h112a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16h-112v112a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-112h-112a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h112v-112a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v112z m-32 320c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconAddto.defaultProps = {
  size: 18,
};

export default IconAddto;
