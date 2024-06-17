import React from 'react';

import {useLoginMutation} from '../store/api-slice/auth-slice';

import {LoginLayout} from '../layout';
import Login from '../organisms/login';

export default function LoginPage() {
  const [login, {isLoading}] = useLoginMutation();
  const [token, setToken] = React.useState('');

  // TODO: HR-131 - Add a new non-api-slice to save token

  const handleLogin = async (email: string, password: string) => {
    try {
      const result = await login({
        email,
        password,
      }).unwrap();

      setToken(result.token);
      console.log(result.token);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <>
      <LoginLayout>
        <Login onLogin={handleLogin} />
      </LoginLayout>
    </>
  );
}
