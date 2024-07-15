import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {ToolbarButton} from '../../atoms';
import {IconType} from '../../atoms/icon-store';
import {ButtonType} from '../../atoms/button';

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
    onClick: action('breadcrumb was clicked') as any,
    selected: false,
    disabled: false,
    fullWidth: false,
    buttonType: ButtonType.Primary,
  },
  argTypes: {
    icon: {
      control: 'select',
      options: ['no icon', ...Object.values(IconType)], // Provide the values from the IconType enum
      description: 'Selects icon to display',
    },
    buttonType: {
      control: 'select',
      options: ['no type', ...Object.values(ButtonType)],
    },
    selected: {control: 'boolean'},
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
    onClick: action('button was clicked'),
    buttonType: ButtonType.Text,
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
    buttonType: ButtonType.Secondary,
    disabled: false,
    fullWidth: false,
  },
};

export const DisabledToolbarButton: Story = {
  args: {
    children: 'Disabled',
    icon: IconType.Library,
    onClick: action('button was clicked'),
    buttonType: ButtonType.Outlined,
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

export const TertiaryToolbarButton: Story = {
  args: {
    children: 'Tertiary',
    icon: IconType.Library,
    onClick: action('button was clicked'),
    buttonType: ButtonType.Tertiary,
    disabled: false,
    fullWidth: false,
  },
};

export const ProfileToolbarButton: Story = {
  args: {
    children: 'Profile',
    icon: IconType.Library,
    onClick: action('button was clicked'),
    buttonType: ButtonType.Profile,
    disabled: false,
    fullWidth: false,
  },
};
