import React from 'react';
import { Meta, Story } from '@storybook/react';
import { KEButton, ButtonProps } from '../src';

const meta: Meta = {
  title: 'KEButton',
  component: KEButton,
  argTypes: {
    text: {
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

const Template: Story<ButtonProps> = args => <KEButton {...args} />;

export const SCButtonDefault = Template.bind({});
export const SCButtonInfo = Template.bind({});

SCButtonDefault.args = { text: 'Get Started', variant: 'default' };
SCButtonInfo.args = { text: 'Get Started', variant: 'info' };
