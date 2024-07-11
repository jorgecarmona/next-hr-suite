import React from 'react';

import {ButtonType} from '../atoms/button';
import {
  Alert,
  Button,
  Link,
  PasswordTextField,
  TextField,
  Typography,
} from '../atoms';

import useIsMobile from '../hooks/use-is-mobile';

import nextHrTheme from '../theme/theme';
import '../styles/app.css';

interface LoginProps {
  onLogin: (email: string, password: string, confirmPassword: string) => void;
}

function SignUp({onLogin}: LoginProps) {
  const [successMesage, setSuccessMesage] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');
  const [passwordError, setPasswordError] = React.useState<boolean>(false);
  const [attemptedSubmit, setAttemptedSubmit] = React.useState<boolean>(false);
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

      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setSuccessMesage(true);
    }
  };

  const isLoginEnabled =
    email !== '' && password !== '' && confirmPassword !== '';

  return (
    <div
      className={`signup-container ${isMobile ? 'mobile-signup-styles' : ''}`}
    >
      <div className="signup-card-content">
        <div style={{width: 'fit-content', margin: 'auto'}}>
          <Typography variant="h1">Sign Up</Typography>
        </div>
        {successMesage && <Alert severity="success" />}
        <div className="field-form-cont">
          <div>
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
          />
          <PasswordTextField
            label="Confirm Password"
            value={confirmPassword}
            onChangeCallback={handleConfirmPasswordChange}
            required
            icon
            fullWidth
            error={attemptedSubmit && passwordError}
            errorHelperText="Passwords do not match!"
          />
        </div>
        <div>
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
                you agreee to our
                <Link underline="hover"> Terms & Conditions</Link>
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
