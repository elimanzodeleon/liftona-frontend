import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const ExerciseWrapper = styled.div`
  display: flex;
  margin-top: 1em;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 50%;
`;

export const ExerciseLabel = styled.p`
  margin-right: 0.5em;
  color: #3a3b3c;
  font-weight: 500;
  text-align: center;
  flex: 0 0 10%;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 40%;
`;

export const SetsWrapper = styled.div`
  display: flex;
  flex: 0 0 50%;
`;

export const RepsWrapper = styled.div`
  display: flex;
  flex: 0 0 50%;
`;

export const Unilateral = styled.p`
  margin-left: 0.5em;
  font-weight: 500;
`;

export const RemoveExerciseButton = styled(MdClose)`
  flex-grow: 2;
  width: 1.5em;
  height: 1.5em;

  &:hover {
    cursor: pointer;
    color: #b00020;
  }
`;
