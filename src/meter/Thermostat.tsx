import React from 'react';
import Arc from './Arc';
import Background from './Background';
import DangerPath from './DangerPath';
import Indicator from './Indicator';
import Marks from './Marks';
import Needle from './Needle';
import Progress from './Progress';
import Speedometer from './Speedometer';

export interface IThermostatProps {
  temperature: number;
}
export const Thermostat = ({ temperature }: IThermostatProps) => {
  return (
    <Speedometer
      value={temperature}
      min={0}
      max={190}
      angle={250}
      accentColor="#012e50"
    >
      <Background color="#779ed0" opacity={0.2} />
      <Arc arcWidth={20} color="#779ed0" />
      <Progress />
      <Marks step={10} />
      <Needle
        baseOffset={0}
        circleRadius={10}
        color="#012e50"
        colorStroke="#012e50"
        offset={15}
      />
      <Indicator />
      <DangerPath />
    </Speedometer>
  );
};
