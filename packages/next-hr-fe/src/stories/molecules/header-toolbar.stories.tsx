import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {fn} from '@storybook/test';

import {HeaderToolbar} from '../../molecules';

import {IconType} from '../../atoms/icon-store';

const listOfButtons = [
  {
    icon: IconType.Business,
    text: 'My Requests',
  },
  {
    icon: IconType.Library,
    text: 'Learn More',
  },
  {
    icon: IconType.Add,
    text: 'Submit New Request',
  },
];

const meta = {
  title: 'Molecules/HeaderToolbar',
  component: HeaderToolbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderToolbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export function ListOfButtons() {
  return <HeaderToolbar items={listOfButtons} onClick={fn()} selectedItem="" />;
}

export const ListWithOneButtonSelected: Story = {
  args: {
    items: listOfButtons,
    onClick: action('button was clicked') as any,
    selectedItem: 'submit new request',
  },
};
