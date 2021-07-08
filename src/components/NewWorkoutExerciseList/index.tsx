import React from 'react';
import * as s from './styles';

interface IProps {
  exercises: any[];
  setExercises: React.Dispatch<React.SetStateAction<any[]>>;
}

const NewWorkoutExerciseList = ({ exercises, setExercises }: IProps) => {
  const removeExercise = (id: string) => {
    console.log('removing exercise', id);
    const newExercises = exercises.filter(exercise => exercise.id !== id);
    setExercises(newExercises);
  };

  return (
    <>
      {exercises.map((exercise: any, idx: number) => {
        const { id, name, sets, reps, unilateral } = exercise;
        return (
          <s.ExerciseWrapper key={id}>
            <s.NameWrapper>
              <s.ExerciseLabel>{idx + 1}</s.ExerciseLabel>
              <p>{name}</p>
            </s.NameWrapper>
            <s.DetailsWrapper>
              <s.SetsWrapper>
                <s.ExerciseLabel>sets</s.ExerciseLabel>
                <p>{sets}</p>
              </s.SetsWrapper>
              <s.RepsWrapper>
                <s.ExerciseLabel>reps </s.ExerciseLabel>
                <p>{reps}</p>
                {unilateral && <s.Unilateral>each</s.Unilateral>}
              </s.RepsWrapper>
            </s.DetailsWrapper>
            <s.RemoveExerciseButton onClick={() => removeExercise(id)} />
          </s.ExerciseWrapper>
        );
      })}
    </>
  );
};

export default NewWorkoutExerciseList;
