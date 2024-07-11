import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {ToolbarButton} from '../../atoms';
import {IconType} from '../../atoms/icon-store';

const meta = {
  title: 'Atoms/ToolbarButton',
  component: ToolbarButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Default Text',
    icon: IconType.Add,
    onClick: action('button was clicked'),
    selected: false,
    type: 'button',
    disabled: false,
    fullWidth: false,
  },
  argTypes: {
    icon: {control: 'radio', options: Object.values(IconType)},
    selected: {control: 'boolean'},
    type: {control: 'select', options: ['button', 'submit', 'reset']},
    disabled: {control: 'boolean'},
    fullWidth: {control: 'boolean'},
  },
} satisfies Meta<typeof ToolbarButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultToolbarButton: Story = {
  args: {
    children: 'Default',
    icon: IconType.Library,
    onClick: action('button was clicked') as any,
    type: 'button',
    disabled: false,
    fullWidth: false,
  },
};

export const SelectedToolbarButton: Story = {
  args: {
    children: 'Selected',
    icon: IconType.Library,
    onClick: action('button was clicked'),
    selected: true,
    type: 'button',
    disabled: false,
    fullWidth: false,
  },
};

export const DisabledToolbarButton: Story = {
  args: {
    children: 'Disabled',
    icon: IconType.Library,
    onClick: action('button was clicked'),
    type: 'button',
    disabled: true,
    fullWidth: false,
  },
};

export const FullWidthToolbarButton: Story = {
  args: {
    children: 'Full Width',
    icon: IconType.Library,
    onClick: action('button was clicked'),
    type: 'button',
    disabled: false,
    fullWidth: true,
  },
};
