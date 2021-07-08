import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import * as s from './styles';
import { useAuth } from '../../hooks/useAuth';

const LogoutButton = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { setCurrentUser } = useAuth();

  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
    setIsLoggingOut(true);
  };

  if (isLoggingOut) {
    return <Redirect to='/' />;
  }
  return <s.Button onClick={logout}>logout</s.Button>;
};

export default LogoutButton;
