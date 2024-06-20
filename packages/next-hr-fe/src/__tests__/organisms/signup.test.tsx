import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {SignUp} from '../../organisms';

describe('SignUp Component', () => {
  it('render SignUp component', () => {
    render(<SignUp onLogin={() => {}} />);

    expect(screen.getByLabelText('Email *')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Enter your email here'),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Password *')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password *')).toBeInTheDocument();
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument();
  });

  it('render email status when input changes', () => {
    render(<SignUp onLogin={() => {}} />);

    const emailInput = screen.getByPlaceholderText('Enter your email here');
    userEvent.type(emailInput, 'test@example.com');

    expect(emailInput).toHaveValue('test@example.com');
  });

  it('render password status when input changes', () => {
    render(<SignUp onLogin={() => {}} />);

    const passwordInput = screen.getByLabelText('Password *');
    userEvent.type(passwordInput, 'password123');

    expect(passwordInput).toHaveValue('password123');
  });

  it('render password confirmation status when input changes', () => {
    render(<SignUp onLogin={() => {}} />);

    const confirmPasswordInput = screen.getByLabelText('Confirm Password *');
    userEvent.type(confirmPasswordInput, 'password123');

    expect(confirmPasswordInput).toHaveValue('password123');
  });

  it.only('renders passwords are different to display the error message and calls the onLogin function when the Sign Up button is clicked', async () => {
    const mockOnLogin = jest.fn();

    render(<SignUp onLogin={mockOnLogin} />);

    const emailInput = screen.getByLabelText('Email *');
    const passwordInput = screen.getByLabelText('Password *');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password *');
    const signUpButton = screen.getByRole('button', {name: /Sign Up/i});

    userEvent.type(emailInput, 'test@example.com');
    userEvent.type(passwordInput, 'password123');
    userEvent.type(confirmPasswordInput, 'differentpassword');

    await waitFor(() => {
      expect(signUpButton).not.toBeDisabled();
    });

    userEvent.click(signUpButton);

    await waitFor(() => {
      expect(screen.getByText('Passwords do not match!')).toBeInTheDocument();
    });

    expect(mockOnLogin).toHaveBeenCalled();
  });
});
