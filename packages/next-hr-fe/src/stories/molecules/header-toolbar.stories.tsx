import {Meta} from '@storybook/react';
import {MemoryRouter} from 'react-router-dom';

import {HeaderToolbar} from '../../molecules';
import {IconType} from '../../atoms/icon-store';

const headerButtons = [
  {
    icon: IconType.Work,
    text: 'My Requests',
    path: 'my-requests',
  },
  {
    icon: IconType.Library,
    text: 'Learn More',
    path: 'learn-more',
  },
  {
    icon: IconType.Add,
    text: 'Submit New Request',
    path: 'new-request',
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

export function ListOfButtons() {
  return (
    <MemoryRouter>
      <HeaderToolbar config={headerButtons} />
    </MemoryRouter>
  );
}
