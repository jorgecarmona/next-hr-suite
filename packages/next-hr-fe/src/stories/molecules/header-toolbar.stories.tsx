import type {Meta} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';

import {HeaderToolbar} from '../../molecules';

const meta = {
  title: 'Molecules/HeaderToolbar',
  component: HeaderToolbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderToolbar>;

export default meta;

export function ListOfButtons() {
  return (
    <Router>
      <HeaderToolbar />
    </Router>
  );
}
