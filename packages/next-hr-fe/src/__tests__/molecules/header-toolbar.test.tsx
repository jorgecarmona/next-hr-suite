import {render, screen, waitFor} from '@testing-library/react';
import {HeaderToolbar} from '../../molecules';

import userEvent from '@testing-library/user-event';
import {BrowserRouter as Router} from 'react-router-dom';

describe('HeaderToolbar Component', () => {
  it('renders without problems', () => {
    render(
      <Router>
        <HeaderToolbar />
      </Router>,
    );
  });

  it('renders a list of buttons', () => {
    render(
      <Router>
        <HeaderToolbar />
      </Router>,
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
      <Router>
        <HeaderToolbar />
      </Router>,
    );

    const button = screen.getByRole('button', {name: /learn more/i});
    userEvent.click(button);

    await waitFor(() => {
      expect(button).toHaveClass('tertiary');
      expect(button).toHaveClass('selected');
    });
  });
});
