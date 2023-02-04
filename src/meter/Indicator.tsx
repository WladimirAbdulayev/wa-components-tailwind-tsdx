import React from 'react';
import { SVGProps, useContext } from 'react';
import Context from './context';

interface IndicatorProps extends SVGProps<SVGTextElement> {
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  textAnchor?: SVGProps<SVGTextElement>['textAnchor'];
  children?: JSX.Element;
}

export default function Indicator({
  fontSize = 45,
  // color = 'white',
  fontFamily,
  children,
  ...rest
}: IndicatorProps) {
  const {
    value,
    radius,
    rotation,
    // fontFamily: globalFontFamily,
  } = useContext(Context);

  const textProps = {
    transform: `rotate(${360 - rotation}, ${radius}, ${radius})`,
  };
  const fixedValue = Number(value).toFixed();

  return (
    <text
      {...textProps}
      x={radius}
      y={radius + radius / 2 + 10}
      textAnchor="middle"
      fontSize={fontSize}
      // fontFamily={fontFamily || globalFontFamily}
      // fill={color}
      {...rest}
    >
      {fixedValue}°C
    </text>
  );
}
