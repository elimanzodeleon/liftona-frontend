import React from 'react';
import * as s from './styles';

const UserList = ({ users }: { users: any[] }) => {
  return (
    <s.ListWrapper>
      {users.map((user: any) => (
        <User key={user.id} user={user} />
      ))}
    </s.ListWrapper>
  );
};

const User = ({ user }: { user: any }) => {
  const { username, name } = user;
  return (
    <s.UserWrapper>
      <s.UserAvatar />
      <s.UserInfo>
        <s.Username to={`/${username}`}>{username}</s.Username>
        <s.Name>{name}</s.Name>
      </s.UserInfo>
    </s.UserWrapper>
  );
};

export default UserList;
