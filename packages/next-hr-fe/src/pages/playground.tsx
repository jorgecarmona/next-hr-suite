import React from 'react';

import {useGetUsersQuery} from '../store/api-slice/users-slice';
import LoginPage from './login-page';

function PlayGround() {
  const {data} = useGetUsersQuery();

  console.log(data);

  return (
    <>
      <LoginPage />
    </>
  );
}

export default PlayGround;
