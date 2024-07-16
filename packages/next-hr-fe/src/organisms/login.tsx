import React from 'react';
import {Alert, Autocomplete} from '../atoms';
import Typography from '../atoms/typography';
import TextField from '../atoms/textField';
import Password from '../atoms/password';
import Button, {ButtonType} from '../atoms/button';
import Link from '../atoms/link';
import useIsMobile from '../hooks/use-is-mobile';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  severity?: React.ReactNode;
}

function Login({onLogin, severity}: LoginProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const isMobile = useIsMobile();

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };
  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleLogin = () => {
    onLogin(email, password);
  };

  const cardStyles: React.CSSProperties = {
    height: '100%',
    padding: '48px 24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '8px',
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
    gap: '16px',
  };
  const linkContainerStyles: React.CSSProperties = {
    fontSize: '0.875rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    gap: isMobile ? '8px' : '16px',
  };
  const linkStyles: React.CSSProperties = {
    fontSize: '0.875rem',
    textAlign: 'center',
  };
  const isLoginEnabled = email !== '' && password !== '';
  return (
    <div style={cardStyles}>
      <div style={contentStyles}>
        <div style={{width: 'fit-content', margin: 'auto'}}>
          <Typography variant="h1">Welcome back!</Typography>
        </div>
        {severity && (
          <div>
            <Alert severity="error">{severity}</Alert>
          </div>
        )}
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
          <Password
            label="Password"
            value={password}
            onChangeCallback={handlePasswordChange}
            required
            icon
            fullWidth
          />
        </div>
        <div style={linkContainerStyles}>
          {isMobile ? (
            <>
              <div style={linkStyles}>
                Don't have an account? <Link underline="hover">Sign up</Link>
              </div>
              <div style={linkStyles}>
                <Link underline="hover">Forgot Password?</Link>
              </div>
            </>
          ) : (
            <>
              <div style={linkStyles}>
                <Link underline="hover">Forgot Password?</Link>
              </div>
              <div style={linkStyles}>
                Don't have an account? <Link underline="hover">Sign up</Link>
              </div>
            </>
          )}
        </div>
        <div style={{width: '100%', marginTop: '16px'}}>
          <Button
            buttonType={ButtonType.Primary}
            onClick={handleLogin}
            fullWidth
            disabled={!isLoginEnabled}
          >
            Login
          </Button>
        </div>
        <div style={{width: 'fit-content', margin: 'auto', marginTop: '0px'}}>
          <Link underline="hover">Terms & Conditions</Link>
        </div>
        <div style={{width: '100%', marginTop: '24px'}}>
          <Autocomplete
            id="my-id"
            options={[
              {
                label: 'English',
                value: 'english',
              },
            ]}
            value="English"
          />
        </div>
      </div>
    </div>
  );
}
export default Login;
