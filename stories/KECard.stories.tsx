import React from 'react';
import { Meta, Story } from '@storybook/react';
import { KECard, CardProps } from '../src';

const meta: Meta = {
  title: 'KE-Card',
  component: KECard,
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

const Template: Story<CardProps> = args => <KECard {...args} />;

export const SCCard = Template.bind({});

SCCard.args = { text: 'KE-Card' };
