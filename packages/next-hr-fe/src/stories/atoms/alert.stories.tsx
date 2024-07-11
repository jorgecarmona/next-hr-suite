import {Meta, StoryObj} from '@storybook/react';

import Alert from '../../atoms/alert';

type AlertProps = {
  type: 'error' | 'info' | 'success' | 'warning';
  children: React.ReactNode;
};

const meta: Meta<AlertProps> = {
  title: 'Atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['error', 'info', 'success', 'warning'],
    },
  },
};

export default meta;

export const Error = {
  args: {
    type: 'error',
    children: 'This is an error alert',
  },
};

export const Info = {
  args: {
    type: 'info',
    children: 'This is an info alert',
  },
};

export const Success = {
  args: {
    type: 'success',
    children: 'This is an success alert',
  },
};

export const Warning = {
  args: {
    type: 'warning',
    children: 'This is an warning alert',
  },
};
