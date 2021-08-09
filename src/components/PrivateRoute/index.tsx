import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useAuth } from '../../hooks/useAuth';

const PrivateRoute = ({
  component: Component,
  ...rest
}: {
  component: React.FC;
}) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={props =>
        currentUser ? (
          <Component {...props} key={nanoid()} />
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
};

export default PrivateRoute;
