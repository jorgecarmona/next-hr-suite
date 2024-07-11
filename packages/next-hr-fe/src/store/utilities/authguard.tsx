import React from 'react';
import {Navigate} from 'react-router-dom';

interface AuthGuardProps {
  children?: React.ReactNode;
}

function AuthGuard({children}: AuthGuardProps) {
  const isAuthenticated = Boolean(localStorage.getItem('token'));

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

export default AuthGuard;
