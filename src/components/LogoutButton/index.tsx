import { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import * as s from './styles';
import { useAuth } from '../../hooks/useAuth';

const LogoutButton = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { setCurrentUser } = useAuth();

  const handleLogout = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER_BASE_URL!}/auth/logout`;
      await axios.delete(url, { withCredentials: true });

      // move to external function
      localStorage.removeItem('uid');
      localStorage.removeItem('user');

      setIsLoggingOut(true);
      setCurrentUser(null);
    } catch (error) {}
    // call to db to logout user (remove refresh-token from redis ds)
  };

  if (isLoggingOut) {
    return <Redirect to='/' />;
  }
  return <s.Button onClick={handleLogout}>Log out</s.Button>;
};

export default LogoutButton;
