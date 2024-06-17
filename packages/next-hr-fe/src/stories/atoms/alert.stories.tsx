import {Meta, StoryObj} from '@storybook/react';

import Alert from '../../atoms/alert';

const meta: Meta = {
  title: 'Atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Error = () => (
  <Alert severity="error">This is an error alert</Alert>
);

export const Warning = () => (
  <Alert severity="warning">This is a warning alert</Alert>
);

export const Info = () => <Alert severity="info">This is an info alert</Alert>;

export const Success = () => (
  <Alert severity="success">This is a success alert</Alert>
);
