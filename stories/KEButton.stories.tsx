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

export const KEButtonDefault = Template.bind({});
export const KEButtonInfo = Template.bind({});
export const KEButtonSuccess = Template.bind({});
export const KEButtonWarning = Template.bind({});

KEButtonDefault.args = { text: 'Get Started', variant: 'default' };
KEButtonInfo.args = { text: 'Be Informed', variant: 'info' };
KEButtonSuccess.args = { text: 'Well Done!', variant: 'success' };
KEButtonWarning.args = { text: 'Attention', variant: 'warning' };
