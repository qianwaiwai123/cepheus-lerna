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

const IconLaba: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M551.748 832.12c-3.541 0-7.07-1.138-9.953-3.338l-199.59-151.973h-181.16c-9.093 0-16.449-7.355-16.449-16.468V425.925c0-9.095 7.362-16.47 16.45-16.47H342.21l199.583-151.953c4.951-3.8 11.68-4.422 17.265-1.631 5.584 2.782 9.13 8.474 9.13 14.716v545.078c0 6.241-3.535 11.97-9.13 14.735a16.192 16.192 0 0 1-7.31 1.72zM177.502 643.866h170.243a16.445 16.445 0 0 1 9.974 3.371L535.305 782.43V303.777L357.719 438.984a16.427 16.427 0 0 1-9.974 3.37H177.502v201.511z m143.233-225.562h34.246v251.72h-34.246v-251.72z m510.237 124.58c0 13.593-15.848 24.717-35.201 24.717H670.455c-19.372 0-35.207-11.123-35.207-24.718 0-13.593 15.836-24.742 35.207-24.742h125.31c19.359 0 35.207 11.155 35.207 24.742z m-75.15 277.177c-9.613 9.612-28.685 6.272-42.37-7.413l-88.612-88.612c-13.698-13.698-17.03-32.761-7.417-42.373 9.612-9.612 28.693-6.298 42.39 7.4l88.608 88.607c13.69 13.69 17.009 32.782 7.4 42.391z m0.005-554.282c9.612 9.612 6.272 28.684-7.413 42.37l-88.612 88.611c-13.698 13.698-32.76 17.03-42.373 7.417-9.612-9.612-6.298-28.692 7.4-42.39l88.607-88.607c13.69-13.69 32.782-17.01 42.391-7.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconLaba.defaultProps = {
  size: 18,
};

export default IconLaba;
