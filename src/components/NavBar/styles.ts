import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdFace } from 'react-icons/md';

export const NavWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  background-color: #242526;
  box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 1em;
  max-width: 900px;

  /* @media screen and (min-width: 900px) {
    padding: 0 3em;
  } */
`;

export const Title = styled(Link)`
  text-decoration: none;
  font-size: 2em;
  color: #bb86fc;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileButton = styled(MdFace)`
  margin-top: 2px;
  width: 2em;
  height: 2em;
  color: #e4e6eb;
  border-radius: 50%;
  padding: 2px 2px 4px 2px;

  &:hover {
    cursor: pointer;
    background-color: #3a3b3c;
  }
`;
