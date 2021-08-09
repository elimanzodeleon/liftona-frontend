import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const ExerciseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  flex: 1 1 45%;

  @media screen and (min-width: 500px) {
    flex: 1 1 50%;
  }
`;

export const ExerciseLabel = styled.p`
  color: #3a3b3c;
  font-weight: 500;
  text-align: center;
  flex: 0 0 5%;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 55%;

  @media screen and (min-width: 500px) {
    flex: 1 1 50%;
  }
`;

export const SetsWrapper = styled.div`
  display: flex;
  gap: 0.5em;
  flex: 1 1 45%;
`;

export const RepsWrapper = styled.div`
  display: flex;
  gap: 0.5em;
  flex: 1 1 45%;
`;

export const Unilateral = styled.p`
  margin-left: 0.5em;
  font-weight: 500;
`;

export const RemoveExerciseButton = styled(MdClose)`
  flex: 1 1 20%;
  width: 1.5em;
  height: 1.5em;

  &:hover {
    cursor: pointer;
    color: #b00020;
  }
`;
