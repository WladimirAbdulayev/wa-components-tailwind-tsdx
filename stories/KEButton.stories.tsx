import React from 'react';
import { Meta, Story } from '@storybook/react';
import { KEButton, IKEButtonProps } from '../src';

const meta: Meta = {
  title: 'KE-Button',
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

const Template: Story<IKEButtonProps> = args => <KEButton {...args} />;

export const SCButtonDefault = Template.bind({});
export const SCButtonInfo = Template.bind({});

SCButtonDefault.args = { text: 'Get Started', variant: 'default' };
SCButtonInfo.args = { text: 'Get Started', variant: 'info' };
