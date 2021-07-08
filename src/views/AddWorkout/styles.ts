import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

export const AddWorkoutWrapper = styled.div`
  max-width: 700px;
  margin: 68px auto 0 auto;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5em;
`;

export const CancelLink = styled(Link)`
  color: #3a3b3c;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid #3a3b3c;
  margin: 1em 0;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 0.5em;
`;

export const WorkoutInput = styled.input`
  color: #e4e6eb;
  background-color: #3a3b3c;
  padding: 0.5em 0.75em;
  border: none;
  border-radius: 50px;
  font-size: 1.2em;
  margin-bottom: 1em;
  &:focus {
    outline: none;
  }
`;

export const WorkoutDetailsInput = styled.textarea`
  color: #e4e6eb;
  background-color: #3a3b3c;
  padding: 0.75em 0.75em;
  border: none;
  border-radius: 7px;
  font-size: 1em;
  resize: none;
  &:focus {
    outline: none;
  }
`;

export const AddExerciseWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 1em auto 0 auto;
`;

export const ExerciseInput = styled.input`
  color: #e4e6eb;
  font-size: 1em;
  background-color: #3a3b3c;
  border: none;
  border-radius: 50px;
  padding: 0.5em 0.75em;

  &:focus {
    outline: none;
  }

  // prevent inc/dec arroes from apperaring in input
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

export const ExerciseNameInput = styled(ExerciseInput)`
  flex: 0 0 45%;
`;

export const ExerciseSetsInput = styled(ExerciseInput)`
  flex: 0 0 15%;
  margin-left: 0.25em;
`;

export const ExerciseRepsInput = styled(ExerciseInput)`
  flex: 0 0 15%;
  margin-left: 0.25em;
`;

export const ExerciseUnilateral = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 0 0 15%;
  margin-left: 0.25em;
`;

export const AddExerciseIconButton = styled.button`
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  flex: 0 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
`;
export const AddExerciseIcon = styled(MdAdd)`
  color: #bb86fc;
  border: 1px solid #bb86fc;
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
`;

export const AddExerciseButton = styled.button`
  cursor: pointer;
  color: #bb86fc;
  background-color: transparent;
  border: 1px solid #bb86fc;
  font-size: 1.2em;
  border-radius: 50px;
  padding: 0.5em;
  margin-top: 1em;
`;

export const Postbutton = styled.button`
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  color: #e4e6eb;
  background-color: #bb86fc;
  border: 1px solid #bb86fc;
  font-size: 1.2em;
  border-radius: 50px;
  padding: 0.5em 1.5em;
  margin: 0 auto;
`;
