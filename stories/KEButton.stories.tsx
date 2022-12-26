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

export const SCButton = Template.bind({});

SCButton.args = { text: 'Button' };
