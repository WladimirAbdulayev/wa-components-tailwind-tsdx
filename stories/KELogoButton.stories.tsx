import React from 'react';
import { Meta, Story } from '@storybook/react';
import { KELogoButton } from '../src';
import { IKELogoButtonProps } from '../src/types';

const meta: Meta = {
  title: 'KE-Logo-Button',
  component: KELogoButton,
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

const Template: Story<IKELogoButtonProps> = args => <KELogoButton {...args} />;

export const KELogoButtonDefault = Template.bind({});
export const KELogoButtonInfo = Template.bind({});

KELogoButtonDefault.args = { text: 'Logo', variant: 'default' };
KELogoButtonInfo.args = { text: 'Info', variant: 'info' };
