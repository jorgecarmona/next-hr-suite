import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Login from '../../organisms/login';
import useIsMobile from '../../hooks/use-is-mobile';

jest.mock('../../hooks/use-is-mobile');

describe('Login Component', () => {
  beforeEach(() => {
    (useIsMobile as jest.Mock).mockReturnValue(false);
  });

  it('renders the component correctly', () => {
    render(<Login onLogin={() => {}} />);

    expect(screen.getByText('Welcome back!')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Enter your email here'),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('English')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /login/i})).toBeInTheDocument();
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument();
  });

  it('updates email state on input change', () => {
    render(<Login onLogin={() => {}} />);

    const emailInput = screen.getByPlaceholderText('Enter your email here');
    fireEvent.change(emailInput, {target: {value: 'test'}});

    expect((emailInput as HTMLInputElement).value).toBe('test');
  });

  it('updates password state on input change', () => {
    render(<Login onLogin={() => {}} />);

    const passwordInput = screen.getByLabelText('Password *');
    fireEvent.change(passwordInput, {target: {value: 'test'}});

    expect((passwordInput as HTMLInputElement).value).toBe('test');
  });

  it('updates language state on input change', () => {
    render(<Login onLogin={() => {}} />);

    const languageInput = screen.getByPlaceholderText('English');
    fireEvent.change(languageInput, {target: {value: 'test'}});

    expect((languageInput as HTMLInputElement).value).toBe('test');
  });

  it('enables login button when email and password are provided', () => {
    render(<Login onLogin={() => {}} />);

    const loginButton = screen.getByRole('button', {name: /login/i});
    expect(loginButton).toBeDisabled();

    const emailInput = screen.getByPlaceholderText('Enter your email here');
    fireEvent.change(emailInput, {target: {value: 'test'}});

    const passwordInput = screen.getByLabelText('Password *');
    fireEvent.change(passwordInput, {target: {value: 'test'}});

    expect(loginButton).toBeEnabled();
  });

  it('logs email, password, and language on login button click', () => {
    console.log = jest.fn();
    render(<Login onLogin={() => {}} />);

    const emailInput = screen.getByPlaceholderText('Enter your email here');
    fireEvent.change(emailInput, {target: {value: 'test'}});

    const passwordInput = screen.getByLabelText('Password *');
    fireEvent.change(passwordInput, {target: {value: 'test'}});

    const languageInput = screen.getByPlaceholderText('English');
    fireEvent.change(languageInput, {target: {value: 'test'}});

    const loginButton = screen.getByRole('button', {name: /login/i});
    fireEvent.click(loginButton);

    expect(console.log).toHaveBeenCalledWith('Email:', 'test');
    expect(console.log).toHaveBeenCalledWith('Password:', 'test');
    expect(console.log).toHaveBeenCalledWith('Language:', 'test');
  });
});
