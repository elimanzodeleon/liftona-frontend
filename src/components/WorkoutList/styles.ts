import styled from 'styled-components';
import {
  MdFavorite,
  MdFavoriteBorder,
  MdDeleteForever,
  MdFace,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-top: 1em;
  background-color: #242526;
  padding: 1em;
  max-width: 700px;
  @media screen and (min-width: 700px) {
    border-radius: 7px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 1em;
  font-weight: 500;
`;

export const HeaderAvatar = styled(MdFace)`
  width: 50px;
  height: 50px;
  color: #e4e6eb;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  justify-content: space-evenly;
`;

export const HeaderUsername = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #bb86fc;

  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderDate = styled.p`
  color: #3a3b3c;
`;

export const Details = styled.p`
  font-weight: 500;
  margin-top: 0.25em;
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid #3a3b3c;
  margin: 0.5em 0;
`;

export const ExerciseFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
`;

export const NotLikedIcon = styled(MdFavoriteBorder)`
  width: 1.5em;
  height: 1.5em;
  color: #b00020;
`;

export const DeleteWorkoutIcon = styled(MdDeleteForever)`
  width: 2em;
  height: 2em;
`;
