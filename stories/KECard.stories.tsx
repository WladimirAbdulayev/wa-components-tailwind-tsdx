import React from 'react';
import { Meta, Story } from '@storybook/react';
import { KECard, IKECardProps } from '../src';

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

const Template: Story<IKECardProps> = args => <KECard {...args} />;

export const KECardDefault = Template.bind({});

KECardDefault.args = { text: 'KE-Card' };
