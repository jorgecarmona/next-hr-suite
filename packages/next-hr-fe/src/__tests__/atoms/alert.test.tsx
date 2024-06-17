import {render, screen} from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import Alert from '../../atoms/alert';

describe('Alert Component', () => {
  test('renders Alert with children', () => {
    render(<Alert severity="info">Test Alert</Alert>);
    expect(screen.getByText('Test Alert')).toBeInTheDocument();
  });

  test('renders correct title based on severity', () => {
    render(<Alert severity="info">Info Alert</Alert>);
    expect(screen.getByText('Info')).toBeInTheDocument();
  });

  test('closes Alert when close button is clicked', async () => {
    render(
      <Alert severity="info" onClose={() => {}}>
        Close Alert
      </Alert>,
    );
    userEvent.click(screen.getByRole('button'));
    expect(screen.queryByText('Close Alert')).not.toBeInTheDocument();
  });

  test('calls onClose callback when close button is clicked', async () => {
    const onClose = jest.fn();
    render(
      <Alert severity="info" onClose={onClose}>
        Callback Alert
      </Alert>,
    );
    userEvent.click(screen.getByRole('button'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
