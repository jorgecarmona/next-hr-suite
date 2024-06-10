import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LoginPage from '../../pages/login-page';

describe('LoginPage', () => {
  it('renders the login page', () => {
    render(<LoginPage />);

    expect(screen.getByText('Welcome back!')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('calls login function when login button is clicked', async () => {
    const login = jest.fn();

    render(<LoginPage />);

    await userEvent.click(screen.getByText('Login'));

    expect(login).toHaveBeenCalled();
  });
});
