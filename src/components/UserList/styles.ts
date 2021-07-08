import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdFace } from 'react-icons/md';

export const ListWrapper = styled.div`
  max-width: 700px;
`;

export const UserWrapper = styled.section`
  display: flex;
  background-color: #242526;
  margin: 1em auto;
  padding: 1em;
  font-weight: 500;

  @media screen and (min-width: 700px) {
    border-radius: 7px;
  }
`;

export const UserAvatar = styled(MdFace)`
  width: 50px;
  height: 50px;
  color: #e4e6eb;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  justify-content: space-around;
`;

export const Username = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #bb86fc;

  &:hover {
    text-decoration: underline;
  }
`;

export const Name = styled.p`
  color: #3a3b3c;
`;
