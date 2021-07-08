import React, { useState, useContext, createContext } from 'react';

interface IAuthContext {
  currentUser: any;
  setCurrentUser: React.Dispatch<any>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ user, children }: { user: string; children: any }) => {
  const [currentUser, setCurrentUser] = useState(user);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
