import React from 'react';

import Button, {ButtonType} from '../atoms/button';
import {FormHelperText} from '@mui/material';
import Link from '../atoms/link';
import PasswordTextField from '../atoms/password-textfield';
import TextField from '../atoms/textField';
import Typography from '../atoms/typography';

import useIsMobile from '../hooks/use-is-mobile';

import nextHrTheme from '../theme/theme';

interface LoginProps {
  onLogin: (email: string, password: string, confirmPassword: string) => void;
}

function SignUp({onLogin}: LoginProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = React.useState(false);
  const isMobile = useIsMobile();

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    checkPasswords(value, confirmPassword);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    checkPasswords(password, value);
  };

  const checkPasswords = (pass: string, confirmPass: string) =>
    pass === confirmPass;

  const handleLogin = () => {
    setAttemptedSubmit(true);
    const passwordsMatch = checkPasswords(password, confirmPassword);

    setPasswordError(!passwordsMatch);

    if (passwordsMatch) {
      onLogin(email, password, confirmPassword);
    }
  };

  const cardStyles: React.CSSProperties = {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    padding: '48px 24px',
  };

  const contentStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
  };

  const fieldContainerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const isLoginEnabled =
    email !== '' && password !== '' && confirmPassword !== '';

  return (
    <div style={cardStyles}>
      <div style={contentStyles}>
        <div style={{width: 'fit-content', margin: 'auto'}}>
          <Typography variant="h1">Sign Up</Typography>
        </div>
        <div style={fieldContainerStyles}>
          <div style={{marginBottom: '8px'}}>
            <TextField
              label="Email"
              value={email}
              onChangeTextField={handleEmailChange}
              placeholder="Enter your email here"
              required
              icon
              fullWidth
            />
          </div>
          <PasswordTextField
            label="Password"
            value={password}
            onChangeCallback={handlePasswordChange}
            required
            icon
            fullWidth
            helperText={
              attemptedSubmit && passwordError ? 'Passwords do not match!' : ''
            }
            error={attemptedSubmit && passwordError}
          />
          <PasswordTextField
            label="Confirm Password"
            value={confirmPassword}
            onChangeCallback={handleConfirmPasswordChange}
            required
            icon
            fullWidth
            helperText={
              attemptedSubmit && passwordError ? 'Passwords do not match!' : ''
            }
            error={attemptedSubmit && passwordError}
            errorHelperText="Passwords do not match!"
          />
        </div>
        <div style={{width: '100%', marginTop: '16px', cursor: 'pointer'}}>
          <Button
            buttonType={ButtonType.Primary}
            onClick={handleLogin}
            fullWidth
            disabled={!isLoginEnabled}
          >
            Sign Up
          </Button>
        </div>
        <div style={{color: nextHrTheme.palette.custom.content}}>
          {isMobile ? (
            <>
              <Typography>
                By clicking the <Link underline="hover">Sign up</Link> button,
                you agreee to our{' '}
                <Link underline="hover">Terms & Conditions</Link>
              </Typography>
            </>
          ) : (
            <>
              <Typography>
                By clicking the <Link underline="hover">Sign up</Link> button,
                you agreee to our
              </Typography>
              <Typography>
                <Link underline="hover">Terms & Conditions</Link>
              </Typography>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
