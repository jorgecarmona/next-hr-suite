import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../organisms/login';
import useIsMobile from '../../hooks/use-is-mobile';

jest.mock('../../hooks/use-is-mobile');

describe('Login Component', () => {
  beforeEach(() => {
    (useIsMobile as jest.Mock).mockReturnValue(false);
  });

  const mockOnLogin = jest.fn();

  it('renders the component correctly', () => {
    render(<Login onLogin={mockOnLogin} />);

    expect(screen.getByText('Welcome back!')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Enter your email here'),
    ).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /login/i})).toBeInTheDocument();
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument();
  });

  it('updates email state on input change', async () => {
    render(<Login onLogin={mockOnLogin} />);

    const emailInput = screen.getByPlaceholderText('Enter your email here');
    await userEvent.type(emailInput, 'test');

    expect((emailInput as HTMLInputElement).value).toBe('test');
  });

  it('updates password state on input change', async () => {
    render(<Login onLogin={mockOnLogin} />);

    const passwordInput = screen.getByLabelText(/Password/i, {
      selector: 'input',
    });
    await userEvent.type(passwordInput, 'test');

    expect((passwordInput as HTMLInputElement).value).toBe('test');
  });

  it('updates language state on input change', async () => {
    render(<Login onLogin={mockOnLogin} />);

    const languageDropdown = screen.getByRole('combobox');
    await userEvent.click(languageDropdown);

    const languageOption = screen.getByRole('option', {name: /English/i});
    await userEvent.click(languageOption);

    expect(languageDropdown).toHaveValue('English');
  });

  it('enables login button when email and password are provided', async () => {
    render(<Login onLogin={mockOnLogin} />);

    const loginButton = screen.getByRole('button', {name: /login/i});
    expect(loginButton).toBeDisabled();

    const emailInput = screen.getByPlaceholderText('Enter your email here');
    await userEvent.type(emailInput, 'test');

    const passwordInput = screen.getByLabelText(/Password/i, {
      selector: 'input',
    });
    await userEvent.type(passwordInput, 'test');

    expect(loginButton).toBeEnabled();
  });

  it('logs email, password, and language on login button click', async () => {
    render(<Login onLogin={mockOnLogin} />);

    const emailInput = screen.getByPlaceholderText('Enter your email here');
    await userEvent.type(emailInput, 'test');

    const passwordInput = screen.getByLabelText(/Password/i, {
      selector: 'input',
    });
    await userEvent.type(passwordInput, 'test');

    const languageDropdown = screen.getByRole('combobox');
    await userEvent.click(languageDropdown);

    const languageOption = screen.getByRole('option', {name: /English/i});
    await userEvent.click(languageOption);

    const loginButton = screen.getByRole('button', {name: /login/i});
    await userEvent.click(loginButton);

    expect(mockOnLogin).toHaveBeenCalledWith('test', 'test');
  });

  it('renders correctly in mobile view', () => {
    (useIsMobile as jest.Mock).mockReturnValue(true);
    render(<Login onLogin={mockOnLogin} />);

    expect(screen.getByText('Welcome back!')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Enter your email here'),
    ).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /login/i})).toBeInTheDocument();
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument();
    expect(screen.getByText('Sign up')).toBeInTheDocument();
    expect(screen.getByText('Forgot Password?')).toBeInTheDocument();
  });

  it('disables login button when email or password is empty', async () => {
    render(<Login onLogin={mockOnLogin} />);

    const loginButton = screen.getByRole('button', {name: /login/i});
    expect(loginButton).toBeDisabled();

    const emailInput = screen.getByPlaceholderText('Enter your email here');
    await userEvent.type(emailInput, 'test');
    expect(loginButton).toBeDisabled();

    const passwordInput = screen.getByLabelText(/Password/i, {
      selector: 'input',
    });
    await userEvent.type(passwordInput, 'test');
    expect(loginButton).toBeEnabled();

    await userEvent.clear(emailInput);
    expect(loginButton).toBeDisabled();
  });

  it('displays sign-up and forgot password links in desktop view', () => {
    render(<Login onLogin={mockOnLogin} />);

    expect(screen.getByText('Sign up')).toBeInTheDocument();
    expect(screen.getByText('Forgot Password?')).toBeInTheDocument();
  });

  it('displays sign-up and forgot password links in mobile view', () => {
    (useIsMobile as jest.Mock).mockReturnValue(true);
    render(<Login onLogin={mockOnLogin} />);

    expect(screen.getByText('Sign up')).toBeInTheDocument();
    expect(screen.getByText('Forgot Password?')).toBeInTheDocument();
  });
});
