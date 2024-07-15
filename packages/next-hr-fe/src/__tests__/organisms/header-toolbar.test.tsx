import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

describe('HeaderToolbar Component', () => {
  it('renders without problems', () => {
    render(
      <MemoryRouter>
        <HeaderToolbar config={headerButtons} />
      </MemoryRouter>,
    );
  });

  it('renders a list of buttons', () => {
    render(
      <MemoryRouter>
        <HeaderToolbar config={headerButtons} />
      </MemoryRouter>,
    );

    const button1 = screen.getByRole('button', {name: /my requests/i});
    expect(button1).toBeInTheDocument();
    const button2 = screen.getByRole('button', {name: /learn more/i});
    expect(button2).toBeInTheDocument();
    const button3 = screen.getByRole('button', {name: /submit new request/i});
    expect(button3).toBeInTheDocument();
  });

  it('renders one of the buttons in selected state', async () => {
    render(
      <MemoryRouter>
        <HeaderToolbar config={headerButtons} />
      </MemoryRouter>,
    );

    const button = screen.getByRole('button', {name: /learn more/i});
    userEvent.click(button);

    await waitFor(() => {
      expect(button).toHaveClass('tertiary');
      expect(button).toHaveClass('selected');
    });
  });
});
