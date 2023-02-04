import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Thermostat } from '../src/meter';
import { IThermostatProps } from '../src/meter/Thermostat';

const meta: Meta = {
  title: 'KE-Thermostat',
  component: Thermostat,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IThermostatProps> = args => <Thermostat {...args} />;

export const KEThermostatDefault = Template.bind({});
export const KEThermostat125 = Template.bind({});

KEThermostatDefault.args = {};
KEThermostat125.args = { temperature: 125 };
