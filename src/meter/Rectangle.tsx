import React from 'react';
interface RectangleProps {
  height?: number;
  width?: number;
  x?: number;
  y?: number;
  children?: () => JSX.Element;
}

export default function Rectangle({
  height = 20,
  width = 20,
  x = 30,
  y = 30,
  children,
}: RectangleProps) {
  return (
    <svg width={200} height={200}>
      <g>
        <rect height={height} width={width} x={x} y={y} fill={'darkred'} />
      </g>
    </svg>
  );
}
