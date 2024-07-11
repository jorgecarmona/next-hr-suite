import {Meta, StoryObj} from '@storybook/react';

import UserToolBar from '../../molecules/usertoolbar';

const meta = {
  title: 'Molecules/UserToolBar',
  component: UserToolBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {control: 'text'},
  },
} satisfies Meta<typeof UserToolBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Search: Story = {
  args: {
    type: 'profile',
    children: 'OM',
  },
};
