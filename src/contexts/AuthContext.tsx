import React, { useState, useEffect, createContext } from 'react';

interface IAuthContext {
  currentUser: any;
  setCurrentUser: React.Dispatch<any>;
  getUid: () => string | null;
  getUsername: () => string | null;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ user, children }: { user: string; children: any }) => {
  const [currentUser, setCurrentUser] = useState(user);

  const getRefreshToken = () => {
    console.log('dummy api request -> getting new tokens');
    // req to backend to update both access and refresh tokens
  };

  const getUid = () => localStorage.getItem('uid');

  const getUsername = () => localStorage.getItem('user');

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, getUid, getUsername }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
