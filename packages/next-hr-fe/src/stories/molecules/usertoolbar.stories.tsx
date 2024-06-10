import {Meta, StoryObj} from '@storybook/react';

import UserToolBar from '../../molecules/usertoolbar';
import Avatar from '../../atoms/avatar';

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
    children: <Avatar type="profile">MR</Avatar>,
  },
};
