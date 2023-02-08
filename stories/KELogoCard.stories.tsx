import React from 'react';
import { Meta, Story } from '@storybook/react';
import { KELogoCard } from '../src';
import { IKELogoCardProps } from '../src/types';

const meta: Meta = {
  title: 'KE-Logo-Card',
  component: KELogoCard,
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

const Template: Story<IKELogoCardProps> = args => <KELogoCard {...args} />;

export const KELogoCardDefault = Template.bind({});

KELogoCardDefault.args = { text: 'KE-Logo-Card' };
