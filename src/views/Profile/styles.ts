import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdFace } from 'react-icons/md';

export const ProfileWrapper = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #242526;
`;

export const HeaderDetailsWrapper = styled.div`
  max-width: 700px;
  margin: 68px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: 700px) {
    margin: 68px auto 0 auto;
    width: 700px;
  }
`;

export const ProfileAvatar = styled(MdFace)`
  width: 150px;
  height: 150px;
  margin: auto;
`;

export const ProfileUsername = styled.p`
  color: #bb86fc;
  font-size: 1.5em;
`;

export const ProfileName = styled.p`
  color: #e4e6eb;
  font-size: 1em;
  margin-top: 0.5em;
`;

export const ProfileInteractionsWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
`;

export const ProfileInteractions = styled(Link)`
  display: flex;
  margin: 0.5em 0;
  color: #e4e6eb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  span {
    margin-right: 0.5em;
    font-weight: 500;
  }
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid #3a3b3c;
`;

export const BodyWrapper = styled.section`
  max-width: 700px;

  @media screen and (min-width: 700px) {
    margin: 0 auto;
    width: 700px;
  }
`;
