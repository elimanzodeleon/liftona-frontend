import React from 'react';
import { IUser } from '../../interfaces/user.interface';
import * as s from './styles';

const UserList: React.FC<{
  users: IUser[];
}> = ({ users }) => {
  if (users.length === 0) return <p>no users</p>;
  return (
    <s.ListWrapper>
      {users.map((user: any) => (
        <User key={user.id} user={user} />
      ))}
    </s.ListWrapper>
  );
};

const User: React.FC<{ user: IUser }> = ({ user }) => {
  const { username, name } = user;
  return (
    <s.UserWrapper>
      <s.UserAvatar />
      <s.UserInfo>
        <s.Username to={`/${username}`} replace>
          {username}
        </s.Username>
        <s.Name>{name}</s.Name>
      </s.UserInfo>
    </s.UserWrapper>
  );
};

export default UserList;
