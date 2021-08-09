import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import SearchInput from '../../components/SearchInput';
import * as s from './styles';

const NavBar = () => {
  const { currentUser, getUsername } = useAuth();
  const history = useHistory();

  if (!currentUser) {
    return <></>;
  }

  return (
    <s.NavWrapper>
      <s.Nav>
        <s.Title to='/home'>liftona</s.Title>
        <s.LinkWrapper>
          <SearchInput />
          <s.ProfileButton onClick={() => history.push(`/${getUsername()}`)} />
        </s.LinkWrapper>
      </s.Nav>
    </s.NavWrapper>
  );
};

export default NavBar;
