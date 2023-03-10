import React from 'react';
import { useContext } from 'react';
import Context from './context';

interface NeedleProps {
  offset?: number;
  baseWidth?: number;
  baseOffset?: number;
  color?: string;
  colorStroke?: string;
  circleRadius?: number;
  circleColor?: string;
  strokeLinejoin?: 'bevel' | 'miter' | 'round';
  children?: () => JSX.Element;
}

export const Needle = ({
  offset = 25,
  baseWidth = 6,
  baseOffset = 18,
  color = 'white',
  colorStroke = '#779ed0',
  circleRadius = 15,
  circleColor,
  strokeLinejoin = 'round',
  children,
}: NeedleProps) => {
  const { currentFillAngle, radius, accentColor } = useContext(Context);
  const bottom = radius + baseOffset;
  const points = `
    ${radius - baseWidth / 2}, ${bottom} ${radius +
    baseWidth / 2}, ${bottom} ${radius}, ${offset}
  `;
  const defaultNeedle = (
    <g>
      <circle
        r={circleRadius}
        cx={radius}
        cy={radius}
        fill={circleColor || accentColor}
      />
      <polygon
        points={points}
        fill={color}
        strokeWidth="1"
        stroke={colorStroke}
        style={{ strokeLinejoin }}
      />
    </g>
  );

  return (
    <g transform={`rotate(${currentFillAngle}, ${radius}, ${radius})`}>
      {children ? children() : defaultNeedle}
    </g>
  );
};
