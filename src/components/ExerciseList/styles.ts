import styled from 'styled-components';

export const ExerciseWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 50%;
`;

export const WorkoutInfoLabel = styled.p`
  margin-right: 0.5em;
  color: #3a3b3c;
  font-weight: 500;
  flex: 0 0 5%;
  text-align: center;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 0 0 50%;

  @media screen and (min-width: 500px) {
    justify-content: space-between;
  }
`;

export const SetsWrapper = styled.div`
  display: flex;
  flex: 0 0 45%;
`;

export const RepsWrapper = styled.div`
  display: flex;
  flex: 0 0 40%;
`;

export const Unilateral = styled.p`
  margin-left: 0.5em;
  font-weight: 500;
`;
