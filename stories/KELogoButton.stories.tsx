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

export const keLogoButtonDefault = Template.bind({});
export const keLogoButtonInfo = Template.bind({});

keLogoButtonDefault.args = { text: 'Logo', variant: 'default' };
keLogoButtonInfo.args = { text: 'Info', variant: 'info' };
