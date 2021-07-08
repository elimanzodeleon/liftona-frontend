import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: 0.5em 0; */
`;

export const NavLinks = styled.nav`
  display: flex;
`;

export const Link = styled(NavLink)`
  color: #e4e6eb;
  text-decoration: none;
  font-size: 1.2em;
  padding: 0.5em 0.25em;
  margin: 0 0.25em;
`;

export const GoBackButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1.2em;
  text-decoration: none;
  color: #3a3b3c;
  margin-right: 0.5em;

  &:hover {
    text-decoration: underline;
  }
`;

const BaseButton = styled.button`
  cursor: pointer;
  font-size: 1em;
  border: none;
  border-radius: 50px;
  padding: 0 1em;
  margin: 0.5em;
`;
export const FollowButton = styled(BaseButton)`
  color: #bb86fc;
  background: transparent;
  border: 1px solid #bb86fc;

  &:hover {
    color: #e4e6eb;
    background-color: #bb86fc;
  }
`;

export const UnfollowButton = styled(BaseButton)`
  color: #e4e6eb;
  background-color: #bb86fc;

  &::after {
    content: 'Following';
  }

  &:hover:after {
    content: 'Unfollow';
  }

  &:hover {
    background-color: #b00020;
  }
`;
