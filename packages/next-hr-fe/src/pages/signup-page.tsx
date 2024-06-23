import React from 'react';
import {useDispatch} from 'react-redux';

import {useLoginMutation} from '../store/api-slice/auth-slice';
import {setToken} from '../store/non-api-slice/auth-slice';

import {LoginLayout} from '../layout';
import {SignUp} from '../organisms';

export default function SignUpPage() {
  const [login, {isLoading}] = useLoginMutation();
  const dispatch = useDispatch();
  const [error, setError] = React.useState('');

  const handleLogin = async (email: string, password: string) => {
    setError('');
    try {
      const result = await login({
        email,
        password,
      }).unwrap();

      dispatch(setToken(result.token));
    } catch (err) {
      setError('You have entered an invalid username or password');
    }
  };

  return (
    <>
      <LoginLayout>
        <SignUp onLogin={handleLogin} />
      </LoginLayout>
    </>
  );
}
