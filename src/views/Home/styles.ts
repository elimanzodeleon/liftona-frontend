import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

export const wrapper = styled.div`
  width: 100vw;
  max-width: 700px;
  margin: 68px auto 0 auto;
`;

export const AddWorkoutWrapper = styled.div`
  width: 100%;
  background-color: #242526;
  padding: 0.5em;

  @media screen and (min-width: 700px) {
    border-radius: 7px;
  }
`;

export const AddWorkout = styled.div`
  display: flex;
  padding: 0.5em;
  &:hover {
    cursor: pointer;
    background-color: #3a3b3c;
    border-radius: 7px;
  }
`;

export const AddWorkoutIcon = styled(MdAdd)`
  width: 40px;
  height: 40px;
  color: #bb86fc;
  border: 1px solid #bb86fc;
  border-radius: 50%;
`;

export const AddWorkoutDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5em;
`;
